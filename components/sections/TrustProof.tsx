import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";

export default function TrustProof() {
  return (
    <section className="trust-proof-section" aria-label="Why clients trust NextDoorStep">
      <FadeUp>
        <div className="trust-proof-header">
          <p className="eyebrow">Why families choose us</p>
          <h2>Trusted local guidance for every property decision.</h2>
        </div>
      </FadeUp>
      <StaggerGrid className="trust-proof-grid">
        <StaggerItem>
          <article className="trust-card trust-card--rera" style={{ height: "100%" }}>
            <div className="trust-card-top">
              <span className="trust-icon" aria-hidden="true">R</span>
              <span className="trust-badge">RERA Registered</span>
            </div>
            <strong>Registered guidance</strong>
            <p>RERA-registered agency — your protection is built into the process.</p>
          </article>
        </StaggerItem>

        <StaggerItem>
          <article className="trust-card trust-card--families" style={{ height: "100%" }}>
            <div className="trust-card-top">
              <span className="trust-icon" aria-hidden="true">50+</span>
              <span className="trust-badge">Verified</span>
            </div>
            <strong>Families assisted</strong>
            <p>Buyers, tenants, and owners helped across East Bengaluru.</p>
          </article>
        </StaggerItem>

        <StaggerItem>
          <article className="trust-card trust-card--speed" style={{ height: "100%" }}>
            <div className="trust-card-top">
              <span className="trust-icon" aria-hidden="true">↗</span>
              <span className="trust-badge">Same-Day</span>
            </div>
            <strong>Fast follow-up</strong>
            <p>Share your requirement and get a clear shortlist within the day.</p>
          </article>
        </StaggerItem>

        <StaggerItem>
          <article className="trust-card trust-card--local" style={{ height: "100%" }}>
            <div className="trust-card-top">
              <span className="trust-icon" aria-hidden="true">⌂</span>
              <span className="trust-badge">Area-Led</span>
            </div>
            <strong>Deep local coverage</strong>
            <p>Whitefield to Sarjapur — we know each locality&#39;s micro-market.</p>
          </article>
        </StaggerItem>
      </StaggerGrid>
    </section>
  );
}
