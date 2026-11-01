"use client";
import SectionHeader from "@/components/ui/SectionHeader";
import NexusPackageGrid from "@/components/sections/NexusPackageCard";

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
      <NexusPackageGrid />
    </section>
  );
}
