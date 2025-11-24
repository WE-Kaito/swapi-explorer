import { PropsWithChildren } from "react";
import Image from "next/image";

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="relative z-10 w-full py-1 flex justify-center bg-background/80 backdrop-blur-sm border-b border-foreground/10">
      <Image src="/assets/logo.svg" alt="STAR WARS" width={48} height={48} className={"absolute left-4 sm:left-8"} />
      {children}
    </header>
  );
}
