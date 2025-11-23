import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, PageDto, PersonDto } from "@/services/swapi";

export async function getPeoplePage(page = 1): Promise<PageDto<PersonDto>> {
  "use cache";
  cacheLife("max");
  cacheTag("swapi-people");

  return swapiFetch<PageDto<PersonDto>>(`/people/?page=${page}`);
}
