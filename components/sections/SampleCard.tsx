import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";
import PrefillLink from "@/components/ui/PrefillLink";

// Placeholder pictures in /public/assets/samples. Swap for real photographs when you have them.
const sampleListings = [
  { tag: "Resale", area: "Whitefield", type: "3 BHK Apartment", size: "1,450 sq ft", price: "₹92L", note: "Nexus Verify completed", photo: "/assets/samples/1.svg" },
  { tag: "Rental", area: "Bellandur", type: "2 BHK Apartment", size: "1,100 sq ft", price: "₹28,000/mo", note: "Available immediately", photo: "/assets/samples/2.svg" },
  { tag: "Resale", area: "Sarjapur Road", type: "2 BHK Villa", size: "1,650 sq ft", price: "₹78L", note: "Title clear, EC verified", photo: "/assets/samples/3.svg" },
];

export default function SampleCard({ eyebrow, showCta = true }: { eyebrow?: string; showCta?: boolean }) {
  return (
    <section className="sample-section" aria-labelledby="sample-title">
      <FadeUp>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <div className="sample-label-row">
          <span className="sample-badge">Sample</span>
          <p id="sample-title" className="sample-label-text">
            This is what a shortlist looks like — illustrative only, not real listings.
          </p>
        </div>
      </FadeUp>

      <StaggerGrid className="sample-cards">
        {sampleListings.map((l) => (
          <StaggerItem key={l.type + l.area}>
            <div className="sample-card" style={{ height: "100%" }}>
              <div className="sample-photo">
                <Image src={l.photo} alt="" fill sizes="(max-width: 800px) 90vw, 33vw" loading="lazy" className="sample-img" />
                <span className={`sample-tag sample-tag--${l.tag.toLowerCase()}`}>{l.tag}</span>
                <span className="sample-area">{l.area}</span>
                <p className="sample-price">{l.price}</p>
              </div>
              <div className="sample-body">
                <p className="sample-type">{l.type}</p>
                <p className="sample-size">{l.size}</p>
                <p className="sample-note">{l.note}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>

      {showCta && (
        <FadeUp delay={0.2}>
          <div className="sample-cta-row">
            <PrefillLink
              className="button primary"
              role="Buyer"
              interest="Buy a resale home"
              note="I want a property shortlist."
            >
              Get your shortlist
            </PrefillLink>
            <p className="sample-disclaimer">
              Real shortlists are tailored to your area, budget, and requirements.
            </p>
          </div>
        </FadeUp>
      )}
    </section>
  );
}
