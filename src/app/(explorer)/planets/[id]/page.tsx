import { getPlanet } from "@/services/swapi";
import { Heading, PageContainer, Button } from "@/components";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function PlanetPage({ params }: Props) {
  const { id } = await params;
  const planet = await getPlanet(id);

  return (
    <PageContainer>
      <Heading>{planet.name}</Heading>
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
      <Link href="/planets" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
