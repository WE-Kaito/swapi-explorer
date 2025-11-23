import { getStarship } from "@/services/swapi";

type Props = { params: Promise<{ id: string }> };

export default async function StarshipPage({ params }: Props) {
  const { id } = await params;
  const starship = await getStarship(id);

  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
      <h1 className="text-2xl font-bold">{starship.name}</h1>
      <ul>
        <li>model: {starship.model}</li>
        <li>manufacturer: {starship.manufacturer}</li>
        <li>cost_in_credits: {starship.cost_in_credits}</li>
        <li>length: {starship.length}</li>
        <li>max_atmosphering_speed: {starship.max_atmosphering_speed}</li>
        <li>crew: {starship.crew}</li>
        <li>passengers: {starship.passengers}</li>
        <li>cargo_capacity: {starship.cargo_capacity}</li>
        <li>consumables: {starship.consumables}</li>
        <li>hyperdrive_rating: {starship.hyperdrive_rating}</li>
        <li>MGLT: {starship.MGLT}</li>
        <li>starship_class: {starship.starship_class}</li>
        <li>created: {starship.created}</li>
        <li>edited: {starship.edited}</li>
        <li>url: {starship.url}</li>
      </ul>
      <details>
        <summary>pilots</summary>
        {starship.pilots.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>films</summary>
        {starship.films.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
    </main>
  );
}
