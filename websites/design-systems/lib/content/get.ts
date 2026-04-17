import { resolve } from "node:path";
import { loadContent } from "./load";
import type {
  ComponentEntity,
  ContentGraph,
  SystemEntity,
} from "./schema";

const contentRoot = resolve(process.cwd(), "content");

let graphPromise: Promise<ContentGraph> | null = null;

function getGraph(): Promise<ContentGraph> {
  if (!graphPromise) graphPromise = loadContent({ contentRoot });
  return graphPromise;
}

export async function getAllSystems(): Promise<SystemEntity[]> {
  return (await getGraph()).systems;
}

export async function getSystem(
  slug: string
): Promise<SystemEntity | undefined> {
  return (await getAllSystems()).find((s) => s.slug === slug);
}

export async function getComponent(
  systemSlug: string,
  componentSlug: string
): Promise<ComponentEntity | undefined> {
  const system = await getSystem(systemSlug);
  return system?.components.find((c) => c.slug === componentSlug);
}

export async function getAllComponents(): Promise<
  { system: SystemEntity; component: ComponentEntity }[]
> {
  const systems = await getAllSystems();
  return systems.flatMap((system) =>
    system.components.map((component) => ({ system, component }))
  );
}
