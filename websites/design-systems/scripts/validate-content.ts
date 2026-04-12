import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { loadContent, ContentError } from "../lib/content";

const here = dirname(fileURLToPath(import.meta.url));
const contentRoot = resolve(here, "..", "content");

try {
  const graph = loadContent({ contentRoot });
  const systemCount = graph.systems.length;
  const componentCount = graph.systems.reduce(
    (acc, s) => acc + s.components.length,
    0
  );
  console.log(
    `ok — loaded ${systemCount} system${systemCount === 1 ? "" : "s"}, ${componentCount} component${componentCount === 1 ? "" : "s"}`
  );
  for (const system of graph.systems) {
    console.log(`  ${system.slug} · ${system.name}`);
    for (const component of system.components) {
      console.log(
        `    • ${component.slug} (${component.patternSlug} / ${component.category})`
      );
    }
  }
  process.exit(0);
} catch (err) {
  if (err instanceof ContentError) {
    console.error("content error:", err.message);
  } else {
    console.error(err);
  }
  process.exit(1);
}
