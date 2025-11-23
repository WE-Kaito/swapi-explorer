import { swapiFetch, VehicleDto } from "@/services/swapi";

export async function getVehicle(id: string): Promise<VehicleDto> {
  return swapiFetch<VehicleDto>(`/vehicles/${id}`);
}
