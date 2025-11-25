import { cn } from "@/components";
import { twJoin } from "tailwind-merge";

type Props = {
  className?: string;
  text?: string;
};

export function Skeleton({ className, text }: Props) {
  const baseClasses = twJoin("block rounded-md h-10 animate-pulse bg-card-background/10", text ? "w-fit" : "w-full");

  return (
    <div className={cn(baseClasses, className)}>
      <span className="invisible px-16" aria-hidden>
        {text}
      </span>
    </div>
  );
}
