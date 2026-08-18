import type { Metadata } from "next";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import SelectedProject from "@/components/home/SelectedProject";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Wais Alizada",
  description:
    "Selected work and other software projects built while learning, working and solving real-world problems.",
};

export default function ProjectsPage() {
  const selectedProjects = projects.slice(0, 3);

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

      <Section bordered padding="compact">
        <SectionLabel>Selected Projects</SectionLabel>
        <h2 className="text-2xl font-semibold text-primary md:text-3xl">
          Selected Projects
        </h2>

        <div className="mt-6 flex flex-col gap-5">
          {selectedProjects.map((project) => (
            <SelectedProject key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </main>
  );
}
