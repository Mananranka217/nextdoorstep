"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import PrefillLink from "@/components/ui/PrefillLink";

type ServiceCard = {
  title: string;
  outcome: string;
  cta: string;
  role: "Owner" | "Tenant" | "Buyer";
  interest?: string;
  note: string;
};

const tabs: { label: string; cards: ServiceCard[] }[] = [
  {
    label: "Owners",
    cards: [
      {
        title: "Rent out your property",
        outcome: "Verified tenant placed with full agreement support.",
        cta: "Get tenant placement",
        role: "Owner",
        interest: "Rent out my property",
        note: "I want to rent out my property.",
      },
      {
        title: "Sell at the right price",
        outcome: "Free valuation, verified buyers, Nexus-backed documentation.",
        cta: "Get a free valuation",
        role: "Owner",
        interest: "Free Property Valuation",
        note: "I want to sell my property and need a valuation.",
      },
    ],
  },
  {
    label: "Tenants & Buyers",
    cards: [
      {
        title: "Rentals",
        outcome: "Hand-picked options and guided visits, no listing spam.",
        cta: "Find me a rental",
        role: "Tenant",
        interest: "Rent a home",
        note: "Looking for a rental home.",
      },
      {
        title: "Verified resale homes",
        outcome: "Shortlisted properties with Nexus title checks.",
        cta: "Get a resale shortlist",
        role: "Buyer",
        interest: "Buy a resale home",
        note: "Looking to buy a resale home.",
      },
      {
        title: "New launches",
        outcome: "RERA-approved projects with site visits.",
        cta: "Ask about new launches",
        role: "Buyer",
        interest: "Buy a resale home",
        note: "Interested in new launch projects.",
      },
    ],
  },
];

export default function HomeAudience() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="who-section" id="who" aria-labelledby="who-title">
      <SectionHeader
        id="who-title"
        eyebrow="Who are you?"
        title="Find"
        accent="your fit."
        sub="Pick the one that sounds like you and see exactly what we do."
      />

      <div className="who-panel">
        <div className="who-tabs" role="tablist" aria-label="Audience">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={active === i}
              aria-controls={`who-panel-${i}`}
              className="who-tab"
              onClick={() => setActive(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          id={`who-panel-${active}`}
          role="tabpanel"
          className="who-grid"
        >
          {current.cards.map((card) => (
            <article className="who-card" key={card.title}>
              <h3>{card.title}</h3>
              <p className="who-outcome">{card.outcome}</p>
              <PrefillLink
                className="who-cta"
                role={card.role}
                interest={card.interest}
                note={card.note}
              >
                {card.cta}
              </PrefillLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
