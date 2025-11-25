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
            { label: "Rotation Period", value: planet.rotation_period },
            { label: "Orbital Period", value: planet.orbital_period },
            { label: "Diameter", value: planet.diameter },
            { label: "Climate", value: planet.climate },
            { label: "Gravity", value: planet.gravity },
            { label: "Terrain", value: planet.terrain },
            { label: "Surface Water", value: planet.surface_water },
            { label: "Population", value: planet.population },
          ]}
        />
      </section>
      <section className="w-full mb-4">
        <Heading as={"h2"}>Further Resources:</Heading>
        <FurtherLinksAccordion
          sections={[
            { label: "Residents", urls: planet.residents },
            { label: "Films", urls: planet.films },
          ]}
        />
      </section>
      <Link href="/planets" className="rounded-4xl mt-auto mb-8">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
