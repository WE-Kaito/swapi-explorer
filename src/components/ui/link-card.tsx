import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";
import { cn } from "@/components";

type Props = PropsWithChildren<
    LinkProps & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "aria-label" | "aria-current" | "className">
>;

export function LinkCard({ href, children, className, ...rest }: Props) {
  const baseClasses = twJoin(
    "block w-full rounded-md border border-foreground/10 bg-foreground/5 px-4 py-2",
    "font-orbitron no-underline",
    "hover:bg-foreground/10 transition-colors"
  );

  return (
    <Link href={href} className={cn(baseClasses, className)} {...rest}>
      {children}
    </Link>
  );
}
