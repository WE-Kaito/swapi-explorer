import { swapiFetch, PageDto, PersonDto } from "@/services/swapi";

export async function getPeoplePage(page = 1): Promise<PageDto<PersonDto>> {
  return swapiFetch<PageDto<PersonDto>>(`/people/?page=${page}`);
}
