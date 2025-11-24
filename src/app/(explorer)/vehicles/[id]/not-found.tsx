import { Heading, LinkCard, PageContainer } from "@/components";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Vehicle not found</Heading>
      <LinkCard href="/vehicles">Back to Vehicles</LinkCard>
      <LinkCard href="/">Go to Home</LinkCard>
    </PageContainer>
  );
}
