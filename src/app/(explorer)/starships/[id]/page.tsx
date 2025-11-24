import { getStarship } from "@/services/swapi";
import { Heading, PageContainer, Button, FurtherLinksAccordion } from "@/components";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function StarshipPage({ params }: Props) {
  const { id } = await params;
  const starship = await getStarship(id);

  return (
    <PageContainer className={"px-8"}>
      <Heading>{starship.name}</Heading>
      <ul>
        <li>model: {starship.model}</li>
        <li>manufacturer: {starship.manufacturer}</li>
        <li>cost_in_credits: {starship.cost_in_credits}</li>
        <li>length: {starship.length}</li>
        <li>max_atmosphering_speed: {starship.max_atmosphering_speed}</li>
        <li>crew: {starship.crew}</li>
        <li>passengers: {starship.passengers}</li>
        <li>cargo_capacity: {starship.cargo_capacity}</li>
        <li>consumables: {starship.consumables}</li>
        <li>hyperdrive_rating: {starship.hyperdrive_rating}</li>
        <li>MGLT: {starship.MGLT}</li>
        <li>starship_class: {starship.starship_class}</li>
      </ul>
      <Heading as={"h2"}>Further Resources:</Heading>
      <FurtherLinksAccordion
        sections={[
          { label: "pilots", urls: starship.pilots },
          { label: "films", urls: starship.films },
        ]}
      />
      <Link href="/starships" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
