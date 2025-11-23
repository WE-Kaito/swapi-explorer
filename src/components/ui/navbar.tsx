"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

const categories = [
  { href: "/people", label: "People" },
  { href: "/planets", label: "Planets" },
  { href: "/films", label: "Films" },
  { href: "/species", label: "Species" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/starships", label: "Starships" },
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
            <Link
              href="/"
              className={twJoin(
                "block select-none rounded px-3 py-2 text-sm font-medium no-underline outline-none",
                "hover:bg-foreground/10 focus:ring-2 focus:ring-foreground/20"
              )}
            >
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={twJoin(
              "group flex select-none items-center gap-1 rounded px-3 py-2 text-sm font-medium outline-none",
              "hover:bg-foreground/10 focus:ring-2 focus:ring-foreground/20",
              "data-[state=open]:bg-foreground/10"
            )}
          >
            Categories
            <CaretIcon />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content
            className={twJoin(
              "absolute left-0 top-0 w-full sm:w-auto",
              "data-[motion=from-end]:animate-enterFromRight",
              "data-[motion=from-start]:animate-enterFromLeft",
              "data-[motion=to-end]:animate-exitToRight",
              "data-[motion=to-start]:animate-exitToLeft"
            )}
          >
            <ul className={twJoin("grid w-[200px] gap-1 p-2", "sm:w-[300px] sm:grid-cols-2")}>
              {categories.map((category) => (
                <li key={category.href}>
                  <NavigationMenu.Link asChild>
                    <Link
                      href={category.href}
                      className={twJoin(
                        "block select-none rounded px-3 py-2 text-sm no-underline outline-none",
                        "hover:bg-foreground/10 focus:ring-2 focus:ring-foreground/20"
                      )}
                    >
                      {category.label}
                    </Link>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport
          className={twJoin(
            "relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top overflow-hidden rounded-md",
            "bg-background border border-foreground/10 shadow-lg",
            "transition-[width,height] duration-300",
            "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut",
            "sm:w-[var(--radix-navigation-menu-viewport-width)]"
          )}
        />
      </div>
    </NavigationMenu.Root>
  );
}

function CaretIcon() {
  return (
    <svg
      className={twJoin(
        "relative top-px h-3 w-3 transition-transform duration-200",
        "group-data-[state=open]:rotate-180"
      )}
      aria-hidden="true"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
