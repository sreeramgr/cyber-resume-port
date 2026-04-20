import { GraduationCap, ShieldCheck, Network, Radar } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Network, label: "Campus Network Ops" },
  { icon: ShieldCheck, label: "Vulnerability Assessments" },
  { icon: Radar, label: "SIEM Analysis" },
  { icon: ShieldCheck, label: "SOC Alert Triage" },
  { icon: Network, label: "Endpoint & Cloud Security" },
];

export function SectionHeader({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 reveal">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan mb-2">
        <span className="text-neon">//</span> {tag}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {description && (
        <p className="mt-3 text-muted-foreground max-w-2xl">{description}</p>
      )}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader tag="01 · About" title="Operator. Analyst. Defender." />

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 reveal">
            <div className="glass corner-frame rounded-xl p-6 md:p-8 leading-relaxed text-foreground/90">
              <p className="mb-4">
                I'm a cybersecurity professional pursuing a{" "}
                <span className="text-neon font-medium">
                  Master of Science in Cybersecurity, Technology & Policy
                </span>{" "}
                at The University of Texas at Dallas. I work where security operations
                meet network reality — investigating alerts, validating findings, and
                helping teams respond to incidents with clarity.
              </p>
              <p className="mb-4">
                My background spans SOC alert triage in MDR workflows, vulnerability
                management with Qualys VMDR, SIEM correlation in IBM QRadar, and
                endpoint protection across Palo Alto Cortex XDR and Fortinet FortiEDR.
                I've also supported large-scale campus network operations on Juniper
                and Mist infrastructure.
              </p>
              <p>
                I care about reducing noise, prioritizing what matters, and building
                playbooks that hold up under pressure.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 reveal">
            <div className="glass-strong rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-cyan">
                <GraduationCap className="h-4 w-4" /> Currently Focused On
              </div>
              <ul className="space-y-3">
                {HIGHLIGHTS.map((h) => (
                  <li
                    key={h.label}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border/60 hover-lift"
                  >
                    <div className="h-9 w-9 grid place-items-center rounded-md bg-neon/10 border border-neon/30">
                      <h.icon className="h-4 w-4 text-neon" />
                    </div>
                    <span className="text-sm">{h.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
