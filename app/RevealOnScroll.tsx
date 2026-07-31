"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    root.classList.remove("reveal-loading");
    root.classList.add("reveal-ready");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => {
        element.dataset.revealState = "visible";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          if (entry.target instanceof HTMLElement) {
            entry.target.dataset.revealState = "visible";
          }
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12px 0px",
        threshold: 0.06,
      },
    );

    elements.forEach((element) => {
      if (element.dataset.revealState !== "visible") {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
