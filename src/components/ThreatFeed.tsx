import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

type FeedItem = {
  time: string;
  severity: "low" | "med" | "high" | "info";
  source: string;
  message: string;
};

const SEED: Omit<FeedItem, "time">[] = [
  { severity: "info", source: "QRadar", message: "Correlation rule synced · 142 offenses reviewed" },
  { severity: "low", source: "Cortex XDR", message: "Endpoint heartbeat normal · 2,418 hosts" },
  { severity: "med", source: "Qualys VMDR", message: "New CVE-2024-31497 prioritized · patch SLA 7d" },
  { severity: "high", source: "FortiEDR", message: "Suspicious LSASS access blocked on WS-04127" },
  { severity: "info", source: "Netskope", message: "DLP policy updated · 3 exceptions reviewed" },
  { severity: "med", source: "MIST", message: "AP roaming anomaly · ECSS-Bldg2 · auto-resolved" },
  { severity: "low", source: "Cyware", message: "Threat intel feed enriched · 87 IOCs ingested" },
  { severity: "high", source: "MDR", message: "Brute-force pattern triaged · escalated to L2" },
];

function nowStamp() {
  const d = new Date();
  return d.toLocaleTimeString("en-US", { hour12: false });
}

const sevStyles: Record<FeedItem["severity"], string> = {
  info: "text-cyan border-cyan/40 bg-cyan/5",
  low: "text-emerald-300 border-emerald-300/40 bg-emerald-300/5",
  med: "text-amber-300 border-amber-300/40 bg-amber-300/5",
  high: "text-rose-400 border-rose-400/40 bg-rose-400/5",
};

export function ThreatFeed() {
  const [items, setItems] = useState<FeedItem[]>(() =>
    SEED.slice(0, 5).map((s) => ({ ...s, time: nowStamp() })),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setItems((prev) => {
        const next = SEED[Math.floor(Math.random() * SEED.length)];
        return [{ ...next, time: nowStamp() }, ...prev].slice(0, 6);
      });
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass corner-frame rounded-lg p-4 font-mono text-xs">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
        <div className="flex items-center gap-2 text-neon">
          <Activity className="h-3.5 w-3.5 animate-pulse-glow rounded-full" />
          <span className="uppercase tracking-widest">Live Threat Feed</span>
        </div>
        <span className="text-muted-foreground">SOC · monitoring</span>
      </div>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li
            key={`${it.time}-${i}`}
            className="flex items-start gap-2 animate-fade-in-up"
          >
            <span className="text-muted-foreground shrink-0">{it.time}</span>
            <span
              className={`shrink-0 px-1.5 py-0.5 rounded border uppercase text-[10px] tracking-wider ${sevStyles[it.severity]}`}
            >
              {it.severity}
            </span>
            <span className="text-foreground/90 truncate">
              <span className="text-cyan">{it.source}</span>
              <span className="text-muted-foreground"> › </span>
              {it.message}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
