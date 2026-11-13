"use client";

import { useEffect, useRef, useState } from "react";
import { CAT_REPLIES, createExpressionController, type CatExpression, type CatReaction } from "./cat-expressions";
import "./roaming-cat.css";

type Position = { x: number; y: number };
type Trick = "roll" | "stretch" | "pounce";

const TRICKS: Trick[] = ["roll", "stretch", "pounce"];
const TRICK_DURATION: Record<Trick, number> = { roll: 3400, stretch: 3600, pounce: 2100 };
const PET_REACTIONS: CatExpression[] = ["happy", "wink", "pout", "cheeky", "surprised"];

export default function RoamingCat() {
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const cat = useRef<HTMLDivElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);
  const reaction = useRef<CatReaction | null>(null);
  const petIndex = useRef(0);
  const position = useRef<Position | null>(null);
  const attention = useRef({ hover: false, focus: false, loveUntil: 0, requestedTrick: null as Trick | null });
  const trickIndex = useRef(0);
  const wake = useRef<() => void>(() => {});

  useEffect(() => {
    const element = cat.current;
    if (!element || hidden) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastTime = 0;
    let restUntil = performance.now() + 1800;
    let nextTrickAt = performance.now() + 5000;
    let trick: { kind: Trick; until: number } | null = null;
    let target: Position | null = null;
    let obstacles: DOMRect[] = [];
    let needsLayout = true;
    const expressionAt = createExpressionController(performance.now());

    function bounds() {
      const size = element!.offsetWidth;
      const width = document.documentElement.clientWidth;
      return {
        minX: Math.min(156, width * 0.4),
        maxX: Math.max(12, width - size - 64),
        floor: Math.max(70, window.innerHeight - element!.offsetHeight - 28),
      };
    }

    function measureLinks() {
      obstacles = Array.from(document.querySelectorAll<HTMLElement>(
        "a, button, summary, input, textarea, select, [role='button']",
      ))
        .filter((node) => !node.closest("[data-cat-ui]"))
        .map((node) => node.getBoundingClientRect())
        .filter((rect) => rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight);
      needsLayout = false;
    }

    function tick(now: number) {
      frame = 0;
      if (document.hidden) return;
      const { minX, maxX, floor } = bounds();
      const left = Math.min(minX, maxX);
      const point = position.current ?? { x: left, y: floor };
      const dt = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 0;
      lastTime = now;
      const minY = Math.max(70, floor - 82);
      point.x = Math.max(left, Math.min(maxX, point.x));
      point.y = Math.max(minY, Math.min(floor, point.y));
      if (target) {
        target.x = Math.max(left, Math.min(maxX, target.x));
        target.y = Math.max(minY, Math.min(floor, target.y));
      }
      if (needsLayout) measureLinks();

      const loved = now < attention.current.loveUntil;
      const sleeping = paused || motion.matches;
      let mood: string = sleeping ? "sleep" : "idle";

      if (trick && now >= trick.until) {
        trick = null;
        restUntil = now + 1000;
        nextTrickAt = now + 8000 + Math.random() * 6000;
      }

      if (loved || sleeping) {
        trick = null;
        attention.current.requestedTrick = null;
      } else if (attention.current.requestedTrick || (!trick && !target && now >= nextTrickAt && !attention.current.hover && !attention.current.focus)) {
        const kind = attention.current.requestedTrick ?? TRICKS[trickIndex.current++ % TRICKS.length];
        trick = { kind, until: now + TRICK_DURATION[kind] };
        attention.current.requestedTrick = null;
        target = null;
      }

      if (loved || attention.current.hover || attention.current.focus || sleeping) {
        target = null;
        restUntil = now + 900;
        if (loved) mood = "love";
      }

      // Let a little performance finish even if the pointer passes over Xiaoguo.
      if (trick) {
        mood = trick.kind;
      } else if (!loved && !sleeping && !attention.current.hover && !attention.current.focus && now >= restUntil) {
        if (!target) {
          // Alternate short curious strolls and longer dashes along the page edge.
          const randomX = left + Math.random() * (maxX - left);
          target = { x: randomX, y: floor - Math.random() * Math.min(72, floor - 70) };
          element!.style.setProperty("--cat-facing", randomX >= point.x ? "1" : "-1");
        }
        const dx = target.x - point.x;
        const dy = target.y - point.y;
        const distance = Math.hypot(dx, dy);
        const step = dt * (window.innerWidth < 600 ? 85 : 130);
        if (distance <= Math.max(step, 2)) {
          point.x = target.x;
          point.y = target.y;
          target = null;
          restUntil = now + 1600 + Math.random() * 2400;
        } else {
          point.x += (dx / distance) * step;
          point.y += (dy / distance) * step;
          mood = "run";
        }
      }

      position.current = point;
      element!.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
      element!.dataset.mood = mood;
      const expression = expressionAt(now, sleeping ? "sleep" : mood, reaction.current);
      if (element!.dataset.expression !== expression) {
        element!.dataset.expression = expression;
        if (bubble.current) bubble.current.textContent = CAT_REPLIES[expression];
      }
      element!.dataset.ready = "true";

      // Paper links and other page controls keep their click/touch targets.
      const size = element!.offsetWidth;
      const overlapsLink = obstacles.some((rect) =>
        rect.left < point.x + size && rect.right > point.x &&
        rect.top < point.y + element!.offsetHeight && rect.bottom > point.y,
      );
      element!.dataset.overlap = String(overlapsLink);
      if (!sleeping || loved) frame = requestAnimationFrame(tick);
    }

    function start() {
      if (!frame && !document.hidden) {
        lastTime = 0;
        frame = requestAnimationFrame(tick);
      }
    }

    function layoutChanged() {
      // Scrolling moves page links, not this fixed-position cat's destination.
      needsLayout = true;
      start();
    }

    function visibilityChanged() {
      element!.dataset.background = String(document.hidden);
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else {
        layoutChanged();
      }
    }

    wake.current = start;
    start();
    window.addEventListener("resize", layoutChanged);
    window.addEventListener("scroll", layoutChanged, { passive: true });
    const resizeObserver = new ResizeObserver(layoutChanged);
    resizeObserver.observe(document.body);
    document.addEventListener("visibilitychange", visibilityChanged);
    motion.addEventListener("change", start);
    return () => {
      cancelAnimationFrame(frame);
      wake.current = () => {};
      window.removeEventListener("resize", layoutChanged);
      window.removeEventListener("scroll", layoutChanged);
      document.removeEventListener("visibilitychange", visibilityChanged);
      motion.removeEventListener("change", start);
      resizeObserver.disconnect();
    };
  }, [paused, hidden]);

  function pet() {
    attention.current.loveUntil = performance.now() + 2300;
    reaction.current = {
      expression: PET_REACTIONS[petIndex.current++ % PET_REACTIONS.length],
      until: attention.current.loveUntil,
    };
    wake.current();
  }

  function play() {
    attention.current.loveUntil = 0;
    reaction.current = null;
    attention.current.requestedTrick = TRICKS[trickIndex.current++ % TRICKS.length];
    setPaused(false);
    wake.current();
  }

  return (
    <aside className="cat-companion" aria-label="Xiaoguo the cat" data-cat-ui>
      {!hidden && (
        <div className="roaming-cat" ref={cat} data-mood="idle" data-expression="neutral">
          <span className="cat-bubble" ref={bubble} aria-hidden="true">喵～</span>
          <span className="cat-question" aria-hidden="true">?</span>
          <span className="cat-exclamation" aria-hidden="true">!</span>
          <span className="cat-snooze" aria-hidden="true">z z Z</span>
          <span className="cat-hearts" aria-hidden="true"><i>♥</i><i>♥</i><i>♥</i></span>
          <span className="cat-sparkles" aria-hidden="true"><i>✧</i><i>✦</i></span>
          <button
            className="cat-pet"
            type="button"
            aria-label="Pet Xiaoguo the cat"
            title="摸摸小果 · 看她的小表情"
            onClick={pet}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") {
                attention.current.hover = true;
                if (performance.now() >= attention.current.loveUntil) {
                  reaction.current = { expression: "curious", until: performance.now() + 2000 };
                  wake.current();
                }
              }
            }}
            onPointerLeave={() => { attention.current.hover = false; }}
            onFocus={(event) => {
              attention.current.focus = event.currentTarget.matches(":focus-visible");
              if (attention.current.focus) {
                reaction.current = { expression: "curious", until: performance.now() + 2000 };
                wake.current();
              }
            }}
            onBlur={() => { attention.current.focus = false; }}
          >
            <svg className="cat-art" viewBox="0 0 128 108" fill="none" aria-hidden="true">
              <ellipse className="cat-shadow" cx="66" cy="98" rx="37" ry="5" fill="#172130" opacity=".15" />
              <g className="cat-sprite" stroke="#697080" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path className="cat-tail" d="M44 76C17 79 12 53 20 39C26 30 35 35 31 43C21 58 29 66 45 64" fill="#b6bdcc" />
                <g className="cat-body">
                  <ellipse cx="64" cy="71" rx="29" ry="22" fill="#c9cedb" />
                  <ellipse cx="72" cy="76" rx="16" ry="17" fill="#f7f4f0" stroke="none" />
                  <path d="m42 59 9 5m-13 3 9 4m-8 4 8 3" stroke="#929bad" strokeWidth="4" />
                  <g className="cat-paw cat-paw-back">
                    <path d="M43 81v9c0 8 18 8 18 0v-6" fill="#edf0f4" />
                    <g className="cat-beans" fill="#eaa8b8" stroke="none">
                      <ellipse cx="52" cy="90" rx="4" ry="3" />
                      <circle cx="47" cy="86" r="1.7" /><circle cx="52" cy="84.5" r="1.7" /><circle cx="57" cy="86" r="1.7" />
                    </g>
                  </g>
                  <g className="cat-paw cat-paw-front">
                    <path d="M73 80v11c0 8 18 8 18 0V79" fill="#f7f4f0" />
                    <g className="cat-beans" fill="#eaa8b8" stroke="none">
                      <ellipse cx="82" cy="91" rx="4" ry="3" />
                      <circle cx="77" cy="87" r="1.7" /><circle cx="82" cy="85.5" r="1.7" /><circle cx="87" cy="87" r="1.7" />
                    </g>
                  </g>
                </g>
                <g className="cat-head">
                  <g className="cat-ear cat-ear-left">
                    <path d="M51 37 49 9Q50 3 55 7l21 14" fill="#c9cedb" />
                    <path d="m54 15 2 20 14-11" fill="#f3b9c5" stroke="none" />
                  </g>
                  <g className="cat-ear cat-ear-right">
                    <path d="m89 20 18-15q5-3 6 3l-2 31" fill="#c9cedb" />
                    <path d="m98 24 10-11-2 23" fill="#f3b9c5" stroke="none" />
                  </g>
                  <path d="M48 42c0-18 14-25 32-25s34 9 34 27c0 20-16 28-34 28S47 63 48 42Z" fill="#dce0e9" />
                  <path d="m73 20 2 8m7-9v8m9-6-3 7M51 39l8 3m-9 5 8 2m53-9-8 3m9 5-8 2" stroke="#a0aabc" strokeWidth="3.8" />
                  <ellipse cx="80" cy="56" rx="19" ry="12" fill="#fff9f4" stroke="none" />
                  <g className="cat-brows" stroke="#697080" strokeWidth="2">
                    <path className="cat-brow-left" d="M60 33q6-3 12 0" />
                    <path className="cat-brow-right" d="M89 33q6-3 12 0" />
                  </g>
                  <g className="cat-open-eyes" fill="#35404e" stroke="none">
                    <g className="cat-eye-left">
                      <ellipse cx="66" cy="44" rx="5.7" ry="7.3" />
                      <circle cx="64.5" cy="41.5" r="2.2" fill="white" />
                      <circle cx="68" cy="47" r="1" fill="#fff9f4" />
                    </g>
                    <g className="cat-eye-right">
                      <ellipse cx="95" cy="44" rx="5.7" ry="7.3" />
                      <circle cx="93.5" cy="41.5" r="2.2" fill="white" />
                      <circle cx="97" cy="47" r="1" fill="#fff9f4" />
                    </g>
                  </g>
                  <g className="cat-eye-lines" stroke="#586275" strokeWidth="2.8">
                    <path className="cat-happy-eyes" d="M60 45q6-9 12 0m17 0q6-9 12 0" />
                    <path className="cat-wink-eye" d="m89 42 6 3-6 3m6-3 6 1" />
                    <path className="cat-sleepy-eyes" d="M60 44q6 6 12 0m17 0q6 6 12 0" />
                    <path className="cat-cheeky-eyes" d="m60 41 7 4-7 4m41-8-7 4 7 4" />
                  </g>
                  <g className="cat-cheeks" fill="#efb1c0" stroke="none" opacity=".75">
                    <ellipse className="cat-cheek-left" cx="58" cy="53" rx="6" ry="3.5" />
                    <ellipse className="cat-cheek-right" cx="103" cy="53" rx="6" ry="3.5" />
                  </g>
                  <g className="cat-puffed-cheeks" fill="#f8d9df" stroke="#dfa8b7" strokeWidth="1.2">
                    <ellipse cx="63" cy="58" rx="8" ry="5.5" />
                    <ellipse cx="97" cy="58" rx="8" ry="5.5" />
                  </g>
                  <path d="M77 52q3-2 6 0l-3 3Z" fill="#df9ba9" stroke="#c98999" strokeWidth="1.3" />
                  <g className="cat-mouth" strokeWidth="1.7">
                    <path className="cat-mouth-neutral" d="M80 55v3m-6 0q3 5 6 0 3 5 6 0" />
                    <path className="cat-mouth-curious" d="M77 60q3-2 6 0" />
                    <path className="cat-mouth-pout" d="M77 57q6-3 8 1l-3 2q4 3-4 3" fill="#f1b7c6" stroke="#b8798e" strokeWidth="2" />
                    <path className="cat-mouth-smile" d="M73 57q7 3 14 0-2 10-7 10t-7-10Z" fill="#9b6178" />
                    <path className="cat-smile-tongue" d="M77 64q3-3 6 0" stroke="#f1b7c6" strokeWidth="3" />
                    <g className="cat-mouth-cheeky">
                      <path d="M73 57q7 6 14 0" />
                      <path d="M80 60v3c0 5 7 5 7 0v-4" fill="#edacc0" stroke="#b8798e" strokeWidth="1.4" />
                    </g>
                    <ellipse className="cat-mouth-surprised" cx="80" cy="61" rx="3.5" ry="4.6" fill="#9b6178" />
                    <path className="cat-mouth-sleepy" d="M77 59q3 2 6 0" />
                  </g>
                  <g className="cat-yawn">
                    <ellipse cx="80" cy="60" rx="4.2" ry="5" fill="#a86c82" strokeWidth="1.3" />
                    <path d="M77 62q3-3 6 0" stroke="#f3b9c5" strokeWidth="2.5" />
                  </g>
                  <path d="m45 51 12 2m-10 5 10-1m48-4 13-2m-12 6 11 1" stroke="#929bad" strokeWidth="1.5" />
                </g>
              </g>
            </svg>
          </button>
        </div>
      )}
      <div className="cat-dock">
        {hidden ? (
          <button type="button" onClick={() => setHidden(false)} aria-label="Bring Xiaoguo back" title="叫小果回来">
            <span aria-hidden="true">🐾</span> Xiaoguo
          </button>
        ) : (
          <>
            <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Wake Xiaoguo" : "Pause Xiaoguo"} title={paused ? "叫醒小果" : "让小果休息"}>
              <span aria-hidden="true">{paused ? "☀" : "☾"}</span> {paused ? "Wake up" : "Xiaoguo"}
            </button>
            <button className="cat-play" type="button" onClick={play} aria-label="Play with Xiaoguo" title="逗逗小果 · 打滚、伸懒腰、小扑跳"><span aria-hidden="true">🧶</span></button>
            <button className="cat-dismiss" type="button" aria-label="Hide Xiaoguo" title="小果先去休息" onClick={() => { attention.current.hover = false; attention.current.focus = false; setHidden(true); }}>×</button>
          </>
        )}
      </div>
    </aside>
  );
}
