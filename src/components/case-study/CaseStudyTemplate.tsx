import Container from "@/components/layout/Container";
import ProjectHeader from "./ProjectHeader";
import ProjectMeta from "./ProjectMeta";
import ProjectSection from "./ProjectSection";
import TechStack from "./TechStack";
import ScreenshotGallery from "./ScreenshotGallery";
import ProjectLinks from "./ProjectLinks";
import type { Project } from "@/types/project";

function ParagraphList({ items }: { items: string[] }) {
  return (
    <>
      {items.map((paragraph) => (
        <p
          key={paragraph}
          className="text-base leading-relaxed text-secondary [&:not(:first-child)]:mt-4"
        >
          {paragraph}
        </p>
      ))}
    </>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="text-base leading-relaxed text-secondary">
          {item}
        </li>
      ))}
    </ul>
  );
}

function hasItems<T>(items: T[] | undefined): items is T[] {
  return Boolean(items && items.length > 0);
}

export default function CaseStudyTemplate({ project }: { project: Project }) {
  const caseStudy = project.caseStudy;

  const repositoryStatus =
    caseStudy?.repositoryStatus ??
    (project.privateRepository === true
      ? "Private"
      : project.privateRepository === false
        ? "Public"
        : undefined);

  const challenges = caseStudy?.challenges;
  const learnings = caseStudy?.learnings;
  const hasRoleSection =
    Boolean(caseStudy?.role) || hasItems(caseStudy?.roleDetails);

  return (
    <main>
      <ProjectHeader
        meta={project.meta}
        title={project.title}
        summary={project.description ?? ""}
      />

      <Container>
        <ProjectMeta
          role={caseStudy?.role}
          team={caseStudy?.team}
          repositoryStatus={repositoryStatus}
        />

        {hasItems(caseStudy?.overview) ? (
          <ProjectSection heading="Overview">
            <ParagraphList items={caseStudy.overview} />
          </ProjectSection>
        ) : null}

        {hasItems(caseStudy?.problem) ? (
          <ProjectSection heading="Problem">
            <ParagraphList items={caseStudy.problem} />
          </ProjectSection>
        ) : null}

        {hasItems(caseStudy?.approach) ? (
          <ProjectSection heading="Approach">
            <BulletList items={caseStudy.approach} />
          </ProjectSection>
        ) : null}

        {hasRoleSection ? (
          <ProjectSection heading="My Role">
            {caseStudy?.role ? (
              <p className="text-sm font-medium text-primary">
                {caseStudy.role}
              </p>
            ) : null}
            {hasItems(caseStudy?.roleDetails) ? (
              <div className={caseStudy?.role ? "mt-4" : undefined}>
                <BulletList items={caseStudy.roleDetails} />
              </div>
            ) : null}
          </ProjectSection>
        ) : null}

        {hasItems(caseStudy?.features) ? (
          <ProjectSection heading="Key Features">
            <BulletList items={caseStudy.features} />
          </ProjectSection>
        ) : null}

        {hasItems(caseStudy?.techStack) ? (
          <ProjectSection heading="Tech Stack">
            <TechStack groups={caseStudy.techStack} />
          </ProjectSection>
        ) : null}

        {hasItems(caseStudy?.screenshots) ? (
          <ProjectSection heading="Screenshots">
            <ScreenshotGallery items={caseStudy.screenshots} />
          </ProjectSection>
        ) : null}

        {hasItems(challenges) || hasItems(learnings) ? (
          <ProjectSection heading="Challenges & Learnings">
            {hasItems(challenges) ? (
              <>
                <h3 className="text-sm font-medium tracking-wide text-secondary uppercase">
                  Challenges
                </h3>
                <div className="mt-3">
                  <BulletList items={challenges} />
                </div>
              </>
            ) : null}

            {hasItems(learnings) ? (
              <>
                <h3
                  className={`text-sm font-medium tracking-wide text-secondary uppercase ${hasItems(challenges) ? "mt-6" : ""}`}
                >
                  Learnings
                </h3>
                <div className="mt-3">
                  <BulletList items={learnings} />
                </div>
              </>
            ) : null}
          </ProjectSection>
        ) : null}

        {hasItems(caseStudy?.outcome) ? (
          <ProjectSection heading="Outcome">
            <ParagraphList items={caseStudy.outcome} />
          </ProjectSection>
        ) : null}

        <ProjectLinks
          repositoryStatus={repositoryStatus}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        />
      </Container>
    </main>
  );
}
