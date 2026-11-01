import { localities } from "@/content/localities";

export default function AreasMarquee() {
  const doubled = [...localities, ...localities];
  return (
    <div className="marquee-section">
      <p className="marquee-label">Areas we serve across East Bengaluru</p>
      <div className="marquee-outer">
        <div className="marquee-track" style={{ animationDirection: "reverse" }}>
          {doubled.map((loc, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />{loc}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
