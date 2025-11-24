import { Button, Heading, PageContainer } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading>Page not found</Heading>
      <Link href={"/"} className={"rounded-4xl"}>
        <Button aria-hidden tabIndex={-1} className="sm:w">
          Go to Home
        </Button>
      </Link>
    </PageContainer>
  );
}
