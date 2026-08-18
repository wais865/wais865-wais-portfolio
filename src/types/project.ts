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
}
