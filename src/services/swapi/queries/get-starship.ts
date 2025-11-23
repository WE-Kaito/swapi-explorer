import { swapiFetch, StarshipDto } from "@/services/swapi";

export async function getStarship(id: string): Promise<StarshipDto> {
  return swapiFetch<StarshipDto>(`/starships/${id}`);
}
