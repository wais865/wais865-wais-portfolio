"use client";

import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import type { Project } from "@/types/project";

interface ExpandableProjectGridProps {
  visibleProjects: Project[];
  additionalProjects: Project[];
}

export default function ExpandableProjectGrid({
  visibleProjects,
  additionalProjects,
}: ExpandableProjectGridProps) {
  const [expanded, setExpanded] = useState(false);

  if (additionalProjects.length === 0) {
    return <ProjectGrid projects={visibleProjects} />;
  }

  const projectsToShow = expanded
    ? [...visibleProjects, ...additionalProjects]
    : visibleProjects;

  return (
    <div>
      <ProjectGrid projects={projectsToShow} />

      <div className="mt-8">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="text-sm font-medium text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          {expanded ? "Show fewer ↑" : "Show more projects ↓"}
        </button>
      </div>
    </div>
  );
}
