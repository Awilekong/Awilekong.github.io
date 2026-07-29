"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteChrome() {
  const pathname = usePathname();
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, [light]);

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
          onClick={() => setLight((value) => !value)}
          aria-label={light ? "Use dark theme" : "Use light theme"}
          title={light ? "Use dark theme" : "Use light theme"}
        >
          {light ? "☀" : "☾"}
        </button>
      </nav>
    </header>
  );
}
