import FadeUp from "@/components/ui/FadeUp";

const icon = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

const points = [
  {
    title: "RERA registered",
    text: "A registered agency, so your protection is built into the process.",
    svg: (
      <svg {...icon}>
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Verified listings",
    text: "Homes shortlisted for your budget and area, checked before you visit.",
    svg: (
      <svg {...icon}>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9.5 15l2 2 3.5-4" />
      </svg>
    ),
  },
  {
    title: "No listing spam",
    text: "One focused conversation instead of a flood of calls and long lists.",
    svg: (
      <svg {...icon}>
        <path d="M4 5h16v11H9l-5 4V5z" />
        <path d="M8 10h8" />
      </svg>
    ),
  },
  {
    title: "End-to-end paperwork",
    text: "Agreements, legal checks and registration, handled through Nexus.",
    svg: (
      <svg {...icon}>
        <path d="M7 3h8l4 4v14H7z" />
        <path d="M15 3v4h4" />
        <path d="M10 13h6M10 17h6" />
      </svg>
    ),
  },
];

export default function TrustRow() {
  return (
    <section className="tr" aria-label="Why choose NextDoorStep">
      <FadeUp>
        <ul className="tr-list">
          {points.map((p) => (
            <li className="tr-item" key={p.title}>
              <span className="tr-icon">{p.svg}</span>
              <span>
                <strong>{p.title}</strong>
                <span className="tr-text">{p.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </FadeUp>
    </section>
  );
}
