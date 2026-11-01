import type { Metadata } from "next";
import Link from "next/link";
import { rentOutConfig, tenantMoveInConfig, buyerConfig, sellerConfig } from "@/content/pricing.config";
import { nexusPackages } from "@/content/nexusPackages";

export const metadata: Metadata = {
  title: "Pricing — NextDoorStep",
  description:
    "Clear, upfront pricing for owner rental packages, tenant move-in plans, Nexus resale services, and buyer/seller brokerage.",
};

function PlanSummaryCard({
  name,
  price,
  basis,
  recommended,
}: {
  name: string;
  price: string;
  basis?: string;
  recommended?: boolean;
}) {
  return (
    <div className={`pricing-sum-card${recommended ? " pricing-sum-card--rec" : ""}`}>
      {recommended && <span className="pricing-sum-badge">Recommended</span>}
      <p className="pricing-sum-name">{name}</p>
      <p className="pricing-sum-price">
        {price}
        {basis && <span className="pricing-sum-basis"> {basis}</span>}
      </p>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="pricing-overview">

      {/* ── Owner rental ── */}
      <section className="pricing-sum-section">
        <div className="pricing-sum-header">
          <p className="eyebrow">For owners</p>
          <h2>{rentOutConfig.groupTitle}</h2>
          <p className="pricing-sum-sub">{rentOutConfig.subtitle}</p>
        </div>
        <div className="pricing-sum-grid">
          {rentOutConfig.plans.map((p) => (
            <PlanSummaryCard
              key={p.id}
              name={p.name}
              price={p.price}
              basis={p.basis || undefined}
              recommended={p.recommended}
            />
          ))}
        </div>
        <Link href="/owners#owner-pricing-title" className="pricing-sum-link">
          See full plan comparison on the Owners page →
        </Link>
      </section>

      {/* ── Tenant move-in ── */}
      <section className="pricing-sum-section pricing-sum-section--alt">
        <div className="pricing-sum-header">
          <p className="eyebrow">For tenants</p>
          <h2>{tenantMoveInConfig.groupTitle}</h2>
          <p className="pricing-sum-sub">{tenantMoveInConfig.subtitle}</p>
        </div>
        <div className="pricing-sum-grid">
          {tenantMoveInConfig.plans.map((p) => (
            <PlanSummaryCard
              key={p.id}
              name={p.name}
              price={p.price}
              basis={p.basis || undefined}
              recommended={p.recommended}
            />
          ))}
        </div>
        <Link href="/tenants-buyers#tb-pricing-title" className="pricing-sum-link">
          See full plan comparison on the Tenants & Buyers page →
        </Link>
      </section>

      {/* ── Nexus packages ── */}
      <section className="pricing-sum-section">
        <div className="pricing-sum-header">
          <p className="eyebrow">NextDoorStep Nexus</p>
          <h2>Resale transaction services</h2>
          <p className="pricing-sum-sub">
            Legal diligence, registration and all post-purchase ownership transfers — handled end-to-end.
          </p>
        </div>
        <div className="pricing-sum-grid pricing-sum-grid--4">
          {nexusPackages.map((pkg) => (
            <div key={pkg.short} className={`pricing-sum-card${pkg.featured ? " pricing-sum-card--rec" : ""}`}>
              {pkg.featured && <span className="pricing-sum-badge">Most Popular</span>}
              <p className="pricing-sum-name">{pkg.short}</p>
              <p className="pricing-sum-price">{pkg.price}</p>
              <p className="pricing-sum-tagline">{pkg.tagline}</p>
            </div>
          ))}
        </div>
        <Link href="/nexus" className="pricing-sum-link">
          See full Nexus package details →
        </Link>
      </section>

      {/* ── Buyer / Seller ── */}
      <section className="pricing-sum-section pricing-sum-section--alt">
        <div className="pricing-sum-header">
          <p className="eyebrow">Buyers &amp; sellers</p>
          <h2>Brokerage</h2>
        </div>
        <div className="pricing-sum-brokerage-grid">
          <div className="pricing-sum-brokerage-card">
            <p className="pricing-sum-name">Buying a home</p>
            <p className="pricing-sum-price">
              {buyerConfig.buyer_brokerage_percent
                ? `${buyerConfig.buyer_brokerage_percent} buyer-side brokerage`
                : "Quote shared upfront"}
            </p>
            <p className="pricing-sum-note">{buyerConfig.copy}</p>
          </div>
          <div className="pricing-sum-brokerage-card">
            <p className="pricing-sum-name">Selling a home</p>
            <p className="pricing-sum-price">
              {sellerConfig.seller_brokerage_percent
                ? `${sellerConfig.seller_brokerage_percent} seller-side brokerage`
                : "Custom quote based on property type and location"}
            </p>
            {sellerConfig.valuation_is_free && (
              <p className="pricing-sum-note">Property valuation is free with no obligation.</p>
            )}
          </div>
        </div>
        <Link href="/tenants-buyers#tb-pricing-title" className="pricing-sum-link">
          See buyer pricing details →
        </Link>
      </section>

      {/* ── CTA ── */}
      <section className="pricing-sum-cta-section">
        <h2>Ready to get started?</h2>
        <p>Fill the enquiry form and we&apos;ll confirm the right plan for your situation.</p>
        <a href="/contact" className="btn btn-primary">
          Contact us
        </a>
      </section>
    </div>
  );
}
