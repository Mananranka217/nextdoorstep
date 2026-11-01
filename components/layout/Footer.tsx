import Link from "next/link";
import { footerNav } from "@/content/nav";
import { site, waLink } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <Link className="brand brand--footer" href="/" aria-label="NextDoorStep home">
              <img className="brand-logo" src="/assets/logo-clean-light.svg" alt="NextDoorStep" />
            </Link>
          </div>
          <p>
            East Bengaluru&apos;s dedicated resale and rental desk — connecting serious buyers, tenants, and owners
            across the city&apos;s most active residential pockets.
          </p>
          <a className="footer-wa" href={waLink()} target="_blank" rel="noopener">
            <WhatsAppIcon size={15} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="footer-col">
          <strong>Explore</strong>
          <nav className="footer-nav">
            {footerNav.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <strong>Contact</strong>
          <address>
            <span>{site.address}</span>
            <a href={waLink()}>WhatsApp / Call &nbsp;{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>
      </div>

      <div className="footer-rera">
        <span className="rera-badge">RERA Registered</span>
        <span className="rera-number">{site.rera}</span>
        <span className="footer-copy">&copy; {new Date().getFullYear()} NextDoorStep. All rights reserved.</span>
      </div>
    </footer>
  );
}
