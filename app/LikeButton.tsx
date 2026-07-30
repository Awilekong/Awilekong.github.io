"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

const LIKE_STORAGE_KEY = "pengwei-homepage-liked";
const LIKE_COUNTER_URL =
  "https://api.counterapi.dev/v1/awilekong-homepage-v1-2026-7f3a9c/likes";
const INITIAL_LIKE_COUNT = 7;

type CounterResponse = {
  count?: number;
};

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [burst, setBurst] = useState(0);
  const [likeCount, setLikeCount] = useState(INITIAL_LIKE_COUNT);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let frame = 0;
    let isActive = true;

    Promise.all([
      Promise.resolve(window.localStorage.getItem(LIKE_STORAGE_KEY) === "true"),
      fetch(LIKE_COUNTER_URL, { cache: "no-store" })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Unable to load the shared like count.");
          }
          return response.json() as Promise<CounterResponse>;
        })
        .then((data) =>
          typeof data.count === "number"
            ? Math.max(INITIAL_LIKE_COUNT, data.count)
            : INITIAL_LIKE_COUNT,
        )
        .catch(() => INITIAL_LIKE_COUNT),
    ]).then(([storedLike, sharedCount]) => {
      if (!isActive) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        setLiked(storedLike);
        setLikeCount(sharedCount);
      });
    });

    return () => {
      isActive = false;
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  async function handleLike() {
    if (liked || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setLiked(true);
    setBurst((currentBurst) => currentBurst + 1);
    setLikeCount((currentCount) => currentCount + 1);
    window.localStorage.setItem(LIKE_STORAGE_KEY, "true");

    try {
      const response = await fetch(`${LIKE_COUNTER_URL}/up`, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Unable to update the shared like count.");
      }

      const data = (await response.json()) as CounterResponse;
      if (typeof data.count === "number") {
        setLikeCount(Math.max(INITIAL_LIKE_COUNT, data.count));
      }
    } catch {
      // Keep the local acknowledgement when the public counter is unavailable.
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="like-control">
      <button
        className={`like-button${liked ? " is-liked" : ""}`}
        type="button"
        onClick={handleLike}
        aria-pressed={liked}
        title={liked ? "Thank you for the encouragement" : "Like this page"}
        data-analytics-event="homepage-like"
      >
        <span className="like-button-icon" aria-hidden="true">
          <FaHeart />
        </span>
        <span>{liked ? "Liked" : "Like"}</span>
        <span className="like-count" aria-label={`${likeCount} total likes`}>
          {likeCount}
        </span>
        {burst > 0 ? (
          <span
            className="like-button-burst"
            key={`like-burst-${burst}`}
            aria-hidden="true"
          >
            {Array.from({ length: 8 }, (_, index) => (
              <span className="like-button-spark" key={index} />
            ))}
          </span>
        ) : null}
      </button>
    </div>
  );
}
