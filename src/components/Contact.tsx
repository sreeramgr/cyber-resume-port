import { useState } from "react";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { SectionHeader } from "./About";
import { openExternalLink } from "@/lib/openExternalLink";

export function Contact() {
  const [sent, setSent] = useState(false);
  const linkedinUrl = "https://www.linkedin.com/in/sreeram-gr/";

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          tag="07 · Connect"
          title="Let's Talk Security"
          description="Open to full-time opportunities in cybersecurity, security operations, and network defense."
        />

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 reveal space-y-4">
            <a
              href="mailto:sreeram.ramesh@utdallas.edu"
              className="flex items-center gap-4 glass rounded-xl p-5 hover-lift"
            >
              <div className="h-11 w-11 grid place-items-center rounded-md bg-neon/10 border border-neon/40 text-neon">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[11px] uppercase tracking-widest text-cyan">
                  Email
                </div>
                <div className="truncate">sreeram.ramesh@utdallas.edu</div>
              </div>
            </a>

            <button
              type="button"
              onClick={() => openExternalLink(linkedinUrl)}
              className="flex items-center gap-4 glass rounded-xl p-5 hover-lift"
            >
              <div className="h-11 w-11 grid place-items-center rounded-md bg-cyan/10 border border-cyan/40 text-cyan">
                <LinkedinIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-cyan">
                  LinkedIn
                </div>
                <div>linkedin.com/in/sreeram-gr</div>
              </div>
            </button>

            <div className="flex items-center gap-4 glass rounded-xl p-5">
              <div className="h-11 w-11 grid place-items-center rounded-md bg-electric/10 border border-electric/40 text-electric">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-cyan">
                  Location
                </div>
                <div>Richardson, Texas · DFW Metro</div>
              </div>
            </div>

            <div className="glass-strong rounded-xl p-5">
              <div className="font-mono text-xs uppercase tracking-widest text-neon mb-2">
                Status
              </div>
              <p className="text-sm text-foreground/85">
                Actively seeking SOC Analyst, Cybersecurity Analyst, Information Security
                Analyst, and Security Operations roles.
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="lg:col-span-7 reveal glass corner-frame rounded-xl p-6 md:p-8 space-y-4"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-cyan flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-neon animate-pulse-glow" />
              secure_channel · open
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>
            <Field label="Subject" name="subject" placeholder="Role / opportunity" required />
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about the role…"
                className="mt-1.5 w-full rounded-md bg-surface/60 border border-border focus:border-neon/60 focus:ring-2 focus:ring-neon/20 outline-none px-3 py-2.5 text-sm font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-2 rounded-md bg-neon px-5 py-3 font-mono text-sm uppercase tracking-wider text-primary-foreground glow-neon hover:brightness-110 transition disabled:opacity-70"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Transmitted
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-md bg-surface/60 border border-border focus:border-neon/60 focus:ring-2 focus:ring-neon/20 outline-none px-3 py-2.5 text-sm font-mono"
      />
    </div>
  );
}
