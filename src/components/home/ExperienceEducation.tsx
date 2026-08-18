import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

export default function ExperienceEducation() {
  return (
    <Section id="experience" bordered padding="compact">
      <SectionLabel>Experience &amp; Education</SectionLabel>
      <h2 className="text-2xl font-semibold text-primary md:text-3xl">
        Experience &amp; Education
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="text-sm font-medium tracking-wide text-secondary uppercase">
            Experience
          </h3>
          <ul className="mt-3 flex flex-col">
            {experience.map((entry, index) => (
              <li key={entry.organization}>
                {index > 0 ? <Divider className="my-3" /> : null}
                <p className="font-medium text-primary">
                  {entry.organization}
                </p>
                <p className="mt-0.5 text-sm text-secondary">{entry.role}</p>
                <p className="mt-0.5 text-sm text-muted">{entry.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium tracking-wide text-secondary uppercase">
            Education
          </h3>
          <ul className="mt-3 flex flex-col">
            {education.map((entry, index) => (
              <li key={entry.institution}>
                {index > 0 ? <Divider className="my-3" /> : null}
                <p className="font-medium text-primary">
                  {entry.institution}
                </p>
                <p className="mt-0.5 text-sm text-secondary">
                  {entry.program}
                </p>
                <p className="mt-0.5 text-sm text-muted">{entry.period}</p>
                {entry.note ? (
                  <p className="mt-0.5 text-sm text-muted">{entry.note}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
