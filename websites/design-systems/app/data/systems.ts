export interface SystemSection {
  id: string;
  name: string;
}

export interface DesignSystem {
  slug: string;
  name: string;
  description: string;
  company: string;
  tags: string[];
  componentCount: number;
  sectionCount: number;
  color: string;
  sections: SystemSection[];
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
    sections: [
      { id: "recipes", name: "Paste Recipes" },
      { id: "infra", name: "Infrastructure" },
      { id: "parts", name: "Component Files" },
      { id: "migrate", name: "Migration Map" },
      { id: "grep", name: "CSS Diff / Grep" },
      { id: "scaffold", name: "Page Scaffolds" },
      { id: "decide", name: "Component Picker" },
      { id: "spacing", name: "Spacing Rules" },
      { id: "compose", name: "Compositions" },
      { id: "rbreak", name: "Responsive Rules" },
      { id: "darkmode", name: "Dark Mode" },
      { id: "states", name: "Data States" },
      { id: "anti", name: "Anti-Patterns" },
      { id: "hard", name: "Hard Problems" },
      { id: "blocks", name: "Design Blocks" },
      { id: "interact", name: "Interactive" },
      { id: "colors", name: "Colors + Contrast" },
      { id: "export", name: "Export Tokens" },
      { id: "next", name: "Next.js Setup" },
    ],
  },
];
