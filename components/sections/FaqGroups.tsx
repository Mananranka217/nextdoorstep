"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { faqGroups, featuredFaqs, type FaqGroup } from "@/content/faqs";
import { waLink } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Arrow, Building, FileCheck, House, Key, Tag } from "@/components/owners/icons";
import FaqItem from "./FaqItem";

const ease = [0.22, 1, 0.36, 1] as const;

export const groupSlug = (title: string) => `faq-${title.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "")}`;

const groupIcons: Record<string, ReactNode> = {
  "For tenants": <Key size={22} />,
  "For owners": <House size={22} />,
  "For buyers": <Tag size={22} />,
  "Documentation and legal": <FileCheck size={22} />,
  "About NextDoorStep": <Building size={22} />,
};

function Group({ group, index }: { group: FaqGroup; index: number }) {
  const reduce = useReducedMotion();
  const n = group.items.length;
  return (
    <motion.section
      className="faq-group"
      id={groupSlug(group.title)}
      aria-labelledby={`${groupSlug(group.title)}-title`}
      initial={reduce ? false : { opacity: 0.01, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease, delay: Math.min(index, 2) * 0.08 }}
    >
      <header className="faq-group-head">
        <span className="faq-group-icon" aria-hidden="true">{groupIcons[group.title] ?? <Building size={22} />}</span>
        <h2 className="faq-group-title" id={`${groupSlug(group.title)}-title`}>{group.title}</h2>
        <span className="faq-count">{n} {n === 1 ? "question" : "questions"}</span>
      </header>

      <div className="faq-list">
        {group.items.map((item) => (
          <FaqItem key={item.q} item={item} />
        ))}
      </div>

      <p className="faq-wa-row">
        Still unsure?{" "}
        <a href={waLink()} target="_blank" rel="noopener">
          <WhatsAppIcon size={15} />
          Chat on WhatsApp
        </a>
      </p>
    </motion.section>
  );
}

/**
 * variant="featured": a short single list for the home page with a link to /faq.
 * variant="all" (default): every question, grouped. Pass `groups` to show a filtered set.
 */
export default function FaqGroups({
  variant = "all",
  groups = faqGroups,
}: {
  variant?: "featured" | "all";
  groups?: FaqGroup[];
}) {
  if (variant === "featured") {
    return (
      <div className="faq-featured">
        <div className="faq-list">
          {featuredFaqs.map((item) => (
            <FaqItem key={item.q} item={item} />
          ))}
        </div>
        <Link href="/faq" className="faq-all">
          See all questions
          <span className="faq-all-arrow"><Arrow /></span>
        </Link>
      </div>
    );
  }

  return (
    <div className="faq-groups">
      {groups.map((group, i) => (
        <Group key={group.title} group={group} index={i} />
      ))}
    </div>
  );
}
