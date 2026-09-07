import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Soft cursor glow — desktop pointers only. */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 180, damping: 24, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 24, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[60] hidden h-72 w-72 rounded-full opacity-40 blur-3xl lg:block"
      style={{
        left: sx,
        top: sy,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(closest-side, oklch(0.62 0.19 268 / 28%), transparent)",
      }}
    />
  );
}
