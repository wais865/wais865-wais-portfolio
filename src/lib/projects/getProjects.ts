import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

// Async so this boundary can later be backed by a database/API without changing callers.
export async function getProjects(): Promise<Project[]> {
  return projects;
}
