// The four Nexus packages. Used by the Nexus page, the Pricing page and the Nexus enquiry form,
// so a price only ever needs changing here. All prices include GST.
export type NexusPackage = {
  name: string; // shown on the Nexus page, for example "Nexus Complete+"
  short: string; // shown on the Pricing page
  price: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const nexusPackages: NexusPackage[] = [
  {
    name: "Nexus Verify",
    short: "Verify",
    price: "₹9,999",
    tagline: "Before you commit to a resale property.",
    description:
      "Legal diligence, ownership validation, and transaction-risk checks designed for Bengaluru resale homes.",
    features: [
      "Ownership chain review",
      "EC, Khata & tax verification",
      "Plan sanction validation",
      "Buyer risk observations",
      "Bank loan assistance",
    ],
    cta: "Explore Verify",
  },
  {
    name: "Nexus Register",
    short: "Register",
    price: "₹34,999",
    tagline: "Registration support without the coordination chaos.",
    description:
      "Agreement drafting, deed preparation, TDS, and registration workflow handled end-to-end.",
    features: [
      "Sale agreement drafting",
      "Sale deed coordination",
      "TDS & Form 26QB assistance",
      "Stamp duty workflow support",
      "End-to-end registration support",
      "Bank loan assistance",
    ],
    cta: "Explore Register",
  },
  {
    name: "Nexus Transfer",
    short: "Transfer",
    price: "₹29,999",
    tagline: "Complete post-registration ownership assistance.",
    description:
      "Transfer the property cleanly across BBMP, BESCOM, and tax records after registration.",
    features: [
      "Khata transfer coordination",
      "BESCOM ownership update",
      "Property tax name transfer",
    ],
    cta: "Explore Transfer",
  },
  {
    name: "Nexus Complete+",
    short: "Complete+",
    price: "₹69,999",
    tagline: "The full resale transaction stack for Bengaluru buyers.",
    description:
      "From legal diligence to registration and ownership transfer — managed in one coordinated workflow.",
    features: [
      "Legal diligence",
      "Registration coordination",
      "Ownership transfer assistance",
      "End-to-end transaction oversight",
      "Bank loan assistance",
    ],
    cta: "Get Complete+ Assistance",
    featured: true,
  },
];
