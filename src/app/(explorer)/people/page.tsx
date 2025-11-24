import { getPeoplePage, extractResourcePath } from "@/services/swapi";
import { PageContainer, Heading, LinkCard } from "@/components";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function PeoplePage({ searchParams }: Props) {
  const page = (await searchParams).page ?? 1;
  const data = await getPeoplePage(page);

  return (
    <PageContainer>
      <Heading>People</Heading>
      {data.results.map((person) => (
        <LinkCard key={person.url} href={extractResourcePath(person.url)}>
          {person.name}
        </LinkCard>
      ))}
    </PageContainer>
  );
}
