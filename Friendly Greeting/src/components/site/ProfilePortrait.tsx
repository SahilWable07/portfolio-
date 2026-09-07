import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const labels = ["AI ENGINEER", "LLM SYSTEMS", "GENERATIVE AI"];

export function ProfilePortrait({
  className,
  showLabels = true,
  size = "lg",
}: {
  className?: string;
  showLabels?: boolean;
  size?: "lg" | "md";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative mx-auto w-fit", className)}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div
          className="absolute -inset-8 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.62 0.19 268 / 40%), oklch(0.75 0.13 205 / 18%), transparent)",
          }}
        />
        <div
          className={cn(
            "group relative overflow-hidden rounded-[2rem] border border-primary/25 bg-card/60 p-1.5 backdrop-blur",
            size === "lg" ? "size-64 sm:size-80" : "size-52 sm:size-64",
          )}
        >
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-[2rem]"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, oklch(0.72 0.17 250 / 55%) 60deg, transparent 130deg)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-background">
            <img
              src={profile.photoUrl}
              alt={`${profile.name}, AI Engineer`}
              loading="eager"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </div>
      </motion.div>

      {showLabels ? (
        <>
          {labels.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, x: i === 1 ? 16 : -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
              className={cn(
                "surface absolute hidden rounded-full px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-primary/90 sm:block",
                i === 0 && "-left-10 top-8",
                i === 1 && "-right-12 top-1/2",
                i === 2 && "-left-6 bottom-6",
              )}
            >
              {label}
            </motion.span>
          ))}
        </>
      ) : null}
    </motion.div>
  );
}
