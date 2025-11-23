import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { SpeciesDto } from "@/services/swapi/types";

export async function getSpecies(id: string): Promise<SpeciesDto> {
    "use cache";
    cacheLife("max");
    cacheTag(`swapi-species-${id}`);

    const res = await fetch(`${SWAPI_BASE_URL}/species/${id}`);
    return res.json();
}
