"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import type { Faq } from "@/content/faqs";

// Turns <nexus>text</nexus> in an answer into a link to the Nexus page.
export function Answer({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /<nexus>(.*?)<\/nexus>/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={m.index} href="/nexus">
        {m[1]}
      </Link>,
    );
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  return <p>{parts}</p>;
}

/** One question. A button + region (aria-expanded) so the height can animate; collapsed answers are inert. */
export default function FaqItem({ item }: { item: Faq }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`faq-item${open ? " is-open" : ""}`}>
      <h3 className="faq-q-wrap">
        <button
          type="button"
          className="faq-q"
          aria-expanded={open}
          aria-controls={`${id}-a`}
          id={`${id}-q`}
          onClick={() => setOpen((o) => !o)}
        >
          <span>{item.q}</span>
          <span className="faq-icon" aria-hidden="true" />
        </button>
      </h3>
      <div className="faq-a" id={`${id}-a`} role="region" aria-labelledby={`${id}-q`} inert={!open}>
        <div className="faq-a-inner">
          <Answer text={item.a} />
        </div>
      </div>
    </div>
  );
}
