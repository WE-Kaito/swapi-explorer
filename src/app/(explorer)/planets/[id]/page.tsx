import { getPlanet } from "@/services/swapi";

type Props = { params: Promise<{ id: string }> };

export default async function PlanetPage({ params }: Props) {
  const { id } = await params;
  const planet = await getPlanet(id);

  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
      <h1 className="text-2xl font-bold">{planet.name}</h1>
      <ul>
        <li>rotation_period: {planet.rotation_period}</li>
        <li>orbital_period: {planet.orbital_period}</li>
        <li>diameter: {planet.diameter}</li>
        <li>climate: {planet.climate}</li>
        <li>gravity: {planet.gravity}</li>
        <li>terrain: {planet.terrain}</li>
        <li>surface_water: {planet.surface_water}</li>
        <li>population: {planet.population}</li>
        <li>created: {planet.created}</li>
        <li>edited: {planet.edited}</li>
        <li>url: {planet.url}</li>
      </ul>
      <details>
        <summary>residents</summary>
        {planet.residents.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>films</summary>
        {planet.films.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
    </main>
  );
}
