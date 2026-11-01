import type { Metadata } from "next";
import FaqExplorer from "@/components/sections/FaqExplorer";
import EnquirySection from "@/components/sections/EnquirySection";
import RevealTitle from "@/components/ui/RevealTitle";
import { faqGroups } from "@/content/faqs";
import { faqPageJsonLd, jsonLdString } from "@/lib/faqSchema";

export const metadata: Metadata = {
  title: "FAQ: Rentals, Pricing, Documentation and Nexus",
  description:
    "Answers on tenant placement, pricing, documents for selling, Nexus registration and transfers, and how to reach NextDoorStep.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      {/* FAQPage structured data lives on this page only, so the home page FAQ does not compete with it. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(faqPageJsonLd(faqGroups)) }} />

      <section className="hx hx--page faq-hero" aria-labelledby="faq-title">
        <div className="hx-inner">
          <p className="hx-pill">
            <span className="hx-pill-dot" aria-hidden="true" />
            Questions
          </p>
          <RevealTitle id="faq-title" label="Good to know." lines={[{ words: ["Good", "to"] }, { words: ["know."], accent: true }]} />
          <p className="hx-text">Short answers to what people ask us most. Anything else, message us.</p>
        </div>
      </section>

      <FaqExplorer />
      <EnquirySection />
    </>
  );
}
