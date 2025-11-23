import { getVehiclesPage, extractResourcePath } from "@/services/swapi";
import { Heading, PageContainer, LinkCard } from "@/components";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function VehiclesPage({ searchParams }: Props) {
  const page = (await searchParams).page ?? 1;
  const data = await getVehiclesPage(page);

  return (
    <PageContainer>
      <Heading as="h1">Vehicles</Heading>
      {data.results.map((vehicle) => (
        <LinkCard key={vehicle.url} href={extractResourcePath(vehicle.url)}>
          {vehicle.name}
        </LinkCard>
      ))}
    </PageContainer>
  );
}
