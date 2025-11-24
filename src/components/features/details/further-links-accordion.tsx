"use client";

import { useState, useRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { twJoin } from "tailwind-merge";
import { LinkCard, Skeleton } from "@/components";
import { swapiFetch, extractResourcePath } from "@/services/swapi";

type Link = { path: string; name: string };

async function fetchLink(url: string): Promise<Link | null> {
    try {
        const path = extractResourcePath(url);
        const data = await swapiFetch<{ name?: string; title?: string }>(path);
        const name = path.startsWith("/films") ? data.title! : data.name!;
        return { path, name };
    } catch {
        return null;
    }
}

export function FurtherLinksAccordion({ sections }: { sections: { label: string; urls: string[] }[] }) {
    const [links, setLinks] = useState<Record<string, (Link | null)[]>>({});
    const fetching = useRef(new Set<string>());

    const handleOpen = async (label: string, urls: string[]) => {
        if (fetching.current.has(label) || links[label]) return;
        fetching.current.add(label);

        setLinks((prev) => ({ ...prev, [label]: urls.map(() => null) }));

        for (let i = 0; i < urls.length; i++) {
            const result = await fetchLink(urls[i]);
            if (result) {
                setLinks((prev) => ({
                    ...prev,
                    [label]: prev[label].map((link, j) => (j === i ? result : link)),
                }));
            }
            if (i < urls.length - 1) await new Promise((r) => setTimeout(r, 500));
        }

        fetching.current.delete(label);
    };

    const handleValueChange = (openValues: string[]) => {
        for (const value of openValues) {
            const section = sections.find((s) => s.label === value);
            if (section) handleOpen(section.label, section.urls);
        }
    };

    return (
        <Accordion.Root type="multiple" onValueChange={handleValueChange} className="w-full">
            {sections.map((section) => {
                if (section.urls.length === 0) return null;

                const sectionLinks = links[section.label];

                return (
                    <Accordion.Item key={section.label} value={section.label} className="border-b border-foreground/10">
                        <Accordion.Header>
                            <Accordion.Trigger
                                className={twJoin(
                                    "group flex w-full items-center justify-between py-2",
                                    "font-orbitron text-foreground/80",
                                    "hover:text-foreground transition-colors",
                                    "cursor-pointer"
                                )}
                            >
                                <span>
                                    {section.label} ({section.urls.length})
                                </span>
                                <ChevronDownIcon className="size-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content
                            className={twJoin(
                                "overflow-hidden",
                                "data-[state=open]:animate-accordion-down",
                                "data-[state=closed]:animate-accordion-up"
                            )}
                        >
                            <div className="flex flex-col gap-2 pb-4">
                                {sectionLinks?.map((link, i) =>
                                    link ? (
                                        <LinkCard key={link.path} href={link.path}>
                                            {link.name}
                                        </LinkCard>
                                    ) : (
                                        <Skeleton key={i} />
                                    )
                                )}
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                );
            })}
        </Accordion.Root>
    );
}
