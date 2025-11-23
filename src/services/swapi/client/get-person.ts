import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { PersonDto } from "@/services/swapi/types";

export async function getPerson(id: string): Promise<PersonDto> {
    "use cache";
    cacheLife("max");
    cacheTag(`swapi-person-${id}`);

    const res = await fetch(`${SWAPI_BASE_URL}/people/${id}`);
    return res.json();
}
