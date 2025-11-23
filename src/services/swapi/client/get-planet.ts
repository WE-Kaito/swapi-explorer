import { swapiFetch, PlanetDto } from "@/services/swapi";

export async function getPlanet(id: string): Promise<PlanetDto> {
  return swapiFetch<PlanetDto>(`/planets/${id}`);
}
