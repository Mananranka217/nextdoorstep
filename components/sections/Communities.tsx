import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";

const PIN = (
  <svg className="card-pin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const areas = [
  {
    badge: "Hot Area",
    name: "Whitefield",
    note: "High resale & rental demand — IT corridor prices holding strong.",
    tags: ["Resale", "Rental", "IT Corridor"],
  },
  {
    badge: "High Demand",
    name: "Sarjapur Road",
    note: "Fast-moving rentals driven by tech-park proximity.",
    tags: ["Rental", "Resale", "New Launches"],
  },
  {
    badge: "Growing",
    name: "Kadugodi",
    note: "Growing end-user demand with strong price appreciation.",
    tags: ["Resale", "Investment"],
  },
  {
    badge: "Premium",
    name: "Bellandur",
    note: "Premium apartments with high rental yields.",
    tags: ["Premium", "Rental", "Resale"],
  },
  {
    badge: "Established",
    name: "Marathahalli",
    note: "Well-established neighbourhood, stable rental market.",
    tags: ["Rental", "Resale"],
  },
];

export default function Communities() {
  return (
    <section className="communities-section" id="areas">
      <FadeUp>
        <div className="communities-header">
          <p className="eyebrow">Where we work</p>
          <h2>Communities we serve <span style={{ color: "var(--green)" }}>across East Bengaluru</span></h2>
          <p className="communities-subhead">Active across Bengaluru's most in-demand residential neighbourhoods.</p>
        </div>

        <div className="areas-stats communities-stats">
          <div>
            <span className="stat-icon" aria-hidden="true">⌂</span>
            <strong>12+</strong>
            <span>Communities</span>
          </div>
          <div>
            <span className="stat-icon" aria-hidden="true">↗</span>
            <strong>Same day</strong>
            <span>Follow-up</span>
          </div>
          <div>
            <span className="stat-icon" aria-hidden="true">✓</span>
            <strong>50+</strong>
            <span>Deals closed</span>
          </div>
        </div>
      </FadeUp>

      <StaggerGrid className="community-grid">
        {areas.map((area) => (
          <StaggerItem key={area.name}>
            <article className="community-card" style={{ height: "100%" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                {PIN}
                <span className="community-badge">{area.badge}</span>
              </div>
              <h3>{area.name}</h3>
              <p>{area.note}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                {area.tags.map((t) => (
                  <span key={t} style={{
                    fontSize: "var(--fs-2xs)",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: "999px",
                    color: "var(--gray-600)",
                    background: "var(--gray-100)",
                    border: "1px solid var(--gray-200)",
                  }}>{t}</span>
                ))}
              </div>
            </article>
          </StaggerItem>
        ))}

        <StaggerItem>
          <article className="community-card community-card-cta" style={{ height: "100%" }}>
            {PIN}
            <h3>Not listed?</h3>
            <p>We cover all of East Bengaluru — share your requirement and we&apos;ll shortlist for you.</p>
            <a href="#enquiry">Send enquiry →</a>
          </article>
        </StaggerItem>
      </StaggerGrid>

      <FadeUp>
        <div className="community-trust-strip">
          {[
            "Prestige Shantiniketan", "Brigade Metropolis", "Sobha Dream Acres",
            "Purva Windermere", "Godrej Splendour", "Salarpuria Sattva",
            "Embassy Springs", "Mantri Espana",
          ].map((name, i) => (
            name === "·" ? <span key={i} className="trust-sep">·</span> : <span key={name}>{name}</span>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
