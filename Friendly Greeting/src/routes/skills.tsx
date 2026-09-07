import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { skillChains, skillGroups } from "@/data/skills";
import { PageHeader, Reveal, SectionHeading } from "@/components/site/motion";
import { cn } from "@/lib/utils";

const title = "Skills | Sahil Wable — AI, Backend & Data Engineering";
const description =
  "The technologies Sahil Wable works with across Generative AI, agents, retrieval systems, backend engineering, databases, and infrastructure.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const [chain, setChain] = useState(skillChains[0]!.title);
  const activeChain = skillChains.find((c) => c.title === chain) ?? skillChains[0]!;

  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Technical Stack"
        intro="Grouped by discipline, with the connections that matter in real systems."
      />

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.06}>
              <div className="surface h-full rounded-2xl p-6 transition-colors hover:border-primary/35">
                <h2 className="font-mono text-[11px] tracking-[0.22em] text-primary/85 uppercase">
                  {group.category}
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.03 }}
                      className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Relationships"
            title="How the pieces connect"
            intro="These technologies are not a list — they operate as chains inside a running system."
          />

          <div className="mt-10 flex flex-wrap gap-2">
            {skillChains.map((c) => (
              <button
                key={c.title}
                type="button"
                onClick={() => setChain(c.title)}
                aria-pressed={chain === c.title}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  chain === c.title
                    ? "border-primary/50 bg-primary/12 text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {c.title}
              </button>
            ))}
          </div>

          <motion.div
            key={activeChain.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="surface mt-8 rounded-2xl p-6 sm:p-8"
          >
            <p className="text-muted-foreground">{activeChain.body}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {activeChain.nodes.map((node, i) => (
                <motion.div
                  key={node}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="rounded-xl border border-primary/30 bg-primary/8 px-4 py-2.5 text-sm font-medium">
                    {node}
                  </span>
                  {i < activeChain.nodes.length - 1 ? (
                    <span className="h-px w-6 bg-primary/40" aria-hidden="true" />
                  ) : null}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
