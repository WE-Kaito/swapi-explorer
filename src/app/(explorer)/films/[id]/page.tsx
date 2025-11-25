"use client";

import { use } from "react";
import { getFilm } from "@/services/swapi";
import { PageContainer, Heading, Button, FurtherLinksAccordion, DetailsTable } from "@/components";
import { useRouter } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default function FilmPage({ params }: Props) {
  const router = useRouter();
  const { id } = use(params);
  const film = use(getFilm(id));

  return (
    <PageContainer className={"px-8"}>
      <Heading>{film.title}</Heading>
      <section className="w-full">
        <Heading as={"h2"}>Details:</Heading>
        <DetailsTable
          entries={[
            { label: "Episode", value: film.episode_id },
            { label: "Opening Crawl", value: film.opening_crawl },
            { label: "Director", value: film.director },
            { label: "Producer", value: film.producer },
            { label: "Release Date", value: film.release_date },
          ]}
        />
      </section>
      <section className="w-full mb-4">
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
      <Button onClick={() => router.back()} className="mt-auto mb-8">
        Back
      </Button>
    </PageContainer>
  );
}
