import Link from "next/link";
import { getFilmsPage, extractResourcePath } from "@/services/swapi";

const romanNumerals: Record<number, string> = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
};

type Props = { searchParams: Promise<{ page?: number }> };

export default async function FilmsPage({ searchParams }: Props) {
  const page = (await searchParams).page ?? 1;
  const data = await getFilmsPage(page);
  const sortedFilms = data.results.toSorted((a, b) => a.episode_id - b.episode_id);

  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
      <h1 className="text-2xl font-bold">Films</h1>
      {sortedFilms.map((film) => (
        <Link
          key={film.url.toString()}
          href={extractResourcePath(film.url)}
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Episode {romanNumerals[film.episode_id]} - {film.title}
        </Link>
      ))}
    </main>
  );
}
