import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/types/project";

function CardBody({ project }: { project: Project }) {
  const metaLine = [project.year, project.status].filter(Boolean).join(" · ");

  return (
    <>
      <p className="text-xs font-medium tracking-wide text-muted uppercase">
        {project.category}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-primary transition-colors group-hover:text-accent">
        {project.title}
      </h3>

      {project.description ? (
        <p className="mt-2 text-sm leading-relaxed text-secondary">
          {project.description}
        </p>
      ) : null}

      {project.stack && project.stack.length > 0 ? (
        <p className="mt-3 text-xs text-muted">{project.stack.join(" · ")}</p>
      ) : null}

      {metaLine ? <p className="mt-2 text-xs text-muted">{metaLine}</p> : null}
    </>
  );
}

function CardLinkAffordance() {
  return (
    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent">
      View project
      <span
        className="inline-block transition-transform duration-150 group-hover:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </span>
  );
}

const cardClassName =
  "group flex h-full min-h-[140px] flex-col rounded-lg border border-border bg-surface p-5 transition-colors";
const interactiveClassName = `${cardClassName} hover:border-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`;

function CardWrapper({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) {
  if (project.href) {
    return (
      <Link href={project.href} className={interactiveClassName}>
        {children}
      </Link>
    );
  }

  const externalHref = project.githubUrl ?? project.liveUrl;

  if (externalHref) {
    return (
      <a
        href={externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={interactiveClassName}
      >
        {children}
      </a>
    );
  }

  return <div className={`${cardClassName} opacity-80`}>{children}</div>;
}

export default function ProjectCard({ project }: { project: Project }) {
  const isClickable = Boolean(
    project.href ?? project.githubUrl ?? project.liveUrl,
  );

  return (
    <CardWrapper project={project}>
      <CardBody project={project} />
      {isClickable ? <CardLinkAffordance /> : null}
    </CardWrapper>
  );
}
