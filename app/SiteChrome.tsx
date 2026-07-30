"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

export default function SiteChrome() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("dark");

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

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = nextTheme;
      window.localStorage.setItem("pengwei-theme", nextTheme);
      return nextTheme;
    });
  }

  return (
    <header className="site-nav">
      <nav className="site-nav-inner" aria-label="Primary navigation">
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
          about
        </Link>
        <Link
          href="/cv"
          aria-current={pathname === "/cv" ? "page" : undefined}
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
          {theme === "light" ? "☀" : "☾"}
        </button>
      </nav>
    </header>
  );
}
