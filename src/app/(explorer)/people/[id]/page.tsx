"use client";

import { use } from "react";
import { getPerson } from "@/services/swapi";
import { PageContainer, Heading, Button, FurtherLinksAccordion, DetailsTable } from "@/components";
import { useRouter } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default function PersonPage({ params }: Props) {
  const router = useRouter();
  const { id } = use(params);
  const person = use(getPerson(id));

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
      <Button onClick={() => router.back()} className="mt-auto mb-8">
        Back
      </Button>
    </PageContainer>
  );
}
