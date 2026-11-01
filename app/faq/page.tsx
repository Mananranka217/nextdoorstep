import type { Metadata } from "next";
import FaqGroups from "@/components/sections/FaqGroups";
import EnquirySection from "@/components/sections/EnquirySection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "FAQ: Rentals, Pricing, Documentation and Nexus",
  description:
    "Answers on tenant placement, pricing, documents for selling, Nexus registration and transfers, and how to reach NextDoorStep.",
};

export default function FaqPage() {
  return (
    <>
      <section className="faq-section" aria-labelledby="faq-title">
        <SectionHeader
          id="faq-title"
          eyebrow="Questions"
          title="Good to"
          accent="know."
          sub="Short answers to what people ask us most. Anything else, message us."
        />
        <FaqGroups />
      </section>
      <EnquirySection />
    </>
  );
}
