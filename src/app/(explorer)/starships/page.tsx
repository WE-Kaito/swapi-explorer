import Link from "next/link";
import { getStarshipsPage, extractResourcePath } from "@/services/swapi";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function StarshipsPage({ searchParams }: Props) {
    const page = (await searchParams).page ?? 1;
    const data = await getStarshipsPage(page);

    return (
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
            <h1 className="text-2xl font-bold">Starships</h1>
            {data.results.map((starship) => (
                <Link
                    key={starship.url.toString()}
                    href={extractResourcePath(starship.url)}
                    className="text-blue-600 hover:underline dark:text-blue-400"
                >
                    {starship.name}
                </Link>
            ))}
        </main>
    );
}
