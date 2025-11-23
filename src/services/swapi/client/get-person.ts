import { swapiFetch, PersonDto } from "@/services/swapi";

export async function getPerson(id: string): Promise<PersonDto> {
  return swapiFetch<PersonDto>(`/people/${id}`);
}
