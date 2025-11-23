import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, PageDto, StarshipDto } from "@/services/swapi";

export async function getStarshipsPage(page = 1): Promise<PageDto<StarshipDto>> {
  "use cache";
  cacheLife("max");
  cacheTag("swapi-starships");

  return swapiFetch<PageDto<StarshipDto>>(`/starships/?page=${page}`);
}
