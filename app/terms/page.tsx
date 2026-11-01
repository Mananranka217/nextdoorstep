import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — NextDoorStep",
  description: "Terms governing use of NextDoorStep's website and real estate services.",
};

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="legal-inner">
        <div className="legal-draft-banner">
          <strong>Draft — to be reviewed.</strong> This document has not yet been reviewed by legal counsel. Do not treat it as final.
        </div>

        <p className="eyebrow">Legal</p>
        <h1>Terms of Service</h1>
        <p className="legal-meta">Last updated: [Date to be confirmed] · Version 0.1 — Draft</p>

        <div className="legal-body">
          <h2>1. About these terms</h2>
          <p>
            These terms govern your use of the NextDoorStep website (nextdoorstep.in) and the services we provide.
            By using this site or submitting an enquiry, you agree to these terms.
          </p>

          <h2>2. Services</h2>
          <p>
            NextDoorStep provides real estate brokerage and advisory services for residential rental and resale
            in East Bengaluru. We are registered under RERA{" "}
            <strong>[RERA number to be confirmed]</strong>.
          </p>

          <h2>3. Enquiries and engagements</h2>
          <p>
            Submitting an enquiry on this website is not a binding contract. A formal engagement begins only when
            both parties have agreed in writing to the terms of a specific service.
          </p>

          <h2>4. Fees</h2>
          <p>
            Service fees are as set out on the pricing pages of this website. Fees are payable only on completion
            of the relevant service milestone (e.g., tenant onboarding, successful purchase). All stated fees
            exclude GST unless otherwise noted. GST is applicable at the prevailing rate.
          </p>

          <h2>5. Accuracy of information</h2>
          <p>
            We strive to keep property information accurate, but we do not guarantee the completeness or
            accuracy of listings, prices or availability. You should independently verify all material information
            before making any decision.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            To the extent permitted by law, NextDoorStep's liability for any claim arising from our services is
            limited to the fees paid by you for that specific service. We are not liable for indirect, consequential
            or incidental losses.
          </p>

          <h2>7. Governing law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be subject to the exclusive
            jurisdiction of courts in Bengaluru, Karnataka.
          </p>

          <h2>8. Changes to terms</h2>
          <p>
            We may update these terms. The "Last updated" date above will reflect the current version. Continued
            use of our services after changes constitutes acceptance.
          </p>

          <h2>9. Contact</h2>
          <p>
            Questions about these terms? Write to us at{" "}
            <a href="mailto:support@nextdoorstep.in">support@nextdoorstep.in</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
