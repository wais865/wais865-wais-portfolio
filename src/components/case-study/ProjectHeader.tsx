import Link from "next/link";
import Container from "@/components/layout/Container";

interface ProjectHeaderProps {
  meta: string;
  title: string;
  summary: string;
}

export default function ProjectHeader({
  meta,
  title,
  summary,
}: ProjectHeaderProps) {
  return (
    <div className="border-b border-border py-10 md:py-14">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          ← Back to Projects
        </Link>

        <p className="mt-6 text-xs font-medium tracking-wide text-muted uppercase">
          {meta}
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-primary md:text-4xl">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary">
          {summary}
        </p>
      </Container>
    </div>
  );
}
