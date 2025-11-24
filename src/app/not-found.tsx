import { Heading, LinkCard, PageContainer } from "@/components";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Page not found</Heading>
      <LinkCard href="/">Go to Home</LinkCard>
    </PageContainer>
  );
}
