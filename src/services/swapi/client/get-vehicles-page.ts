import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { PageDto, VehicleDto } from "@/services/swapi/types";

export async function getVehiclesPage(page = 1): Promise<PageDto<VehicleDto>> {
    "use cache";
    cacheLife("max");
    cacheTag("swapi-vehicles");

    const res = await fetch(`${SWAPI_BASE_URL}/vehicles/?page=${page}`);
    return res.json();
}
