"use client";

import { Button, Heading, PageContainer } from "@/components";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <PageContainer>
      <Heading>Error</Heading>
      <div className={"flex flex-col align-middle gap-8 w-60"}>
        <span>Something went wrong...</span>
        <Button onClick={reset}>Try again</Button>
      </div>
    </PageContainer>
  );
}
