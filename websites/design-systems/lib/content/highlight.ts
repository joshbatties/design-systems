import { createHighlighter, type Highlighter } from "shiki";
import type { CodeBlock } from "./schema";

const THEME = "github-dark-dimmed";

const LANGUAGES: CodeBlock["language"][] = [
  "tsx",
  "jsx",
  "ts",
  "js",
  "html",
  "vue",
  "svelte",
  "css",
  "scss",
  "json",
];

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [THEME],
      langs: LANGUAGES,
    });
  }
  return highlighterPromise;
}

export async function highlightBlock(block: CodeBlock): Promise<CodeBlock> {
  if (block.html) return block;
  const hl = await getHighlighter();
  const html = hl.codeToHtml(block.code, {
    lang: block.language,
    theme: THEME,
  });
  return { ...block, html };
}
