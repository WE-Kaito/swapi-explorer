import { Button, Heading, PageContainer } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Vehicle not found</Heading>
      <Link href="/vehicles" className="rounded-4xl">
        <Button aria-hidden tabIndex={-1}>
          Back to Vehicles
        </Button>
      </Link>
    </PageContainer>
  );
}
