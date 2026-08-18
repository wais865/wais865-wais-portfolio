import Link from "next/link";
import ProjectPreview from "./ProjectPreview";
import type { Project } from "@/types/project";

interface SelectedProjectRowProps {
  project: Project;
  index: number;
}

export default function SelectedProjectRow({
  project,
  index,
}: SelectedProjectRowProps) {
  return (
    <article className="group grid grid-cols-1 gap-6 py-8 transition-colors hover:bg-surface/30 md:grid-cols-[58%_1fr] md:items-start md:gap-10 md:py-10">
      <div>
        <p className="font-mono text-xs tracking-[0.2em] text-muted">
          {String(index + 1).padStart(2, "0")}
        </p>

        <p className="mt-3 text-xs font-medium tracking-wide text-muted uppercase">
          {project.meta}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-primary transition-colors group-hover:text-accent md:text-2xl">
          {project.title}
        </h3>

        {project.description ? (
          <p className="mt-3 text-base leading-relaxed text-secondary">
            {project.description}
          </p>
        ) : null}

        {project.stack && project.stack.length > 0 ? (
          <p className="mt-4 text-sm text-muted">{project.stack.join(" · ")}</p>
        ) : null}

        {project.highlight ? (
          <p className="mt-2 text-sm text-accent">{project.highlight}</p>
        ) : project.status ? (
          <p className="mt-2 text-sm text-accent">{project.status}</p>
        ) : null}

        {project.href ? (
          <Link
            href={project.href}
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            View project
            <span
              className="inline-block transition-transform duration-150 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        ) : null}
      </div>

      <ProjectPreview />
    </article>
  );
}
