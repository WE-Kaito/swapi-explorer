import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";
import { EnterIcon } from "@radix-ui/react-icons";
import { cn } from "@/components";

type Props = PropsWithChildren<
  LinkProps &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "aria-label" | "aria-current" | "className"> & {
      showIcon?: boolean;
    }
>;

export function LinkCard({ href, children, className, showIcon = true, ...rest }: Props) {
  const baseClasses = twJoin(
    "flex w-full items-center justify-between rounded-md border border-foreground/10 bg-foreground/5 px-4 py-1.75",
    "font-orbitron no-underline",
    "hover:bg-foreground/10 transition-colors"
  );

  return (
    <Link href={href} className={cn(baseClasses, className)} {...rest}>
      <span>{children}</span>
      {showIcon && <EnterIcon className="size-4 text-foreground/50" />}
    </Link>
  );
}
