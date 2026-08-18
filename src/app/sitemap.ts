import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getProjects } from "@/lib/projects/getProjects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!site.siteUrl) {
    return [];
  }

  const siteUrl = site.siteUrl;
  const projects = await getProjects();

  const caseStudyEntries = projects
    .filter((project) => project.caseStudyAvailable)
    .map((project) => ({
      url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
    }));

  return [
    { url: new URL("/", siteUrl).toString() },
    { url: new URL("/projects", siteUrl).toString() },
    { url: new URL("/resume", siteUrl).toString() },
    ...caseStudyEntries,
  ];
}
