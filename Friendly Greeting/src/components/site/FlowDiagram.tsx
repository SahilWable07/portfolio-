import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { FlowNode } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Vertical animated flow of system nodes with a travelling data pulse.
 * Clicking / hovering a node reveals its explanation.
 */
export function FlowDiagram({ nodes, className }: { nodes: FlowNode[]; className?: string }) {
  const [active, setActive] = useState<string | null>(nodes[0]?.id ?? null);
  const current = nodes.find((n) => n.id === active);

  return (
    <div className={cn("grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]", className)}>
      <ol className="space-y-0">
        {nodes.map((node, i) => (
          <li key={node.id}>
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => setActive(node.id)}
              onMouseEnter={() => setActive(node.id)}
              aria-pressed={active === node.id}
              className={cn(
                "surface flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all",
                active === node.id
                  ? "border-primary/45 text-foreground shadow-[0_0_0_1px_oklch(0.62_0.19_268/25%),0_18px_50px_-24px_oklch(0.62_0.19_268/60%)]"
                  : "text-muted-foreground hover:border-primary/25 hover:text-foreground",
              )}
            >
              <span className="font-mono text-[10px] text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium">{node.label}</span>
              {active === node.id ? (
                <motion.span
                  layoutId={`flow-dot-${nodes[0]?.id}`}
                  className="ml-auto size-1.5 rounded-full bg-primary"
                />
              ) : null}
            </motion.button>
            {i < nodes.length - 1 ? (
              <div className="relative ml-7 h-6 w-px bg-border">
                <motion.span
                  className="absolute -left-[3px] size-[7px] rounded-full bg-primary"
                  animate={{ top: ["-10%", "110%"], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.18,
                    ease: "linear",
                  }}
                />
                <ChevronDown
                  className="absolute -left-[7px] -bottom-1 size-4 text-border"
                  aria-hidden="true"
                />
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <motion.div
          key={current?.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="surface rounded-2xl p-6"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] text-primary/80 uppercase">
            Component
          </p>
          <h3 className="mt-3 text-xl font-semibold">{current?.label}</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">{current?.detail}</p>
        </motion.div>
      </div>
    </div>
  );
}
