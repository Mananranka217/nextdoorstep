"use client";

import type { ReactNode } from "react";
import PrefillLink from "@/components/ui/PrefillLink";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";
import { Point } from "@/components/sections/AudienceCards";
import { ownerCards } from "@/content/audiences";
import { Arrow, Camera, FileCheck, House, Key, ShieldCheck, Tag, Users, Valuation } from "./icons";

// Icon for each point, in the same order as the points in content/audiences.ts.
const pointIcons: Record<string, ReactNode[]> = {
  rent: [<ShieldCheck key="a" />, <Camera key="b" />, <Key key="c" />],
  sell: [<Tag key="a" />, <Users key="b" />, <FileCheck key="c" />],
};
const heroIcon: Record<string, ReactNode> = {
  rent: <House size={40} />,
  sell: <Valuation size={40} />,
};

/** Two different panels, not two identical cards: Rent out is light, Sell is dark. */
export default function OwnerPaths() {
  return (
    <section className="op" aria-label="Choose how you want to work with us">
      <StaggerGrid className="op-grid">
        {ownerCards.map((card) => {
          const id = card.id ?? "";
          const dark = id === "sell";
          return (
            <StaggerItem key={card.title} className="op-item">
              <article id={id} className={`op-panel${dark ? " op-panel--dark" : ""}`}>
                <span className="op-hero-icon" aria-hidden="true">{heroIcon[id]}</span>
                <h2 className="op-title">{card.title}</h2>
                <ul className="op-points">
                  {card.points.map((point, i) => (
                    <li key={point}>
                      <span className="op-point-icon" aria-hidden="true">{pointIcons[id]?.[i]}</span>
                      <span><Point text={point} link={card.nexusPoint === i} /></span>
                    </li>
                  ))}
                </ul>
                <PrefillLink className="op-cta" role={card.role} interest={card.interest} note={card.note}>
                  {card.cta}
                  <span className="op-cta-arrow"><Arrow /></span>
                </PrefillLink>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </section>
  );
}
