import type { Metadata } from "next";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Projects — Wais Alizada",
  description:
    "Selected work and other software projects built while learning, working and solving real-world problems.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Section padding="compact">
        <SectionLabel>Projects</SectionLabel>
        <h1 className="text-3xl font-semibold text-primary md:text-4xl">
          Projects
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-secondary">
          Selected work and other software projects built while learning,
          working and solving real-world problems.
        </p>
      </Section>
    </main>
  );
}
