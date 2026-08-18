import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "hrmis",
    title: "Human Resource Management Information System",
    meta: "Enterprise Application · Government Project",
    description:
      "Co-developed part of a larger enterprise HRMIS platform designed to simplify internal administrative workflows.",
    stack: ["React", "Vite", "Node.js", "Express", "API Integration"],
    href: "/projects/hrmis",
  },
  {
    slug: "dmis",
    title: "Dormitory Management Information System",
    meta: "Final-Year Project · Real Deployment",
    description:
      "A three-person university project developed for real dormitory operations and deployed for actual use.",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS"],
    highlight: "Lead Developer · NoSQL Data Modeling",
    href: "/projects/dmis",
  },
  {
    slug: "talent-aurora",
    title: "Talent Aurora",
    meta: "Independent Client Project · Production Website",
    description:
      "A bilingual company website independently developed from client requirements and brand direction through production delivery.",
    stack: ["Lit", "JavaScript", "Vite", "Bootstrap", "CSS"],
    highlight: "English / German",
    href: "/projects/talent-aurora",
  },
];
