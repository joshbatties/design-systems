"use client";

import { useState } from "react";
import type { CodeBlock as CodeBlockData } from "@/lib/content";

type Props = {
  blocks: CodeBlockData[];
  defaultIndex?: number;
};

export function CodeBlockTabs({ blocks, defaultIndex = 0 }: Props) {
  const [active, setActive] = useState(defaultIndex);
  const [copied, setCopied] = useState(false);

  if (blocks.length === 0) return null;

  const current = blocks[active] ?? blocks[0];

  async function copy() {
    try {
      await navigator.clipboard.writeText(current.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // clipboard blocked — no-op
    }
  }

  return (
    <div className="rounded-lg border border-white/[0.06] bg-[#0A0A0A] overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex overflow-x-auto">
          {blocks.map((b, i) => {
            const label = b.label ?? b.language;
            const isActive = i === active;
            return (
              <button
                key={`${label}-${i}`}
                onClick={() => setActive(i)}
                className={
                  "px-3 py-2 text-[10px] font-mono tracking-wider uppercase whitespace-nowrap transition-colors " +
                  (isActive
                    ? "text-white/90 bg-white/[0.04]"
                    : "text-white/40 hover:text-white/70")
                }
              >
                {label}
              </button>
            );
          })}
        </div>
        <button
          onClick={copy}
          className="mr-2 my-1 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md border border-white/[0.08] text-white/60 hover:text-white hover:border-white/[0.16] transition"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      {current.html ? (
        <div
          className="shiki-host text-[12px] leading-relaxed font-mono overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: current.html }}
        />
      ) : (
        <pre className="m-0 p-4 text-[12px] leading-relaxed text-white/85 font-mono overflow-x-auto">
          <code>{current.code}</code>
        </pre>
      )}
    </div>
  );
}
