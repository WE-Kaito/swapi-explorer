import { Button, Heading, PageContainer } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Person not found</Heading>
      <Link href="/people" className="rounded-4xl">
        <Button aria-hidden tabIndex={-1}>
          Back to People
        </Button>
      </Link>
    </PageContainer>
  );
}
