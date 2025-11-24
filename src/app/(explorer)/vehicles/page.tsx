import { getVehiclesPage, extractResourcePath } from "@/services/swapi";
import { Heading, PageContainer, LinkCard, Pagination, Skeleton } from "@/components";
import { Suspense } from "react";

type Props = { searchParams: Promise<{ page?: string }> };

export default async function VehiclesPage({ searchParams }: Props) {
  const page = Number((await searchParams).page) || 1;
  const data = await getVehiclesPage(page);

  return (
    <PageContainer>
      <Heading>Vehicles</Heading>
      {data.results.map((vehicle) => (
        <LinkCard key={vehicle.url} href={extractResourcePath(vehicle.url)}>
          {vehicle.name}
        </LinkCard>
      ))}
      <Suspense fallback={<Skeleton className="rounded-4xl" />}>
        <Pagination count={data.count} currentPage={page} basePath="/vehicles" />
      </Suspense>
    </PageContainer>
  );
}
