import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <Section id="about" bordered>
      <SectionLabel>About</SectionLabel>
      <h2 className="text-2xl font-semibold text-primary md:text-3xl">
        About
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary">
        I&rsquo;m a software developer with experience building software for
        real organizations and users. My work spans backend development,
        databases and full-stack applications, with a focus on clean,
        maintainable systems.
      </p>
    </Section>
  );
}
