"use client";

import Link from "next/link";
import { DotsHorizontalIcon, ThickArrowLeftIcon, ThickArrowRightIcon } from "@radix-ui/react-icons";
import { Fragment, useEffect, useRef, useState } from "react";
import { twJoin } from "tailwind-merge";
import { Button } from "./button";
import { LinkCard } from "./link-card";

type Props = {
  count: number;
  currentPage: number;
  basePath: string;
};

export function Pagination({ count, currentPage, basePath }: Props) {
  const totalPages = Math.ceil(count / 10); // SWAPI page size is always 10
  const containerRef = useRef<HTMLDivElement>(null);
  const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const [visiblePages, setVisiblePages] = useState<number[]>(allPages);

  const prevHref = currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : null;
  const nextHref = currentPage < totalPages ? `${basePath}?page=${currentPage + 1}` : null;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || totalPages <= 3) return;

    const checkOverflow = () => {
      const isDesktop = window.innerWidth >= 640; // sm breakpoint
      const buttonSize = isDesktop ? 40 : 24; // w-10 : w-6
      const requiredWidth = totalPages * buttonSize + (totalPages - 1);

      if (requiredWidth > container.clientWidth) {
        setVisiblePages(Array.from(new Set([1, currentPage, totalPages])));
      } else {
        setVisiblePages(allPages);
      }
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(container);

    return () => observer.disconnect();
  }, [totalPages, currentPage, allPages]);

  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label={`Pagination. Total: ${totalPages} pages`}
      className="flex items-center justify-between align-middle w-full gap-2 h-12 mt-auto"
    >
      {prevHref ? (
        <Link href={prevHref} aria-label="Previous page" className={"rounded-4xl"}>
          <Button aria-hidden tabIndex={-1} className="sm:w">
            <ThickArrowLeftIcon className={"sm:scale-150"} />
          </Button>
        </Link>
      ) : (
        <Button disabled aria-label="Previous page">
          <ThickArrowLeftIcon className={"sm:scale-150"} />
        </Button>
      )}

      <div ref={containerRef} className="flex w-full h-full ev items-center justify-evenly overflow-hidden min-w-0">
        {visiblePages.map((page, index) => (
          <Fragment key={page}>
            {visiblePages.length < totalPages && index > 0 && <DotsHorizontalIcon className="text-foreground/50" />}
            <LinkCard
              href={`${basePath}?page=${page}`}
              showIcon={false}
              className={twJoin(
                "w-6 h-6 p-0 sm:w-10 sm:h-10 sm:p-2 rounded-full flex items-center justify-center",
                page === currentPage && "text-accent"
              )}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </LinkCard>
          </Fragment>
        ))}
      </div>

      {nextHref ? (
        <Link href={nextHref} aria-label="Next page" className={"rounded-4xl"}>
          <Button aria-hidden tabIndex={-1}>
            <ThickArrowRightIcon className={"sm:scale-150"} />
          </Button>
        </Link>
      ) : (
        <Button disabled aria-label="Next page">
          <ThickArrowRightIcon className={"sm:scale-150"} />
        </Button>
      )}
    </nav>
  );
}
