import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Node = { id: string; label: string; detail: string };

const spine: Node[] = [
  { id: "user", label: "User", detail: "A person speaking or typing into the system — web, app, or a live phone call." },
  { id: "agent", label: "AI Agent", detail: "Decides what to do with a request: answer directly, retrieve knowledge, or call a tool." },
  { id: "llm", label: "LLM", detail: "Reasoning and language generation, with prompts and structured output constraints." },
];

const branches: Node[] = [
  { id: "tools", label: "Tools", detail: "Callable functions the agent invokes to book, fetch, or write real data." },
  { id: "rag", label: "RAG", detail: "Retrieves relevant information from external knowledge before generating a response." },
  { id: "apis", label: "APIs", detail: "Internal and third-party services the system reads from and writes to." },
];

export function HeroSystem() {
  const [active, setActive] = useState<Node | null>(null);

  return (
    <div className="surface relative overflow-hidden rounded-3xl p-6 sm:p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="font-mono text-[11px] tracking-[0.24em] text-primary/85 uppercase">
          System Topology
        </p>
        <p className="font-mono text-[11px] text-muted-foreground">
          {active ? active.detail : "Hover a node for detail"}
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        {spine.map((node, i) => (
          <div key={node.id} className="flex w-full flex-col items-center">
            <NodeChip node={node} onHover={setActive} active={active?.id === node.id} index={i} />
            <Connector />
          </div>
        ))}

        <div className="grid w-full gap-3 sm:grid-cols-3">
          {branches.map((node, i) => (
            <NodeChip
              key={node.id}
              node={node}
              onHover={setActive}
              active={active?.id === node.id}
              index={i + 3}
              full
            />
          ))}
        </div>

        <Connector />

        <NodeChip
          node={{
            id: "response",
            label: "Response",
            detail: "The grounded answer or action, streamed back to the user in text or voice.",
          }}
          onHover={setActive}
          active={active?.id === "response"}
          index={6}
          accent
        />
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="relative my-1 h-8 w-px bg-border">
      <motion.span
        className="absolute -left-[3px] size-[7px] rounded-full bg-primary"
        animate={{ top: ["-8%", "108%"], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function NodeChip({
  node,
  onHover,
  active,
  index,
  full,
  accent,
}: {
  node: Node;
  onHover: (n: Node | null) => void;
  active: boolean;
  index: number;
  full?: boolean;
  accent?: boolean;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => onHover(node)}
      onFocus={() => onHover(node)}
      onMouseLeave={() => onHover(null)}
      onBlur={() => onHover(null)}
      className={cn(
        "rounded-xl border px-5 py-3 text-sm font-medium transition-all",
        full ? "w-full" : "min-w-40",
        accent
          ? "border-primary/45 bg-primary/12 text-foreground"
          : "border-border bg-card/50 text-muted-foreground",
        active && "border-primary/60 text-foreground shadow-[0_0_40px_-12px_oklch(0.66_0.185_268/70%)]",
      )}
    >
      {node.label}
    </motion.button>
  );
}
