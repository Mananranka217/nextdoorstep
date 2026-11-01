"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  function update() {
    const el = track.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function step(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 16;
    const amount = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <div className="voices-carousel">
      <div
        className="voices-track"
        ref={track}
        tabIndex={0}
        role="region"
        aria-label="Client testimonials, scroll sideways"
        onScroll={update}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
          if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
        }}
      >
        {testimonials.map((t, i) => (
          <figure className="voice-card" key={i}>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>{t.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="voices-controls">
        <button className="voices-btn" type="button" aria-label="Previous testimonial" disabled={edges.start} onClick={() => step(-1)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="voices-btn" type="button" aria-label="Next testimonial" disabled={edges.end} onClick={() => step(1)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
