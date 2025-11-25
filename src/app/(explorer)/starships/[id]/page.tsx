"use client";

import { use } from "react";
import { getStarship } from "@/services/swapi";
import { Heading, PageContainer, Button, FurtherLinksAccordion, DetailsTable } from "@/components";
import { useRouter } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default function StarshipPage({ params }: Props) {
  const router = useRouter();
  const { id } = use(params);
  const starship = use(getStarship(id));

  return (
    <PageContainer className={"px-8"}>
      <Heading>{starship.name}</Heading>
      <section className="w-full">
        <Heading as={"h2"}>Details:</Heading>
        <DetailsTable
          entries={[
            { label: "Model", value: starship.model },
            { label: "Manufacturer", value: starship.manufacturer },
            { label: "Cost", value: starship.cost_in_credits },
            { label: "Length", value: starship.length },
            { label: "Max Speed", value: starship.max_atmosphering_speed },
            { label: "Crew", value: starship.crew },
            { label: "Passengers", value: starship.passengers },
            { label: "Cargo Capacity", value: starship.cargo_capacity },
            { label: "Consumables", value: starship.consumables },
            { label: "Hyperdrive Rating", value: starship.hyperdrive_rating },
            { label: "MGLT", value: starship.MGLT },
            { label: "Class", value: starship.starship_class },
          ]}
        />
      </section>
      <section className="w-full mb-4">
        <Heading as={"h2"}>Further Resources:</Heading>
        <FurtherLinksAccordion
          sections={[
            { label: "Pilots", urls: starship.pilots },
            { label: "Films", urls: starship.films },
          ]}
        />
      </section>
      <Button onClick={() => router.back()} className="mt-auto mb-8">
        Back
      </Button>
    </PageContainer>
  );
}
