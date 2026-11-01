import type { ReactNode } from "react";
import FadeUp from "@/components/ui/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";
import { Building, Desk, FileCheck, Signature } from "@/components/owners/icons";

type Row = { icon: ReactNode; group: string; title: string; text: string; bank?: boolean };

const rows: Row[] = [
  {
    icon: <FileCheck size={28} />,
    group: "Legal Diligence",
    title: "Catch problems before they cost you",
    text: "Title search, ownership chain, encumbrance certificate, khata status, tax receipts, sanctioned plan, and all approvals reviewed before you pay a rupee or sign anything.",
  },
  {
    icon: <Signature size={28} />,
    group: "Nexus",
    title: "Agreement to registration day — handled",
    text: "Sale agreement drafting, sale deed coordination, TDS and stamp duty assistance including BBMP coordination, and sub-registrar appointment support — one process, start to finish.",
  },
  {
    icon: <Desk size={28} />,
    group: "Transaction Desk",
    title: "One contact. No chasing.",
    text: "Buyer, seller, bank, legal team, document runner, and registration office — we coordinate everyone so you don't have to make ten calls to find out where things stand.",
  },
  {
    icon: "70+",
    group: "Finance",
    title: "Best rate, without the bank runaround",
    text: "Loan comparison across 70+ bank partners, approval follow-up, and bank-side document coordination — so you get a competitive rate and the sanction letter on time.",
    bank: true,
  },
  {
    icon: <Building size={28} />,
    group: "Government Coordination",
    title: "Khata, BESCOM, and tax — sorted after you move in",
    text: "Khata transfer, BESCOM name change, and property tax update all tracked to completion — so you don't inherit the previous owner's dues or miss a deadline after handover.",
  },
];

export default function NexusFeatures() {
  return (
    <section className="paper-section nx-features" id="features">
      <FadeUp>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Features</p>
            <h2>Everything a resale transaction needs</h2>
          </div>
          <p>Built for homebuyers and sellers across Bengaluru.</p>
        </div>
      </FadeUp>

      <div className="feature-board">
        <FadeUp>
          <article className="feature-overview">
            <div>
              <span>NextDoorStep Nexus</span>
              <h3>Your safe resale — from first check to final transfer.</h3>
            </div>
            <p>
              <strong>We catch the problems before you commit.</strong> Then we carry every step — legal, bank,
              registration, and post-purchase transfers — so nothing falls through after handover.
            </p>
          </article>
        </FadeUp>

        <StaggerGrid className="feature-list">
          {rows.map((r) => (
            <StaggerItem key={r.group} className={r.bank ? "feature-item feature-item--wide" : "feature-item"}>
              <article className={`feature-row${r.bank ? " bank-row" : ""}`}>
                <div className="feature-icon" aria-hidden={r.bank ? undefined : true}>{r.icon}</div>
                <div>
                  <span>{r.group}</span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
