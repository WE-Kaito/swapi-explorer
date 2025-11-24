import { getPlanet } from "@/services/swapi";
import { Heading, PageContainer, Button, FurtherLinksAccordion } from "@/components";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function PlanetPage({ params }: Props) {
  const { id } = await params;
  const planet = await getPlanet(id);

  return (
    <PageContainer className={"px-8"}>
      <Heading>{planet.name}</Heading>
      <Heading as={"h2"}>Details:</Heading>
      <ul>
        <li>rotation_period: {planet.rotation_period}</li>
        <li>orbital_period: {planet.orbital_period}</li>
        <li>diameter: {planet.diameter}</li>
        <li>climate: {planet.climate}</li>
        <li>gravity: {planet.gravity}</li>
        <li>terrain: {planet.terrain}</li>
        <li>surface_water: {planet.surface_water}</li>
        <li>population: {planet.population}</li>
      </ul>
      <Heading as={"h2"}>Further Resources:</Heading>
      <FurtherLinksAccordion
        sections={[
          { label: "Residents", urls: planet.residents },
          { label: "Films", urls: planet.films },
        ]}
      />
      <Link href="/planets" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
