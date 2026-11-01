"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import PrefillLink from "@/components/ui/PrefillLink";
import RevealTitle from "@/components/ui/RevealTitle";
import { ownerCards } from "@/content/audiences";
import { Arrow, Check } from "./icons";

// Swap this file for a real photograph (2400px wide, dark on the left for the white text).
const HERO_IMAGE = "/assets/owners/hero.svg";

const ease = [0.22, 1, 0.36, 1] as const;

const modes = [
  { id: "rent", label: "Rent out" },
  { id: "sell", label: "Sell" },
] as const;
type Mode = (typeof modes)[number]["id"];

const facts = ["RERA registered", "Verified tenants", "Free valuation", "No upfront fee for Launch"];

export default function OwnersHero() {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<Mode>("rent");
  const card = ownerCards.find((c) => c.id === mode) ?? ownerCards[0];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 110]);

  // Honour /owners#sell on load.
  useEffect(() => {
    if (window.location.hash === "#sell") setMode("sell");
  }, []);

  function choose(next: Mode) {
    setMode(next);
    document.getElementById(next)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${next}`);
  }

  return (
    <section className="hx hx--page" aria-labelledby="owners-hero-title">
      <motion.div className="hx-bg hx-parallax" aria-hidden="true" style={{ y }}>
        <Image src={HERO_IMAGE} alt="" fill priority sizes="100vw" className="hx-img" />
      </motion.div>
      <div className="hx-overlay" aria-hidden="true" />

      <div className="hx-inner">
        <motion.p
          className="hx-pill"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
        >
          <span className="hx-pill-dot" aria-hidden="true" />
          Owners
        </motion.p>

        <RevealTitle
          id="owners-hero-title"
          label="Rent out or sell."
          lines={[{ words: ["Rent", "out"] }, { words: ["or", "sell."], accent: true }]}
        />

        <motion.p
          className="hx-text"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.55 }}
        >
          Two ways we help owners across East Bengaluru. Every button opens the enquiry form with your details half-filled.
        </motion.p>

        <motion.div
          className="hx-choose"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.7 }}
        >
          <div className="seg" role="tablist" aria-label="What would you like to do?">
            {modes.map((m) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={mode === m.id}
                aria-controls="owners-hero-panel"
                className={`seg-btn${mode === m.id ? " is-active" : ""}`}
                onClick={() => choose(m.id)}
              >
                {mode === m.id && <motion.span className="seg-pill" layoutId="owners-seg" transition={{ duration: 0.35, ease }} />}
                <span className="seg-label">{m.label}</span>
              </button>
            ))}
          </div>

          <div id="owners-hero-panel" role="tabpanel" className="hx-panel">
            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={mode}
                className="hx-points"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease }}
              >
                {card.points.map((p) => (
                  <li key={p}>
                    <Check size={18} />
                    {p}
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <PrefillLink className="hx-cta hx-cta--link" role={card.role} interest={card.interest} note={card.note}>
              {card.cta}
              <span className="hx-cta-arrow"><Arrow /></span>
            </PrefillLink>
          </div>
        </motion.div>
      </div>

      <ul className="hx-facts" aria-label="Why owners choose NextDoorStep">
        {facts.map((f) => (
          <li key={f}>
            <Check size={16} />
            {f}
          </li>
        ))}
      </ul>
    </section>
  );
}
