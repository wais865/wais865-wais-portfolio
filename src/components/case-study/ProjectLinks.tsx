import Link from "next/link";

interface ProjectLinksProps {
  repositoryStatus?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectLinks({
  repositoryStatus,
  githubUrl,
  liveUrl,
}: ProjectLinksProps) {
  const hasExternalLinks = Boolean(githubUrl || liveUrl);

  return (
    <div className="border-t border-border py-10 md:py-12">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Link
          href="/projects"
          className="text-sm font-medium text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          ← Back to Projects
        </Link>

        <div className="flex flex-wrap items-center gap-6 text-sm">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              GitHub ↗
            </a>
          ) : null}
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              Live ↗
            </a>
          ) : null}
          {!hasExternalLinks && repositoryStatus ? (
            <span className="text-muted">Repository: {repositoryStatus}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
