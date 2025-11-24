import { getFilmsPage, extractResourcePath } from "@/services/swapi";
import { PageContainer, Heading, LinkCard } from "@/components";

const romanNumerals: Record<number, string> = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
};

type Props = { searchParams: Promise<{ page?: number }> };

export default async function FilmsPage({ searchParams }: Props) {
  const page = (await searchParams).page ?? 1;
  const data = await getFilmsPage(page);
  const sortedFilms = data.results.toSorted((a, b) => a.episode_id - b.episode_id);

  return (
    <PageContainer>
      <Heading>Films</Heading>
      {sortedFilms.map((film) => (
        <LinkCard key={film.url} href={extractResourcePath(film.url)}>
          Episode {romanNumerals[film.episode_id]} - {film.title}
        </LinkCard>
      ))}
    </PageContainer>
  );
}
