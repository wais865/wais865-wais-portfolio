export interface ScreenshotPlaceholder {
  caption?: string;
  size?: "large" | "small";
  src?: string;
  alt?: string;
}

export interface TechStackGroup {
  category: string;
  items: string[];
}

export interface ProjectCaseStudy {
  role?: string;
  roleDetails?: string[];
  team?: string;
  repositoryStatus?: string;
  overview?: string[];
  problem?: string[];
  approach?: string[];
  features?: string[];
  techStack?: TechStackGroup[];
  screenshots?: ScreenshotPlaceholder[];
  challenges?: string[];
  learnings?: string[];
  outcome?: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  meta: string;
  description?: string;
  year?: number;
  stack?: string[];
  highlight?: string;
  featured: boolean;
  status?: string;
  href?: string;
  githubUrl?: string;
  liveUrl?: string;
  privateRepository?: boolean;
  caseStudyAvailable?: boolean;
  caseStudy?: ProjectCaseStudy;
}
