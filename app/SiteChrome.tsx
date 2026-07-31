"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";
type HomeSection = "about" | "news" | "publications";
type NavSection = HomeSection | "cv";

const HOME_SCROLL_KEY = "pengwei-home-scroll";
const HOME_RESTORE_KEY = "pengwei-home-restore";

export default function SiteChrome() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<HomeSection>("about");
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const pillRef = useRef<HTMLDivElement>(null);
  const isRestoringRef = useRef(false);
  const activeNav: NavSection = pathname === "/cv" ? "cv" : activeSection;

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("pengwei-theme");
    const currentTheme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : document.documentElement.dataset.theme === "dark"
          ? "dark"
          : "light";
    const frame = window.requestAnimationFrame(() => setTheme(currentTheme));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (pathname !== "/" || window.location.hash) {
      if (window.location.hash) {
        window.sessionStorage.removeItem(HOME_RESTORE_KEY);
      }
      return;
    }

    if (window.sessionStorage.getItem(HOME_RESTORE_KEY) !== "true") return;

    const savedPosition = Number(
      window.sessionStorage.getItem(HOME_SCROLL_KEY) ?? "0",
    );
    window.sessionStorage.removeItem(HOME_RESTORE_KEY);
    if (!Number.isFinite(savedPosition) || savedPosition <= 0) return;

    isRestoringRef.current = true;
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        window.scrollTo({ top: savedPosition, behavior: "auto" });
        isRestoringRef.current = false;
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      isRestoringRef.current = false;
    };
  }, [pathname]);

  useEffect(() => {
    let frame = 0;

    const updateFromScroll = () => {
      frame = 0;
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 40);

      if (pathname !== "/") return;

      if (!isRestoringRef.current) {
        window.sessionStorage.setItem(HOME_SCROLL_KEY, String(scrollPosition));
      }

      const marker = scrollPosition + Math.min(window.innerHeight * 0.24, 190);
      const sections: HomeSection[] = ["about", "news", "publications"];
      let nextSection: HomeSection = "about";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= marker) nextSection = section;
      }

      setActiveSection(nextSection);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateFromScroll);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  useEffect(() => {
    const pill = pillRef.current;
    const activeLink = pill?.querySelector<HTMLElement>(
      `[data-nav-section="${activeNav}"]`,
    );
    if (!pill || !activeLink) return;

    let frame = 0;
    const updateIndicator = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const pillRect = pill.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setIndicator({
          left: linkRect.left - pillRect.left,
          width: linkRect.width,
          opacity: 1,
        });
      });
    };

    updateIndicator();
    const observer = new ResizeObserver(updateIndicator);
    observer.observe(pill);
    observer.observe(activeLink);
    window.addEventListener("resize", updateIndicator);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeNav, isScrolled]);

  function applyTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("pengwei-theme", nextTheme);
    setTheme(nextTheme);
  }

  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    const nextTheme = theme === "light" ? "dark" : "light";
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const viewTransitionDocument = document as Document & {
      startViewTransition?: (update: () => void) => { ready: Promise<void> };
    };

    if (!viewTransitionDocument.startViewTransition || prefersReducedMotion) {
      applyTheme(nextTheme);
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    const radius = Math.hypot(
      Math.max(centerX, window.innerWidth - centerX),
      Math.max(centerY, window.innerHeight - centerY),
    );
    const transition = viewTransitionDocument.startViewTransition(() => {
      applyTheme(nextTheme);
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${centerX}px ${centerY}px)`,
              `circle(${radius}px at ${centerX}px ${centerY}px)`,
            ],
          },
          {
            duration: 560,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          } as KeyframeAnimationOptions & { pseudoElement: string },
        );
      })
      .catch(() => undefined);
  }

  function rememberHomePosition() {
    if (pathname !== "/") return;
    window.sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
    window.sessionStorage.setItem(HOME_RESTORE_KEY, "true");
  }

  function clearRestoreIntent() {
    window.sessionStorage.removeItem(HOME_RESTORE_KEY);
  }

  return (
    <header className={`site-nav${isScrolled ? " is-condensed" : ""}`}>
      <nav className="site-nav-inner" aria-label="Primary navigation">
        <div className="site-nav-pill" ref={pillRef}>
          <span
            className="site-nav-indicator"
            aria-hidden="true"
            style={indicator}
          />
          <Link
            className="site-nav-link"
            data-nav-section="about"
            href={pathname === "/" ? "#about" : "/"}
            aria-current={activeNav === "about" ? "location" : undefined}
            onClick={() => {
              if (pathname === "/") clearRestoreIntent();
            }}
          >
            about
          </Link>
          <Link
            className="site-nav-link"
            data-nav-section="news"
            href="/#news"
            aria-current={activeNav === "news" ? "location" : undefined}
            onClick={clearRestoreIntent}
          >
            news
          </Link>
          <Link
            className="site-nav-link"
            data-nav-section="publications"
            href="/#publications"
            aria-current={activeNav === "publications" ? "location" : undefined}
            onClick={clearRestoreIntent}
          >
            publications
          </Link>
          <Link
            className="site-nav-link"
            data-nav-section="cv"
            href="/cv"
            aria-current={activeNav === "cv" ? "page" : undefined}
            onClick={rememberHomePosition}
          >
            cv
          </Link>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Use dark theme" : "Use light theme"}
            title={theme === "light" ? "Use dark theme" : "Use light theme"}
          >
            <span aria-hidden="true">{theme === "light" ? "☀" : "☾"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
