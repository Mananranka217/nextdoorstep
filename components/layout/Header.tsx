"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type FocusEvent } from "react";
import { mainNav, nexusServices } from "@/content/nav";
import { nexusPackages } from "@/content/nexusPackages";
import { site, waLink } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/Icons";
import TickerBar from "@/components/layout/TickerBar";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // open: dropdown opened by click/tap. closed: dropdown forced shut (after a click, Escape or
  // outside click) until the pointer leaves it, so :hover can't keep it showing. "*" means all.
  const [open, setOpen] = useState<string | null>(null);
  const [closed, setClosed] = useState<string | null>(null);
  const featured = nexusPackages.find((p) => p.featured);
  const nexusActive = pathname === "/nexus";
  // Home and owners pages: header floats transparent over the hero until the page scrolls.
  const overHero = (pathname === "/" || pathname === "/owners") && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(null);
      setClosed("*");
    };
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (!(e.target as Element).closest(".nav-item.has-dropdown")) {
        setOpen(null);
        setClosed("*");
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const closeDropdown = (id: string) => {
    setOpen(null);
    setClosed(id);
  };
  const toggleDropdown = (id: string) => {
    if (open === id) {
      setOpen(null);
      setClosed(id);
    } else {
      setOpen(id);
      setClosed(null);
    }
  };
  // Props shared by every dropdown wrapper
  const itemProps = (id: string) => ({
    className: `nav-item has-dropdown${open === id ? " is-open" : ""}${closed === id || closed === "*" ? " is-closed" : ""}`,
    onMouseLeave: () => setClosed(null),
    onFocus: (e: FocusEvent) => {
      if ((e.target as Element).matches(":focus-visible")) setClosed(null);
    },
  });
  const linkClass = (href: string) => `nav-link${pathname === href ? " active" : ""}`;

  return (
    <>
    {pathname === "/" && <TickerBar />}
    <header className={`site-header${scrolled ? " scrolled" : ""}${overHero ? " over-hero" : ""}`} id="siteHeader">
      <div className="nav-inner">
        <Link className="brand" href="/" aria-label="NextDoorStep home">
          <img className="brand-logo" src={overHero ? "/assets/logo-clean-light.svg" : "/assets/logo-clean.svg"} alt="NextDoorStep" />
        </Link>

        <nav className="top-nav" aria-label="Primary navigation">
          <Link className={linkClass("/")} href="/">Home</Link>

          {/* Owners dropdown */}
          <div {...itemProps("owners")}>
            <button
              className={`nav-dropdown-trigger${pathname.startsWith("/owners") ? " active" : ""}`}
              aria-haspopup="true"
              aria-expanded={open === "owners"}
              onClick={() => toggleDropdown("owners")}
            >
              Owners
              <svg className="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4.5l4 3 4-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="dropdown simple-dropdown">
              <div className="dropdown-panel">
                <Link className="simple-dd-link" href="/owners#rent" onClick={() => closeDropdown("owners")}><span className="simple-dd-dot" />Rent out my property</Link>
                <Link className="simple-dd-link" href="/owners#sell" onClick={() => closeDropdown("owners")}><span className="simple-dd-dot" />Sell my property</Link>
              </div>
            </div>
          </div>

          {/* Tenants & Buyers dropdown */}
          <div {...itemProps("tenants")}>
            <button
              className={`nav-dropdown-trigger${pathname.startsWith("/tenants") ? " active" : ""}`}
              aria-haspopup="true"
              aria-expanded={open === "tenants"}
              onClick={() => toggleDropdown("tenants")}
            >
              Tenants &amp; Buyers
              <svg className="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4.5l4 3 4-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="dropdown simple-dropdown">
              <div className="dropdown-panel">
                <Link className="simple-dd-link" href="/tenants-buyers#rent" onClick={() => closeDropdown("tenants")}><span className="simple-dd-dot" />Rent a home</Link>
                <Link className="simple-dd-link" href="/tenants-buyers#buy" onClick={() => closeDropdown("tenants")}><span className="simple-dd-dot" />Buy a home</Link>
              </div>
            </div>
          </div>

          <div {...itemProps("nexus")} data-page="nexus">
            <Link className={`nav-dropdown-trigger${nexusActive ? " active" : ""}`} href="/nexus" onClick={() => closeDropdown("nexus")}>
              Nexus
              <span className="nav-badge">Popular</span>
              <svg className="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4.5l4 3 4-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="dropdown nexus-dropdown">
              <div className="dropdown-panel">
                <div className="nexus-dd-grid">
                  <div>
                    <p className="dropdown-label">Nexus Services</p>
                    <div className="nexus-services-list">
                      {nexusServices.map((s) => (
                        <Link key={s.title} className="nexus-service-item" href="/nexus" onClick={() => closeDropdown("nexus")}>
                          <span className="service-dot" />
                          <div>
                            <strong>{s.title}</strong>
                            <span>{s.text}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {featured && (
                    <div className="nexus-featured-card">
                      <span className="featured-badge">Most Popular</span>
                      <strong>NextDoorStep Complete+</strong>
                      <p>
                        Full transaction management from token to ownership transfer — legal, registration, and all
                        post-purchase transfers.
                      </p>
                      <div className="featured-price">{featured.price}</div>
                      <Link className="featured-cta" href="/nexus#enquiry" onClick={() => closeDropdown("nexus")}>
                        Start with Nexus →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {mainNav.after.map((item) =>
            item.href.startsWith("#") ? (
              <a key={item.label} className="nav-link" href={item.href}>
                {item.label}
              </a>
            ) : (
              <Link key={item.label} className={linkClass(item.href)} href={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="nav-actions">
          <a className="nav-wa-btn" href={waLink()} target="_blank" rel="noopener">
            <WhatsAppIcon size={15} />
            WhatsApp
          </a>
          <a className="nav-cta" href="#enquiry">
            Get a Property Shortlist
          </a>
        </div>

        <button
          className={`nav-toggle${menuOpen ? " is-open" : ""}`}
          id="navToggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} id="mobileMenu" aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <div className="mobile-nav-group">
            <Link className="mobile-nav-link" href="/" onClick={closeMenu}>Home</Link>
            <Link className="mobile-nav-link" href="/owners#rent" onClick={closeMenu}>Rent out my property</Link>
            <Link className="mobile-nav-link" href="/owners#sell" onClick={closeMenu}>Sell my property</Link>
            <Link className="mobile-nav-link" href="/tenants-buyers#rent" onClick={closeMenu}>Rent a home</Link>
            <Link className="mobile-nav-link" href="/tenants-buyers#buy" onClick={closeMenu}>Buy a home</Link>
            <Link className="mobile-nav-link" href="/nexus" onClick={closeMenu}>
              Nexus
            </Link>
            {mainNav.after.map((item) =>
              item.href.startsWith("#") ? (
                <a key={item.label} className="mobile-nav-link" href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} className="mobile-nav-link" href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <div className="mobile-cta-group">
            <a className="mobile-wa-btn" href={waLink()} target="_blank" rel="noopener">
              <WhatsAppIcon size={17} />
              Chat on WhatsApp
            </a>
            <a className="mobile-book-btn" href="#enquiry" onClick={closeMenu}>
              Get a Property Shortlist
            </a>
          </div>
        </div>
      </div>
    </header>

    <div className="mobile-bar" aria-label="Quick contact">
      <a className="mobile-bar-call" href={`tel:${site.phoneTel}`}>
        <PhoneIcon />
        Call us
      </a>
      <a className="mobile-bar-wa" href={waLink()} target="_blank" rel="noopener">
        <WhatsAppIcon size={16} />
        Chat on WhatsApp
      </a>
    </div>
    </>
  );
}
