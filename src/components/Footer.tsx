const links = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#annotations", label: "Annotations" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#partner", label: "Partner" },
  { href: "#contributor", label: "Contribute" },
];

export default function Footer() {
  return (
    <footer className="px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <p className="font-black text-ink">
          QUBE <span className="font-normal text-muted">— India&apos;s physical AI data collection company</span>
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-muted">
          <span>Srijan</span>
          <span>·</span>
          <a href="mailto:ldrago@0xqube.xyz" className="hover:text-orange transition-colors">
            ldrago@0xqube.xyz
          </a>
          <span>·</span>
          <a
            href="https://twitter.com/Srijan0x"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange transition-colors"
          >
            @Srijan0x
          </a>
        </div>
      </div>
    </footer>
  );
}
