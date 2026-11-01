import { builders } from "@/content/builders";

export default function BuilderStrip() {
  const items = builders.filter((b) => !b.name.startsWith("["));
  if (items.length === 0) return null;

  const doubled = [...items, ...items];
  return (
    <div className="marquee-section">
      <p className="marquee-label">Builders &amp; communities we work with</p>
      <div className="marquee-outer">
        <div className="marquee-track">
          {doubled.map((b, i) => (
            <span key={i} className="marquee-item">
              {b.logo ? (
                <img src={b.logo} alt={b.name} style={{ height: 18, width: "auto" }} />
              ) : (
                <><span className="marquee-dot" />{b.name}</>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
