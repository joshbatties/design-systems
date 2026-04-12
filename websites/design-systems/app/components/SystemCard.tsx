"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { DesignSystem } from "@/app/data/systems";

type Props = {
  system: DesignSystem;
  /** Section id to render in the iframe preview. Defaults to first section. */
  sectionId?: string;
  /** Card height in px for the preview area. */
  height?: number;
  /** Iframe natural width before scaling. */
  iframeWidth?: number;
  /** Iframe natural height before scaling. */
  iframeHeight?: number;
  /** Scale factor applied to the iframe. */
  scale?: number;
  /** Hide the footer (used in compact section thumbnails). */
  compact?: boolean;
  /** Override label shown in footer. */
  label?: string;
};

export function SystemCard({
  system,
  sectionId,
  height = 440,
  iframeWidth = 1320,
  iframeHeight = 2400,
  scale = 0.34,
  compact = false,
  label,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "400px" }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const href = sectionId
    ? `/systems/${system.slug}?section=${sectionId}`
    : `/systems/${system.slug}`;

  const iframeSrc = sectionId
    ? `/systems/${system.slug}?embed=1&section=${sectionId}`
    : `/systems/${system.slug}?embed=1`;

  const sectionName =
    label ??
    (sectionId
      ? system.sections.find((s) => s.id === sectionId)?.name ?? system.name
      : system.name);

  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-[#0E0E0E] overflow-hidden transition-all duration-300 hover:border-white/[0.16] hover:shadow-2xl hover:shadow-black/60"
    >
      {/* Preview area */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-[#0A0A0A]"
        style={{
          height: `${height}px`,
          backgroundImage: `radial-gradient(circle at 50% 0%, ${system.color}10 0%, transparent 60%)`,
        }}
      >
        {/* Loading skeleton */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: system.color }}
              />
              <span className="text-[10px] text-white/30 font-mono tracking-wider uppercase">
                Loading
              </span>
            </div>
          </div>
        )}

        {visible && (
          <iframe
            src={iframeSrc}
            loading="lazy"
            title={`${system.name} — ${sectionName}`}
            onLoad={() => setLoaded(true)}
            tabIndex={-1}
            scrolling="no"
            className="absolute top-0 left-0 origin-top-left pointer-events-none"
            style={{
              width: `${iframeWidth}px`,
              height: `${iframeHeight}px`,
              border: "none",
              transform: `scale(${scale})`,
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        )}

        {/* Bottom seamless fade */}
        {!compact && (
          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-transparent" />
        )}

        {/* Live pill */}
        {!compact && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.06]">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: system.color }}
            />
            <span className="text-[9px] font-mono text-white/50 uppercase tracking-wider">
              Live
            </span>
          </div>
        )}

        {/* Section label for compact mode */}
        {compact && (
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black via-black/80 to-transparent">
            <p className="text-[10px] font-medium text-white/80 truncate">
              {sectionName}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      {!compact && (
        <div className="px-5 py-4 border-t border-white/[0.06] flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: system.color }}
              />
              <h3 className="text-sm font-semibold tracking-tight truncate">
                {system.name}
              </h3>
            </div>
            <p className="text-[11px] text-white/40 line-clamp-1">
              {system.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-2.5">
              {system.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 text-[9px] font-medium rounded-md bg-white/[0.04] text-white/45 border border-white/[0.04]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 shrink-0">
            <span className="text-[10px] text-white/30 font-mono tabular-nums">
              {system.componentCount} comp
            </span>
            <span className="text-[10px] text-white/30 font-mono tabular-nums">
              {system.sectionCount} sect
            </span>
          </div>
        </div>
      )}

      {/* Hover arrow */}
      {!compact && (
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md border border-white/[0.08] flex items-center justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/80"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      )}
    </Link>
  );
}
