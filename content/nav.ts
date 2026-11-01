export type NavItem = { label: string; href: string };

// Order: Owners → Tenants & Buyers → [Nexus dropdown, hardcoded in Header] → FAQ → Contact
export const mainNav: { before: NavItem[]; after: NavItem[] } = {
  before: [
    { label: "Owners", href: "/owners" },
    { label: "Tenants & Buyers", href: "/tenants-buyers" },
  ],
  after: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export const nexusServices = [
  { title: "Verify", text: "Title search & document scrutiny" },
  { title: "Registration", text: "Sale deed, stamp duty & sub-registrar" },
  { title: "Khata Transfer", text: "BBMP & panchayat khata update" },
  { title: "BESCOM Transfer", text: "Electricity connection transfer" },
  { title: "Property Tax Transfer", text: "BBMP tax record update" },
  { title: "End-to-End Assistance", text: "Complete transaction management" },
];

export const footerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Owners", href: "/owners" },
  { label: "Tenants & Buyers", href: "/tenants-buyers" },
  { label: "NextDoorStep Nexus", href: "/nexus" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
