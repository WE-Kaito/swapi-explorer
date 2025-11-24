import { Button, Heading, PageContainer } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Starship not found</Heading>
      <Link href="/starships" className="rounded-4xl">
        <Button aria-hidden tabIndex={-1}>
          Back to Starships
        </Button>
      </Link>
    </PageContainer>
  );
}
