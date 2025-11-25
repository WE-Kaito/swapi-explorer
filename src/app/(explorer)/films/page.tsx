import { getFilmsPage, extractResourcePath } from "@/services/swapi";
import { PageContainer, Heading, LinkCard, Pagination, Skeleton } from "@/components";
import { Suspense } from "react";

const romanNumerals: Record<number, string> = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
};

type Props = { searchParams: Promise<{ page?: string }> };

export default async function FilmsPage({ searchParams }: Props) {
  const page = Number((await searchParams).page) || 1;
  const data = await getFilmsPage(page);
  const sortedFilms = data.results.toSorted((a, b) => a.episode_id - b.episode_id);

  return (
    <PageContainer className="pb-0 sm:pb-12">
      <Heading>Films</Heading>
      <div className="px-12 mb-4 flex flex-col gap-2 w-full">
        {sortedFilms.map((film) => (
          <LinkCard key={film.url} href={extractResourcePath(film.url)}>
            Episode {romanNumerals[film.episode_id]} - {film.title}
          </LinkCard>
        ))}
      </div>
      <Suspense fallback={<Skeleton className="rounded-4xl" />}>
        <Pagination count={data.count} currentPage={page} basePath="/films" />
      </Suspense>
    </PageContainer>
  );
}
