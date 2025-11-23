"use client"; // Radix NavigationMenu uses states internally

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
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
  return (
    <NavigationMenu.Root
      className={twJoin(
        "relative z-10 w-full py-1",
        "flex justify-center",
        "bg-background/80 backdrop-blur-sm border-b border-foreground/10"
      )}
    >
      <NavigationMenu.List className={twJoin("flex list-none gap-1 rounded-md p-1")}>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <LinkCard href="/" className={"border-0 bg-transparent"}>
              Home
            </LinkCard>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={"relative"}>
          <NavigationMenu.Trigger
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
            <ul className={twJoin("grid w-[200px] gap-1 p-2", "sm:w-[300px] sm:grid-cols-2")}>
              {categories.map((category) => (
                <li key={category.href}>
                  <NavigationMenu.Link asChild>
                    <LinkCard href={category.href} className={"border-0 bg-transparent"}>
                      {category.label}
                    </LinkCard>
                  </NavigationMenu.Link>
                </li>
              ))}
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
