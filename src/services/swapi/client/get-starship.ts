import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, StarshipDto } from "@/services/swapi";

export async function getStarship(id: string): Promise<StarshipDto> {
    "use cache";
    cacheLife("max");
    cacheTag(`swapi-starship-${id}`);

    return swapiFetch<StarshipDto>(`/starships/${id}`);
}
