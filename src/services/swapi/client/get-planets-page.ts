import { swapiFetch, PageDto, PlanetDto } from "@/services/swapi";

export async function getPlanetsPage(page = 1): Promise<PageDto<PlanetDto>> {
  return swapiFetch<PageDto<PlanetDto>>(`/planets/?page=${page}`);
}
