export interface DesignSystem {
  slug: string;
  name: string;
  description: string;
  company: string;
  tags: string[];
  componentCount: number;
  sectionCount: number;
  color: string;
}

export const systems: DesignSystem[] = [
  {
    slug: "vercel",
    name: "Vercel Design System",
    description:
      "Build + Migrate Toolkit with 55 components across 20 sections. Complete paste-ready patterns for Next.js + Tailwind.",
    company: "Vercel",
    tags: ["React", "Next.js", "Tailwind CSS", "Dark Mode"],
    componentCount: 55,
    sectionCount: 20,
    color: "#0070F3",
  },
];
