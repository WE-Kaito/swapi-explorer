import { Button, Heading, PageContainer } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Species not found</Heading>
      <Link href="/species" className="rounded-4xl">
        <Button aria-hidden tabIndex={-1}>
          Back to Species
        </Button>
      </Link>
    </PageContainer>
  );
}
