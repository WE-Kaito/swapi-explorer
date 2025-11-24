import { Heading, LinkCard, PageContainer } from "@/components";

export default function Home() {
  return (
    <PageContainer>
      <Heading>SWAPI Explorer</Heading>
      <p className={"py-6"}>A Star Wars API navigation. May the force be with you!</p>
      <div className="px-28 flex flex-col gap-4 w-full">
        <LinkCard href="/people">People</LinkCard>
        <LinkCard href="/planets">Planets</LinkCard>
        <LinkCard href="/films">Films</LinkCard>
        <LinkCard href="/species">Species</LinkCard>
        <LinkCard href="/vehicles">Vehicles</LinkCard>
        <LinkCard href="/starships">Starships</LinkCard>
      </div>
    </PageContainer>
  );
}
