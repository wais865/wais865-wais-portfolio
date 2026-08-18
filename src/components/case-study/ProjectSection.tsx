import type { ReactNode } from "react";

interface ProjectSectionProps {
  heading: string;
  children: ReactNode;
}

export default function ProjectSection({
  heading,
  children,
}: ProjectSectionProps) {
  return (
    <div className="border-t border-border py-10 md:py-12">
      <h2 className="text-xl font-semibold text-primary md:text-2xl">
        {heading}
      </h2>
      <div className="mt-4 max-w-2xl">{children}</div>
    </div>
  );
}
