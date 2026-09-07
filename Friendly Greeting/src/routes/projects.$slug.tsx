import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { FlowDiagram } from "@/components/site/FlowDiagram";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { PageHeader, Reveal, SectionHeading } from "@/components/site/motion";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project || !project.caseStudy) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.name} | Case Study — Sahil Wable`
      : "Case Study | Sahil Wable";
    const description = loaderData?.short ?? "AI engineering case study by Sahil Wable.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const project = Route.useLoaderData();
  const others = projects.filter((p) => p.caseStudy && p.slug !== project.slug);

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-28 sm:px-8 sm:pt-32">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
          All Projects
        </Link>
      </div>

      <PageHeader eyebrow={project.badge} title={project.name} intro={project.subtitle} />

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <Reveal>
          <ProjectVisual variant={project.visual} className="h-52 sm:h-64" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Architecture"
            title="How the system flows"
            intro="Select a node to see what it does. Data moves top to bottom."
          />
          <FlowDiagram nodes={project.flow} className="mt-12" />
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl space-y-14 px-5 sm:px-8">
          {project.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.05}>
              <article className="grid gap-4 lg:grid-cols-[0.55fr_1.45fr]">
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                <div>
                  <p className="leading-relaxed text-muted-foreground">{section.body}</p>
                  {section.bullets ? (
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {section.bullets.map((b) => (
                        <li
                          key={b}
                          className="surface flex items-start gap-2.5 rounded-xl px-4 py-3 text-sm text-muted-foreground"
                        >
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="Next" title="More case studies" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {others.map((p) => (
              <Reveal key={p.slug}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="surface group flex items-center justify-between gap-4 rounded-2xl p-6 transition-colors hover:border-primary/40"
                >
                  <span>
                    <span className="font-mono text-[10px] tracking-[0.22em] text-primary/85">
                      {p.badge}
                    </span>
                    <span className="mt-2 block text-lg font-semibold">{p.name}</span>
                  </span>
                  <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
