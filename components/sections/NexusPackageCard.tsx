"use client";

import Link from "next/link";
import { nexusPackages, type NexusPackage } from "@/content/nexusPackages";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";
import { Arrow } from "@/components/owners/icons";

export function NexusPackageCard({ pkg }: { pkg: NexusPackage }) {
  return (
    <div className={`nexus-pkg-card${pkg.featured ? " nexus-pkg-card--featured" : ""}`} style={{ height: "100%" }}>
      <div className="nexus-pkg-card-header">
        {pkg.featured && <span className="nexus-pkg-badge">Most Popular</span>}
        <p className="nexus-pkg-name">{pkg.short}</p>
        <p className="nexus-pkg-price">{pkg.price}</p>
        <p className="nexus-pkg-tagline">{pkg.tagline}</p>
      </div>
      <ul className="nexus-pkg-list">
        {pkg.features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <Link className={`nexus-pkg-cta${pkg.featured ? " nexus-pkg-cta--featured" : ""}`} href="/nexus#enquiry">
        {pkg.cta}
        <span className="nexus-pkg-arrow"><Arrow /></span>
      </Link>
    </div>
  );
}

/** The four Nexus packages, shared by the home page band and the tenants and buyers page. */
export default function NexusPackageGrid() {
  return (
    <StaggerGrid className="nexus-pkg-grid">
      {nexusPackages.map((pkg) => (
        <StaggerItem key={pkg.short}>
          <NexusPackageCard pkg={pkg} />
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
