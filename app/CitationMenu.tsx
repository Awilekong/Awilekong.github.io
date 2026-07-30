"use client";

import { useEffect, useRef, useState } from "react";

type CitationMenuProps = {
  bibtex: string;
  citation: string;
  publicationId: string;
};

export default function CitationMenu({
  bibtex,
  citation,
  publicationId,
}: CitationMenuProps) {
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

  async function copy(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setFeedback(`${label} copied`);
    } catch {
      setFeedback("Copy unavailable");
    }

    if (feedbackTimer.current) {
      clearTimeout(feedbackTimer.current);
    }
    feedbackTimer.current = setTimeout(() => setFeedback(""), 1800);
  }

  return (
    <details className="citation-menu">
      <summary>Cite</summary>
      <div className="citation-panel">
        <button
          type="button"
          onClick={() => copy(citation, "Citation")}
          data-analytics-event={`${publicationId}-copy-citation`}
        >
          Copy Citation
        </button>
        <button
          type="button"
          onClick={() => copy(bibtex, "BibTeX")}
          data-analytics-event={`${publicationId}-copy-bibtex`}
        >
          Copy BibTeX
        </button>
        <span role="status" aria-live="polite">
          {feedback}
        </span>
      </div>
    </details>
  );
}
