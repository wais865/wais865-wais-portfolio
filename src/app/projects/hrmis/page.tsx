import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import ProjectHeader from "@/components/case-study/ProjectHeader";
import ProjectMeta from "@/components/case-study/ProjectMeta";
import ProjectSection from "@/components/case-study/ProjectSection";
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

        <ProjectSection heading="Overview">
          {caseStudy.overview.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-secondary [&:not(:first-child)]:mt-4"
            >
              {paragraph}
            </p>
          ))}
        </ProjectSection>

        <ProjectSection heading="Problem">
          {caseStudy.problem.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-secondary [&:not(:first-child)]:mt-4"
            >
              {paragraph}
            </p>
          ))}
        </ProjectSection>

        <ProjectSection heading="Approach">
          <ul className="flex flex-col gap-2">
            {caseStudy.approach.map((item) => (
              <li
                key={item}
                className="text-base leading-relaxed text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection heading="My Role">
          <p className="text-sm font-medium text-primary">{caseStudy.role}</p>
          <ul className="mt-4 flex flex-col gap-2">
            {caseStudy.roleDetails.map((item) => (
              <li
                key={item}
                className="text-base leading-relaxed text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection heading="Key Features">
          <ul className="flex flex-col gap-2">
            {caseStudy.features.map((item) => (
              <li
                key={item}
                className="text-base leading-relaxed text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </ProjectSection>
      </Container>
    </main>
  );
}
