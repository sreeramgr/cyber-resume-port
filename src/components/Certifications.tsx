import { BadgeCheck, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./About";

const CERTS = [
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", code: "CEH" },
  { name: "Certificate of Cloud Security Knowledge v4", issuer: "CSA", code: "CCSK" },
  { name: "Cortex XDR Support Engineer", issuer: "Palo Alto Networks", code: "PCXSE" },
  { name: "Certified FortiEDR Analyst", issuer: "Fortinet", code: "FCFE" },
  { name: "Google Cybersecurity Certificate", issuer: "Google", code: "GCC" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          tag="04 · Credentials"
          title="Certifications"
          description="Validated training across offensive testing, cloud, endpoint and SOC tooling."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((c) => (
            <article
              key={c.name}
              className="reveal relative glass rounded-xl p-6 hover-lift overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-neon/10 blur-2xl" />
              <div className="flex items-start justify-between gap-3">
                <div className="h-12 w-12 grid place-items-center rounded-lg border border-cyan/40 bg-cyan/10 text-cyan">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neon border border-neon/40 rounded px-2 py-1">
                  {c.code}
                </span>
              </div>
              <h3 className="mt-5 font-semibold leading-snug">{c.name}</h3>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <BadgeCheck className="h-3.5 w-3.5 text-neon" /> {c.issuer}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
