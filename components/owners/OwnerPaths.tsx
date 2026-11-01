"use client";

import type { ReactNode } from "react";
import PathPanel from "@/components/ui/PathPanel";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";
import { ownerCards } from "@/content/audiences";
import { Camera, FileCheck, House, Key, ShieldCheck, Tag, Users, Valuation } from "./icons";

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
          return (
            <StaggerItem key={card.title} className="op-item">
              <PathPanel card={card} tone={id === "sell" ? "dark" : "light"} heroIcon={heroIcon[id]} pointIcons={pointIcons[id] ?? []} />
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </section>
  );
}
