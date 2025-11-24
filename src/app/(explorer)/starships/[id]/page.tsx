import { getStarship } from "@/services/swapi";
import { Heading, PageContainer, Button, FurtherLinksAccordion, DetailsTable } from "@/components";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function StarshipPage({ params }: Props) {
  const { id } = await params;
  const starship = await getStarship(id);

  return (
    <PageContainer className={"px-8"}>
      <Heading>{starship.name}</Heading>
      <section className="w-full">
        <Heading as={"h2"}>Details:</Heading>
        <DetailsTable
          entries={[
            { key: "model", value: starship.model },
            { key: "manufacturer", value: starship.manufacturer },
            { key: "cost_in_credits", value: starship.cost_in_credits },
            { key: "length", value: starship.length },
            { key: "max_atmosphering_speed", value: starship.max_atmosphering_speed },
            { key: "crew", value: starship.crew },
            { key: "passengers", value: starship.passengers },
            { key: "cargo_capacity", value: starship.cargo_capacity },
            { key: "consumables", value: starship.consumables },
            { key: "hyperdrive_rating", value: starship.hyperdrive_rating },
            { key: "MGLT", value: starship.MGLT },
            { key: "starship_class", value: starship.starship_class },
          ]}
        />
      </section>
      <section className="w-full">
        <Heading as={"h2"}>Further Resources:</Heading>
        <FurtherLinksAccordion
          sections={[
            { label: "Pilots", urls: starship.pilots },
            { label: "Films", urls: starship.films },
          ]}
        />
      </section>
      <Link href="/starships" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
