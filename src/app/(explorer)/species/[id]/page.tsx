import { Heading, PageContainer, Button, FurtherLinksAccordion, DetailsTable } from "@/components";
import { getSpecies } from "@/services/swapi";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function SpeciesDetailPage({ params }: Props) {
  const { id } = await params;
  const species = await getSpecies(id);

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
      <Link href="/species" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
