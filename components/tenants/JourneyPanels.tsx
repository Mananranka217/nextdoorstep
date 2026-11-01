"use client";

import type { ReactNode } from "react";
import PathPanel, { type PanelTone } from "@/components/ui/PathPanel";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";
import { tenantBuyerCards } from "@/content/audiences";
import { Building, Camera, FileCheck, House, Key, ShieldCheck, Tag, Valuation } from "@/components/owners/icons";

// Icons follow the order of the points in content/audiences.ts.
const pointIcons: Record<string, ReactNode[]> = {
  rent: [<Key key="a" />, <Camera key="b" />, <Tag key="c" />],
  buy: [<House key="a" />, <FileCheck key="b" />],
  "new-launches": [<ShieldCheck key="a" />, <Camera key="b" />],
};
const heroIcon: Record<string, ReactNode> = {
  rent: <House size={40} />,
  buy: <Valuation size={40} />,
  "new-launches": <Building size={40} />,
};
const tone: Record<string, PanelTone> = { rent: "light", buy: "dark", "new-launches": "tint" };

/** Three journeys, three treatments. Bento on desktop, a snap-scrolling row on mobile. */
export default function JourneyPanels() {
  return (
    <section className="op op--journeys" aria-label="Choose what you are looking for">
      <StaggerGrid className="jp-grid">
        {tenantBuyerCards.map((card) => {
          const id = card.id ?? "";
          return (
            <StaggerItem key={card.title} className={`jp-item jp-item--${id}`}>
              <PathPanel card={card} tone={tone[id] ?? "light"} heroIcon={heroIcon[id]} pointIcons={pointIcons[id] ?? []} />
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </section>
  );
}
