import Link from "next/link";
import { getPlanetsPage, extractResourcePath } from "@/services/swapi";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function PlanetsPage({ searchParams }: Props) {
    const page = (await searchParams).page ?? 1;
    const data = await getPlanetsPage(page);

    return (
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
            <h1 className="text-2xl font-bold">Planets</h1>
            {data.results.map((planet) => (
                <Link
                    key={planet.url.toString()}
                    href={extractResourcePath(planet.url)}
                    className="text-blue-600 hover:underline dark:text-blue-400"
                >
                    {planet.name}
                </Link>
            ))}
        </main>
    );
}
