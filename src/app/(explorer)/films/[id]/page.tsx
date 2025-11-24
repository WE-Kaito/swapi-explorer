import { getFilm } from "@/services/swapi";
import { PageContainer, Heading, Button, FurtherLinksAccordion, DetailsTable } from "@/components";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function FilmPage({ params }: Props) {
  const { id } = await params;
  const film = await getFilm(id);

  return (
    <PageContainer className={"px-8"}>
      <Heading>{film.title}</Heading>
      <section className="w-full">
        <Heading as={"h2"}>Details:</Heading>
        <DetailsTable
          entries={[
            { key: "episode_id", value: film.episode_id },
            { key: "opening_crawl", value: film.opening_crawl },
            { key: "director", value: film.director },
            { key: "producer", value: film.producer },
            { key: "release_date", value: film.release_date },
          ]}
        />
      </section>
      <section className="w-full">
        <Heading as={"h2"}>Further Resources:</Heading>
        <FurtherLinksAccordion
          sections={[
            { label: "Characters", urls: film.characters },
            { label: "Planets", urls: film.planets },
            { label: "Starships", urls: film.starships },
            { label: "Vehicles", urls: film.vehicles },
            { label: "Species", urls: film.species },
          ]}
        />
      </section>
      <Link href="/films" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
