import { useEffect, useState } from "react";

const PHRASES = [
  "SOC Operations",
  "Incident Response",
  "Vulnerability Management",
  "Network Security",
  "Threat Detection",
];

export function RotatingText() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const word = PHRASES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase("holding"), 1400);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), 600);
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length - 1)), 30);
      } else {
        setPhase("typing");
        setIndex((i) => (i + 1) % PHRASES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase, index]);

  return (
    <span className="font-mono text-neon text-glow-neon">
      {display}
      <span className="inline-block w-[0.6ch] -mb-1 animate-blink">▍</span>
    </span>
  );
}
