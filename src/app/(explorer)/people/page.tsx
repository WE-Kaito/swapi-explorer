import { getPeoplePage, extractResourcePath } from "@/services/swapi";
import { PageContainer, Heading, LinkCard, Pagination, Skeleton } from "@/components";
import { Suspense } from "react";

type Props = { searchParams: Promise<{ page?: string }> };

export default async function PeoplePage({ searchParams }: Props) {
  const page = Number((await searchParams).page) || 1;
  const data = await getPeoplePage(page);

  return (
    <PageContainer>
      <Heading>People</Heading>
      <div className="px-12 mb-4 flex flex-col gap-2 w-full">
        {data.results.map((person) => (
          <LinkCard key={person.url} href={extractResourcePath(person.url)}>
            {person.name}
          </LinkCard>
        ))}
      </div>
      <Suspense fallback={<Skeleton className={"rounded-4xl"} />}>
        <Pagination count={data.count} currentPage={page} basePath="/people" />
      </Suspense>
    </PageContainer>
  );
}
