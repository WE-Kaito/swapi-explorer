import { getPlanetsPage, extractResourcePath } from "@/services/swapi";
import { Heading, PageContainer, LinkCard } from "@/components";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function PlanetsPage({ searchParams }: Props) {
  const page = (await searchParams).page ?? 1;
  const data = await getPlanetsPage(page);

  return (
    <PageContainer>
      <Heading as="h1">Planets</Heading>
      {data.results.map((planet) => (
        <LinkCard key={planet.url} href={extractResourcePath(planet.url)}>
          {planet.name}
        </LinkCard>
      ))}
    </PageContainer>
  );
}
