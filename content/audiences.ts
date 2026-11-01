export type AudienceCard = {
  id?: string; // anchor id so header links can jump to this card
  title: string;
  points: string[];
  cta: string;
  role: "Owner" | "Tenant" | "Buyer";
  interest?: string;
  note?: string;
  nexusPoint?: number; // index of the point that links to the Nexus page
};

export const ownerCards: AudienceCard[] = [
  {
    id: "rent",
    title: "Rent out your property",
    points: ["Verified tenant screening", "Professional listing and visits", "Agreement and handover"],
    cta: "Rent out my property",
    role: "Owner",
    interest: "Rent out my property",
    note: "Rent out my property",
  },
  {
    id: "sell",
    title: "Sell at the right price",
    points: ["Free valuation", "Verified buyers", "Documentation via Nexus"],
    cta: "Get a free valuation",
    role: "Owner",
    interest: "Free Property Valuation",
    note: "I want to sell my property and need a valuation.",
    nexusPoint: 2,
  },
];

export const tenantBuyerCards: AudienceCard[] = [
  {
    id: "rent",
    title: "Rentals",
    points: ["Hand-picked options", "Guided visits", "Transparent brokerage"],
    cta: "Find me a rental",
    role: "Tenant",
    interest: "Rent a home",
  },
  {
    id: "buy",
    title: "Verified resale homes",
    points: ["Shortlisted for your budget and area", "Title checks through Nexus"],
    cta: "Get a resale shortlist",
    role: "Buyer",
    interest: "Buy a resale home",
    nexusPoint: 1,
  },
  {
    id: "new-launches",
    title: "New launches",
    points: ["RERA-approved projects", "Site visits"],
    cta: "Ask about new launches",
    role: "Buyer",
    note: "New launch enquiry.",
  },
];

