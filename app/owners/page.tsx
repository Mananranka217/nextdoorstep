import type { Metadata } from "next";
import OwnersHero from "@/components/owners/OwnersHero";
import OwnerPaths from "@/components/owners/OwnerPaths";
import OwnerTimeline from "@/components/owners/OwnerTimeline";
import ReassuranceBand from "@/components/owners/ReassuranceBand";
import PricingTable from "@/components/sections/PricingTable";
import EnquirySection from "@/components/sections/EnquirySection";
import SectionHeader from "@/components/ui/SectionHeader";
import { rentOutConfig } from "@/content/pricing.config";

export const metadata: Metadata = {
  title: "For Owners: Rent Out or Sell Your Property",
  description:
    "Rent out your East Bengaluru property with verified tenant screening, or sell at the right price with a free valuation.",
};

export default function OwnersPage() {
  return (
    <>
      <OwnersHero />
      <OwnerPaths />
      <OwnerTimeline />

      <section className="plans-section" id="owner-pricing" aria-labelledby="owner-pricing-title">
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

      <ReassuranceBand />
      <EnquirySection defaultRole="Owner" />
    </>
  );
}
