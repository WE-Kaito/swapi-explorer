"use client";

import { Button, Heading, PageContainer } from "@/components";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <PageContainer>
      <Heading>Error</Heading>
      <p>Something went wrong...</p>
      <Button onClick={reset}>Try again</Button>
    </PageContainer>
  );
}
