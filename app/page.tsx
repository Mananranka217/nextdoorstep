import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import HomeAudience from "@/components/sections/HomeAudience";
import HowItWorks from "@/components/sections/HowItWorks";
import NexusBand from "@/components/sections/NexusBand";
import SampleCard from "@/components/sections/SampleCard";
import TrustProof from "@/components/sections/TrustProof";
import BuilderStrip from "@/components/sections/BuilderStrip";
import AreasMarquee from "@/components/sections/AreasMarquee";
import FaqGroups from "@/components/sections/FaqGroups";
import EnquirySection from "@/components/sections/EnquirySection";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/content/testimonials";
import { builders } from "@/content/builders";

const hasRealTestimonials = testimonials.some((t) => !t.quote.startsWith("["));
const hasRealBuilders = builders.some((b) => !b.name.startsWith("["));

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeAudience />
      <Intro />
      <HowItWorks />
      <NexusBand />
      <SampleCard />
      <TrustProof />
      {hasRealBuilders && <BuilderStrip />}
      <AreasMarquee />
      {hasRealTestimonials && (
        <section className="voices-section" id="testimonials" aria-labelledby="voices-title">
          <SectionHeader id="voices-title" eyebrow="In their words" title="What clients" accent="say." />
        </section>
      )}
      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <SectionHeader
          id="faq-title"
          eyebrow="FAQ"
          title="Frequently asked"
          accent="questions."
          sub="Everything you need to know about our services."
        />
        <FaqGroups />
      </section>
      <EnquirySection />
    </>
  );
}
