import { getPlanet } from "@/services/swapi";
import { Heading, PageContainer, Button, FurtherLinksAccordion, DetailsTable } from "@/components";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function PlanetPage({ params }: Props) {
  const { id } = await params;
  const planet = await getPlanet(id);

  return (
    <PageContainer className={"px-8"}>
      <Heading>{planet.name}</Heading>
      <section className="w-full">
        <Heading as={"h2"}>Details:</Heading>
        <DetailsTable
          entries={[
            { key: "rotation_period", value: planet.rotation_period },
            { key: "orbital_period", value: planet.orbital_period },
            { key: "diameter", value: planet.diameter },
            { key: "climate", value: planet.climate },
            { key: "gravity", value: planet.gravity },
            { key: "terrain", value: planet.terrain },
            { key: "surface_water", value: planet.surface_water },
            { key: "population", value: planet.population },
          ]}
        />
      </section>
      <section className="w-full">
        <Heading as={"h2"}>Further Resources:</Heading>
        <FurtherLinksAccordion
          sections={[
            { label: "Residents", urls: planet.residents },
            { label: "Films", urls: planet.films },
          ]}
        />
      </section>
      <Link href="/planets" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
