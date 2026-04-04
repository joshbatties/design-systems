import { systems } from "@/app/data/systems";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { Metadata } from "next";

const componentMap: Record<string, ReturnType<typeof dynamic>> = {
  vercel: dynamic(
    () => import("@/app/design-systems/vercel-design-system")
  ),
};

export function generateStaticParams() {
  return systems.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const system = systems.find((s) => s.slug === slug);
  if (!system) return {};
  return {
    title: `${system.name} | Design Systems`,
    description: system.description,
  };
}

export default async function SystemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const system = systems.find((s) => s.slug === slug);
  if (!system) notFound();

  const Component = componentMap[slug];
  if (!Component) notFound();

  return (
    <div className="relative min-h-screen">
      <Link
        href="/"
        className="fixed top-3 right-4 z-[100] flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/70 backdrop-blur-md border border-white/[0.08] transition-all hover:bg-white/15 hover:text-white hover:border-white/[0.15]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        All Systems
      </Link>
      <Component />
    </div>
  );
}
