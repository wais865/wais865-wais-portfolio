import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main>
      <Container>
        <div className="flex min-h-[50vh] flex-col items-start justify-center py-20">
          <p className="text-sm font-medium tracking-wide text-muted uppercase">
            404
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-primary md:text-3xl">
            Page not found.
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-secondary">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have
            been moved.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
            <Link
              href="/"
              className="font-medium text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              Back home
            </Link>
            <Link
              href="/projects"
              className="text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              View projects
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
