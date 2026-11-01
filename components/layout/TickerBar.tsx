const items = ["RERA registered", "East Bengaluru", "Same-day shortlist", "50+ families helped"];

export default function TickerBar() {
  // Two identical halves so the CSS animation can loop by translating -50%.
  const half = [...items, ...items, ...items];
  return (
    <div className="ticker" role="region" aria-label="NextDoorStep at a glance">
      <div className="ticker-track">
        {[0, 1].map((n) => (
          <ul className="ticker-set" key={n} aria-hidden={n === 1 || undefined}>
            {half.map((t, i) => (
              <li key={`${t}-${i}`}>
                {t}
                <span className="ticker-sep" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
