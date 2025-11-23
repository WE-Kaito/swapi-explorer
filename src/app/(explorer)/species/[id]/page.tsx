import { getSpecies } from "@/services/swapi";

type Props = { params: Promise<{ id: string }> };

export default async function SpeciesDetailPage({ params }: Props) {
  const { id } = await params;
  const species = await getSpecies(id);

  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
      <h1 className="text-2xl font-bold">{species.name}</h1>
      <ul>
        <li>classification: {species.classification}</li>
        <li>designation: {species.designation}</li>
        <li>average_height: {species.average_height}</li>
        <li>skin_colors: {species.skin_colors}</li>
        <li>hair_colors: {species.hair_colors}</li>
        <li>eye_colors: {species.eye_colors}</li>
        <li>average_lifespan: {species.average_lifespan}</li>
        <li>homeworld: {species.homeworld}</li>
        <li>language: {species.language}</li>
        <li>created: {species.created}</li>
        <li>edited: {species.edited}</li>
        <li>url: {species.url}</li>
      </ul>
      <details>
        <summary>people</summary>
        {species.people.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>films</summary>
        {species.films.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
    </main>
  );
}
