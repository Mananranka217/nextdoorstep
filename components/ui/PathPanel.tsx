import type { ReactNode } from "react";
import PrefillLink from "@/components/ui/PrefillLink";
import { Point } from "@/components/sections/AudienceCards";
import { Arrow } from "@/components/owners/icons";
import type { AudienceCard } from "@/content/audiences";

export type PanelTone = "light" | "dark" | "tint";

/** One large panel: icon, title, icon rows for the points and a bold CTA. Shared by /owners and /tenants-buyers. */
export default function PathPanel({
  card,
  tone,
  heroIcon,
  pointIcons,
  className = "",
}: {
  card: AudienceCard;
  tone: PanelTone;
  heroIcon: ReactNode;
  pointIcons: ReactNode[];
  className?: string;
}) {
  return (
    <article id={card.id} className={`op-panel${tone === "light" ? "" : ` op-panel--${tone}`} ${className}`}>
      <span className="op-hero-icon" aria-hidden="true">{heroIcon}</span>
      <h2 className="op-title">{card.title}</h2>
      <ul className="op-points">
        {card.points.map((point, i) => (
          <li key={point}>
            <span className="op-point-icon" aria-hidden="true">{pointIcons[i]}</span>
            <span><Point text={point} link={card.nexusPoint === i} /></span>
          </li>
        ))}
      </ul>
      <PrefillLink className="op-cta" role={card.role} interest={card.interest} note={card.note}>
        {card.cta}
        <span className="op-cta-arrow"><Arrow /></span>
      </PrefillLink>
    </article>
  );
}
