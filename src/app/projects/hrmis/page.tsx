import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import ProjectHeader from "@/components/case-study/ProjectHeader";
import ProjectMeta from "@/components/case-study/ProjectMeta";
import ProjectSection from "@/components/case-study/ProjectSection";
import TechStack from "@/components/case-study/TechStack";
import ScreenshotGallery from "@/components/case-study/ScreenshotGallery";
import ProjectLinks from "@/components/case-study/ProjectLinks";
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

        <ProjectSection heading="Tech Stack">
          <TechStack groups={caseStudy.techStack} />
        </ProjectSection>

        <ProjectSection heading="Screenshots">
          <ScreenshotGallery items={caseStudy.screenshots} />
        </ProjectSection>

        <ProjectSection heading="Challenges & Learnings">
          <h3 className="text-sm font-medium tracking-wide text-secondary uppercase">
            Challenges
          </h3>
          <ul className="mt-3 flex flex-col gap-2">
            {caseStudy.challenges.map((item) => (
              <li
                key={item}
                className="text-base leading-relaxed text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-medium tracking-wide text-secondary uppercase">
            Learnings
          </h3>
          <ul className="mt-3 flex flex-col gap-2">
            {caseStudy.learnings.map((item) => (
              <li
                key={item}
                className="text-base leading-relaxed text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection heading="Outcome">
          {caseStudy.outcome.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-secondary [&:not(:first-child)]:mt-4"
            >
              {paragraph}
            </p>
          ))}
        </ProjectSection>

        <ProjectLinks
          repositoryStatus={caseStudy.repositoryStatus}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        />
      </Container>
    </main>
  );
}
