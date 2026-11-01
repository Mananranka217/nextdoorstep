import type { Metadata } from "next";
import EnquirySection from "@/components/sections/EnquirySection";
import { site, waLink } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact NextDoorStep — Reach Us in East Bengaluru",
  description:
    "Call, WhatsApp or write to us. We're available for resale, rental and Nexus enquiries across East Bengaluru.",
};

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>We&apos;re here to help.</h1>
        <p className="contact-hero-sub">
          Call or WhatsApp us directly — or fill the form below and we&apos;ll get back to you within a few hours.
        </p>
      </section>

      <section className="contact-details-section">
        <div className="contact-details-grid">
          <div className="contact-card">
            <span className="contact-card-icon"><MapPinIcon /></span>
            <div>
              <p className="contact-card-label">Office</p>
              <p className="contact-card-value">{site.address}</p>
              <a
                className="contact-card-link"
                href="https://maps.google.com/?q=NextDoorStep+Bommanahalli+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-card-icon"><PhoneIcon /></span>
            <div>
              <p className="contact-card-label">Phone</p>
              <a className="contact-card-value contact-card-link" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
              <a
                className="contact-card-wa"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={15} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-card-icon"><MailIcon /></span>
            <div>
              <p className="contact-card-label">Email</p>
              <a className="contact-card-value contact-card-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-card-icon"><ClockIcon /></span>
            <div>
              <p className="contact-card-label">Hours</p>
              <p className="contact-card-value">Mon – Sat, 9 AM – 7 PM</p>
              <p className="contact-card-note">WhatsApp responses outside hours may be delayed.</p>
            </div>
          </div>
        </div>

        <div className="contact-rera">
          <p className="contact-rera-text">
            <strong>RERA Registration:</strong> {site.rera}
          </p>
        </div>
      </section>

      <EnquirySection />
    </>
  );
}
