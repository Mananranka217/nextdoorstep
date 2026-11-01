"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import PrefillLink from "@/components/ui/PrefillLink";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";
import type { AudienceCard } from "@/content/audiences";

function Point({ text, link }: { text: string; link: boolean }): ReactNode {
  if (!link) return text;
  const [before, after = ""] = text.split("Nexus");
  return (
    <>
      {before}
      <Link className="who-inline-link" href="/nexus">
        Nexus
      </Link>
      {after}
    </>
  );
}

export default function AudienceCards({ cards, single = false }: { cards: AudienceCard[]; single?: boolean }) {
  return (
    <StaggerGrid className={`who-grid${single ? " who-grid--single" : ""}`}>
      {cards.map((card) => (
        <StaggerItem key={card.title}>
          <article className="who-card" id={card.id} style={{ height: "100%" }}>
            <h3>{card.title}</h3>
            <ul className="who-list">
              {card.points.map((point, i) => (
                <li key={point}>
                  <Point text={point} link={card.nexusPoint === i} />
                </li>
              ))}
            </ul>
            <PrefillLink className="who-cta" role={card.role} interest={card.interest} note={card.note}>
              {card.cta}
            </PrefillLink>
          </article>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
