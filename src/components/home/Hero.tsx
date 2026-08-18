import Container from "@/components/layout/Container";
import TextLink from "@/components/ui/TextLink";
import { siteLinks } from "@/data/links";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-secondary">
          <span
            className="h-1.5 w-1.5 rounded-full bg-green"
            aria-hidden="true"
          />
          Available for junior software engineering opportunities in Germany
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-primary md:text-6xl">
          Wais Alizada
        </h1>

        <h2 className="mt-4 max-w-2xl text-xl text-secondary md:text-2xl">
          Software Developer focused on backend and full-stack engineering.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          I build practical software for real-world problems, with a focus on
          maintainable backend systems, databases and full-stack
          applications.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
          <a
            href="#work"
            className="font-medium text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            View Projects ↓
          </a>
          <TextLink href={siteLinks.github} external>
            GitHub ↗
          </TextLink>
          <TextLink href={siteLinks.linkedin} external>
            LinkedIn ↗
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
