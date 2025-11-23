import { cn } from "@/components";
import { twJoin } from "tailwind-merge";

export function PageContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const baseClassName = twJoin(
    "flex flex-col items-center overflow-auto",
    "max-w-screen-lg mx-auto py-2 md:py-4 2xl:py-8"
  );

  return <main className={cn(baseClassName, className)}>{children}</main>;
}
