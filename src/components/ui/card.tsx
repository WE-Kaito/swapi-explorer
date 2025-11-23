import { ReactNode } from "react";
import { cn } from "@/components";

type Props = {
  className?: string;
  children: ReactNode;
};

export function Card({ className, children }: Props) {
  const baseClassName = "rounded-md border border-foreground/10 bg-foreground/5 px-4 py-3";

  return <div className={cn(baseClassName, className)}>{children}</div>;
}
