export default function Loading() {
    return (
        <div className="flex flex-col gap-4">
            <div className="h-8 w-48 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-40 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-24 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
    );
}
