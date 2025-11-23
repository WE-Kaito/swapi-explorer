import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { StarshipDto } from "@/services/swapi/types";

export async function getStarship(id: string): Promise<StarshipDto> {
    "use cache";
    cacheLife("max");
    cacheTag(`swapi-starship-${id}`);

    const res = await fetch(`${SWAPI_BASE_URL}/starships/${id}`);
    return res.json();
}
