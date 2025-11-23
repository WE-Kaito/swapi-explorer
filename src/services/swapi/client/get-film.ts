import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { FilmDto } from "@/services/swapi/types";

export async function getFilm(id: string): Promise<FilmDto> {
    "use cache";
    cacheLife("max");
    cacheTag(`swapi-film-${id}`);

    const res = await fetch(`${SWAPI_BASE_URL}/films/${id}`);
    return res.json();
}
