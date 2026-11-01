import type { Metadata } from "next";
import Link from "next/link";
import TenantsHero from "@/components/tenants/TenantsHero";
import JourneyPanels from "@/components/tenants/JourneyPanels";
import PricingTabs from "@/components/tenants/PricingTabs";
import BuyerPricing from "@/components/tenants/BuyerPricing";
import SampleCard from "@/components/sections/SampleCard";
import PricingTable from "@/components/sections/PricingTable";
import NexusPackageGrid from "@/components/sections/NexusPackageCard";
import EnquirySection from "@/components/sections/EnquirySection";
import SectionHeader from "@/components/ui/SectionHeader";
import { tenantMoveInConfig } from "@/content/pricing.config";

export const metadata: Metadata = {
  title: "For Tenants & Buyers: Rentals, Resale Homes, New Launches",
  description:
    "Hand-picked rentals with guided visits, verified resale homes with title checks through Nexus, and RERA-approved new launches across East Bengaluru.",
};

export default function TenantsBuyersPage() {
  return (
    <>
      <TenantsHero />
      <JourneyPanels />
      <SampleCard eyebrow="What it looks like" showCta={false} />

      <section className="plans-section" aria-labelledby="tb-pricing-title">
        <div className="plans-inner">
          <SectionHeader
            id="tb-pricing-title"
            eyebrow="Pricing"
            title="Clear,"
            accent="transparent fees."
            sub="All prices exclude GST."
          />
          <PricingTabs />

          <div id="tenant-pricing" className="ptabs-target">
            <PricingTable config={tenantMoveInConfig} audience="Tenant" interest="Rent a home" />
          </div>

          <div id="buyer-pricing" className="ptabs-target">
            <BuyerPricing />
          </div>
        </div>
      </section>

      <section className="nexus-band nexus-band--page" aria-labelledby="tb-nexus-title">
        <SectionHeader
          id="tb-nexus-title"
          eyebrow="NextDoorStep Nexus"
          title="Buying resale?"
          accent="We handle the paperwork."
          sub="Legal diligence, registration and ownership transfer — coordinated end-to-end."
        />
        <NexusPackageGrid />
        <p className="nexus-band-more">
          <Link href="/nexus" className="nexus-band-link">View all Nexus packages →</Link>
        </p>
      </section>

      <EnquirySection defaultRole="Tenant" />
    </>
  );
}
