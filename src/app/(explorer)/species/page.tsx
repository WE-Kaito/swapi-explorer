import { getSpeciesPage, extractResourcePath } from "@/services/swapi";
import { Heading, PageContainer, LinkCard } from "@/components";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function SpeciesListPage({ searchParams }: Props) {
  const page = (await searchParams).page ?? 1;
  const data = await getSpeciesPage(page);

  return (
    <PageContainer>
      <Heading as="h1">Species</Heading>
      {data.results.map((species) => (
        <LinkCard key={species.url} href={extractResourcePath(species.url)}>
          {species.name}
        </LinkCard>
      ))}
    </PageContainer>
  );
}
