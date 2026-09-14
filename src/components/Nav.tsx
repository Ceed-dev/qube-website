"use client";

import { useState } from "react";

const links = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#annotations", label: "Annotations" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#partner", label: "Partner With Us" },
  { href: "#contributor", label: "Become a Contributor" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-divider">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-black tracking-tight text-ink">
          QUBE
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-ink block" />
          <span className="w-6 h-0.5 bg-ink block" />
          <span className="w-6 h-0.5 bg-ink block" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-divider bg-bg px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink/80 hover:text-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
