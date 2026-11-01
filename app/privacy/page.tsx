import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — NextDoorStep",
  description: "How NextDoorStep collects, uses and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="legal-inner">
        <div className="legal-draft-banner">
          <strong>Draft — to be reviewed.</strong> This document has not yet been reviewed by legal counsel. Do not treat it as final.
        </div>

        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="legal-meta">Last updated: [Date to be confirmed] · Version 0.1 — Draft</p>

        <div className="legal-body">
          <h2>1. Who we are</h2>
          <p>
            NextDoorStep ("we", "our", "us") is a real estate services company operating under RERA registration
            {" "}<strong>[RERA number to be confirmed]</strong>. Our registered office is at {"{address to be confirmed}"}.
          </p>

          <h2>2. What data we collect</h2>
          <p>
            When you submit an enquiry on our website, we collect:
          </p>
          <ul>
            <li>Name (optional)</li>
            <li>Phone number and/or email address</li>
            <li>Property interest, location preference, and budget range</li>
            <li>Any additional notes you choose to include</li>
          </ul>
          <p>
            We also collect standard server logs (IP address, browser type, referring URL) through our hosting provider.
            We do not currently use third-party analytics or advertising trackers.
          </p>

          <h2>3. How we use your data</h2>
          <p>We use the data you provide solely to:</p>
          <ul>
            <li>Respond to your enquiry and match you with relevant properties or services</li>
            <li>Follow up on open conversations</li>
            <li>Send transactional messages related to your enquiry (no marketing lists without your consent)</li>
          </ul>

          <h2>4. How we store your data</h2>
          <p>
            Enquiry data is stored in a secured Google Sheet accessible only to the NextDoorStep team. We do not
            sell, rent or share your data with third parties for marketing purposes.
          </p>

          <h2>5. Retention</h2>
          <p>
            We retain enquiry data for up to [period to be confirmed] after the last interaction, after which it is
            deleted or anonymised.
          </p>

          <h2>6. Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data by writing to us at{" "}
            <a href="mailto:support@nextdoorstep.in">support@nextdoorstep.in</a>. We will respond within [timeframe
            to be confirmed].
          </p>

          <h2>7. Cookies</h2>
          <p>
            Our website uses no tracking cookies. We may use essential session cookies for form functionality only.
          </p>

          <h2>8. Changes to this policy</h2>
          <p>
            We will update this page if our practices change. The "Last updated" date above will reflect the most
            recent revision.
          </p>

          <h2>9. Contact</h2>
          <p>
            Questions about this policy? Write to us at{" "}
            <a href="mailto:support@nextdoorstep.in">support@nextdoorstep.in</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
