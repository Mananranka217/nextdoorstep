import type { FaqGroup } from "@/content/faqs";

/** Answers use <nexus>text</nexus> to mark a link to the Nexus page; structured data wants the plain text. */
export const stripNexus = (text: string) => text.replace(/<\/?nexus>/g, "");

/** schema.org FAQPage built from the FAQ groups. */
export function faqPageJsonLd(groups: FaqGroup[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) =>
      g.items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: stripNexus(i.a) },
      })),
    ),
  };
}

/** JSON for a <script type="application/ld+json">; "<" is escaped so answer text can never close the tag. */
export const jsonLdString = (data: unknown) => JSON.stringify(data).replace(/</g, "\u003c");
