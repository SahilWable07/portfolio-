import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/profile";
import { PageHeader, Reveal } from "@/components/site/motion";

const title = "Contact | Sahil Wable — AI Engineer";
const description =
  "Get in touch with Sahil Wable for AI engineering work: Generative AI applications, agents, RAG systems, and real-time voice AI.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy the address manually");
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Connect"
        intro="Open to AI engineering roles and collaborations on Generative AI, agents, retrieval, and real-time voice systems."
      />

      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="surface glow-accent h-full rounded-2xl p-8">
              <Mail className="size-5 text-primary" />
              <h2 className="mt-5 text-lg font-semibold">Email</h2>
              <p className="mt-2 font-mono text-sm break-all text-muted-foreground">
                {profile.email}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  Send an email
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm transition-colors hover:bg-secondary"
                >
                  {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
                  {copied ? "Copied" : "Copy address"}
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid h-full gap-5">
              <ContactRow
                icon={<Linkedin className="size-5 text-primary" />}
                label="LinkedIn"
                value={profile.linkedinLabel}
                href={profile.linkedin}
              />
              <ContactRow
                icon={<Github className="size-5 text-primary" />}
                label="GitHub"
                value={profile.githubLabel}
                href={profile.github}
              />
              <ContactRow
                icon={<Phone className="size-5 text-primary" />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={<MapPin className="size-5 text-primary" />}
                label="Location"
                value={profile.location}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="surface flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-primary/40">
      {icon}
      <div>
        <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
          {label}
        </p>
        <p className="mt-1 text-sm">{value}</p>
      </div>
    </div>
  );
  if (!href) return content;
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}
