"use client";

import { useEffect, useMemo, useState } from "react";
import { faqGroups, type FaqGroup } from "@/content/faqs";
import { waLink } from "@/content/site";
import { stripNexus } from "@/lib/faqSchema";
import { WhatsAppIcon } from "@/components/ui/Icons";
import FaqGroups, { groupSlug } from "./FaqGroups";

function filterGroups(query: string): FaqGroup[] {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return faqGroups;
  return faqGroups
    .map((g) => ({
      ...g,
      items: g.items.filter((i) => {
        const hay = `${i.q} ${stripNexus(i.a)}`.toLowerCase();
        return words.every((w) => hay.includes(w));
      }),
    }))
    .filter((g) => g.items.length > 0);
}

/** The /faq page body: live search, a sticky category switcher and the grouped questions. */
export default function FaqExplorer() {
  const [query, setQuery] = useState("");
  const groups = useMemo(() => filterGroups(query), [query]);
  const [active, setActive] = useState<string>(groupSlug(faqGroups[0].title));

  // Track which group is in view, for the switcher highlight.
  useEffect(() => {
    const els = groups.map((g) => document.getElementById(groupSlug(g.title))).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [groups]);

  function jump(id: string) {
    setActive(id);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("is-flash");
    window.setTimeout(() => el.classList.remove("is-flash"), 1400);
  }

  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="fx">
      <aside className="fx-side" aria-label="FAQ categories">
        <p className="fx-side-title">Categories</p>
        <ul className="fx-nav">
          {groups.map((g) => {
            const id = groupSlug(g.title);
            return (
              <li key={g.title}>
                <button
                  type="button"
                  className={`fx-chip${active === id ? " is-active" : ""}`}
                  aria-current={active === id ? "true" : undefined}
                  onClick={() => jump(id)}
                >
                  <span>{g.title}</span>
                  <span className="fx-chip-count">{g.items.length}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="fx-main">
        <form className="fx-search" role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="faq-search" className="fx-search-label">Search the questions</label>
          <div className="fx-search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              id="faq-search"
              type="search"
              placeholder="Search, for example brokerage or khata"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          <p className="fx-search-status" role="status" aria-live="polite">
            {query.trim() ? `${total} ${total === 1 ? "question matches" : "questions match"}` : ""}
          </p>
        </form>

        {groups.length ? (
          <div className="fx-groups">
            <FaqGroups groups={groups} />
          </div>
        ) : (
          <div className="fx-empty">
            <p className="fx-empty-title">We couldn&apos;t find a match for &ldquo;{query.trim()}&rdquo;.</p>
            <p>Try a simpler word, or ask us directly and we&apos;ll answer on WhatsApp.</p>
            <a className="fx-empty-wa" href={waLink()} target="_blank" rel="noopener">
              <WhatsAppIcon size={16} />
              Chat on WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
