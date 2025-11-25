import { Heading, LinkCard, PageContainer } from "@/components";

export default function Home() {
  return (
    <PageContainer className="px-8 sm:px-12 gap-8">
      <Heading>SWAPI Explorer</Heading>
      <p className="pb-4">A Star Wars API navigation. May the force be with you!</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
        <LinkCard href="/people" className="py-4 sm:py-8 text-2xl sm:text-xl">
          People
        </LinkCard>
        <LinkCard href="/planets" className="py-4 sm:py-8 text-2xl sm:text-xl">
          Planets
        </LinkCard>
        <LinkCard href="/films" className="py-4 sm:py-8 text-2xl sm:text-xl">
          Films
        </LinkCard>
        <LinkCard href="/species" className="py-4 sm:py-8 text-2xl sm:text-xl">
          Species
        </LinkCard>
        <LinkCard href="/vehicles" className="py-4 sm:py-8 text-2xl sm:text-xl">
          Vehicles
        </LinkCard>
        <LinkCard href="/starships" className="py-4 sm:py-8 text-2xl sm:text-xl">
          Starships
        </LinkCard>
      </div>
    </PageContainer>
  );
}
