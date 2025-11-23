import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { PlanetDto } from "@/services/swapi/types";

export async function getPlanet(id: string): Promise<PlanetDto> {
    "use cache";
    cacheLife("max");
    cacheTag(`swapi-planet-${id}`);

    const res = await fetch(`${SWAPI_BASE_URL}/planets/${id}`);
    return res.json();
}
