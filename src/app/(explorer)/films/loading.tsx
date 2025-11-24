import { PageContainer } from "@/components";

export default function Loading() {
  return (
    <PageContainer>
      <div className="h-8 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-36 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-36 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-36 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-36 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-36 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
    </PageContainer>
  );
}
