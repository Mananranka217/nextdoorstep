"use client";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerGrid, StaggerItem } from "@/components/ui/Stagger";

const steps = [
  {
    num: "01",
    time: "Same day",
    title: "Tell us what you need",
    body: "Fill the form or chat on WhatsApp. Share your area, budget, and timeline — one conversation, no call centre.",
  },
  {
    num: "02",
    time: "Within 48 hours",
    title: "We shortlist and match",
    body: "We go through our active inventory and verified listings, then share a focused shortlist — only what actually fits.",
  },
  {
    num: "03",
    time: "Your pace",
    title: "Visits, paperwork, done",
    body: "We coordinate visits, handle negotiations, and manage documentation end to end — from agreement to handover.",
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw-section" aria-labelledby="hiw-title">
      <SectionHeader
        id="hiw-title"
        eyebrow="How it works"
        title="Three steps,"
        accent="no surprises."
        sub="The same process for every client — whether you are renting, buying, or listing."
      />
      <StaggerGrid className="hiw-steps">
        {steps.map((s) => (
          <StaggerItem key={s.num}>
            <div className="hiw-step" style={{ height: "100%" }}>
              <div className="hiw-step-top">
                <span className="hiw-num">{s.num}</span>
                <span className="hiw-time">{s.time}</span>
              </div>
              <h3 className="hiw-title">{s.title}</h3>
              <p className="hiw-body">{s.body}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
