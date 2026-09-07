import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {profile.positioning}
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
            Navigate
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
            Connect
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid size-10 place-items-center rounded-lg border border-border transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Mail className="size-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-10 place-items-center rounded-lg border border-border transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Github className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-lg border border-border transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-6 font-mono text-[11px] text-muted-foreground sm:px-8">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="tracking-[0.2em] uppercase">Built with React & TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
