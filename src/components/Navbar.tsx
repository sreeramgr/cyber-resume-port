import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Shield, Menu, X } from "lucide-react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certs" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass-strong glow-cyan" : "glass"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 grid place-items-center rounded-md border border-neon/40 bg-neon/10">
              <Shield className="h-4 w-4 text-neon" />
              <span className="absolute inset-0 rounded-md animate-pulse-glow" />
            </div>
            <div className="leading-tight">
              <div className="font-mono text-xs text-cyan tracking-widest">SGR.SEC</div>
              <div className="font-semibold text-sm">Sreeram G Ramesh</div>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1 font-mono text-xs">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-neon hover:bg-neon/5 transition-colors uppercase tracking-wider"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center font-mono text-xs uppercase tracking-wider px-3 py-2 rounded-md border border-neon/50 text-neon hover:bg-neon hover:text-primary-foreground transition-colors"
          >
            Hire Me
          </a>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3 animate-fade-in-up">
            <ul className="grid gap-1 font-mono text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md text-muted-foreground hover:text-neon hover:bg-neon/5 uppercase tracking-wider"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
