import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, PageDto, FilmDto } from "@/services/swapi";

export async function getFilmsPage(page = 1): Promise<PageDto<FilmDto>> {
  "use cache";
  cacheLife("max");
  cacheTag("swapi-films");

  return swapiFetch<PageDto<FilmDto>>(`/films/?page=${page}`);
}
