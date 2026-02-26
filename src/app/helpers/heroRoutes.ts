import { HERO_MENU_CONFIG } from "@/app/config/heroMenuConfig";

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function getPathFromMenuIndex(index: number): string {
  return HERO_MENU_CONFIG[index]?.path ?? HERO_MENU_CONFIG[0].path;
}

export function getMenuIndexFromPath(pathname: string): number {
  const normalized = normalizePathname(pathname);
  const foundIndex = HERO_MENU_CONFIG.findIndex((item) => item.path === normalized);

  return foundIndex >= 0 ? foundIndex : 0;
}
