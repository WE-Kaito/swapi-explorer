import { cacheLife, cacheTag } from "next/cache";
import { swapiFetch, PageDto, VehicleDto } from "@/services/swapi";

export async function getVehiclesPage(page = 1): Promise<PageDto<VehicleDto>> {
    "use cache";
    cacheLife("max");
    cacheTag("swapi-vehicles");

    return swapiFetch<PageDto<VehicleDto>>(`/vehicles/?page=${page}`);
}
