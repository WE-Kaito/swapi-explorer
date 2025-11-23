import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, SpeciesDto } from "@/services/swapi";

export async function getSpecies(id: string): Promise<SpeciesDto> {
  "use cache";
  cacheLife("max");
  cacheTag(`swapi-species-${id}`);

  return swapiFetch<SpeciesDto>(`/species/${id}`);
}
