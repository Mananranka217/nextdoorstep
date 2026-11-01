import FadeUp from "@/components/ui/FadeUp";
import PrefillLink from "@/components/ui/PrefillLink";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";
import { Arrow } from "@/components/owners/icons";
import { nexusPackages } from "@/content/nexusPackages";

const check = (
  <svg className="check-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const slug = (short: string) => `pkg-${short.toLowerCase().replace(/[^a-z]/g, "") || "plan"}`;

/** The four Nexus packages, rendered from content/nexusPackages.ts. */
export default function NexusPricing() {
  return (
    <section className="pricing-section nx-pricing" id="pricing">
      <FadeUp>
        <div className="pricing-header">
          <p className="eyebrow">Pricing</p>
          <h2>Built for Bengaluru resale transactions.</h2>
          <p className="pricing-subhead">
            From legal diligence to registration and ownership transfer — managed in one coordinated workflow.
          </p>
        </div>
      </FadeUp>

      {/* Which one do I need? Uses each package's own tagline, in the order a transaction happens. */}
      <FadeUp>
        <nav className="nx-which" aria-label="Which one do I need?">
          <p className="nx-which-title">Which one do I need?</p>
          <ol className="nx-which-list">
            {nexusPackages.map((p) => (
              <li key={p.short}>
                <a href={`#${slug(p.short)}`} className={p.featured ? "is-featured" : undefined}>
                  <strong>{p.short}</strong>
                  <span>{p.tagline}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </FadeUp>

      <StaggerGrid className="pricing-grid">
        {nexusPackages.map((p) => (
          <StaggerItem key={p.name} className={p.featured ? "pricing-item pricing-item--featured" : "pricing-item"}>
            <article id={slug(p.short)} className={`pricing-card${p.featured ? " pricing-card-featured" : ""}`}>
              <div className="card-top">
                <div className="card-name-row">
                  <span className="card-name">{p.name}</span>
                  {p.featured && <span className="card-badge">Most Popular</span>}
                </div>
                <div className="card-price">{p.price}</div>
                <p className="card-tagline">{p.tagline}</p>
                <p className="card-desc">{p.description}</p>
              </div>
              <ul className="card-features">
                {p.features.map((f) => (
                  <li key={f}>
                    {check}
                    {f}
                  </li>
                ))}
              </ul>
              <div className="card-footer">
                <PrefillLink
                  className={`card-cta${p.featured ? " card-cta-featured" : ""}`}
                  role="Buyer"
                  service={`${p.name} — ${p.price}`}
                >
                  {p.cta}
                  <span className="card-cta-arrow"><Arrow /></span>
                </PrefillLink>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
