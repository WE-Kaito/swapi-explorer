import { swapiFetch, PageDto, FilmDto } from "@/services/swapi";

export async function getFilmsPage(page = 1): Promise<PageDto<FilmDto>> {
  return swapiFetch<PageDto<FilmDto>>(`/films/?page=${page}`);
}
