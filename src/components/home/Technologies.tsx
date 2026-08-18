import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <Section id="technologies" bordered padding="compact">
      <SectionLabel>Technologies</SectionLabel>
      <h2 className="text-2xl font-semibold text-primary md:text-3xl">
        Technologies
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium tracking-wide text-secondary uppercase">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
