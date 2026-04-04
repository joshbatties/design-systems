import Link from "next/link";
import { systems } from "@/app/data/systems";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="border-b border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/30 font-mono">
              {systems.length}{" "}
              {systems.length === 1 ? "system" : "systems"}
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <h2 className="text-5xl font-bold tracking-[-0.04em] leading-tight">
          Design System
          <br />
          <span className="text-white/30">Reference Library</span>
        </h2>
        <p className="mt-4 text-lg text-white/40 max-w-xl leading-relaxed">
          Explore how top companies build their design systems. Dive into
          components, tokens, patterns, and architecture decisions.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {systems.map((system) => (
            <Link
              key={system.slug}
              href={`/systems/${system.slug}`}
              className="group relative rounded-xl border border-white/[0.06] bg-[#111] overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Preview area */}
              <div
                className="h-48 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${system.color}15 0%, ${system.color}08 40%, transparent 70%)`,
                }}
              >
                {/* Decorative elements mimicking the design system */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Mock header */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ backgroundColor: system.color + "30" }}
                    >
                      {system.company[0]}
                    </div>
                    <div className="h-2 w-20 rounded-full bg-white/[0.06]" />
                    <div className="ml-auto h-2 w-8 rounded-full bg-white/[0.04]" />
                  </div>

                  {/* Mock content */}
                  <div className="flex gap-3">
                    {/* Mock sidebar */}
                    <div className="w-16 flex flex-col gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="h-1.5 rounded-full"
                          style={{
                            width: `${60 + Math.random() * 40}%`,
                            backgroundColor:
                              i === 0
                                ? system.color + "40"
                                : "rgba(255,255,255,0.04)",
                          }}
                        />
                      ))}
                    </div>
                    {/* Mock main area */}
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="h-2 w-3/4 rounded-full bg-white/[0.06]" />
                      <div className="h-1.5 w-1/2 rounded-full bg-white/[0.03]" />
                      <div className="mt-2 grid grid-cols-3 gap-1.5">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="h-8 rounded-md"
                            style={{
                              backgroundColor:
                                i === 0
                                  ? system.color + "15"
                                  : "rgba(255,255,255,0.02)",
                              border: "1px solid rgba(255,255,255,0.04)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </div>

              {/* Card content */}
              <div className="p-5 border-t border-white/[0.06]">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight group-hover:text-white transition-colors">
                      {system.name}
                    </h3>
                    <p className="text-xs text-white/40 mt-0.5">
                      {system.company}
                    </p>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: system.color }}
                  />
                </div>

                <p className="text-xs text-white/30 leading-relaxed line-clamp-2 mb-4">
                  {system.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {system.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/[0.04] text-white/40 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 pt-3 border-t border-white/[0.04]">
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white/20"
                    >
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <span className="text-[10px] text-white/30 font-mono">
                      {system.componentCount} components
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white/20"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="text-[10px] text-white/30 font-mono">
                      {system.sectionCount} sections
                    </span>
                  </div>
                </div>
              </div>

              {/* Explore indicator */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/40"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <p className="text-xs text-white/20">Design Systems Reference Library</p>
          <p className="text-xs text-white/20 font-mono">
            {systems.reduce((acc, s) => acc + s.componentCount, 0)} total
            components
          </p>
        </div>
      </footer>
    </div>
  );
}
