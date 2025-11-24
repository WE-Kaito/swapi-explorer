import { getPerson } from "@/services/swapi";
import { PageContainer, Heading, Button, FurtherLinksAccordion, DetailsTable } from "@/components";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function PersonPage({ params }: Props) {
  const { id } = await params;
  const person = await getPerson(id);

  return (
    <PageContainer className={"px-8"}>
      <Heading>{person.name}</Heading>
      <section className="w-full">
        <Heading as={"h2"}>Details:</Heading>
        <DetailsTable
          entries={[
            { key: "height", value: person.height },
            { key: "hair_color", value: person.hair_color },
            { key: "skin_color", value: person.skin_color },
            { key: "birth_year", value: person.birth_year },
            { key: "gender", value: person.gender },
          ]}
        />
      </section>
      <section className="w-full">
        <Heading as={"h2"}>Further Resources:</Heading>
        <FurtherLinksAccordion
          sections={[
            { label: "Homeworld", urls: [person.homeworld] },
            { label: "Films", urls: person.films },
            { label: "Species", urls: person.species },
            { label: "Vehicles", urls: person.vehicles },
            { label: "Starships", urls: person.starships },
          ]}
        />
      </section>
      <Link href="/people" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
