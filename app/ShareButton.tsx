"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaAddressCard,
  FaArrowUpFromBracket,
  FaLink,
  FaQrcode,
  FaShareNodes,
} from "react-icons/fa6";
import { QRCodeSVG } from "qrcode.react";

const HOMEPAGE_URL = "https://awilekong.github.io/";

export default function ShareButton() {
  const [feedback, setFeedback] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const controlRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !controlRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
        setShowQr(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setShowQr(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
      if (feedbackTimer.current) {
        clearTimeout(feedbackTimer.current);
      }
    };
  }, []);

  function showFeedback(message: string) {
    setFeedback(message);
    if (feedbackTimer.current) {
      clearTimeout(feedbackTimer.current);
    }
    feedbackTimer.current = setTimeout(() => setFeedback(""), 1800);
  }

  async function shareHomepage() {
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

      showFeedback("Share unavailable");
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(HOMEPAGE_URL);
      showFeedback("Link copied");
    } catch {
      showFeedback("Copy unavailable");
    }
  }

  function saveContact() {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Zhang;Pengwei;;;",
      "FN:Pengwei Zhang",
      "ORG:Institute of Automation, Chinese Academy of Sciences",
      "TITLE:Ph.D. Student",
      "EMAIL;TYPE=INTERNET,WORK:zhangpengwei2024@ia.ac.cn",
      "EMAIL;TYPE=INTERNET:pweiii@163.com",
      `URL:${HOMEPAGE_URL}`,
      "NOTE:Robot Learning and Tactile Intelligence",
      "END:VCARD",
    ].join("\r\n");
    const url = URL.createObjectURL(
      new Blob([vcard], { type: "text/vcard;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "Pengwei-Zhang.vcf";
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
    showFeedback("Contact saved");
  }

  return (
    <span className="share-control" ref={controlRef}>
      <button
        className="share-button"
        type="button"
        title="Share homepage"
        aria-label="Share Pengwei Zhang's homepage"
        aria-expanded={isOpen}
        aria-controls="share-menu"
        onClick={() => {
          setIsOpen((current) => !current);
          setShowQr(false);
        }}
      >
        <FaShareNodes aria-hidden="true" />
      </button>

      {isOpen ? (
        <div
          className="share-menu"
          id="share-menu"
          role="group"
          aria-label="Homepage sharing options"
        >
          <button
            type="button"
            onClick={shareHomepage}
            data-analytics-event="homepage-share"
          >
            <FaArrowUpFromBracket aria-hidden="true" />
            Share
          </button>
          <button
            type="button"
            onClick={copyLink}
            data-analytics-event="homepage-copy-link"
          >
            <FaLink aria-hidden="true" />
            Copy Link
          </button>
          <button
            type="button"
            aria-expanded={showQr}
            onClick={() => setShowQr((current) => !current)}
            data-analytics-event="homepage-show-qr"
          >
            <FaQrcode aria-hidden="true" />
            QR Code
          </button>
          <button
            type="button"
            onClick={saveContact}
            data-analytics-event="homepage-save-contact"
          >
            <FaAddressCard aria-hidden="true" />
            Save Contact
          </button>
          {showQr ? (
            <div className="share-qr">
              <QRCodeSVG
                value={HOMEPAGE_URL}
                size={132}
                bgColor="transparent"
                fgColor="currentColor"
                level="M"
                marginSize={1}
                role="img"
                aria-label="QR code for Pengwei Zhang's homepage"
                title="QR code for Pengwei Zhang's homepage"
              />
              <span>Scan to open the homepage</span>
            </div>
          ) : null}
        </div>
      ) : null}

      <span className="share-feedback" role="status" aria-live="polite">
        {feedback}
      </span>
    </span>
  );
}
