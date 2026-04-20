import { Download, Eye, FileText } from "lucide-react";
import { SectionHeader } from "./About";

export function Resume() {
  return (
    <section id="resume" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader tag="06 · Document" title="Full Resume" />

        <div className="reveal relative overflow-hidden glass-strong rounded-2xl p-8 md:p-12">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div
            className="absolute left-0 right-0 h-12 bg-gradient-to-b from-neon/30 to-transparent pointer-events-none"
            style={{ animation: "scan 6s linear infinite" }}
          />

          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-44 h-56 rounded-md border border-neon/40 bg-surface/80 shadow-[0_30px_80px_-20px_rgba(110,255,200,0.35)] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neon to-cyan" />
                <div className="p-4 space-y-2">
                  <div className="h-2 w-3/4 bg-foreground/30 rounded" />
                  <div className="h-1.5 w-1/2 bg-cyan/60 rounded" />
                  <div className="mt-3 space-y-1.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-1 bg-foreground/15 rounded"
                        style={{ width: `${60 + ((i * 7) % 35)}%` }}
                      />
                    ))}
                  </div>
                </div>
                <FileText className="absolute bottom-3 right-3 h-5 w-5 text-neon/70" />
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="font-mono text-xs uppercase tracking-widest text-cyan mb-2">
                resume.pdf
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                The full briefing — everything in one document.
              </h3>
              <p className="text-muted-foreground max-w-xl">
                Download my full resume for detailed experience, certifications, and
                technical background across SOC, vulnerability management, and network
                operations.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center gap-2 rounded-md bg-neon px-5 py-3 font-mono text-sm uppercase tracking-wider text-primary-foreground glow-neon hover:brightness-110 transition"
                >
                  <Download className="h-4 w-4" /> Download PDF
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-cyan/50 px-5 py-3 font-mono text-sm uppercase tracking-wider text-cyan hover:bg-cyan/10 transition"
                >
                  <Eye className="h-4 w-4" /> View Online
                </a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 max-w-md font-mono text-[11px]">
                {[
                  { k: "Format", v: "PDF" },
                  { k: "Pages", v: "1" },
                  { k: "Updated", v: "2025" },
                ].map((s) => (
                  <div key={s.k} className="rounded-md border border-border bg-surface/40 px-3 py-2">
                    <div className="text-muted-foreground uppercase tracking-widest text-[10px]">
                      {s.k}
                    </div>
                    <div className="text-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
