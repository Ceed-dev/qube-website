import Link from "next/link";
import Reveal from "./motion/Reveal";
import Logo from "./Logo";

const links = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/annotations", label: "Annotations" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/partner", label: "Partner" },
  { href: "/contribute", label: "Contribute" },
];

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-divider">
      <Reveal y={16} className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Logo variant="ink" size={20} />
          <span className="text-muted font-normal hidden sm:inline">
            — India&apos;s physical AI data collection company
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted hover:text-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Reveal>
    </footer>
  );
}
