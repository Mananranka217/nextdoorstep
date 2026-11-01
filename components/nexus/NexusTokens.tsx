"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { checks } from "./nexusData";
import { Arrow, Bank, Blueprint, Book, Certificate, Deed, Receipt, Signature } from "@/components/owners/icons";

// One icon per check, in the same order as the checks: title deed, certificate, khata, bank, plan, tax receipt, sale deed.
const icons: ReactNode[] = [
  <Deed key="1" size={26} />,
  <Certificate key="2" size={26} />,
  <Book key="3" size={26} />,
  <Bank key="4" size={26} />,
  <Blueprint key="5" size={26} />,
  <Receipt key="6" size={26} />,
  <Signature key="7" size={26} />,
];

const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedCheck() {
  const reduce = useReducedMotion();
  return (
    <span className="tk-check" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" className="tk-check-ring" />
        <motion.path
          d="M7 12.5l3.5 3.5L17 9"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
        />
      </svg>
    </span>
  );
}

function Check({ i, title, text }: { i: number; title: string; text: string }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  return (
    <motion.li
      className="tk-item"
      initial={reduce ? false : { opacity: 0.01, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease }}
    >
      <span className="tk-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
      <span className="tk-icon" aria-hidden="true">{icons[i]}</span>
      <div className="tk-body">
        <h3>{title}</h3>
        <p className={`tk-desc${open ? " is-open" : ""}`} id={`tk-desc-${i}`}>{text}</p>
        <button
          type="button"
          className="tk-more"
          aria-expanded={open}
          aria-controls={`tk-desc-${i}`}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Show less" : "Read more"}
        </button>
      </div>
      <AnimatedCheck />
    </motion.li>
  );
}

export default function NexusTokens() {
  return (
    <>
      <section className="token-section nx-tokens" id="checks">
        <div className="tk-grid">
          <div className="tk-head">
            <p className="eyebrow">Before you pay the token</p>
            <h2>7 things every resale buyer must verify first.</h2>
            <p>Most buyers discover document problems after paying token money. These checks happen before — so you commit only when the property is clean.</p>
          </div>

          <ol className="tk-list">
            {checks.map((c, i) => (
              <Check key={c.title} i={i} title={c.title} text={c.text} />
            ))}
          </ol>
        </div>
      </section>

      <section className="nx-band" aria-label="Check my documents">
        <div className="nx-band-inner">
          <p>Want all these checks done before you commit?</p>
          <a className="hx-cta hx-cta--link" href="#enquiry">
            Check My Documents
            <span className="hx-cta-arrow"><Arrow /></span>
          </a>
        </div>
      </section>
    </>
  );
}
