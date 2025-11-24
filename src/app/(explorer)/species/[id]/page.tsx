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
            { key: "classification", value: species.classification },
            { key: "designation", value: species.designation },
            { key: "average_height", value: species.average_height },
            { key: "skin_colors", value: species.skin_colors },
            { key: "hair_colors", value: species.hair_colors },
            { key: "eye_colors", value: species.eye_colors },
            { key: "average_lifespan", value: species.average_lifespan },
            { key: "language", value: species.language },
          ]}
        />
      </section>
      <section className="w-full">
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
