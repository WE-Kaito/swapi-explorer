import Link from "next/link";
import { getPeoplePage, extractResourcePath } from "@/services/swapi";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function PeoplePage({ searchParams }: Props) {
  const page = (await searchParams).page ?? 1;
  const data = await getPeoplePage(page);
  console.log(data);

  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
      <h1 className="text-2xl font-bold">People</h1>
      {data.results.map((person) => (
        <Link
          key={person.url.toString()}
          href={extractResourcePath(person.url)}
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          {person.name}
        </Link>
      ))}
    </main>
  );
}
