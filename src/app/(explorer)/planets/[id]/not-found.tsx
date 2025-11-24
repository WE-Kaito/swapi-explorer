import { Button, Heading, PageContainer } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Planet not found</Heading>
      <Link href="/planets" className="rounded-4xl">
        <Button aria-hidden tabIndex={-1}>
          Back to Planets
        </Button>
      </Link>
    </PageContainer>
  );
}
