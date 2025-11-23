import Link from "next/link";
import { ReactNode } from "react";
import { twJoin } from "tailwind-merge";
import { cn } from "@/components";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function LinkCard({ href, children, className }: Props) {
  const baseClasses = twJoin(
    "block w-full rounded-md border border-foreground/10 bg-foreground/5 px-4 py-2",
    "font-orbitron no-underline",
    "hover:bg-foreground/10 transition-colors"
  );

  return (
    <Link href={href} className={cn(baseClasses, className)}>
      {children}
    </Link>
  );
}
