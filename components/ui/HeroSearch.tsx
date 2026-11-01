"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { localities } from "@/content/localities";
import { PREFILL_EVENT, type PrefillDetail } from "@/lib/prefill";
import { Arrow } from "@/components/owners/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export type SearchIntent = { label: string; value: string; role: "Owner" | "Tenant" | "Buyer"; noteLabel?: string };

export const homeIntents: SearchIntent[] = [
  { label: "Buy a home", value: "Buy a resale home", role: "Buyer" },
  { label: "Rent a home", value: "Rent a home", role: "Tenant" },
  { label: "Sell my property", value: "Sell my property", role: "Owner" },
  { label: "Rent out my property", value: "Rent out my property", role: "Owner" },
];

/**
 * The hero search pill. With no `fixedIntent` it shows an "I want to" select (home page);
 * with one it shows only Area + Budget and prefills the enquiry form for that intent.
 */
export default function HeroSearch({
  fixedIntent,
  delay = 0.3,
  className = "",
}: {
  fixedIntent?: SearchIntent;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [picked, setPicked] = useState(homeIntents[0]);
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");
  const intent = fixedIntent ?? picked;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const detail: PrefillDetail = {
      role: intent.role,
      interest: intent.value,
      note: `${intent.noteLabel ?? intent.value}${area ? ` in ${area}` : ""}${budget ? `. Budget/rent: ${budget}` : ""}.`,
    };
    window.dispatchEvent(new CustomEvent<PrefillDetail>(PREFILL_EVENT, { detail }));
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", "#enquiry");
  }

  return (
    <motion.form
      className={`hx-search${fixedIntent ? " hx-search--compact" : ""} ${className}`}
      onSubmit={handleSubmit}
      aria-label="Quick enquiry"
      initial={reduce ? false : { opacity: 0.01, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease, delay }}
    >
      {!fixedIntent && (
        <div className="hx-field">
          <label htmlFor="hero-intent" className="hx-label">I want to</label>
          <select
            id="hero-intent"
            className="hx-control"
            value={picked.value}
            onChange={(e) => setPicked(homeIntents.find((i) => i.value === e.target.value) ?? homeIntents[0])}
          >
            {homeIntents.map((i) => (
              <option key={i.value} value={i.value}>{i.label}</option>
            ))}
          </select>
        </div>
      )}

      <div className="hx-field">
        <label htmlFor="hero-area" className="hx-label">Area</label>
        <input
          id="hero-area"
          className="hx-control"
          type="text"
          list="hero-locality-list"
          placeholder="Whitefield…"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <datalist id="hero-locality-list">
          {localities.map((l) => <option key={l} value={l} />)}
        </datalist>
      </div>

      <div className="hx-field">
        <label htmlFor="hero-budget" className="hx-label">Budget</label>
        <input
          id="hero-budget"
          className="hx-control"
          type="text"
          placeholder="₹60L or ₹25k/mo"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>

      <button className="hx-cta" type="submit">
        Get a Shortlist
        <span className="hx-cta-arrow"><Arrow /></span>
      </button>
    </motion.form>
  );
}
