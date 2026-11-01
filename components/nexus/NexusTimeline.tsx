"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { steps } from "./nexusData";

export default function NexusTimeline() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26, restDelta: 0.001 });
  const [active, setActive] = useState(reduce ? steps.length - 1 : -1);

  // A step is "reached" once the drawn line passes the middle of its row.
  useMotionValueEvent(progress, "change", (v) => {
    if (reduce) return;
    // Marker i sits at about (i + 0.5) / n of the line's height.
    setActive(Math.min(steps.length - 1, Math.floor((v + 0.02) * steps.length - 0.5)));
  });

  return (
    <section className="timeline-section nx-timeline">
      <div className="section-heading">
        <p className="eyebrow">How it works</p>
        <h2>From token to handover.</h2>
      </div>

      <div className="tlv" ref={ref}>
        <span className="tlv-track" aria-hidden="true">
          <motion.span className="tlv-fill" style={{ scaleY: reduce ? 1 : progress }} />
        </span>
        <ol className="tlv-steps">
          {steps.map((s, i) => (
            <li key={s.title} className={`tlv-step${i <= active ? " is-reached" : ""}${i === active ? " is-active" : ""}`}>
              <span className="tlv-marker" aria-hidden="true" />
              <div className="tlv-body">
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
