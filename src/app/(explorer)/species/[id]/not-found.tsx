import { Heading, LinkCard, PageContainer } from "@/components";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Species not found</Heading>
      <LinkCard href="/species">Back to Species</LinkCard>
      <LinkCard href="/">Go to Home</LinkCard>
    </PageContainer>
  );
}
