import { Building2 } from "lucide-react";
import { SectionHeader } from "./About";

const ROLES = [
  {
    company: "The University of Texas at Dallas",
    role: "Student Employee · Network Technician",
    period: "Current",
    bullets: [
      "Support campus wired and Wi-Fi operations across UTD MIST infrastructure.",
      "Troubleshoot access points and resolve connectivity tickets in Team Dynamix.",
      "Assist with Juniper switch and router deployment, VLAN validation, and port checks.",
      "Help drive stable rollouts across high-density campus environments.",
    ],
    tags: ["Mist", "Juniper", "VLAN", "Team Dynamix"],
  },
  {
    company: "Tavant Technologies",
    role: "Cybersecurity Intern",
    period: "Internship",
    bullets: [
      "Supported Qualys VMDR vulnerability assessments — onboarded assets, scheduled scans, reviewed findings.",
      "Correlated findings across SIEM platforms to improve remediation context.",
      "Assisted with Netskope policy configuration and exception governance.",
      "Supported XDR-related protection rules, access controls, and domain exceptions.",
    ],
    tags: ["Qualys VMDR", "SIEM", "Netskope", "XDR"],
  },
  {
    company: "NTT DATA",
    role: "Associate Information Security Analyst",
    period: "Full-time",
    bullets: [
      "Performed initial triage and validation of security alerts in MDR workflows.",
      "Reduced false positives by ~35–40% through tuning and correlation review.",
      "Improved response efficiency by ~20–30% by following SOC playbooks and escalation procedures.",
      "Monitored and validated DDoS alerts and escalated confirmed incidents to L2.",
    ],
    tags: ["SOC", "MDR", "Triage", "DDoS", "Playbooks"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          tag="02 · Experience"
          title="Operations · Analysis · Response"
          description="A timeline of hands-on roles across security operations and network engineering."
        />

        <div className="relative pl-6 md:pl-10">
          {/* timeline rail */}
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon/60 via-cyan/40 to-transparent" />

          <ol className="space-y-8">
            {ROLES.map((r, i) => (
              <li key={r.company} className="reveal relative">
                {/* node */}
                <div className="absolute -left-6 md:-left-10 top-6 h-3.5 w-3.5 rounded-full bg-neon glow-neon">
                  <span className="absolute inset-0 rounded-full animate-ping bg-neon opacity-40" />
                </div>

                <article className="glass corner-frame rounded-xl p-6 md:p-7 hover-lift">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-widest">
                        <Building2 className="h-3.5 w-3.5" /> {r.company}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mt-1">
                        {r.role}
                      </h3>
                    </div>
                    <div className="text-right font-mono text-xs text-neon">
                      <div>{r.period}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm md:text-[15px] text-foreground/85">
                    {r.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {r.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] uppercase tracking-wider px-2 py-1 rounded border border-neon/30 text-neon/90 bg-neon/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
                {/* index */}
                <span className="absolute -left-1 md:-left-3 -top-2 font-mono text-[10px] text-muted-foreground">
                  0{i + 1}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
