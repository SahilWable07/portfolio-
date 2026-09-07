import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";
import { profile, education } from "@/data/profile";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { PageHeader, Reveal } from "@/components/site/motion";

const title = "Resume | Sahil Wable — AI Application Engineer";
const description =
  "View or download the resume of Sahil Wable, AI Application Engineer working on Generative AI, agents, RAG, and real-time voice systems.";

export const Route = createFileRoute("/resume")({
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
  component: ResumePage,
});

function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Resume"
        intro="A summary of the work, with the full document available to view or download."
      />

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="glow-accent inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="size-4" />
              Download PDF
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <ExternalLink className="size-4" />
              Open in new tab
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="surface mt-8 overflow-hidden rounded-2xl">
            <object
              data={profile.resumeUrl}
              type="application/pdf"
              className="h-[70vh] min-h-[520px] w-full"
              aria-label="Resume of Sahil Wable"
            >
              <div className="p-8 text-sm text-muted-foreground">
                Your browser can't display the PDF inline.{" "}
                <a href={profile.resumeUrl} className="text-primary underline">
                  Download the resume
                </a>{" "}
                instead.
              </div>
            </object>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-xl font-semibold">Experience</h2>
            </Reveal>
            {experience.map((job) => (
              <Reveal key={job.role}>
                <div className="surface rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold">{job.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-primary/90">{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.slice(0, 6).map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70"
                          aria-hidden="true"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-8">
            <Reveal>
              <div className="surface rounded-2xl p-6">
                <h2 className="text-sm font-semibold">Education</h2>
                {education.map((e) => (
                  <div key={e.degree} className="mt-4">
                    <p className="text-sm">{e.degree}</p>
                    <p className="text-sm text-muted-foreground">{e.institution}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{e.period}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="surface rounded-2xl p-6">
                <h2 className="text-sm font-semibold">Core Skills</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skillGroups.flatMap((g) => g.items).slice(0, 18).map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
