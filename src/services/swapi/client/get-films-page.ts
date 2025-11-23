import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { PageDto, FilmDto } from "@/services/swapi/types";

export async function getFilmsPage(page = 1): Promise<PageDto<FilmDto>> {
    "use cache";
    cacheLife("max");
    cacheTag("swapi-films");

    const res = await fetch(`${SWAPI_BASE_URL}/films/?page=${page}`);
    return res.json();
}
