import { getPlanetsPage, extractResourcePath } from "@/services/swapi";
import { Heading, PageContainer, LinkCard, Pagination, Skeleton } from "@/components";
import { Suspense } from "react";

type Props = { searchParams: Promise<{ page?: string }> };

export default async function PlanetsPage({ searchParams }: Props) {
  const page = Number((await searchParams).page) || 1;
  const data = await getPlanetsPage(page);

  return (
    <PageContainer>
      <Heading>Planets</Heading>
      <div className="px-12 mb-4 flex flex-col gap-2 w-full">
        {data.results.map((planet) => (
          <LinkCard key={planet.url} href={extractResourcePath(planet.url)}>
            {planet.name}
          </LinkCard>
        ))}
      </div>
      <Suspense fallback={<Skeleton className="rounded-4xl" />}>
        <Pagination count={data.count} currentPage={page} basePath="/planets" />
      </Suspense>
    </PageContainer>
  );
}
