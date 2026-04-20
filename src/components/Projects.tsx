import { FileSearch, Lock, Mail, ShieldCheck, KeyRound, Users } from "lucide-react";
import { SectionHeader } from "./About";

const CONTROLS = [
  { icon: KeyRound, label: "MFA" },
  { icon: Users, label: "RBAC" },
  { icon: ShieldCheck, label: "Privileged Account Separation" },
  { icon: Mail, label: "Email Filtering" },
  { icon: FileSearch, label: "Logging & Monitoring" },
  { icon: Lock, label: "FERPA-Aligned Controls" },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          tag="05 · Research"
          title="Featured Academic Work"
          description="Going beyond operations — applying cybersecurity thinking to real policy problems."
        />

        <article className="reveal glass-strong corner-frame rounded-2xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent" />

          <div className="relative grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">
                Research · Policy · Risk
              </div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight gradient-text">
                Strengthening Cybersecurity Baselines for Small K-12 Educational
                Organizations Under FERPA Constraints
              </h3>

              <p className="mt-5 text-foreground/85 leading-relaxed">
                Research focused on helping small K-12 schools prioritize cybersecurity
                controls under limited budget and staffing. Examined recurring themes
                including phishing exposure, weak authentication, privilege misuse,
                monitoring gaps, and FERPA-aligned protections for student data.
              </p>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                Evaluated practical, high-leverage controls schools can deploy now —
                connecting cybersecurity risk, regulatory requirements, and on-the-ground
                operational reality into a clear set of recommendations.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wider">
                {["FERPA", "K-12", "Risk Prioritization", "Identity", "Monitoring", "Policy"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded border border-cyan/40 text-cyan bg-cyan/5"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-xl border border-border/60 bg-surface/60 p-5">
                <div className="font-mono text-xs uppercase tracking-widest text-neon mb-4">
                  Controls Evaluated
                </div>
                <ul className="space-y-2.5">
                  {CONTROLS.map((c) => (
                    <li key={c.label} className="flex items-center gap-3 text-sm">
                      <c.icon className="h-4 w-4 text-cyan shrink-0" />
                      <span>{c.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
