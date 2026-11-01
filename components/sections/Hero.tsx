"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { localities } from "@/content/localities";
import { waLink } from "@/content/site";
import { PREFILL_EVENT, type PrefillDetail } from "@/lib/prefill";
import { WhatsAppIcon } from "@/components/ui/Icons";
import RevealTitle from "@/components/ui/RevealTitle";

// Swap this file (keep the path, or change it here) to use a real photograph.
// Recommended: 2400px wide JPG/WebP, dark enough on the left for white text.
const HERO_IMAGE = "/assets/hero/hero.svg";

const ease = [0.22, 1, 0.36, 1] as const;

const intents = [
  { label: "Buy a home", value: "Buy a resale home", role: "Buyer" },
  { label: "Rent a home", value: "Rent a home", role: "Tenant" },
  { label: "Sell my property", value: "Sell my property", role: "Owner" },
  { label: "Rent out my property", value: "Rent out my property", role: "Owner" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const [intent, setIntent] = useState(intents[0]);
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const detail: PrefillDetail = {
      role: intent.role as "Owner" | "Tenant" | "Buyer",
      interest: intent.value,
      note: `${intent.value}${area ? ` in ${area}` : ""}${budget ? `. Budget/rent: ${budget}` : ""}.`,
    };
    window.dispatchEvent(new CustomEvent<PrefillDetail>(PREFILL_EVENT, { detail }));
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", "#enquiry");
  }

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease, delay },
        };

  return (
    <section className="hx" aria-labelledby="hero-heading">
      <div className="hx-bg" aria-hidden="true">
        <Image src={HERO_IMAGE} alt="" fill priority sizes="100vw" className="hx-img" />
      </div>
      <div className="hx-overlay" aria-hidden="true" />

      <div className="hx-inner">
        <motion.p className="hx-pill" {...fade(0.05)}>
          <span className="hx-pill-dot" aria-hidden="true" />
          East Bengaluru&apos;s Trusted Property Partner
        </motion.p>

        <RevealTitle
          id="hero-heading"
          label="Buy, sell & rent done properly."
          lines={[{ words: ["Buy,", "sell", "&", "rent"] }, { words: ["done", "properly."], accent: true }]}
        />

        <motion.p className="hx-text" {...fade(0.6)}>
          Shortlisted properties, verified tenants, and resale deals — one team handling it all across East Bengaluru&apos;s most active communities.
        </motion.p>

        <motion.a
          className="hx-wa"
          href={waLink("Hi NextDoorStep, I want a property shortlist for East Bengaluru.")}
          target="_blank"
          rel="noopener"
          {...fade(0.7)}
        >
          <WhatsAppIcon size={16} />
          Chat on WhatsApp
        </motion.a>
      </div>

      <motion.form className="hx-search" onSubmit={handleSubmit} aria-label="Quick enquiry" {...fade(0.8)}>
        <div className="hx-field">
          <label htmlFor="hero-intent" className="hx-label">I want to</label>
          <select
            id="hero-intent"
            className="hx-control"
            value={intent.value}
            onChange={(e) => setIntent(intents.find((i) => i.value === e.target.value) ?? intents[0])}
          >
            {intents.map((i) => (
              <option key={i.value} value={i.value}>{i.label}</option>
            ))}
          </select>
        </div>

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
          <svg className="hx-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </motion.form>
    </section>
  );
}
