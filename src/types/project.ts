export interface ScreenshotPlaceholder {
  caption?: string;
  size?: "large" | "small";
}

export interface TechStackGroup {
  category: string;
  items: string[];
}

export interface ProjectCaseStudy {
  role: string;
  team: string;
  repositoryStatus: string;
  overview: string[];
  problem: string[];
  approach: string[];
  features: string[];
  techStack: TechStackGroup[];
  challenges: string[];
  learnings: string[];
  outcome: string[];
  screenshots: ScreenshotPlaceholder[];
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
