import { getStarshipsPage, extractResourcePath } from "@/services/swapi";
import { Heading, PageContainer, LinkCard } from "@/components";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function StarshipsPage({ searchParams }: Props) {
  const page = (await searchParams).page ?? 1;
  const data = await getStarshipsPage(page);

  return (
    <PageContainer>
      <Heading as="h1">Starships</Heading>
      {data.results.map((starship) => (
        <LinkCard key={starship.url} href={extractResourcePath(starship.url)}>
          {starship.name}
        </LinkCard>
      ))}
    </PageContainer>
  );
}
