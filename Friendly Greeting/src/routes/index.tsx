import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { profile, capabilities } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { ProfilePortrait } from "@/components/site/ProfilePortrait";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { TiltCard } from "@/components/site/TiltCard";
import { Reveal, SectionHeading, WordReveal } from "@/components/site/motion";
import { HeroSystem } from "@/components/site/HeroSystem";

const title = "Sahil Wable | AI Engineer | Generative AI & LLM Systems";
const description =
  "Sahil Wable is an AI Engineer building Generative AI applications, LLM systems, AI agents, RAG pipelines, and real-time voice AI systems.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[11px] tracking-[0.3em] text-primary/85 uppercase"
            >
              {profile.name} — {profile.role}
            </motion.p>
            <h1 className="mt-6 text-4xl leading-[1.04] font-semibold sm:text-5xl lg:text-[3.9rem]">
              <WordReveal text="Building intelligent systems" delay={0.15} />{" "}
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient inline-block"
              >
                beyond the chatbot.
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {profile.heroSupport}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/projects"
                className="glow-accent group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore My Work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <FileText className="size-4" />
                View Resume
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-1.5 px-1 py-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Let's Connect
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          <ProfilePortrait />
        </div>

        <div className="mt-20">
          <HeroSystem />
        </div>
      </section>

      <section className="relative border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="01 / Approach"
            title="I build AI systems, not just AI demos."
            intro="My work focuses on connecting LLMs with real applications, APIs, databases, retrieval systems, real-time communication, and backend infrastructure."
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <Reveal as="li" key={cap} delay={i * 0.06}>
                <div className="surface flex items-center gap-3 rounded-xl px-5 py-4">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-sm font-medium">{cap}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="02 / Selected Work"
            title="Featured Projects"
            intro="Three production systems, each with a full technical case study."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.1}>
                <TiltCard className="group flex h-full flex-col overflow-hidden p-5">
                  <ProjectVisual variant={project.visual} />
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-primary/85">
                      {project.badge}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {project.index}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.short}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    View Case Study
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="surface glow-accent flex flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:p-12 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Let's build something intelligent.
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  Available for AI engineering work across Generative AI, agents, RAG, and
                  real-time voice systems.
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
              >
                Get in touch
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
