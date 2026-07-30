"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

const LIKE_STORAGE_KEY = "pengwei-homepage-liked";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    let frame = 0;

    if (window.localStorage.getItem(LIKE_STORAGE_KEY) === "true") {
      frame = window.requestAnimationFrame(() => setLiked(true));
    }

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  function handleLike() {
    if (liked) {
      return;
    }

    setLiked(true);
    setBurst((currentBurst) => currentBurst + 1);
    window.localStorage.setItem(LIKE_STORAGE_KEY, "true");
  }

  return (
    <div className="like-control">
      <button
        className={`like-button${liked ? " is-liked" : ""}`}
        type="button"
        onClick={handleLike}
        aria-pressed={liked}
        title={liked ? "Thank you for the encouragement" : "Like this page"}
      >
        <span className="like-button-icon" aria-hidden="true">
          <FaHeart />
        </span>
        <span>{liked ? "Liked" : "Like"}</span>
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
