import {
  ShieldAlert,
  Eye,
  Cpu,
  Cloud,
  Code2,
} from "lucide-react";
import { SectionHeader } from "./About";

const GROUPS = [
  {
    icon: ShieldAlert,
    title: "Security Operations",
    items: ["Incident Triage", "Alert Investigation", "Threat Hunting", "Log Analysis", "Playbook Execution"],
  },
  {
    icon: Eye,
    title: "SIEM & Monitoring",
    items: ["IBM QRadar", "Cyware", "Threat Intelligence", "Correlation Rules"],
  },
  {
    icon: Cpu,
    title: "Endpoint & Network Security",
    items: ["Palo Alto Cortex XDR", "Fortinet FortiEDR", "Juniper", "MIST", "VLAN / Switching"],
  },
  {
    icon: Cloud,
    title: "Cloud & Vulnerability",
    items: ["Qualys VMDR", "Netskope", "Vulnerability Management", "Access Controls"],
  },
  {
    icon: Code2,
    title: "Scripting & Platforms",
    items: ["Python", "Bash", "PowerShell", "Linux", "Windows"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          tag="03 · Capabilities"
          title="Skills & Toolkit"
          description="Categorized capabilities across the modern blue-team stack."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map((g) => (
            <div
              key={g.title}
              className="reveal glass corner-frame rounded-xl p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 grid place-items-center rounded-md bg-neon/10 border border-neon/40 text-neon">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">{g.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="font-mono text-xs px-2.5 py-1.5 rounded border border-border bg-surface/40 text-foreground/85 hover:border-cyan/60 hover:text-cyan transition-colors"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
