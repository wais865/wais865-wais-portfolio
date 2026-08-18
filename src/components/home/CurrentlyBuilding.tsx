import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CurrentlyBuilding() {
  return (
    <Section id="currently-building" bordered padding="compact">
      <SectionLabel>Currently Building</SectionLabel>

      <div className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-muted md:p-8">
        <h2 className="text-xl font-semibold text-primary transition-colors group-hover:text-accent md:text-2xl">
          Wais Portfolio
        </h2>
        <p className="mt-2 text-sm text-muted">
          Next.js · TypeScript · Tailwind CSS · Figma
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary">
          This portfolio is itself an active project, built and iterated on
          in the open using the same standards applied to the work shown
          above.
        </p>
      </div>
    </Section>
  );
}
