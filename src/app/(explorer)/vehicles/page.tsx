import { getVehiclesPage, extractResourcePath } from "@/services/swapi";
import { Heading, PageContainer, ListLink } from "@/components";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function VehiclesPage({ searchParams }: Props) {
  const page = (await searchParams).page ?? 1;
  const data = await getVehiclesPage(page);

  return (
    <PageContainer>
      <Heading as="h1">Vehicles</Heading>
      {data.results.map((vehicle) => (
        <ListLink key={vehicle.url} href={extractResourcePath(vehicle.url)}>
          {vehicle.name}
        </ListLink>
      ))}
    </PageContainer>
  );
}
