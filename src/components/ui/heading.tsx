import { PropsWithChildren } from "react";
import { cn } from "@/components";

type HeadingProps = PropsWithChildren<{
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}>;

const headingSizes: Record<string, string> = {
  h1: "text-4xl pb-4 pt-2",
  h2: "text-3xl py-2",
  h3: "text-2xl py-1",
};

export function Heading({ as: Tag = "h1", className, children }: HeadingProps) {
  return <Tag className={cn(`${headingSizes[Tag]} font-orbitron`, className)}>{children}</Tag>;
}
