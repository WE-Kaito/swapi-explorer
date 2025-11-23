import { getStarshipsPage, extractResourcePath } from "@/services/swapi";
import { Heading, PageContainer, ListLink } from "@/components";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function StarshipsPage({ searchParams }: Props) {
  const page = (await searchParams).page ?? 1;
  const data = await getStarshipsPage(page);

  return (
    <PageContainer>
      <Heading as="h1">Starships</Heading>
      {data.results.map((starship) => (
        <ListLink key={starship.url} href={extractResourcePath(starship.url)}>
          {starship.name}
        </ListLink>
      ))}
    </PageContainer>
  );
}
