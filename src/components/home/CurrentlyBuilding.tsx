import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CurrentlyBuilding() {
  return (
    <Section id="currently-building" bordered padding="compact">
      <SectionLabel>Currently Building</SectionLabel>

      <div className="border border-border p-5 md:p-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-base font-semibold text-primary">
            Wais Portfolio
          </h2>
          <p className="text-sm text-muted">
            Next.js · TypeScript · Tailwind CSS · Figma
          </p>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-secondary">
          This portfolio is itself an active project, built and iterated on
          in the open using the same standards applied to the work shown
          above.
        </p>
      </div>
    </Section>
  );
}
