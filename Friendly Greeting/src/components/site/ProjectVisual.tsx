import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** Custom per-project SVG/CSS visual identity — no stock imagery. */
export function ProjectVisual({
  variant,
  className,
}: {
  variant: "voice" | "rag" | "resume" | "docs";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-40 w-full overflow-hidden rounded-xl border border-border bg-[oklch(0.17_0.02_265)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="grid-bg absolute inset-0 opacity-30" />
      {variant === "voice" ? <VoiceVisual /> : null}
      {variant === "rag" ? <RagVisual /> : null}
      {variant === "resume" ? <ResumeVisual /> : null}
      {variant === "docs" ? <DocsVisual /> : null}
    </div>
  );
}

function VoiceVisual() {
  const bars = Array.from({ length: 34 });
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-1 px-6">
      {bars.map((_, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full bg-primary/70"
          animate={{ height: [6, 10 + ((i * 13) % 60), 6] }}
          transition={{
            duration: 1.1 + (i % 5) * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.045,
          }}
          style={{ height: 8 }}
        />
      ))}
    </div>
  );
}

function RagVisual() {
  return (
    <svg viewBox="0 0 320 160" className="absolute inset-0 h-full w-full">
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={26 + i * 10}
          y={40 + i * 12}
          width="46"
          height="60"
          rx="5"
          className="fill-none stroke-primary/40"
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          r="3"
          className="fill-primary"
          animate={{ cx: [90, 232], cy: [70 + i * 8, 78], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
        />
      ))}
      <ellipse cx="250" cy="78" rx="40" ry="26" className="fill-none stroke-primary/50" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.circle
          key={`v-${i}`}
          cx={232 + (i % 3) * 18}
          cy={66 + Math.floor(i / 3) * 20}
          r="2.5"
          className="fill-primary/80"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
        />
      ))}
    </svg>
  );
}

function ResumeVisual() {
  return (
    <svg viewBox="0 0 320 160" className="absolute inset-0 h-full w-full">
      <rect x="30" y="26" width="96" height="112" rx="8" className="fill-none stroke-primary/40" />
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.rect
          key={i}
          x="44"
          y={48 + i * 16}
          height="5"
          rx="2.5"
          className="fill-primary/60"
          animate={{ width: [0, 60 - (i % 3) * 14] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.4, delay: i * 0.25 }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <motion.g
          key={`b-${i}`}
          animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -8] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: i * 1.1 }}
        >
          <rect
            x={168 + (i % 2) * 22}
            y={38 + i * 34}
            width={92 - (i % 2) * 16}
            height="24"
            rx="12"
            className="fill-primary/12 stroke-primary/40"
          />
        </motion.g>
      ))}
    </svg>
  );
}

function DocsVisual() {
  return (
    <svg viewBox="0 0 320 160" className="absolute inset-0 h-full w-full">
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x={22 + i * 26}
            y={44 + (i % 2) * 10}
            width="44"
            height="58"
            rx="5"
            className="fill-none stroke-primary/35"
          />
          {[0, 1, 2].map((l) => (
            <rect
              key={l}
              x={30 + i * 26}
              y={56 + (i % 2) * 10 + l * 10}
              width={28 - l * 6}
              height="3"
              rx="1.5"
              className="fill-primary/40"
            />
          ))}
        </g>
      ))}
      <motion.g
        animate={{ x: [0, 96, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="60" cy="74" r="18" className="fill-none stroke-primary" strokeWidth="2" />
        <line x1="73" y1="87" x2="86" y2="100" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      <rect x="216" y="46" width="80" height="68" rx="8" className="fill-primary/10 stroke-primary/45" />
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={`m-${i}`}
          x="228"
          y={60 + i * 18}
          height="6"
          rx="3"
          className="fill-primary/70"
          animate={{ width: [0, 56 - i * 12], opacity: [0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: i * 0.3 }}
        />
      ))}
    </svg>
  );
}
