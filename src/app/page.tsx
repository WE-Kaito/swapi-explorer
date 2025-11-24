import { Button, Heading, LinkCard, PageContainer } from "@/components";

export default function Home() {
  return (
    <PageContainer>
      <Heading>SWAPI Explorer</Heading>
      <LinkCard href="/people">People</LinkCard>
      <LinkCard href="/planets">Planets</LinkCard>
      <LinkCard href="/films">Films</LinkCard>
      <LinkCard href="/species">Species</LinkCard>
      <LinkCard href="/vehicles">Vehicles</LinkCard>
      <LinkCard href="/starships">Starships</LinkCard>
    </PageContainer>
  );
}
