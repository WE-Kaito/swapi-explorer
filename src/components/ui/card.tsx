import { ReactNode } from "react";
import { cn } from "@/components";
import { twJoin } from "tailwind-merge";

type Props = {
  className?: string;
  children: ReactNode;
};

export function Card({ className, children }: Props) {
  const baseClasses = twJoin(
    "flex w-full items-center justify-between rounded-md border border-foreground/10 px-4 py-1.75",
    "font-orbitron",
    "bg-foreground/2.5 backdrop-blur-xs transition-colors"
  );

  return <div className={cn(baseClasses, className)}>{children}</div>;
}
