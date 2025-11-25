"use client";

import { use } from "react";
import { Heading, PageContainer, Button, FurtherLinksAccordion, DetailsTable } from "@/components";
import { getSpecies } from "@/services/swapi";
import { useRouter } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default function SpeciesDetailPage({ params }: Props) {
  const router = useRouter();
  const { id } = use(params);
  const species = use(getSpecies(id));

  return (
    <PageContainer className={"px-8"}>
      <Heading>{species.name}</Heading>
      <section className="w-full">
        <Heading as={"h2"}>Details:</Heading>
        <DetailsTable
          entries={[
            { label: "Classification", value: species.classification },
            { label: "Designation", value: species.designation },
            { label: "Average Height", value: species.average_height },
            { label: "Skin Colors", value: species.skin_colors },
            { label: "Hair Colors", value: species.hair_colors },
            { label: "Eye Colors", value: species.eye_colors },
            { label: "Average Lifespan", value: species.average_lifespan },
            { label: "Language", value: species.language },
          ]}
        />
      </section>
      <section className="w-full mb-4">
        <Heading as={"h2"}>Further Resources:</Heading>
        <FurtherLinksAccordion
          sections={[
            { label: "Homeworld", urls: species.homeworld ? [species.homeworld] : [] },
            { label: "People", urls: species.people },
            { label: "Films", urls: species.films },
          ]}
        />
      </section>
      <Button onClick={() => router.back()} className="mt-auto mb-8">
        Back
      </Button>
    </PageContainer>
  );
}
