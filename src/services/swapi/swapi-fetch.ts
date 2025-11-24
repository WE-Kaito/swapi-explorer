import { notFound } from "next/navigation";
import { SWAPI_BASE_URL } from "@/services/swapi/config";

export async function swapiFetch<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${SWAPI_BASE_URL}${endpoint}`, {
        cache: "force-cache",
    });

    if (res.status === 404) notFound();
    if (!res.ok) throw new Error(`SWAPI Request failed: ${res.status} ${res.statusText}`);

    return res.json();
}
