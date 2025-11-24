import { Button, Heading, PageContainer } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Film not found</Heading>
      <Link href="/films" className="rounded-4xl">
        <Button aria-hidden tabIndex={-1}>
          Back to Films
        </Button>
      </Link>
    </PageContainer>
  );
}
