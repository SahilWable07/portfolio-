import { createFileRoute } from "@tanstack/react-router";
import { profile, education } from "@/data/profile";
import { timeline } from "@/data/experience";
import { ProfilePortrait } from "@/components/site/ProfilePortrait";
import { PageHeader, Reveal, SectionHeading } from "@/components/site/motion";

const title = "About Sahil Wable | AI Engineer Behind the Systems";
const description =
  "How Sahil Wable approaches AI engineering: production Generative AI systems, agentic workflows, retrieval pipelines, and real-time backend architecture.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Behind the systems"
        intro={profile.positioning}
      />

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <ProfilePortrait size="md" showLabels={false} className="lg:sticky lg:top-28" />
          <div className="space-y-5">
            {profile.philosophy.map((para, i) => (
              <Reveal key={para} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-muted-foreground">{para}</p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="surface mt-4 grid gap-4 rounded-2xl p-6 sm:grid-cols-2">
                <Fact label="Based in" value={profile.location} />
                <Fact label="Role" value="AI Application Engineer" />
                <Fact label="Focus" value="GenAI • Agents • RAG • Voice AI" />
                <Fact label="Core stack" value="Python • FastAPI • Node.js • Redis" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Progression"
            title="From backend engineering to AI systems"
            intro="An interactive view of how the work has developed. Edit the entries in src/data/experience.ts."
          />
          <ol className="mt-12 space-y-6 border-l border-border pl-6 sm:pl-10">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.07}>
                <div className="relative">
                  <span
                    className="absolute -left-[31px] top-6 size-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[47px]"
                    aria-hidden="true"
                  />
                  <div className="surface rounded-2xl p-6 transition-colors hover:border-primary/35">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-primary/85 uppercase">
                      {item.period}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
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
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1.5 text-sm text-foreground">{value}</p>
    </div>
  );
}
