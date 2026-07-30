"use client";

import { useEffect, useRef, useState } from "react";
import { FaPaw } from "react-icons/fa6";

export default function ProfilePhoto() {
  const [celebration, setCelebration] = useState(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
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

  return (
    <figure
      className={`profile-photo${celebration ? " is-celebrating" : ""}`}
    >
      <button
        className="profile-photo-button"
        type="button"
        onClick={revealEasterEgg}
        aria-label="Pengwei Zhang holding his cat Xiaoguo. Activate for a small surprise."
      >
        <img
          src="/profile.jpg"
          alt="Pengwei Zhang holding his cat Xiaoguo"
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
