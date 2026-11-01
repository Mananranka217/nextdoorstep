// FAQ answers. Plain text only, except that a <nexus> marker is turned into a link to the Nexus page.
// Pricing plan names are read from pricing.config.ts so renaming a tier here updates the FAQ too.
import { rentOutConfig, tenantMoveInConfig, buyerConfig, sellerConfig } from "./pricing.config";

export type Faq = { q: string; a: string };
export type FaqGroup = { title: string; items: Faq[] };

const [roLite, roMid, roTop] = rentOutConfig.plans;
const [tmLite, tmMid, tmTop] = tenantMoveInConfig.plans;

const buyerBrokerageText = buyerConfig.buyer_brokerage_percent
  ? `${buyerConfig.buyer_brokerage_percent} buyer-side brokerage on a successful purchase`
  : "a buyer-side brokerage that is quoted upfront — see the pricing page for details";

const sellerBrokerageText = sellerConfig.seller_brokerage_percent
  ? `${sellerConfig.seller_brokerage_percent} of the final sale value, agreed upfront`
  : "a percentage of the final sale value, agreed upfront — custom quote based on property type";

const ownerPlansSummary = `Owner rental packages start at ${roLite.price} (${roLite.name}), then ${roMid.price} of rent (${roMid.name}) or ${roTop.price} of rent (${roTop.name}). All prices exclude GST.`;
const tenantPlansSummary = `Tenant move-in plans: ${tmLite.price} of rent (${tmLite.name}), ${tmMid.price} of rent (${tmMid.name}), or ${tmTop.price} of rent (${tmTop.name}). See the pricing page for full details.`;

export const faqGroups: FaqGroup[] = [
  {
    title: "For tenants",
    items: [
      { q: "How do you shortlist rentals?", a: "Tell us your area, budget and move-in date. We pick homes that fit and arrange guided visits, instead of sending you a long list to sort through." },
      { q: "Will I get a flood of calls?", a: "No. You get one focused conversation on WhatsApp or phone, usually within a few hours of your enquiry." },
      { q: "Is the brokerage transparent?", a: "Yes. We tell you what the brokerage is before you commit to anything. The move-in plans are listed on the pricing page." },
      { q: "What do the move-in plans cost?", a: `${tenantPlansSummary}` },
      { q: "Can I see a home before I decide?", a: "Yes. We arrange guided visits for the homes we shortlist, so you can see them in person before committing to anything." },
      { q: "Who prepares the rent agreement?", a: "We do. The move-in plans include the rent agreement delivered at your doorstep, plus coordination of the deal and handover so both sides know what was agreed." },
    ],
  },
  {
    title: "For owners",
    items: [
      { q: "How do I rent out my property with you?", a: "Send an enquiry with your property details. We inspect it, create a professional listing, arrange visits, screen tenants and help with the agreement and handover." },
      { q: "How do you screen tenants?", a: "Our tenant-placement packages include verified tenant screening, so you only meet tenants who have been checked." },
      { q: "What do your owner packages cost?", a: `${ownerPlansSummary} The fee is charged only after a tenant is onboarded.` },
      { q: "What happens when a tenant is found?", a: "With a rental package that includes it, we prepare the agreement and manage the handover, so the owner and tenant both know what was agreed." },
      { q: "Is the property valuation really free?", a: "Yes. If you are thinking of selling, choose Free Property Valuation in the enquiry form and we will come back to you with a valuation. " + sellerBrokerageText + ", no hidden charges." },
    ],
  },
  {
    title: "For buyers",
    items: [
      { q: "How does buying work?", a: `Visits, shortlisting and consultation are free. You pay ${buyerBrokerageText}. For legal diligence, registration and ownership transfer, see our <nexus>Nexus</nexus> packages on the pricing page.` },
      { q: "Do you only show verified resale homes?", a: "We shortlist homes for your budget and area, and check titles through <nexus>Nexus</nexus> before you commit, instead of showing you everything on the market." },
      { q: "Can you help me buy a new launch?", a: "Yes. We help you look at RERA-approved projects and arrange site visits. Send a new launch enquiry and tell us your budget and preferred area." },
      { q: "Do I pay anything before I buy?", a: "No. Visits, shortlisting and consultation are free. The buyer-side brokerage is payable only on a successful purchase." },
    ],
  },
  {
    title: "Documentation and legal",
    items: [
      { q: "What documents do I need to sell my property?", a: "Usually the sale deed and title documents, khata certificate and extract, encumbrance certificate, property tax receipts and a recent BESCOM bill. The exact list depends on the property. <nexus>Nexus</nexus> reviews the full set so nothing is left unresolved later." },
      { q: "What documents should a buyer check?", a: "The title chain (previous sale deeds), khata certificate and extract, encumbrance certificate, approved plan and, for new projects, the RERA registration. <nexus>Nexus</nexus> does this legal diligence for you." },
      { q: "What do tenants and owners need for a rent agreement?", a: "Typically ID and address proof for both sides, and proof of ownership from the owner. We prepare the agreement and coordinate the signing and handover." },
      { q: "What is NextDoorStep Complete+?", a: "It is our most popular <nexus>Nexus</nexus> package at ₹69,999 (GST included). It covers legal diligence, registration coordination and ownership transfer assistance, with one team overseeing the whole transaction." },
      { q: "What is Nexus?", a: "<nexus>Nexus</nexus> is our legal and documentation service for property transactions, from title checks and diligence to registration and ownership transfer." },
    ],
  },
  {
    title: "About NextDoorStep",
    items: [
      { q: "Who is NextDoorStep?", a: "East Bengaluru's resale and rental desk for buyers, tenants and owners. We shortlist what fits instead of showing you everything." },
      { q: "Are you RERA registered?", a: "Yes. Our RERA registration number is PRM/KA/RERA/1251/310/AG/260423/007159." },
      { q: "Which areas do you cover?", a: "Whitefield, Sarjapur Road, Bellandur, Marathahalli, Kadugodi and nearby pockets across East Bengaluru. If yours is not listed, send an enquiry and ask." },
      { q: "How do I reach you?", a: "WhatsApp or call +91 9740447501, or write to support@nextdoorstep.in. Our office is at 4th Cross Rd, Bommanahalli, Bengaluru 560068." },
    ],
  },
];
