import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import ProjectHeader from "@/components/case-study/ProjectHeader";
import ProjectMeta from "@/components/case-study/ProjectMeta";
import { projects } from "@/data/projects";

export default function HrmisCaseStudyPage() {
  const project = projects.find((item) => item.slug === "hrmis");

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <main>
      <ProjectHeader
        meta={project.meta}
        title={project.title}
        summary={project.description ?? ""}
      />

      <Container>
        <ProjectMeta
          role={caseStudy.role}
          team={caseStudy.team}
          repositoryStatus={caseStudy.repositoryStatus}
        />
      </Container>
    </main>
  );
}
