import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { PageDto, StarshipDto } from "@/services/swapi/types";

export async function getStarshipsPage(page = 1): Promise<PageDto<StarshipDto>> {
    "use cache";
    cacheLife("max");
    cacheTag("swapi-starships");

    const res = await fetch(`${SWAPI_BASE_URL}/starships/?page=${page}`);
    return res.json();
}
