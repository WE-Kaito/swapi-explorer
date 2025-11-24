import { Heading, LinkCard, PageContainer } from "@/components";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Starship not found</Heading>
      <LinkCard href="/starships">Back to Starships</LinkCard>
      <LinkCard href="/">Go to Home</LinkCard>
    </PageContainer>
  );
}
