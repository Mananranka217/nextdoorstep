"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import RevealTitle from "@/components/ui/RevealTitle";
import CountUp from "@/components/ui/CountUp";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { waLink } from "@/content/site";
import { Arrow } from "@/components/owners/icons";

const ease = [0.22, 1, 0.36, 1] as const;

/** `image` is a server-rendered <HeroImage /> passed in by the page, so the picture is in the first HTML. */
export default function NexusHero({ image }: { image: ReactNode }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 90]);

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0.01, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.35, ease, delay },
        };

  return (
    <section className="hx hx--page nx-hero" aria-labelledby="nx-hero-title">
      <motion.div className="hx-bg hx-parallax" aria-hidden="true" style={{ y }}>
        {image}
      </motion.div>
      <div className="hx-overlay nx-overlay" aria-hidden="true" />

      <div className="hx-inner">
        <motion.p className="hx-pill" {...fade(0.02)}>
          <span className="hx-pill-dot" aria-hidden="true" />
          Safe resale transactions
        </motion.p>

        <RevealTitle
          id="nx-hero-title"
          className="nx-title"
          label="Buy with confidence. Sell with nothing left unresolved."
          lines={[
            { words: ["Buy", "with", "confidence."] },
            { words: ["Sell", "with", "nothing", "left", "unresolved."], accent: true },
          ]}
        />

        <motion.p className="hx-text" {...fade(0.25)}>
          Every resale transaction has hidden risk — in documents, ownership chains, and government records. We find it
          before it costs you. Legal diligence through final registration, coordinated end-to-end.
        </motion.p>

        <motion.div className="nx-actions" {...fade(0.3)}>
          <a className="hx-cta hx-cta--link" href="#enquiry">
            Check My Documents
            <span className="hx-cta-arrow"><Arrow /></span>
          </a>
          <a className="hx-wa nx-wa" href={waLink()} target="_blank" rel="noopener">
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
        </motion.div>
      </div>

      <dl className="nx-stats" aria-label="Nexus highlights">
        <div>
          <dt><strong><CountUp to={70} suffix="+" /></strong></dt>
          <dd>Bank partners</dd>
        </div>
        <div>
          <dt><strong><CountUp to={30} suffix="+" /></strong></dt>
          <dd>Nexus services</dd>
        </div>
        <div>
          <dt><strong>1</strong></dt>
          <dd>Team coordinating the process</dd>
        </div>
      </dl>
    </section>
  );
}
