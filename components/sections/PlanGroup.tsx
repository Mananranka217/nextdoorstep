import Link from "next/link";
import type { ReactNode } from "react";
import { nexusPackages } from "@/content/nexusPackages";

function GroupHead({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="plans-group-head">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

/** Resale / Nexus packages shown on the pricing page. */
export function ResalePlanGroup() {
  return (
    <div className="plans-group">
      <GroupHead title="Resale packages (Nexus)">
        For resale buyers and sellers, delivered by{" "}
        <Link className="who-inline-link" href="/nexus">
          NextDoorStep Nexus
        </Link>
        .
      </GroupHead>
      <div className="plans-grid">
        {nexusPackages.map((p) => (
          <article className={`plan-card${p.featured ? " plan-card--featured" : ""}`} key={p.short}>
            {p.featured && <span className="plan-badge">Most Popular</span>}
            <h4 className="plan-name">{p.short}</h4>
            <p className="plan-price">
              {p.price}
              <small>excl. GST</small>
            </p>
            <ul className="who-list">
              {p.features.slice(0, 4).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link className="who-cta" href="/nexus#enquiry">
              Start with {p.short}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
