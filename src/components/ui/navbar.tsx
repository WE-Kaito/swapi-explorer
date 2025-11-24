"use client"; // Radix NavigationMenu uses states internally

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twJoin } from "tailwind-merge";
import { LinkCard } from "@/components";

const categories = [
  { href: "/films", label: "Films" },
  { href: "/people", label: "People" },
  { href: "/planets", label: "Planets" },
  { href: "/starships", label: "Starships" },
  { href: "/species", label: "Species" },
  { href: "/vehicles", label: "Vehicles" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpening, setIsOpening] = useState(false);

  function handleHoverMenu() {
    setIsOpening(true);
    setTimeout(() => setIsOpening(false), 250);
  }

  return (
    <NavigationMenu.Root className="flex justify-center">
      <NavigationMenu.List className={"flex list-none gap-1 rounded-md p-1"}>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild active={pathname === "/"}>
            <LinkCard href="/" className={twJoin("border-0 bg-transparent py-2", pathname === "/" && "text-accent")}>
              Home
            </LinkCard>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={"relative"}>
          <NavigationMenu.Trigger
            onMouseEnter={handleHoverMenu}
            disabled={isOpening}
            className={twJoin(
              "group flex select-none items-center gap-1 rounded px-3 py-2 text-md font-orbitron",
              "hover:bg-foreground/10 focus:ring-2 focus:ring-foreground/20",
              "data-[state=open]:bg-foreground/10"
            )}
          >
            Categories
            <CaretDownIcon
              aria-hidden
              className={"group-data-[state=open]:rotate-180 transition-transform duration-200"}
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className={"grid w-[200px] gap-1 p-2 sm:w-[300px] sm:grid-cols-2"}>
              {categories.map((category) => {
                const isActive = pathname === category.href;
                return (
                  <li key={category.href}>
                    <NavigationMenu.Link asChild active={isActive}>
                      <LinkCard
                        href={category.href}
                        className={twJoin("border-0 bg-transparent py-2", isActive && "text-accent")}
                      >
                        {category.label}
                      </LinkCard>
                    </NavigationMenu.Link>
                  </li>
                );
              })}
            </ul>
          </NavigationMenu.Content>
          <NavigationMenu.Viewport
            className={twJoin(
              "absolute mt-2 left-1/2 -translate-x-1/2",
              "overflow-hidden rounded-md",
              "bg-background border border-foreground/10 shadow-lg",
              "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut"
            )}
          />
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
