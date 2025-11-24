import { Heading, PageContainer, Button, FurtherLinksAccordion } from "@/components";
import { getSpecies } from "@/services/swapi";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function SpeciesDetailPage({ params }: Props) {
  const { id } = await params;
  const species = await getSpecies(id);

  return (
    <PageContainer className={"px-8"}>
      <Heading>{species.name}</Heading>
      <Heading as={"h2"}>Details:</Heading>
      <ul>
        <li>classification: {species.classification}</li>
        <li>designation: {species.designation}</li>
        <li>average_height: {species.average_height}</li>
        <li>skin_colors: {species.skin_colors}</li>
        <li>hair_colors: {species.hair_colors}</li>
        <li>eye_colors: {species.eye_colors}</li>
        <li>average_lifespan: {species.average_lifespan}</li>
        <li>homeworld: {species.homeworld}</li>
        <li>language: {species.language}</li>
      </ul>
      <Heading as={"h2"}>Further Resources:</Heading>
      <FurtherLinksAccordion
        sections={[
          { label: "people", urls: species.people },
          { label: "films", urls: species.films },
        ]}
      />
      <Link href="/species" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
