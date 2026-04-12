import { systems } from "@/app/data/systems";
import { SystemCard } from "@/app/components/SystemCard";

export default function Home() {
  const totalComponents = systems.reduce(
    (acc, s) => acc + s.componentCount,
    0
  );
  const totalSections = systems.reduce(
    (acc, s) => acc + s.sectionCount,
    0
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="border-b border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/[0.08] flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/80"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-tight">
                Design Systems
              </h1>
              <p className="text-[11px] text-white/40">
                Browse real-world design system references
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[11px] text-white/30 font-mono tabular-nums">
              {systems.length}{" "}
              {systems.length === 1 ? "system" : "systems"}
            </span>
            <span className="text-[11px] text-white/30 font-mono tabular-nums">
              {totalSections} sections
            </span>
            <span className="text-[11px] text-white/30 font-mono tabular-nums">
              {totalComponents} components
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-12">
        <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.05]">
          Every section,
          <br />
          <span className="text-white/30">live previewed.</span>
        </h2>
        <p className="mt-5 text-base text-white/40 max-w-xl leading-relaxed">
          Real, scrollable, interactive previews of every section of every
          design system. No screenshots — the actual thing, scaled.
        </p>
      </section>

      {/* Per-system showcase */}
      <section className="max-w-[1400px] mx-auto px-6 pb-24 space-y-24">
        {systems.map((system) => (
          <div key={system.slug}>
            {/* System header strip */}
            <div className="flex items-end justify-between mb-5 pb-4 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: system.color }}
                  />
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40">
                    {system.company}
                  </span>
                </div>
                <h3 className="text-3xl font-bold tracking-tight">
                  {system.name}
                </h3>
                <p className="text-sm text-white/40 mt-1.5 max-w-2xl">
                  {system.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-end max-w-md">
                {system.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-[10px] font-medium rounded-md bg-white/[0.04] text-white/50 border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero preview card — full system */}
            <div className="mb-6">
              <SystemCard system={system} height={520} />
            </div>

            {/* Section thumbnail grid — every section gets its own live preview */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40">
                    All Sections
                  </span>
                  <span className="text-[10px] font-mono text-white/25">
                    ({system.sections.length})
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {system.sections.map((sec) => (
                  <SystemCard
                    key={sec.id}
                    system={system}
                    sectionId={sec.id}
                    height={210}
                    iframeWidth={1320}
                    iframeHeight={1100}
                    scale={0.22}
                    compact
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-8">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <p className="text-[11px] text-white/20">
            Design Systems Reference Library
          </p>
          <p className="text-[11px] text-white/20 font-mono">
            {totalComponents} components · {totalSections} sections
          </p>
        </div>
      </footer>
    </div>
  );
}
