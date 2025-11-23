import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
        Go to Home
      </Link>
    </div>
  );
}
