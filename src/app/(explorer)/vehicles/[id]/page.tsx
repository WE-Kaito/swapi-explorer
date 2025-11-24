import { getVehicle } from "@/services/swapi";
import { Heading, PageContainer, Button, FurtherLinksAccordion } from "@/components";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function VehiclePage({ params }: Props) {
  const { id } = await params;
  const vehicle = await getVehicle(id);

  return (
    <PageContainer className={"px-8"}>
      <Heading>{vehicle.name}</Heading>
      <Heading as={"h2"}>Details:</Heading>
      <ul>
        <li>model: {vehicle.model}</li>
        <li>manufacturer: {vehicle.manufacturer}</li>
        <li>cost_in_credits: {vehicle.cost_in_credits}</li>
        <li>length: {vehicle.length}</li>
        <li>max_atmosphering_speed: {vehicle.max_atmosphering_speed}</li>
        <li>crew: {vehicle.crew}</li>
        <li>passengers: {vehicle.passengers}</li>
        <li>cargo_capacity: {vehicle.cargo_capacity}</li>
        <li>consumables: {vehicle.consumables}</li>
        <li>vehicle_class: {vehicle.vehicle_class}</li>
      </ul>
      <Heading as={"h2"}>Further Resources:</Heading>
      <FurtherLinksAccordion
        sections={[
          { label: "Pilots", urls: vehicle.pilots },
          { label: "Films", urls: vehicle.films },
        ]}
      />
      <Link href="/vehicles" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
