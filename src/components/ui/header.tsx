import { PropsWithChildren } from "react";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

export function Header({ children }: PropsWithChildren) {
  return (
    <header
      className={twJoin(
        "fixed z-10 w-full h-12 pr-4 sm:pr-0 flex items-center justify-end sm:justify-center",
        " g-background/80 backdrop-blur-xs border-b border-foreground/10"
      )}
    >
      <Image src="/assets/logo.svg" alt="STAR WARS" width={48} height={48} className="absolute left-4 sm:left-8" />
      {children}
    </header>
  );
}
