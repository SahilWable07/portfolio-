import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { projectFilters, projects } from "@/data/projects";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { TiltCard } from "@/components/site/TiltCard";
import { PageHeader } from "@/components/site/motion";
import { cn } from "@/lib/utils";

const title = "Projects | Sahil Wable — AI Engineering Case Studies";
const description =
  "AI systems built by Sahil Wable: real-time voice AI, multi-tenant Generative AI platforms, RAG pipelines, and agentic backend applications.";

export const Route = createFileRoute("/projects/")({
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
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter(
    (p) => filter === "All" || p.categories.includes(filter),
  );

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've Built"
        intro="Production AI systems and engineering experiments. Filter by discipline."
      />

      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <div className="flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "relative rounded-full border px-4 py-2 text-sm transition-colors",
                filter === f
                  ? "border-primary/50 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {filter === f ? (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-primary/12"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard className="group flex h-full flex-col p-5">
                  <ProjectVisual variant={project.visual} />
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-primary/85">
                      {project.badge}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {project.index}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold">{project.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.short}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    {project.caseStudy ? (
                      <Link
                        to="/projects/$slug"
                        params={{ slug: project.slug }}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                      >
                        View Case Study
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                      </Link>
                    ) : (
                      <span className="font-mono text-[11px] text-muted-foreground">
                        Case study coming soon
                      </span>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
