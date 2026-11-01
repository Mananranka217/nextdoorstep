"use client";

import PrefillLink from "@/components/ui/PrefillLink";

// ── Types ──────────────────────────────────────────────────────
type PricingPlan = {
  id: string;
  name: string;
  price: string;
  basis?: string;
  hideGstLabel?: boolean;
  recommended?: boolean;
  badge?: string;
  brokerage?: string;
  onboardingTarget?: string;
  enquiryNote: string;
};

type FeatureRow = {
  label: string;
  plans: readonly boolean[];
};

type PricingTableConfig = {
  groupTitle: string;
  subtitle: string;
  explainer?: string;
  footnote?: string;
  plans: readonly PricingPlan[];
  features: readonly FeatureRow[];
};

// ── Icons ──────────────────────────────────────────────────────
function Tick() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="Included" role="img">
      <circle cx="8" cy="8" r="8" fill="var(--green-tint)" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="var(--green)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="Not included" role="img">
      <circle cx="8" cy="8" r="8" fill="var(--gray-100)" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="var(--gray-300)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function PricingTable({
  config,
  audience,
  interest,
}: {
  config: PricingTableConfig;
  audience: "Owner" | "Tenant";
  interest: string;
}) {
  const plans = config.plans as PricingPlan[];

  return (
    <div className="pt-group">
      {/* Group header */}
      <div className="pt-group-head">
        <h3 className="pt-group-title">{config.groupTitle}</h3>
        <p className="pt-group-sub">{config.subtitle}</p>
        {config.explainer && <p className="pt-explainer">{config.explainer}</p>}
      </div>

      {/* ── Desktop matrix ── */}
      <div className="pt-matrix" aria-label={config.groupTitle}>
        {/* Plan header row */}
        <div className="pt-matrix-head">
          {/* empty label cell — "Compare plans" fills the top-left dead space */}
          <div className="pt-feat-label-head pt-feat-label-head--title" aria-hidden="true">
            <span className="pt-compare-label">Compare plans</span>
          </div>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pt-plan-head${plan.recommended ? " pt-plan-head--rec" : ""}`}
            >
              {/* phantom badge reserves height even when no badge is shown */}
              <span className={`pt-badge${plan.badge ? "" : " pt-badge--phantom"}`} aria-hidden={!plan.badge || undefined}>
                {plan.badge ?? ""}
              </span>
              <div className="pt-plan-name">{plan.name}</div>
              <div className="pt-price-block">
                <span className="pt-price">{plan.price}</span>
                {plan.basis && <span className="pt-basis">{plan.basis}</span>}
                {!plan.hideGstLabel && <span className="pt-gst">excl. GST</span>}
              </div>
              {plan.brokerage && (
                <div className="pt-brokerage">+ {plan.brokerage}</div>
              )}
              {plan.onboardingTarget && (
                <div className="pt-target">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" stroke="var(--green)" strokeWidth="1.5"/><path d="M8 4.5v4l2.5 2" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Tenant in {plan.onboardingTarget}
                </div>
              )}
              <PrefillLink
                className={`pt-cta${plan.recommended ? " pt-cta--rec" : ""}`}
                role={audience}
                interest={interest}
                note={plan.enquiryNote}
              >
                Choose {plan.name}
              </PrefillLink>
            </div>
          ))}
        </div>

        {/* Feature rows */}
        <div className="pt-feat-rows">
          {(config.features as FeatureRow[]).map((feat) => (
            <div key={feat.label} className="pt-feat-row">
              <div className="pt-feat-label">{feat.label}</div>
              {feat.plans.map((included, i) => (
                <div
                  key={i}
                  className={`pt-feat-cell${plans[i]?.recommended ? " pt-feat-cell--rec" : ""}${!included ? " pt-feat-cell--off" : ""}`}
                >
                  {included ? <Tick /> : <Cross />}
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* ── Mobile cards (stacked, recommended first) ── */}
      <div className="pt-mobile-cards">
        {[...plans]
          .sort((a, b) => (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0))
          .map((plan) => (
            <div
              key={plan.id}
              className={`pt-mobile-card${plan.recommended ? " pt-mobile-card--rec" : ""}`}
            >
              {plan.badge && <span className="pt-badge">{plan.badge}</span>}
              <div className="pt-plan-name">{plan.name}</div>
              <div className="pt-price-block">
                <span className="pt-price">{plan.price}</span>
                {plan.basis && <span className="pt-basis">{plan.basis}</span>}
                {!plan.hideGstLabel && <span className="pt-gst">excl. GST</span>}
              </div>
              {plan.brokerage && <div className="pt-brokerage">+ {plan.brokerage}</div>}
              {plan.onboardingTarget && (
                <div className="pt-target">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" stroke="var(--green)" strokeWidth="1.5"/><path d="M8 4.5v4l2.5 2" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Tenant in {plan.onboardingTarget}
                </div>
              )}
              <ul className="pt-mobile-features">
                {(config.features as FeatureRow[]).map((feat, fi) => {
                  const planIndex = plans.findIndex((p) => p.id === plan.id);
                  const included = feat.plans[planIndex];
                  return (
                    <li key={fi} className={`pt-mobile-feat${!included ? " pt-mobile-feat--off" : ""}`}>
                      {included ? <Tick /> : <Cross />}
                      <span>{feat.label}</span>
                    </li>
                  );
                })}
              </ul>
              <PrefillLink
                className={`pt-cta pt-cta--full${plan.recommended ? " pt-cta--rec" : ""}`}
                role={audience}
                interest={plan.enquiryNote.includes("rental") ? "Rent out my property" : audience === "Tenant" ? "Rent a home" : "Rent out my property"}
                note={plan.enquiryNote}
              >
                Choose {plan.name}
              </PrefillLink>
            </div>
          ))}
      </div>

      {config.footnote && <p className="pt-footnote">{config.footnote}</p>}
    </div>
  );
}
