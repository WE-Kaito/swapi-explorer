import { swapiFetch, PageDto, StarshipDto } from "@/services/swapi";

export async function getStarshipsPage(page = 1): Promise<PageDto<StarshipDto>> {
  return swapiFetch<PageDto<StarshipDto>>(`/starships/?page=${page}`);
}
