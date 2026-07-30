"use client";

import { useEffect } from "react";

const ANALYTICS_BASE_URL =
  "https://api.counterapi.dev/v1/awilekong-homepage-analytics-v1-2026";

function record(eventName: string) {
  if (navigator.doNotTrack === "1") {
    return;
  }

  void fetch(`${ANALYTICS_BASE_URL}/${eventName}/up`, {
    cache: "no-store",
    keepalive: true,
  }).catch(() => {
    // Analytics must never affect the browsing experience.
  });
}

export default function Analytics() {
  useEffect(() => {
    const pathname =
      window.location.pathname === "/"
        ? "home"
        : window.location.pathname.replaceAll("/", "-").replace(/^-|-$/g, "");
    const sessionKey = `pengwei-analytics-view-${pathname}`;

    try {
      if (window.sessionStorage.getItem(sessionKey) !== "true") {
        window.sessionStorage.setItem(sessionKey, "true");
        record(`${pathname}-view`);
      }
    } catch {
      // Continue without session de-duplication when storage is unavailable.
      record(`${pathname}-view`);
    }

    function trackClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) {
        return;
      }

      const target = event.target.closest<HTMLElement>(
        "[data-analytics-event]",
      );
      const eventName = target?.dataset.analyticsEvent;

      if (eventName && /^[a-z0-9-]+$/.test(eventName)) {
        record(eventName);
      }
    }

    document.addEventListener("click", trackClick, { capture: true });
    return () => {
      document.removeEventListener("click", trackClick, { capture: true });
    };
  }, []);

  return null;
}
