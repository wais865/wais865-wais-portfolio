export interface TechnologyCategory {
  category: string;
  items: string[];
}

export const technologies: TechnologyCategory[] = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "Express.js"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Concepts",
    items: ["SQL", "NoSQL", "Data Modeling"],
  },
  {
    category: "Tools",
    items: ["Git", "Linux", "Figma", "Vite"],
  },
];
