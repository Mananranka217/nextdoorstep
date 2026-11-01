import EnquiryForm from "./EnquiryForm";
import { site, waLink } from "@/content/site";

type Props = { variant?: "general" | "nexus"; defaultRole?: string; defaultInterest?: string };

/** The dark enquiry band that ends every page. Navigation's "Contact" jumps here. */
export default function EnquirySection({ variant = "general", defaultRole, defaultInterest }: Props) {
  return (
    <section className="enquiry-section" id="enquiry">
      <div className="enquiry-copy">
        {variant === "nexus" ? (
          <>
            <p className="eyebrow">Get started</p>
            <h2>Tell us about the property.</h2>
            <p>
              Share your role, property location, and where you are in the process. We&apos;ll confirm the right
              Nexus service and reach out within a few hours — no back-and-forth, no guesswork.
            </p>
            <ul className="trust-list">
              <li>Available for buyers and sellers across all of Bengaluru</li>
              <li>One team from title check to final registration</li>
              <li>Follow-up within a few hours on WhatsApp or phone</li>
            </ul>
          </>
        ) : (
          <>
            <p className="eyebrow">Quick enquiry</p>
            <h2>Tell us what you need.</h2>
            <p>
              Looking to buy or rent a home in East Bengaluru? Own a property you want to sell or rent out? Share the
              basics and we will come back with the right next step — no listing spam, no listing walls.
            </p>
            <ul className="trust-list">
              <li>Resale and rentals across East Bengaluru</li>
              <li>For buyers, tenants, and property owners</li>
              <li>Direct follow-up within a few hours</li>
            </ul>
            <div className="enquiry-channels">
              <a href={waLink()} className="channel-link">
                <span className="channel-dot wa" />
                WhatsApp
              </a>
              <a href={`tel:${site.phoneTel}`} className="channel-link">
                <span className="channel-dot call" />
                Phone call
              </a>
              <a href={`mailto:${site.email}`} className="channel-link">
                <span className="channel-dot mail" />
                Email
              </a>
            </div>
          </>
        )}
      </div>

      <EnquiryForm variant={variant} defaultRole={defaultRole} defaultInterest={defaultInterest} />
    </section>
  );
}
