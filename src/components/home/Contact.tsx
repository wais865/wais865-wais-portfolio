import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import TextLink from "@/components/ui/TextLink";
import { siteLinks } from "@/data/links";

export default function Contact() {
  return (
    <Section id="contact" bordered padding="compact">
      <SectionLabel>Contact</SectionLabel>
      <h2 className="text-2xl font-semibold text-primary md:text-3xl">
        Let&rsquo;s work together.
      </h2>

      <p className="mt-3 max-w-xl text-base leading-relaxed text-secondary">
        Open to junior software engineering opportunities in Germany.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-6 text-sm">
        <TextLink href={siteLinks.github} external>
          GitHub ↗
        </TextLink>
        {siteLinks.linkedin ? (
          <TextLink href={siteLinks.linkedin} external>
            LinkedIn ↗
          </TextLink>
        ) : null}
        <TextLink href={`mailto:${siteLinks.email}`} external>
          Email ↗
        </TextLink>
      </div>
    </Section>
  );
}
