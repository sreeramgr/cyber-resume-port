import { ArrowRight, Download, MapPin, Terminal } from "lucide-react";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { CyberCanvas } from "./CyberCanvas";
import { RotatingText } from "./RotatingText";
import { ThreatFeed } from "./ThreatFeed";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg animate-grid-drift pointer-events-none" />
      <CyberCanvas className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />
      <div className="absolute inset-0 scanlines pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 reveal">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-cyan mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-neon animate-ping opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
            </span>
            System Online · Open to Opportunities
          </div>

          <p className="font-mono text-xs text-muted-foreground mb-3">
            <span className="text-neon">$</span> whoami
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-5">
            <span className="block text-foreground">Sreeram G Ramesh</span>
            <span className="block gradient-text mt-1">
              Defending systems. Investigating threats.
            </span>
            <span className="block text-foreground/80 text-2xl md:text-3xl mt-2 font-medium">
              Strengthening cyber resilience.
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-4">
            Cybersecurity graduate student at <span className="text-foreground">UT Dallas</span>{" "}
            with hands-on experience across SOC operations, vulnerability management,
            network operations, endpoint security, and incident triage.
          </p>

          <div className="font-mono text-sm mb-8 h-6">
            <span className="text-muted-foreground">› focus_area: </span>
            <RotatingText />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#resume"
              className="group inline-flex items-center gap-2 rounded-md bg-neon px-5 py-3 font-mono text-sm uppercase tracking-wider text-primary-foreground glow-neon hover:brightness-110 transition"
            >
              View Resume
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-cyan/50 px-5 py-3 font-mono text-sm uppercase tracking-wider text-cyan hover:bg-cyan/10 transition"
            >
              <Terminal className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-foreground/40 transition"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-neon" /> Richardson, TX
            </span>
            <span>MS · Cybersecurity, Technology & Policy</span>
            <span className="text-cyan">UT Dallas</span>
          </div>
        </div>

        <div className="lg:col-span-5 reveal animate-float">
          <ThreatFeed />
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[
              { k: "SIEM", v: "QRadar" },
              { k: "EDR", v: "Cortex" },
              { k: "VMDR", v: "Qualys" },
            ].map((s) => (
              <div
                key={s.k}
                className="glass rounded-lg p-3 text-center hover-lift"
              >
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  {s.k}
                </div>
                <div className="font-semibold text-cyan">{s.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between glass rounded-lg px-3 py-2 font-mono text-[11px] text-muted-foreground">
            <span>uptime</span>
            <span className="text-neon">99.98%</span>
            <span>alerts/24h</span>
            <span className="text-cyan">1,284</span>
            <span>region</span>
            <span className="text-foreground">DFW</span>
          </div>
          <a
            href="/resume.pdf"
            className="mt-3 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-neon"
          >
            <Download className="h-3.5 w-3.5" /> resume.pdf · 1 page
          </a>
        </div>
      </div>
    </section>
  );
}
