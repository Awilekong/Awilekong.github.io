"use client";

import { useId, useState } from "react";

export default function AbstractDisclosure({
  text,
  publicationId,
}: {
  text: string;
  publicationId: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={`abstract-disclosure${isOpen ? " is-open" : ""}`}>
      <button
        className="abstract-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
        data-analytics-event={`${publicationId}-abstract-toggle`}
      >
        Abs
        <span className="abstract-chevron" aria-hidden="true" />
      </button>
      <div
        className="abstract-panel"
        id={panelId}
        aria-hidden={!isOpen}
      >
        <div className="abstract-panel-inner">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
