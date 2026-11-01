// Re-exports for backward compatibility. All pricing data lives in pricing.config.ts.
export type { } from "./pricing.config";

// Legacy Plan type kept so any remaining imports don't break.
export type Plan = {
  name: string;
  price: string;
  askForQuote?: boolean;
  features: string[];
  role: "Owner" | "Tenant";
  interest?: string;
  note: string;
  badge?: string;
  footnote?: string;
  hideGstLabel?: boolean;
};

// These arrays are intentionally empty — the pricing page now uses PricingTable + pricing.config.ts.
export const ownerPlans: Plan[]      = [];
export const managementPlans: Plan[] = [];
export const tenantPlans: Plan[]     = [];
