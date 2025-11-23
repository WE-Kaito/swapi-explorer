import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
      <h1 className="text-2xl font-bold">SWAPI Explorer</h1>
      <Link href="/people" className="text-blue-600 hover:underline dark:text-blue-400">
        People
      </Link>
      <Link href="/planets" className="text-blue-600 hover:underline dark:text-blue-400">
        Planets
      </Link>
      <Link href="/films" className="text-blue-600 hover:underline dark:text-blue-400">
        Films
      </Link>
      <Link href="/species" className="text-blue-600 hover:underline dark:text-blue-400">
        Species
      </Link>
      <Link href="/vehicles" className="text-blue-600 hover:underline dark:text-blue-400">
        Vehicles
      </Link>
      <Link href="/starships" className="text-blue-600 hover:underline dark:text-blue-400">
        Starships
      </Link>
    </main>
  );
}
