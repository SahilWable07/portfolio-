import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { experience } from "@/data/experience";
import { education } from "@/data/profile";
import { PageHeader, Reveal, SectionHeading } from "@/components/site/motion";

const title = "Experience | Sahil Wable — AI Application Engineer";
const description =
  "Sahil Wable's professional experience building Generative AI applications, agentic workflows, RAG systems, and real-time voice AI in production.";

export const Route = createFileRoute("/experience")({
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
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Professional Experience"
        intro="Where the systems were built, and what I was responsible for."
      />

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <ol className="space-y-8 border-l border-border pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.role} delay={i * 0.08}>
              <div className="relative">
                <span
                  className="absolute -left-[31px] top-8 size-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[47px]"
                  aria-hidden="true"
                />
                <div className="surface rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-xl font-semibold">{job.role}</h2>
                    <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-primary/90">
                    {job.company}
                    {job.location ? ` — ${job.location}` : ""}
                  </p>
                  <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="Education" title="Education" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {education.map((e) => (
              <Reveal key={e.degree}>
                <div className="surface rounded-2xl p-6">
                  <h3 className="text-base font-semibold">{e.degree}</h3>
                  <p className="mt-1 text-sm text-primary/90">{e.institution}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{e.period}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <Link
              to="/resume"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View full resume
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
