import type { Metadata } from "next";
import NexusHero from "@/components/nexus/NexusHero";
import NexusPricing from "@/components/nexus/NexusPricing";
import NexusTokens from "@/components/nexus/NexusTokens";
import NexusFeatures from "@/components/nexus/NexusFeatures";
import NexusTimeline from "@/components/nexus/NexusTimeline";
import NexusTrust from "@/components/nexus/NexusTrust";
import EnquirySection from "@/components/sections/EnquirySection";

export const metadata: Metadata = {
  title: "NextDoorStep Nexus: Resale Verification, Registration and Transfers",
  description:
    "Legal verification, registration support, khata, BESCOM and property tax transfers for Bengaluru resale homes, handled in one coordinated workflow.",
};

export default function NexusPage() {
  return (
    <>
      <NexusHero />
      <NexusPricing />
      <NexusTokens />
      <NexusFeatures />
      <NexusTimeline />
      <NexusTrust />
      <EnquirySection variant="nexus" />
    </>
  );
}
