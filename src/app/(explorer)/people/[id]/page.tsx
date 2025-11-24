import { getPerson } from "@/services/swapi";
import { PageContainer, Heading, Button, FurtherLinksAccordion } from "@/components";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function PersonPage({ params }: Props) {
  const { id } = await params;
  const person = await getPerson(id);

  return (
    <PageContainer className={"px-8"}>
      <Heading>{person.name}</Heading>
      <Heading as={"h2"}>Details:</Heading>
      <ul>
        <li>height: {person.height}</li>
        <li>hair_color: {person.hair_color}</li>
        <li>skin_color: {person.skin_color}</li>
        <li>birth_year: {person.birth_year}</li>
        <li>gender: {person.gender}</li>
        <li>homeworld: {person.homeworld}</li>
      </ul>
      <Heading as={"h2"}>Further Resources:</Heading>
      <FurtherLinksAccordion
        sections={[
          { label: "films", urls: person.films },
          { label: "species", urls: person.species },
          { label: "vehicles", urls: person.vehicles },
          { label: "starships", urls: person.starships },
        ]}
      />
      <Link href="/people" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
