import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/components";
import { twJoin } from "tailwind-merge";

export function Button({ className, children, ...rest }: ComponentPropsWithoutRef<"button">) {
  const baseClasses = twJoin(
    "rounded-full px-6 py-3",
    "font-orbitron",
    "bg-gradient-to-b from-accent/20 to-accent/10 border border-accent/30",
    "shadow-lg",
    "hover:from-accent/30 hover:to-accent/20 hover:shadow-xl",
    "active:from-accent/40 active:to-accent/30 active:shadow-inner",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "transition-all duration-150"
  );

  return (
    <button className={cn(baseClasses, className)} {...rest}>
      {children}
    </button>
  );
}
