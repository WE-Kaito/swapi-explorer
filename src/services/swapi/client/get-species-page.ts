import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, PageDto, SpeciesDto } from "@/services/swapi";

export async function getSpeciesPage(page = 1): Promise<PageDto<SpeciesDto>> {
    "use cache";
    cacheLife("max");
    cacheTag("swapi-species");

    return swapiFetch<PageDto<SpeciesDto>>(`/species/?page=${page}`);
}
