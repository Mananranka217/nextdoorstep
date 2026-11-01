// ============================================================
// NextDoorStep — Pricing Configuration
// ALL prices live here. Edit values below; UI reads from this.
// ============================================================

// ── Shared ───────────────────────────────────────────────────
export const GST_NOTE = "excl. GST";

// ── 1. Owner: Rent-out plans ─────────────────────────────────
// One-time fee, charged only after a tenant is onboarded.
// TODO: confirm tier names (currently Launch / Boost / Concierge)
export const rentOutConfig = {
  groupTitle: "Owner rental packages",
  subtitle:   "One-time fee, charged only after a tenant is onboarded.",
  explainer:  "Fee is negotiable based on property size.",
  footnote:   "Maintenance, repair and service costs are billed separately as per actuals.",

  plans: [
    {
      id:               "launch",
      name:             "Launch",           // TODO: confirm tier name
      price:            "Free",
      basis:            "",
      hideGstLabel:     true,
      recommended:      false,
      badge:            "",
      onboardingTarget: "",
      enquiryNote:      "Interested in the Launch rental package.",
    },
    {
      id:               "boost",
      name:             "Boost",            // TODO: confirm tier name
      price:            "1 month",
      basis:            "of rent",
      hideGstLabel:     true,
      recommended:      true,
      badge:            "Recommended",
      onboardingTarget: "45 days",
      enquiryNote:      "Interested in the Boost rental package.",
    },
    {
      id:               "concierge",
      name:             "Concierge",        // TODO: confirm tier name
      price:            "1.5 months",
      basis:            "of rent",
      hideGstLabel:     true,
      recommended:      false,
      badge:            "",
      onboardingTarget: "30 days",
      enquiryNote:      "Interested in the Concierge rental package.",
    },
  ],

  features: [
    { label: "Property inspection and evaluation",           plans: [true,  true,  true]  },
    { label: "Professional listing + dedicated portfolio link", plans: [true,  true,  true]  },
    { label: "Tenant requirement screening support",         plans: [false, true,  true]  },
    { label: "Professional video shoot (reels + walkthrough)", plans: [false, true,  true] },
    { label: "Priority marketing and broker outreach",       plans: [false, true,  true]  },
    { label: "Legal documentation support",                  plans: [false, true,  true]  },
    { label: "Assisted negotiation and deal closure",        plans: [false, true,  true]  },
    { label: "Dedicated relationship manager",               plans: [false, true,  true]  },
    { label: "Deep cleaning before possession",              plans: [false, false, true]  },
    { label: "Premium tenant filtering and background check",plans: [false, false, true]  },
    { label: "Priority tenant placement and quick vacancy filling",                    plans: [false, false, true]  },
  ],
} as const;

// ── 3. Tenant: Move-in plans ──────────────────────────────────
// One-time fee, in months of rent.
// TODO: confirm tier names (currently Move-in Lite / Plus / Complete)
export const tenantMoveInConfig = {
  groupTitle: "Tenant move-in plans",
  subtitle:   "One-time fee, charged at move-in.",
  explainer:  "Everything you need to move in without surprises.",
  footnote:   "Maintenance charges are billed separately as per actuals.",

  plans: [
    {
      id:           "lite",
      name:         "Move-in Lite",       // TODO: confirm tier name
      price:        "1 month",
      basis:        "of rent",
      hideGstLabel: true,
      recommended:  false,
      badge:        "",
      enquiryNote:  "Interested in the Move-in Lite plan.",
    },
    {
      id:           "plus",
      name:         "Move-in Plus",       // TODO: confirm tier name
      price:        "1.5 months",
      basis:        "of rent",
      hideGstLabel: true,
      recommended:  true,
      badge:        "Popular",
      enquiryNote:  "Interested in the Move-in Plus plan.",
    },
    {
      id:           "complete",
      name:         "Move-in Complete",   // TODO: confirm tier name
      price:        "2 months",
      basis:        "of rent",
      hideGstLabel: true,
      recommended:  false,
      badge:        "",
      enquiryNote:  "Interested in the Move-in Complete plan.",
    },
  ],

  features: [
    { label: "Move-in ready flat",                        plans: [true,  true,  true]  },
    { label: "Rent agreement at doorstep",                plans: [true,  true,  true]  },
    { label: "End-to-end deal coordination and handover",              plans: [true,  true,  true]  },
    { label: "Maintenance coordination",                  plans: [true,  true,  true]  },
    { label: "Deep cleaning before move-in",              plans: [false, true,  true]  },
    { label: "Priority maintenance coordination",         plans: [false, true,  true]  },
    { label: "Painting, deep cleaning and pack-and-leave at vacating",    plans: [false, false, true]  },
    { label: "Dedicated relationship manager",            plans: [false, false, true]  },
    { label: "Furniture upgrade coordination",            plans: [false, false, true]  },
    { label: "VIP maintenance (2-hour response)",         plans: [false, false, true]  },
  ],
} as const;

// ── 4. Buyers ─────────────────────────────────────────────────
// No plan cards — just a copy block + optional brokerage %.
// TODO: fill in buyer_brokerage_percent when confirmed (e.g. "1%").
//       If empty, UI shows "Quote shared upfront".
export const buyerConfig = {
  buyer_brokerage_percent: "1%",
  copy: "Visits, shortlisting and consultation are free. You pay a buyer-side brokerage only on a successful purchase.",
} as const;

// ── 5. Sellers ────────────────────────────────────────────────
// Free valuation; brokerage % agreed upfront.
// TODO: fill in seller_brokerage_percent when confirmed (e.g. "2%").
//       If empty, UI shows "Custom quote based on property type and location".
export const sellerConfig = {
  seller_brokerage_percent: "2%",
  valuation_is_free: true,
} as const;

// ── Derived helpers used by FAQ ───────────────────────────────
export const rentOutPlanNames = rentOutConfig.plans.map((p) => p.name);
export const tenantPlanNames  = tenantMoveInConfig.plans.map((p) => p.name);
