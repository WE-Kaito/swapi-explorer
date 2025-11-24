import { PageContainer, Skeleton } from "@/components";

export default function Loading() {
  return (
    <PageContainer>
      <Skeleton text="SWAPI Explorer" className="h-12 mb-4" />
      <div className="px-28 mt-4 flex flex-col gap-4 w-full">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    </PageContainer>
  );
}
