import Link from "next/link";
import { getVehiclesPage, extractResourcePath } from "@/services/swapi";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function VehiclesPage({ searchParams }: Props) {
    const page = (await searchParams).page ?? 1;
    const data = await getVehiclesPage(page);

    return (
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
            <h1 className="text-2xl font-bold">Vehicles</h1>
            {data.results.map((vehicle) => (
                <Link
                    key={vehicle.url.toString()}
                    href={extractResourcePath(vehicle.url)}
                    className="text-blue-600 hover:underline dark:text-blue-400"
                >
                    {vehicle.name}
                </Link>
            ))}
        </main>
    );
}
