import { getFilm } from "@/services/swapi";
import { PageContainer, Heading, Button, FurtherLinksAccordion } from "@/components";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function FilmPage({ params }: Props) {
  const { id } = await params;
  const film = await getFilm(id);

  return (
    <PageContainer className={"px-8"}>
      <Heading>{film.title}</Heading>
      <Heading as={"h2"}>Details:</Heading>
      <ul>
        <li>episode_id: {film.episode_id}</li>
        <li>opening_crawl: {film.opening_crawl}</li>
        <li>director: {film.director}</li>
        <li>producer: {film.producer}</li>
        <li>release_date: {film.release_date}</li>
      </ul>
      <Heading as={"h2"}>Further Resources:</Heading>
      <FurtherLinksAccordion
        sections={[
          { label: "characters", urls: film.characters },
          { label: "planets", urls: film.planets },
          { label: "starships", urls: film.starships },
          { label: "vehicles", urls: film.vehicles },
          { label: "species", urls: film.species },
        ]}
      />
      <Link href="/films" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
