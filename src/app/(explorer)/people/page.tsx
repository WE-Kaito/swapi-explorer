import { getPeoplePage, extractResourcePath } from "@/services/swapi";
import { PageContainer, Heading, ListLink } from "@/components";

type Props = { searchParams: Promise<{ page?: number }> };

export default async function PeoplePage({ searchParams }: Props) {
  const page = (await searchParams).page ?? 1;
  const data = await getPeoplePage(page);

  return (
    <PageContainer>
      <Heading as="h1">People</Heading>
      {data.results.map((person) => (
        <ListLink key={person.url} href={extractResourcePath(person.url)}>
          {person.name}
        </ListLink>
      ))}
    </PageContainer>
  );
}
