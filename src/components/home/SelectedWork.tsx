import Link from "next/link";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import SelectedProject from "./SelectedProject";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <Section id="work" bordered padding="compact">
      <SectionLabel>Selected Work</SectionLabel>
      <h2 className="text-2xl font-semibold text-primary md:text-3xl">
        Projects
      </h2>

      <div className="mt-6 divide-y divide-border border-y border-border">
        {projects.map((project, index) => (
          <SelectedProject
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/projects"
          className="text-sm font-medium text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          Explore all projects →
        </Link>
      </div>
    </Section>
  );
}
