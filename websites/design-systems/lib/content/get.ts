import { resolve } from "node:path";
import { loadContent } from "./load";
import type {
  ComponentEntity,
  ContentGraph,
  SystemEntity,
} from "./schema";

const contentRoot = resolve(process.cwd(), "content");

let graph: ContentGraph | null = null;

function getGraph(): ContentGraph {
  if (!graph) graph = loadContent({ contentRoot });
  return graph;
}

export function getAllSystems(): SystemEntity[] {
  return getGraph().systems;
}

export function getSystem(slug: string): SystemEntity | undefined {
  return getGraph().systems.find((s) => s.slug === slug);
}

export function getComponent(
  systemSlug: string,
  componentSlug: string
): ComponentEntity | undefined {
  return getSystem(systemSlug)?.components.find(
    (c) => c.slug === componentSlug
  );
}

export function getAllComponents(): {
  system: SystemEntity;
  component: ComponentEntity;
}[] {
  return getGraph().systems.flatMap((system) =>
    system.components.map((component) => ({ system, component }))
  );
}
