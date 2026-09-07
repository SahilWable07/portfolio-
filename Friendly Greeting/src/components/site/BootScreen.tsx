import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/profile";

const steps = ["LOADING COMPONENTS", "LOADING PROJECTS", "LOADING EXPERIENCE"];

/** Short boot sequence, shown once per browser session. */
export function BootScreen() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("sw-booted") === "1") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sessionStorage.setItem("sw-booted", "1");
    if (reduced) return;
    setShow(true);
    const timers = [
      window.setTimeout(() => setStep(1), 600),
      window.setTimeout(() => setStep(2), 1000),
      window.setTimeout(() => setShow(false), 1650),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="boot"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="w-full max-w-sm px-8 text-center">
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.25em" }}
              transition={{ duration: 0.8 }}
              className="font-display text-xl font-semibold uppercase"
            >
              {profile.name}
            </motion.p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.2em] text-primary/80">
              INITIALIZING AI SYSTEM...
            </p>
            <div className="mt-6 h-px w-full overflow-hidden bg-border">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </div>
            <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
              {steps[step]}
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
