"use client";

import { useEffect, useRef, useState } from "react";
import { FaShareNodes } from "react-icons/fa6";

const HOMEPAGE_URL = "https://awilekong.github.io/";

export default function ShareButton() {
  const [feedback, setFeedback] = useState("");
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (feedbackTimer.current) {
        clearTimeout(feedbackTimer.current);
      }
    },
    [],
  );

  function showFeedback(message: string) {
    setFeedback(message);
    if (feedbackTimer.current) {
      clearTimeout(feedbackTimer.current);
    }
    feedbackTimer.current = setTimeout(() => setFeedback(""), 1800);
  }

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Pengwei Zhang · Robot Learning & Tactile Intelligence",
          text: "Academic homepage of Pengwei Zhang.",
          url: HOMEPAGE_URL,
        });
        showFeedback("Shared");
        return;
      }

      await navigator.clipboard.writeText(HOMEPAGE_URL);
      showFeedback("Link copied");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      showFeedback("Copy unavailable");
    }
  }

  return (
    <span className="share-control">
      <button
        className="share-button"
        type="button"
        onClick={handleShare}
        title="Share homepage"
        aria-label="Share Pengwei Zhang's homepage"
      >
        <FaShareNodes aria-hidden="true" />
      </button>
      <span className="share-feedback" role="status" aria-live="polite">
        {feedback}
      </span>
    </span>
  );
}
