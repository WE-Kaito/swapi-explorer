import { PageContainer, Skeleton } from "@/components";

export default function Loading() {
  return (
    <PageContainer>
      <Skeleton text="SWAPI Explorer" className="h-12 mb-4" />
      <div className="px-12 mb-4 flex flex-col gap-2 w-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    </PageContainer>
  );
}
