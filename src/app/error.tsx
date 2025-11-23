"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <button onClick={reset} className="rounded bg-zinc-900 px-4 py-2 text-white dark:bg-zinc-100 dark:text-black">
        Try again
      </button>
    </div>
  );
}
