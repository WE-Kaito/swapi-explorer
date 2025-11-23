import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { PageDto, PersonDto } from "@/services/swapi/types";

export async function getPeoplePage(page = 1): Promise<PageDto<PersonDto>> {
    "use cache";
    cacheLife("max");
    cacheTag("swapi-people");

    const res = await fetch(`${SWAPI_BASE_URL}/people/?page=${page}`);
    return res.json();
}
