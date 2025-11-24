import { getSpeciesPage, extractResourcePath } from "@/services/swapi";
import { Heading, PageContainer, LinkCard, Pagination, Skeleton } from "@/components";
import { Suspense } from "react";

type Props = { searchParams: Promise<{ page?: string }> };

export default async function SpeciesListPage({ searchParams }: Props) {
  const page = Number((await searchParams).page) || 1;
  const data = await getSpeciesPage(page);

  return (
    <PageContainer>
      <Heading>Species</Heading>
      {data.results.map((species) => (
        <LinkCard key={species.url} href={extractResourcePath(species.url)}>
          {species.name}
        </LinkCard>
      ))}
      <Suspense fallback={<Skeleton className="rounded-4xl" />}>
        <Pagination count={data.count} currentPage={page} basePath="/species" />
      </Suspense>
    </PageContainer>
  );
}
