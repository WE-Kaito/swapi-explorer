import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { PageDto, SpeciesDto } from "@/services/swapi/types";

export async function getSpeciesPage(page = 1): Promise<PageDto<SpeciesDto>> {
    "use cache";
    cacheLife("max");
    cacheTag("swapi-species");

    const res = await fetch(`${SWAPI_BASE_URL}/species/?page=${page}`);
    return res.json();
}
