import { swapiFetch, PageDto, SpeciesDto } from "@/services/swapi";

export async function getSpeciesPage(page = 1): Promise<PageDto<SpeciesDto>> {
  return swapiFetch<PageDto<SpeciesDto>>(`/species/?page=${page}`);
}
