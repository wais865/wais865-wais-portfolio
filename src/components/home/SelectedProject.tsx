import Link from "next/link";
import type { Project } from "@/types/project";

export default function SelectedProject({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-border bg-surface p-6 md:p-8">
      <p className="text-sm text-muted">{project.meta}</p>

      <h3 className="mt-2 text-xl font-semibold text-primary md:text-2xl">
        {project.title}
      </h3>

      <p className="mt-3 max-w-2xl text-base leading-relaxed text-secondary">
        {project.description}
      </p>

      <p className="mt-4 text-sm text-muted">{project.stack.join(" · ")}</p>

      {project.highlight ? (
        <p className="mt-3 inline-block rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-accent">
          {project.highlight}
        </p>
      ) : null}

      <div className="mt-6">
        <Link
          href={project.href}
          className="text-sm font-medium text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          View project →
        </Link>
      </div>
    </article>
  );
}
