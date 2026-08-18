import type { Metadata } from "next";

export const site = {
  name: "Wais Alizada",
  title: "Wais Alizada — Software Developer",
  description:
    "Software Developer focused on backend and full-stack engineering. Building practical software for real-world problems.",
  email: "waisalizada35@gmail.com",
  github: "https://github.com/wais865",
  // Set once a production deployment URL is confirmed. Do not invent one.
  siteUrl: null as string | null,
};

export function buildMetadata(title: string, description?: string): Metadata {
  const resolvedDescription = description ?? site.description;

  return {
    title,
    description: resolvedDescription,
    openGraph: {
      title,
      description: resolvedDescription,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description: resolvedDescription,
    },
  };
}
