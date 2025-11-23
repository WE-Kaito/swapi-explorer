import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { PageDto, PlanetDto } from "@/services/swapi/types";

export async function getPlanetsPage(page = 1): Promise<PageDto<PlanetDto>> {
    "use cache";
    cacheLife("max");
    cacheTag("swapi-planets");

    const res = await fetch(`${SWAPI_BASE_URL}/planets/?page=${page}`);
    return res.json();
}
