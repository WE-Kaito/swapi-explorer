import { PropsWithChildren } from "react";
import { cn } from "@/components";

type HeadingProps = PropsWithChildren<{
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}>;

const headingSizes: Record<string, string> = {
  h1: "text-4xl py-6",
  h2: "text-3xl py-5",
  h3: "text-2xl py-4",
  h4: "text-xl py-3",
  h5: "text-lg py-2",
  h6: "text-base py-1",
};

export function Heading({ as: Tag = "h1", className, children }: HeadingProps) {
  return <Tag className={cn(`${headingSizes[Tag]} font-orbitron`, className)}>{children}</Tag>;
}
