import type { Metadata } from "next";
import AudienceCards from "@/components/sections/AudienceCards";
import PricingTable from "@/components/sections/PricingTable";
import EnquirySection from "@/components/sections/EnquirySection";
import SectionHeader from "@/components/ui/SectionHeader";
import { ownerCards } from "@/content/audiences";
import { rentOutConfig } from "@/content/pricing.config";

export const metadata: Metadata = {
  title: "For Owners: Rent Out or Sell Your Property",
  description:
    "Rent out your East Bengaluru property with verified tenant screening, or sell at the right price with a free valuation.",
};

export default function OwnersPage() {
  return (
    <>
      <section className="who-section" aria-labelledby="owners-title">
        <SectionHeader
          id="owners-title"
          eyebrow="Owners"
          title="Rent out"
          accent="or sell."
          sub="Two ways we help owners across East Bengaluru. Every button opens the enquiry form with your details half-filled."
        />
        <div className="who-panel">
          <AudienceCards cards={ownerCards} />
        </div>
      </section>

      <section className="plans-section" aria-labelledby="owner-pricing-title">
        <div className="plans-inner">
          <SectionHeader
            id="owner-pricing-title"
            eyebrow="Pricing"
            title="Clear,"
            accent="transparent fees."
            sub="All prices exclude GST. One-time fee, charged only after a tenant is onboarded."
          />
          <PricingTable config={rentOutConfig} audience="Owner" interest="Rent out my property" />
        </div>
      </section>

      <EnquirySection defaultRole="Owner" />
    </>
  );
}
