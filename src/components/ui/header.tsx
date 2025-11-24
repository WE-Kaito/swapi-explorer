import { PropsWithChildren } from "react";

export function Header({ children }: PropsWithChildren) {
    return (
        <header className="relative z-10 w-full py-1 flex justify-center bg-background/80 backdrop-blur-sm border-b border-foreground/10">
            {children}
        </header>
    );
}
