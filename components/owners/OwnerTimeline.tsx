"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

// Labels reuse wording that already exists on the page (pricing features and owner card points).
const steps = [
  "Property inspection and evaluation",
  "Professional listing and visits",
  "Verified tenant screening",
  "Agreement and handover",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function OwnerTimeline() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 78%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const fill = reduce ? 1 : progress;

  return (
    <section className="tl-section" aria-labelledby="owner-steps-title">
      <SectionHeader id="owner-steps-title" eyebrow="How it works" title="From inspection" accent="to handover." />

      <div className="tl" ref={ref}>
        <div className="tl-track tl-track--h" aria-hidden="true">
          <motion.span className="tl-fill tl-fill--h" style={{ scaleX: fill }} />
        </div>
        <div className="tl-track tl-track--v" aria-hidden="true">
          <motion.span className="tl-fill tl-fill--v" style={{ scaleY: fill }} />
        </div>

        <ol className="tl-steps">
          {steps.map((label, i) => (
            <motion.li
              key={label}
              className="tl-step"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            >
              <span className="tl-dot">{i + 1}</span>
              <span className="tl-label">{label}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
