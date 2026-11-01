"use client";
import Link from "next/link";
import { nexusPackages } from "@/content/nexusPackages";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";

export default function NexusBand() {
  return (
    <section className="nexus-band" aria-labelledby="nexus-band-title">
      <SectionHeader
        id="nexus-band-title"
        eyebrow="NextDoorStep Nexus"
        title="Resale paperwork,"
        accent="handled properly."
        sub="Most resale problems come from document issues nobody checked upfront. Nexus does the checks, handles registration, and transfers ownership — so you close with confidence."
      />

      <StaggerGrid className="nexus-pkg-grid">
        {nexusPackages.map((pkg) => (
          <StaggerItem key={pkg.short}>
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
              <Link
                className={`nexus-pkg-cta${pkg.featured ? " nexus-pkg-cta--featured" : ""}`}
                href="/nexus#enquiry"
              >
                {pkg.cta}
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
