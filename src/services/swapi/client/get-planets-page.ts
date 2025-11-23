import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, PageDto, PlanetDto } from "@/services/swapi";

export async function getPlanetsPage(page = 1): Promise<PageDto<PlanetDto>> {
  "use cache";
  cacheLife("max");
  cacheTag("swapi-planets");

  return swapiFetch<PageDto<PlanetDto>>(`/planets/?page=${page}`);
}
