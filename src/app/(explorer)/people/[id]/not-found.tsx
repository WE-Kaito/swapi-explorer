import { Heading, LinkCard, PageContainer } from "@/components";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Person not found</Heading>
      <LinkCard href="/people">Back to People</LinkCard>
      <LinkCard href="/">Go to Home</LinkCard>
    </PageContainer>
  );
}
