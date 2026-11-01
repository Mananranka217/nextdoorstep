"use client";

import type { MouseEvent, ReactNode } from "react";
import { PREFILL_EVENT, type PrefillDetail } from "@/lib/prefill";

type Props = PrefillDetail & { className?: string; children: ReactNode };

/** A link to the enquiry form on the same page that also pre-fills it. */
export default function PrefillLink({ role, interest, service, note, className, children }: Props) {
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent<PrefillDetail>(PREFILL_EVENT, { detail: { role, interest, service, note } }),
    );
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", "#enquiry");
  }

  return (
    <a className={className} href="#enquiry" onClick={onClick}>
      {children}
    </a>
  );
}
