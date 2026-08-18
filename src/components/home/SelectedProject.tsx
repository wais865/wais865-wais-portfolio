import Link from "next/link";
import type { Project } from "@/types/project";

interface SelectedProjectProps {
  project: Project;
  index: number;
}

export default function SelectedProject({
  project,
  index,
}: SelectedProjectProps) {
  return (
    <article className="group grid grid-cols-1 gap-3 py-4 transition-colors hover:bg-surface/40 md:grid-cols-[58%_1fr] md:items-start md:gap-10 md:py-5">
      <div>
        <p className="text-xs font-medium tracking-wide text-muted uppercase">
          {project.meta}
        </p>
        <h3 className="mt-1.5 text-xl font-semibold text-primary md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1.5 text-base leading-relaxed text-secondary">
          {project.description}
        </p>
        <p className="mt-2 text-sm text-muted">{project.stack.join(" · ")}</p>
        {project.highlight ? (
          <p className="mt-1.5 text-sm text-accent">{project.highlight}</p>
        ) : null}
        <Link
          href={project.href}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          View project
          <span
            className="inline-block transition-transform duration-150 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>

      <div className="flex h-16 items-center justify-center border border-border bg-surface-2 transition-colors group-hover:border-muted md:h-32">
        <span className="font-mono text-sm tracking-[0.3em] text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </article>
  );
}
