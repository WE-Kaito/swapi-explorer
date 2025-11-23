import Link from "next/link";
import { ReactNode } from "react";
import { twJoin } from "tailwind-merge";

type ListLinkProps = {
  href: string;
  children: ReactNode;
};

export function ListLink({ href, children }: ListLinkProps) {
  return (
    <Link
      href={href}
      className={twJoin(
        "block w-full rounded-md border border-foreground/10 bg-foreground/5 px-4 py-2",
        "text-center no-underline",
        "hover:bg-foreground/10 transition-colors"
      )}
    >
      {children}
    </Link>
  );
}
