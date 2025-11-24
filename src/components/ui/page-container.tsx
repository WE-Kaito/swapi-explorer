import { cn } from "@/components";
import { twJoin } from "tailwind-merge";

export function PageContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const baseClassName = twJoin("flex flex-col items-center", "w-full max-w-screen-sm flex-1 mx-auto pt-4 sm:py-8");

  return <main className={cn(baseClassName, className)}>{children}</main>;
}
