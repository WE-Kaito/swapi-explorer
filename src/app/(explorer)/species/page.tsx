import Link from "next/link";
import { getSpeciesPage, extractResourcePath } from "@/services/swapi";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function SpeciesListPage({ searchParams }: Props) {
    const page = (await searchParams).page ?? 1;
    const data = await getSpeciesPage(page);

    return (
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
            <h1 className="text-2xl font-bold">Species</h1>
            {data.results.map((species) => (
                <Link
                    key={species.url.toString()}
                    href={extractResourcePath(species.url)}
                    className="text-blue-600 hover:underline dark:text-blue-400"
                >
                    {species.name}
                </Link>
            ))}
        </main>
    );
}
