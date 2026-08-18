import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import TextLink from "@/components/ui/TextLink";
import Divider from "@/components/ui/Divider";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { technologies } from "@/data/technologies";
import { siteLinks } from "@/data/links";
import { buildMetadata } from "@/config/site";

export const metadata: Metadata = buildMetadata(
  "Resume — Wais Alizada",
  "Resume for Wais Alizada, Software Developer — experience, education and technologies.",
  "/resume",
);

const resumeFileExists = fs.existsSync(
  path.join(process.cwd(), "public", siteLinks.resumeHref.replace(/^\//, "")),
);

export default function ResumePage() {
  return (
    <main>
      <Container>
        <div className="py-12 md:py-20 print:py-6">
          <header className="border-b border-border pb-8 print:pb-4">
            <h1 className="text-3xl font-semibold text-primary md:text-4xl">
              Wais Alizada
            </h1>
            <p className="mt-1 text-base text-secondary">
              Software Developer
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <TextLink href={`mailto:${siteLinks.email}`} external>
                {siteLinks.email}
              </TextLink>
              <TextLink href={siteLinks.github} external>
                GitHub ↗
              </TextLink>
              {resumeFileExists ? (
                <TextLink href={siteLinks.resumeHref} external>
                  Download PDF ↓
                </TextLink>
              ) : null}
            </div>
          </header>

          <section aria-labelledby="summary-heading" className="mt-8 print:mt-5">
            <h2
              id="summary-heading"
              className="text-sm font-medium tracking-wide text-secondary uppercase"
            >
              Summary
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-secondary">
              Software developer with experience building software for real
              organizations and users. Work spans backend development,
              databases and full-stack applications, with a focus on clean,
              maintainable systems.
            </p>
          </section>

          <section aria-labelledby="experience-heading" className="mt-10 print:mt-5">
            <h2
              id="experience-heading"
              className="text-sm font-medium tracking-wide text-secondary uppercase"
            >
              Experience
            </h2>
            <ul className="mt-3 flex flex-col">
              {experience.map((entry, index) => (
                <li key={entry.organization}>
                  {index > 0 ? <Divider className="my-3" /> : null}
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <p className="font-medium text-primary">{entry.role}</p>
                    <p className="text-sm text-muted">{entry.period}</p>
                  </div>
                  <p className="text-sm text-secondary">
                    {entry.organization}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="education-heading" className="mt-10 print:mt-5">
            <h2
              id="education-heading"
              className="text-sm font-medium tracking-wide text-secondary uppercase"
            >
              Education
            </h2>
            <ul className="mt-3 flex flex-col">
              {education.map((entry, index) => (
                <li key={entry.institution}>
                  {index > 0 ? <Divider className="my-3" /> : null}
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <p className="font-medium text-primary">
                      {entry.program}
                    </p>
                    <p className="text-sm text-muted">{entry.period}</p>
                  </div>
                  <p className="text-sm text-secondary">
                    {entry.institution}
                  </p>
                  {entry.note ? (
                    <p className="text-sm text-muted">{entry.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="technologies-heading" className="mt-10 print:mt-5">
            <h2
              id="technologies-heading"
              className="text-sm font-medium tracking-wide text-secondary uppercase"
            >
              Technologies
            </h2>
            <dl className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {technologies.map((group) => (
                <div key={group.category}>
                  <dt className="text-sm font-medium text-primary">
                    {group.category}
                  </dt>
                  <dd className="mt-1 text-sm text-secondary">
                    {group.items.join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </Container>
    </main>
  );
}
