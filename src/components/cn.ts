import { twMerge } from "tailwind-merge";

export function cn(base: string, className?: string) {
  return className ? twMerge(base, className) : base;
}
