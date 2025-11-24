import { Heading, LinkCard, PageContainer } from "@/components";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Planet not found</Heading>
      <LinkCard href="/planets">Back to Planets</LinkCard>
      <LinkCard href="/">Go to Home</LinkCard>
    </PageContainer>
  );
}
