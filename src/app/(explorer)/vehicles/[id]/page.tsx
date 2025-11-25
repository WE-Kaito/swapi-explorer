"use client";

import { use } from "react";
import { getVehicle } from "@/services/swapi";
import { Heading, PageContainer, Button, FurtherLinksAccordion, DetailsTable } from "@/components";
import { useRouter } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default function VehiclePage({ params }: Props) {
  const router = useRouter();
  const { id } = use(params);
  const vehicle = use(getVehicle(id));

  return (
    <PageContainer className={"px-8"}>
      <Heading>{vehicle.name}</Heading>
      <section className="w-full">
        <Heading as={"h2"}>Details:</Heading>
        <DetailsTable
          entries={[
            { label: "Model", value: vehicle.model },
            { label: "Manufacturer", value: vehicle.manufacturer },
            { label: "Cost", value: vehicle.cost_in_credits },
            { label: "Length", value: vehicle.length },
            { label: "Max Speed", value: vehicle.max_atmosphering_speed },
            { label: "Crew", value: vehicle.crew },
            { label: "Passengers", value: vehicle.passengers },
            { label: "Cargo Capacity", value: vehicle.cargo_capacity },
            { label: "Consumables", value: vehicle.consumables },
            { label: "Class", value: vehicle.vehicle_class },
          ]}
        />
      </section>
      <section className="w-full mb-4">
        <Heading as={"h2"}>Further Resources:</Heading>
        <FurtherLinksAccordion
          sections={[
            { label: "Pilots", urls: vehicle.pilots },
            { label: "Films", urls: vehicle.films },
          ]}
        />
      </section>
      <Button onClick={() => router.back()} className="mt-auto mb-8">
        Back
      </Button>
    </PageContainer>
  );
}
