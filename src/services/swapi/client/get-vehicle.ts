import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, VehicleDto } from "@/services/swapi";

export async function getVehicle(id: string): Promise<VehicleDto> {
  "use cache";
  cacheLife("max");
  cacheTag(`swapi-vehicle-${id}`);

  return swapiFetch<VehicleDto>(`/vehicles/${id}`);
}
