import { swapiFetch, PageDto, VehicleDto } from "@/services/swapi";

export async function getVehiclesPage(page = 1): Promise<PageDto<VehicleDto>> {
  return swapiFetch<PageDto<VehicleDto>>(`/vehicles/?page=${page}`);
}
