import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";
import { getProjectBySlug } from "@/lib/projects/getProjectBySlug";
import { getProjects } from "@/lib/projects/getProjects";
import { buildMetadata } from "@/config/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects
    .filter((project) => project.caseStudyAvailable)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project || !project.caseStudy) {
    return {};
  }

  return buildMetadata(
    `${project.shortTitle ?? project.title} Case Study — Wais Alizada`,
    project.description,
    `/projects/${project.slug}`,
  );
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  return <CaseStudyTemplate project={project} />;
}
