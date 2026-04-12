import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllComponents,
  getComponent,
  getSystem,
} from "@/lib/content";
import { CodeBlockTabs } from "@/app/components/content/CodeBlock";
import { PropsTable } from "@/app/components/content/PropsTable";
import { Markdown } from "@/app/components/content/Markdown";

export function generateStaticParams() {
  return getAllComponents().map(({ system, component }) => ({
    slug: system.slug,
    component: component.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; component: string }>;
}): Promise<Metadata> {
  const { slug, component } = await params;
  const sys = getSystem(slug);
  const comp = getComponent(slug, component);
  if (!sys || !comp) return {};
  return {
    title: `${comp.name} — ${sys.name} | Design Systems`,
    description: comp.summary,
  };
}

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string; component: string }>;
}) {
  const { slug, component } = await params;
  const system = getSystem(slug);
  const comp = getComponent(slug, component);
  if (!system || !comp) notFound();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0A0A0A]/85 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <nav className="flex items-center gap-1.5 text-[11px] text-white/40">
            <Link href="/" className="hover:text-white/70 transition">
              Design Systems
            </Link>
            <span className="text-white/20">/</span>
            <Link
              href={`/systems/${system.slug}`}
              className="hover:text-white/70 transition"
            >
              {system.name}
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">Components</span>
            <span className="text-white/20">/</span>
            <span className="text-white/90">{comp.name}</span>
          </nav>
          <Link
            href={`/systems/${system.slug}`}
            className="text-[11px] text-white/50 hover:text-white transition"
          >
            ← Back to {system.name}
          </Link>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-12 space-y-12">
        {/* Header */}
        <section className="flex items-start justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: system.accentColor }}
              />
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40">
                {system.company} · {comp.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-3">
              {comp.name}
            </h1>
            <p className="text-sm text-white/55 max-w-2xl leading-relaxed">
              {comp.summary}
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/30">
              Pattern
            </span>
            <Link
              href={`/patterns/${comp.patternSlug}`}
              className="text-[11px] text-white/70 hover:text-white font-mono border border-white/[0.08] hover:border-white/[0.16] rounded-md px-2.5 py-1 transition"
            >
              /{comp.patternSlug}
            </Link>
          </div>
        </section>

        {/* States */}
        {comp.states.length > 0 && (
          <section>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mb-3">
              States
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {comp.states.map((state) => (
                <span
                  key={state}
                  className="px-2 py-1 text-[11px] font-mono rounded-md border border-white/[0.08] bg-white/[0.02] text-white/70"
                >
                  {state}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Code */}
        {comp.code.length > 0 && (
          <section>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mb-3">
              Source
            </h2>
            <CodeBlockTabs blocks={comp.code} />
          </section>
        )}

        {/* Narrative body */}
        {comp.body && (
          <section>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mb-3">
              Notes
            </h2>
            <Markdown source={comp.body} />
          </section>
        )}

        {/* Variants */}
        {comp.variants.length > 0 && (
          <section>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mb-4">
              Variants ({comp.variants.length})
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {comp.variants.map((v) => (
                <div
                  key={v.slug}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3.5"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: system.accentColor }}
                    />
                    <span className="text-[13px] font-semibold text-white/90">
                      {v.name}
                    </span>
                    <span className="ml-auto font-mono text-[10px] text-white/30">
                      {v.slug}
                    </span>
                  </div>
                  {v.description && (
                    <p className="text-[12px] leading-relaxed text-white/55">
                      {v.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* API */}
        {comp.api.length > 0 && (
          <section>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mb-3">
              Props
            </h2>
            <PropsTable props={comp.api} />
          </section>
        )}

        {/* Tokens used */}
        {comp.tokensUsed.length > 0 && (
          <section>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mb-3">
              Tokens referenced
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {comp.tokensUsed.map((token) => (
                <span
                  key={token}
                  className="px-2 py-1 text-[11px] font-mono rounded-md border border-white/[0.06] bg-white/[0.02] text-white/60"
                >
                  {token}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Attribution */}
        <section className="pt-6 border-t border-white/[0.06] flex items-center justify-between gap-4 text-[11px] text-white/40">
          <div className="flex items-center gap-3">
            <span className="font-mono">
              Captured {system.capturedAt}
              {system.lastReviewed &&
                system.lastReviewed !== system.capturedAt &&
                ` · reviewed ${system.lastReviewed}`}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {system.sources.map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white/80 transition"
              >
                {src.type} ↗
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
