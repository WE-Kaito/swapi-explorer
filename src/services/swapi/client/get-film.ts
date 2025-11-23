import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, FilmDto } from "@/services/swapi";

export async function getFilm(id: string): Promise<FilmDto> {
  "use cache";
  cacheLife("max");
  cacheTag(`swapi-film-${id}`);

  return swapiFetch<FilmDto>(`/films/${id}`);
}
