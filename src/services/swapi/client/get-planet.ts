import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, PlanetDto } from "@/services/swapi";

export async function getPlanet(id: string): Promise<PlanetDto> {
  "use cache";
  cacheLife("max");
  cacheTag(`swapi-planet-${id}`);

  return swapiFetch<PlanetDto>(`/planets/${id}`);
}
