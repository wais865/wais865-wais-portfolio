import type { Metadata } from "next";

export const site = {
  name: "Wais Alizada",
  title: "Wais Alizada — Software Developer",
  description:
    "Software Developer focused on backend and full-stack engineering. Building practical software for real-world problems.",
  email: "waisalizada35@gmail.com",
  github: "https://github.com/wais865",
  siteUrl: "https://temporary-instant-cedar-joq1dij.vercel.app" as string | null,
};

export function buildMetadata(
  title: string,
  description?: string,
  path: string = "/",
): Metadata {
  const resolvedDescription = description ?? site.description;
  const canonicalUrl = site.siteUrl
    ? new URL(path, site.siteUrl).toString()
    : undefined;

  return {
    title,
    description: resolvedDescription,
    ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
    openGraph: {
      title,
      description: resolvedDescription,
      siteName: site.name,
      type: "website",
      ...(canonicalUrl ? { url: canonicalUrl } : {}),
    },
    twitter: {
      card: "summary",
      title,
      description: resolvedDescription,
    },
  };
}
