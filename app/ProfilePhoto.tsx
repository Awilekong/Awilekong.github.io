"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { FaPaw } from "react-icons/fa6";

export default function ProfilePhoto() {
  const [celebration, setCelebration] = useState(0);
  const [isTouchWinking, setIsTouchWinking] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const winkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
      if (winkTimer.current) {
        clearTimeout(winkTimer.current);
      }
    },
    [],
  );

  function revealEasterEgg() {
    setCelebration((currentCelebration) => currentCelebration + 1);

    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
    hideTimer.current = setTimeout(() => setCelebration(0), 2600);
  }

  function revealTouchWink(event: ReactPointerEvent<HTMLButtonElement>) {
    if (event.pointerType === "mouse") return;

    setIsTouchWinking(true);
    if (winkTimer.current) {
      clearTimeout(winkTimer.current);
    }
    winkTimer.current = setTimeout(() => setIsTouchWinking(false), 900);
  }

  return (
    <figure
      className={`profile-photo${celebration ? " is-celebrating" : ""}${isTouchWinking ? " is-touch-winking" : ""}`}
      data-reveal="scale"
      data-reveal-delay="1"
    >
      <button
        className="profile-photo-button"
        type="button"
        onClick={revealEasterEgg}
        onPointerDown={revealTouchWink}
        aria-label="Pengwei Zhang holding his cat Xiaoguo. Activate for a small surprise."
        data-analytics-event="xiaoguo-easter-egg"
      >
        <img
          src="/profile.jpg"
          alt="Pengwei Zhang holding his cat Xiaoguo"
          itemProp="image"
          width="898"
          height="1596"
          decoding="async"
          fetchPriority="high"
        />
        <img
          className="profile-photo-wink"
          src="/profile-wink.jpg"
          alt=""
          width="941"
          height="1672"
          decoding="async"
          aria-hidden="true"
        />
      </button>
      {celebration ? (
        <span
          className="xiaoguo-easter-egg"
          key={`xiaoguo-${celebration}`}
          aria-live="polite"
        >
          <span className="paw-trail" aria-hidden="true">
            {Array.from({ length: 4 }, (_, index) => (
              <FaPaw key={index} />
            ))}
          </span>
          <span className="xiaoguo-message">
            Xiaoguo approves this research.
          </span>
        </span>
      ) : null}
    </figure>
  );
}
