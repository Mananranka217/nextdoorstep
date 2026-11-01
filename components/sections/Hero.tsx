"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { localities } from "@/content/localities";
import { site, waLink } from "@/content/site";
import { PREFILL_EVENT, type PrefillDetail } from "@/lib/prefill";
import { WhatsAppIcon } from "@/components/ui/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease, delay },
});

const intents = [
  { label: "Buy a home", value: "Buy a resale home", role: "Buyer" },
  { label: "Rent a home", value: "Rent a home", role: "Tenant" },
  { label: "Sell my property", value: "Sell my property", role: "Owner" },
  { label: "Rent out my property", value: "Rent out my property", role: "Owner" },
];

export default function Hero() {
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

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <motion.div className="hero-badge" {...fadeUp(0.05)}>
          🏆 East Bengaluru's Trusted Property Partner
        </motion.div>
        <motion.h1 id="hero-heading" {...fadeUp(0.15)}>
          Buy, sell &amp; rent<br />done properly.
        </motion.h1>
        <motion.p className="hero-text" {...fadeUp(0.25)}>
          Shortlisted properties, verified tenants, and resale deals — one team handling it all across East Bengaluru's most active communities.
        </motion.p>

        <motion.form className="hero-form" onSubmit={handleSubmit} aria-label="Quick enquiry" {...fadeUp(0.35)}>
          <div className="hero-form-row">
            <div className="hero-form-field">
              <label htmlFor="hero-intent" className="hero-form-label">I want to</label>
              <select
                id="hero-intent"
                className="hero-form-select"
                value={intent.value}
                onChange={(e) => setIntent(intents.find((i) => i.value === e.target.value) ?? intents[0])}
              >
                {intents.map((i) => (
                  <option key={i.value} value={i.value}>{i.label}</option>
                ))}
              </select>
            </div>

            <div className="hero-form-field">
              <label htmlFor="hero-area" className="hero-form-label">Area</label>
              <input
                id="hero-area"
                className="hero-form-input"
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

            <div className="hero-form-field">
              <label htmlFor="hero-budget" className="hero-form-label">Budget</label>
              <input
                id="hero-budget"
                className="hero-form-input"
                type="text"
                placeholder="₹60L or ₹25k/mo"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>

            <button className="hero-form-btn" type="submit">Get a Shortlist</button>
          </div>
        </motion.form>

        <motion.a
          className="hero-wa-link"
          href={waLink("Hi NextDoorStep, I want a property shortlist for East Bengaluru.")}
          target="_blank"
          rel="noopener"
          {...fadeUp(0.42)}
        >
          <WhatsAppIcon size={15} />
          Or chat on WhatsApp
        </motion.a>

        <motion.div className="hero-stats" {...fadeUp(0.5)}>
          <div className="hero-stat"><strong>Resale</strong><span>Buy &amp; sell</span></div>
          <div className="hero-stat-sep" aria-hidden="true" />
          <div className="hero-stat"><strong>Rental</strong><span>Owners &amp; tenants</span></div>
          <div className="hero-stat-sep" aria-hidden="true" />
          <div className="hero-stat"><strong>50+</strong><span>Families helped</span></div>
          <div className="hero-stat-sep" aria-hidden="true" />
          <div className="hero-stat"><strong>RERA</strong><span>Registered</span></div>
        </motion.div>
      </div>

      <motion.aside
        className="hero-panel"
        aria-label="Service highlights"
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <img
          src="/assets/east-blr-neighbourhood.png"
          alt="Bengaluru residential communities illustration"
          loading="eager"
        />
        <div className="panel-grid">
          <div>
            <span className="panel-label">For owners</span>
            <strong>Rent out or sell with verified enquiry handling.</strong>
          </div>
          <div>
            <span className="panel-label">For tenants</span>
            <strong>Rentals across communities people actually want.</strong>
          </div>
          <div>
            <span className="panel-label">For buyers</span>
            <strong>Shortlisted resale homes, no listing overload.</strong>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}
