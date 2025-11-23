import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, PersonDto } from "@/services/swapi";

export async function getPerson(id: string): Promise<PersonDto> {
  "use cache";
  cacheLife("max");
  cacheTag(`swapi-person-${id}`);

  return swapiFetch<PersonDto>(`/people/${id}`);
}
