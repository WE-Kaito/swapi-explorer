import { PageContainer, Skeleton } from "@/components";

export default function Loading() {
  return (
    <PageContainer className="px-8">
      <Skeleton className="h-10 w-48 my-4" />
      <section className="w-full">
        <Skeleton className="h-8 w-24 my-2" />
        <Skeleton className="h-50 mb-2" />
      </section>
      <section className="w-full">
        <Skeleton className="h-8 w-48 my-2" />
        <Skeleton className="h-24" />
      </section>
    </PageContainer>
  );
}
