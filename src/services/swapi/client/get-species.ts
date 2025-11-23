import { swapiFetch, SpeciesDto } from "@/services/swapi";

export async function getSpecies(id: string): Promise<SpeciesDto> {
  return swapiFetch<SpeciesDto>(`/species/${id}`);
}
