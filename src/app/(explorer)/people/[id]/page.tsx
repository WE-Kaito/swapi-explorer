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
            { label: "Height", value: person.height },
            { label: "Hair Color", value: person.hair_color },
            { label: "Skin Color", value: person.skin_color },
            { label: "Birth Year", value: person.birth_year },
            { label: "Gender", value: person.gender },
          ]}
        />
      </section>
      <section className="w-full mb-4">
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
      <Link href="/people" className="rounded-4xl mt-auto mb-8">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
