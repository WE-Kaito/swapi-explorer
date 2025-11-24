import { ComponentPropsWithoutRef, MouseEvent, KeyboardEvent } from "react";
import { cn } from "@/components";
import { twJoin } from "tailwind-merge";

export function Button(props: ComponentPropsWithoutRef<"button">) {
  const { className, children, disabled, onClick, onKeyDown, ...rest } = props;

  const baseClasses = twJoin(
    "rounded-full px-4 py-2 sm:px-6 sm:py-3",
    "font-orbitron",
    "bg-gradient-to-b from-accent/20 to-accent/10 border border-accent/30",
    "shadow-lg",
    "hover:from-accent/30 hover:to-accent/20 hover:shadow-xl",
    "active:from-accent/40 active:to-accent/30 active:shadow-inner",
    "cursor-pointer transition-all duration-150",
    "aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
    "aria-disabled:hover:from-accent/20 aria-disabled:hover:to-accent/10 aria-disabled:hover:shadow-lg",
    "aria-disabled:active:from-accent/20 aria-disabled:active:to-accent/10 aria-disabled:active:shadow-lg"
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled && e.key === "Enter") {
      e.preventDefault();
      return;
    }
    onKeyDown?.(e);
  };

  return (
    <button
      className={cn(baseClasses, className)}
      aria-disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </button>
  );
}
