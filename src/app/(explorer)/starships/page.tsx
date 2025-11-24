import { getStarshipsPage, extractResourcePath } from "@/services/swapi";
import { Heading, PageContainer, LinkCard, Pagination, Skeleton } from "@/components";
import { Suspense } from "react";

type Props = { searchParams: Promise<{ page?: string }> };

export default async function StarshipsPage({ searchParams }: Props) {
  const page = Number((await searchParams).page) || 1;
  const data = await getStarshipsPage(page);

  return (
    <PageContainer>
      <Heading>Starships</Heading>
      <div className="px-12 mb-4 flex flex-col gap-2 w-full">
        {data.results.map((starship) => (
          <LinkCard key={starship.url} href={extractResourcePath(starship.url)}>
            {starship.name}
          </LinkCard>
        ))}
      </div>
      <Suspense fallback={<Skeleton className="rounded-4xl" />}>
        <Pagination count={data.count} currentPage={page} basePath="/starships" />
      </Suspense>
    </PageContainer>
  );
}
