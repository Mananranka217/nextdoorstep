import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";

export default function Intro() {
  return (
    <section className="section intro">
      <FadeUp className="intro-copy">
        <p className="eyebrow">Built for serious enquiries</p>
        <h2>No listing walls. Just what actually fits.</h2>
      </FadeUp>
      <StaggerGrid className="intro-features">
        <StaggerItem>
          <div className="intro-feature">
            <span className="intro-num">01 — Curated matches</span>
            <strong>Curated matches</strong>
            <p>Tell us your location, budget, and timeline. We shortlist properties that genuinely match — without spam calls or endless browsing.</p>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="intro-feature">
            <span className="intro-num">02 — One focused conversation</span>
            <strong>One focused conversation</strong>
            <p>Within hours, we guide you to the right next step through a single direct conversation, not a flood of broker follow-ups.</p>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="intro-feature">
            <span className="intro-num">03 — End-to-end handling</span>
            <strong>End-to-end handling</strong>
            <p>Rentals, resale, and post-sale transfers — buyers, tenants, and owners handled in one streamlined process.</p>
          </div>
        </StaggerItem>
      </StaggerGrid>
    </section>
  );
}
