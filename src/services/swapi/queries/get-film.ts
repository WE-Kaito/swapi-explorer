import { swapiFetch, FilmDto } from "@/services/swapi";

export async function getFilm(id: string): Promise<FilmDto> {
  return swapiFetch<FilmDto>(`/films/${id}`);
}
