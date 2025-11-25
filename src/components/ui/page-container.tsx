import { cn } from "@/components";
import { PropsWithChildren } from "react";

export function PageContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
  const baseClassName = "flex flex-col items-center w-full max-w-screen-sm flex-1 mx-auto pt-4 sm:py-8";

  return <main className={cn(baseClassName, className)}>{children}</main>;
}
