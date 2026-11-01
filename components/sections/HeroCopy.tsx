"use client";

import { motion, useReducedMotion } from "framer-motion";
import { waLink } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/Icons";
import RevealTitle from "@/components/ui/RevealTitle";

const ease = [0.22, 1, 0.36, 1] as const;

/** The animated text of the home hero. The picture itself lives in a server component (see Hero.tsx). */
export default function HeroCopy() {
  const reduce = useReducedMotion();

  // Above-the-fold copy is never fully invisible: it starts at 0.01 and settles in 0.35s.
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0.01, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.35, ease, delay },
        };

  return (
    <div className="hx-inner">
      <motion.p className="hx-pill" {...fade(0.02)}>
        <span className="hx-pill-dot" aria-hidden="true" />
        East Bengaluru&apos;s Trusted Property Partner
      </motion.p>

      <RevealTitle
        id="hero-heading"
        label="Buy, sell & rent done properly."
        lines={[{ words: ["Buy,", "sell", "&", "rent"] }, { words: ["done", "properly."], accent: true }]}
      />

      <motion.p className="hx-text" {...fade(0.25)}>
        Shortlisted properties, verified tenants, and resale deals — one team handling it all across East Bengaluru&apos;s most active communities.
      </motion.p>

      <motion.a
        className="hx-wa"
        href={waLink("Hi NextDoorStep, I want a property shortlist for East Bengaluru.")}
        target="_blank"
        rel="noopener"
        {...fade(0.3)}
      >
        <WhatsAppIcon size={16} />
        Chat on WhatsApp
      </motion.a>
    </div>
  );
}
