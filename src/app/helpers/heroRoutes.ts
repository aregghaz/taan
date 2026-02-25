export const HERO_PATHS = [
  "/home",
  "/our-projects",
  "/about-us",
  "/contact-us",
  "/cv",
] as const;

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function getPathFromMenuIndex(index: number): string {
  return HERO_PATHS[index] ?? HERO_PATHS[0];
}

export function getMenuIndexFromPath(pathname: string): number {
  const normalized = normalizePathname(pathname);
  const foundIndex = HERO_PATHS.findIndex((path) => path === normalized);

  return foundIndex >= 0 ? foundIndex : 0;
}
