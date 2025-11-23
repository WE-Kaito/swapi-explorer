import { Heading, ListLink, PageContainer } from "@/components";

export default function Home() {
  return (
    <PageContainer>
      <Heading as="h1">SWAPI Explorer</Heading>
      <ListLink href="/people">People</ListLink>
      <ListLink href="/planets">Planets</ListLink>
      <ListLink href="/films">Films</ListLink>
      <ListLink href="/species">Species</ListLink>
      <ListLink href="/vehicles">Vehicles</ListLink>
      <ListLink href="/starships">Starships</ListLink>
    </PageContainer>
  );
}
