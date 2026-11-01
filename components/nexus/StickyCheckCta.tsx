"use client";

import { useEffect, useState } from "react";
import { Arrow } from "@/components/owners/icons";

/** Desktop-only pill that keeps "Check My Documents" in reach once the hero has scrolled away. */
export default function StickyCheckCta() {
  const [scrolled, setScrolled] = useState(false);
  const [atForm, setAtForm] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const form = document.getElementById("enquiry");
    const io = form ? new IntersectionObserver(([e]) => setAtForm(e.isIntersecting), { threshold: 0.15 }) : null;
    if (form && io) io.observe(form);
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const show = scrolled && !atForm;
  return (
    <a className={`sticky-cta${show ? " is-visible" : ""}`} href="#enquiry" tabIndex={show ? 0 : -1} aria-hidden={!show}>
      Check My Documents
      <span className="sticky-cta-arrow"><Arrow /></span>
    </a>
  );
}
