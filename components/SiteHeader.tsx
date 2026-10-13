"use client";

import { useState } from "react";

const links = [
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Process", "#process"],
  ["FAQ", "#faq"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="concept-strip">AN DIGITAL STUDIO CONCEPT WEBSITE · FICTIONAL BUSINESS CONTENT ONLY</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RidgeCraft Roofing home">
          <span className="brand-mark">RC</span>
          <span>
            <strong>RIDGECRAFT</strong>
            <small>ROOFING · CONCEPT</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a className="nav-cta" href="#quote">Request a quote</a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#quote" onClick={() => setOpen(false)}>Request a quote</a>
        </nav>
      )}
    </>
  );
}
