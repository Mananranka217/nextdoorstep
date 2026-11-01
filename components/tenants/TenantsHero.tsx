"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import PrefillLink from "@/components/ui/PrefillLink";
import RevealTitle from "@/components/ui/RevealTitle";
import HeroSearch, { type SearchIntent } from "@/components/ui/HeroSearch";
import { tenantBuyerCards } from "@/content/audiences";
import { Arrow, Check } from "@/components/owners/icons";

const ease = [0.22, 1, 0.36, 1] as const;

const modes = [
  { id: "rent", label: "Rentals" },
  { id: "buy", label: "Resale homes" },
  { id: "new-launches", label: "New launches" },
] as const;
type Mode = (typeof modes)[number]["id"];

// What the search row prefills for each journey (same values the cards and home search already use).
const intents: Record<Mode, SearchIntent> = {
  rent: { label: "Rent a home", value: "Rent a home", role: "Tenant" },
  buy: { label: "Buy a resale home", value: "Buy a resale home", role: "Buyer" },
  "new-launches": { label: "New launches", value: "Buy a resale home", role: "Buyer", noteLabel: "New launch enquiry" },
};

const facts = ["RERA registered", "Transparent brokerage", "Guided visits", "Title checks through Nexus"];

/** `image` is a server-rendered <HeroImage /> passed in by the page, so the picture is in the first HTML. */
export default function TenantsHero({ image }: { image: ReactNode }) {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<Mode>("rent");
  const card = tenantBuyerCards.find((c) => c.id === mode) ?? tenantBuyerCards[0];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 110]);

  // Honour /tenants-buyers#buy and #new-launches on load.
  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (h === "buy" || h === "new-launches") setMode(h);
  }, []);

  function choose(next: Mode) {
    setMode(next);
    document.getElementById(next)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${next}`);
  }

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0.01, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.35, ease, delay },
        };

  return (
    <section className="hx hx--page" aria-labelledby="tb-hero-title">
      <motion.div className="hx-bg hx-parallax" aria-hidden="true" style={{ y }}>
        {image}
      </motion.div>
      <div className="hx-overlay" aria-hidden="true" />

      <div className="hx-inner">
        <motion.p className="hx-pill" {...fade(0.02)}>
          <span className="hx-pill-dot" aria-hidden="true" />
          Tenants &amp; Buyers
        </motion.p>

        <RevealTitle
          id="tb-hero-title"
          label="Homes that actually fit."
          lines={[{ words: ["Homes", "that"] }, { words: ["actually", "fit."], accent: true }]}
        />

        <motion.p className="hx-text" {...fade(0.25)}>
          Rentals, verified resale homes and new launches, without the listing walls.
        </motion.p>

        <motion.div className="hx-choose" {...fade(0.3)}>
          <div className="seg" role="tablist" aria-label="What are you looking for?">
            {modes.map((m) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={mode === m.id}
                aria-controls="tb-hero-panel"
                className={`seg-btn${mode === m.id ? " is-active" : ""}`}
                onClick={() => choose(m.id)}
              >
                {mode === m.id && <motion.span className="seg-pill" layoutId="tb-seg" transition={{ duration: 0.35, ease }} />}
                <span className="seg-label">{m.label}</span>
              </button>
            ))}
          </div>

          <div id="tb-hero-panel" role="tabpanel" className="hx-panel">
            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={mode}
                className="hx-points"
                initial={reduce ? false : { opacity: 0.01, y: 10 }}
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

        <HeroSearch fixedIntent={intents[mode]} delay={0.35} className="hx-search--inline" />
      </div>

      <ul className="hx-facts" aria-label="Why tenants and buyers choose NextDoorStep">
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
