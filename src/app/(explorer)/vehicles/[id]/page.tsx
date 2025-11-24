import { getVehicle } from "@/services/swapi";
import { Heading, PageContainer, Button, FurtherLinksAccordion, DetailsTable } from "@/components";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function VehiclePage({ params }: Props) {
  const { id } = await params;
  const vehicle = await getVehicle(id);

  return (
    <PageContainer className={"px-8"}>
      <Heading>{vehicle.name}</Heading>
      <section className="w-full">
        <Heading as={"h2"}>Details:</Heading>
        <DetailsTable
          entries={[
            { key: "model", value: vehicle.model },
            { key: "manufacturer", value: vehicle.manufacturer },
            { key: "cost_in_credits", value: vehicle.cost_in_credits },
            { key: "length", value: vehicle.length },
            { key: "max_atmosphering_speed", value: vehicle.max_atmosphering_speed },
            { key: "crew", value: vehicle.crew },
            { key: "passengers", value: vehicle.passengers },
            { key: "cargo_capacity", value: vehicle.cargo_capacity },
            { key: "consumables", value: vehicle.consumables },
            { key: "vehicle_class", value: vehicle.vehicle_class },
          ]}
        />
      </section>
      <section className="w-full">
        <Heading as={"h2"}>Further Resources:</Heading>
        <FurtherLinksAccordion
          sections={[
            { label: "Pilots", urls: vehicle.pilots },
            { label: "Films", urls: vehicle.films },
          ]}
        />
      </section>
      <Link href="/vehicles" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
