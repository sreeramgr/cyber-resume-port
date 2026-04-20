import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-md border border-neon/40 bg-neon/10">
            <Shield className="h-4 w-4 text-neon" />
          </div>
          <div>
            <div className="font-semibold">Sreeram G Ramesh</div>
            <div className="font-mono text-xs text-muted-foreground">
              Cybersecurity · UT Dallas
            </div>
          </div>
        </div>

        <div className="text-center font-mono text-xs text-muted-foreground">
          <span className="text-neon">›</span> built with intent · monitored · secured
        </div>

        <div className="md:text-right font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} · All systems nominal
        </div>
      </div>
    </footer>
  );
}
