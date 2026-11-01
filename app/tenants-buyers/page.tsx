import type { Metadata } from "next";
import Link from "next/link";
import AudienceCards from "@/components/sections/AudienceCards";
import PricingTable from "@/components/sections/PricingTable";
import PrefillLink from "@/components/ui/PrefillLink";
import EnquirySection from "@/components/sections/EnquirySection";
import SectionHeader from "@/components/ui/SectionHeader";
import { tenantBuyerCards } from "@/content/audiences";
import { tenantMoveInConfig, buyerConfig } from "@/content/pricing.config";
import { nexusPackages } from "@/content/nexusPackages";

export const metadata: Metadata = {
  title: "For Tenants & Buyers: Rentals, Resale Homes, New Launches",
  description:
    "Hand-picked rentals with guided visits, verified resale homes with title checks through Nexus, and RERA-approved new launches across East Bengaluru.",
};

export default function TenantsBuyersPage() {
  return (
    <>
      <section className="who-section" aria-labelledby="tb-title">
        <SectionHeader
          id="tb-title"
          eyebrow="Tenants & Buyers"
          title="Homes that"
          accent="actually fit."
          sub="Rentals, verified resale homes and new launches, without the listing walls."
        />
        <div className="who-panel">
          <AudienceCards cards={tenantBuyerCards} />
        </div>
      </section>

      <section className="plans-section" aria-labelledby="tb-pricing-title">
        <div className="plans-inner">
          <SectionHeader
            id="tb-pricing-title"
            eyebrow="Pricing"
            title="Clear,"
            accent="transparent fees."
            sub="All prices exclude GST."
          />

          {/* Tenant move-in plans */}
          <div className="pricing-audience-divider">
            <span className="eyebrow" style={{ margin: 0 }}>For Tenants</span>
          </div>
          <PricingTable config={tenantMoveInConfig} audience="Tenant" interest="Rent a home" />

          {/* Buyer pricing */}
          <div className="pricing-audience-divider">
            <span className="eyebrow" style={{ margin: 0 }}>For Buyers</span>
          </div>
          <div className="buyer-seller-grid">
            {/* Buyer brokerage card */}
            <div className="bs-card">
              <p className="bs-card-title">Buying a home</p>
              {buyerConfig.buyer_brokerage_percent ? (
                <p className="bs-price-line">
                  {buyerConfig.buyer_brokerage_percent} buyer-side brokerage
                </p>
              ) : (
                <p className="bs-price-line">Quote shared upfront</p>
              )}
              <p className="bs-copy">{buyerConfig.copy}</p>
              <ul className="bs-bullets">
                <li>Shortlisted properties matched to your budget and area</li>
                <li>Guided visits at no additional charge</li>
                <li>Consultation on market value and documentation</li>
                <li>Brokerage charged only on a confirmed purchase</li>
              </ul>
              <PrefillLink
                className="who-cta"
                role="Buyer"
                interest="Buy a resale home"
                note="Interested in buying — please share shortlist options."
              >
                Start your search
              </PrefillLink>
            </div>

            {/* Nexus services box */}
            <div className="bs-card nexus-info-card">
              <div>
                <p className="nexus-info-eyebrow">NextDoorStep Nexus</p>
                <p className="bs-card-title">Buying resale? We handle the paperwork.</p>
                <p className="bs-copy" style={{ marginTop: "6px" }}>
                  Legal diligence, registration and ownership transfer — coordinated end-to-end.
                </p>
              </div>
              <ul className="nexus-info-list">
                {nexusPackages.map((pkg) => (
                  <li key={pkg.short} className={`nexus-info-row${pkg.featured ? " nexus-info-row--featured" : ""}`}>
                    <span className="nexus-info-name">{pkg.short}</span>
                    <span className="nexus-info-tag">{pkg.tagline}</span>
                    <span className="nexus-info-price">{pkg.price}</span>
                  </li>
                ))}
              </ul>
              <Link href="/nexus" className="who-cta">
                View all Nexus packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EnquirySection defaultRole="Tenant" />
    </>
  );
}
