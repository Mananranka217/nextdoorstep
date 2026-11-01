"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "tenant-pricing", label: "Tenants" },
  { id: "buyer-pricing", label: "Buyers" },
] as const;

/** Sticky Tenants | Buyers control that jumps between the two pricing blocks and tracks the one in view. */
export default function PricingTabs() {
  const [active, setActive] = useState<string>(tabs[0].id);

  useEffect(() => {
    const els = tabs.map((t) => document.getElementById(t.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="ptabs" role="tablist" aria-label="Pricing for">
      <div className="ptabs-inner">
        {tabs.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            role="tab"
            aria-selected={active === t.id}
            className={`ptabs-tab${active === t.id ? " is-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActive(t.id);
              document.getElementById(t.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              history.replaceState(null, "", `#${t.id}`);
            }}
          >
            {t.label}
          </a>
        ))}
      </div>
    </div>
  );
}
