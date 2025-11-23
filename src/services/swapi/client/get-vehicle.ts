import { cacheLife, cacheTag } from "next/cache";
import { SWAPI_BASE_URL } from "@/services/swapi/config";
import type { VehicleDto } from "@/services/swapi/types";

export async function getVehicle(id: string): Promise<VehicleDto> {
    "use cache";
    cacheLife("max");
    cacheTag(`swapi-vehicle-${id}`);

    const res = await fetch(`${SWAPI_BASE_URL}/vehicles/${id}`);
    return res.json();
}
