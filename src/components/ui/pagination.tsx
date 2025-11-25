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

/*
 * A pagination component that adapts to the available width with truncation.
 * Always shows first, last, and current pages when truncated.
 *
 * @param {number} count - Total number of items provided by the API.
 * @param {number} currentPage - The current active page number by param.
 * @param {string} basePath - The base path for pagination links.
 *
 * @example Usage in a page component:
 *   type Props = { searchParams: Promise<{ page?: string }> };
 *
 *   export default async function PeoplePage({ searchParams }: Props) {
 *   const page = Number((await searchParams).page) || 1;
 *   const data = await getPeoplePage(page);
 *
 *   return (
 *     <PageContainer>
 *       <Heading>People</Heading>
 *       <Content />
 *       <Suspense fallback={<Skeleton className={"rounded-4xl"} />}>
 *         <Pagination count={data.count} currentPage={page} basePath="/people" />
 *       </Suspense>
 *     </PageContainer>
 *    );
 *   }
 */
export function Pagination({ count, currentPage, basePath }: Props) {
  const totalPages = Math.ceil(count / 10); // SWAPI page size is always 10
  const containerRef = useRef<HTMLDivElement>(null);
  const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const [visiblePages, setVisiblePages] = useState<number[]>(allPages);

  const prevHref = currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : null;
  const nextHref = currentPage < totalPages ? `${basePath}?page=${currentPage + 1}` : null;

  useEffect(() => {
    const container = containerRef.current;
    const button = container?.querySelector("a");

    if (!container || !button || totalPages <= 3) return;

    const checkOverflow = () => {
      const computedStyle = window.getComputedStyle(button);
      const buttonSize = parseFloat(computedStyle.width);

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
          <Button aria-hidden tabIndex={-1} className="rounded-none sm:rounded-full py-3.75">
            <ThickArrowLeftIcon className="scale-150" />
          </Button>
        </Link>
      ) : (
        <Button disabled aria-label="Previous page" className="rounded-none sm:rounded-full py-3.75">
          <ThickArrowLeftIcon className="scale-150" />
        </Button>
      )}

      <div ref={containerRef} className="flex w-full h-full items-center justify-evenly overflow-hidden min-w-0">
        {visiblePages.map((page, index) => (
          <Fragment key={page}>
            {visiblePages.length < totalPages && index > 0 && visiblePages[index] - visiblePages[index - 1] > 1 && (
              <DotsHorizontalIcon className="text-foreground/50" />
            )}
            <LinkCard
              href={`${basePath}?page=${page}`}
              showIcon={false}
              className={twJoin(
                "p-1 sm:p-2 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
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
          <Button aria-hidden tabIndex={-1} className="rounded-none sm:rounded-full py-3.75">
            <ThickArrowRightIcon className="scale-150" />
          </Button>
        </Link>
      ) : (
        <Button disabled aria-label="Next page" className="rounded-none sm:rounded-full py-3.75">
          <ThickArrowRightIcon className="scale-150" />
        </Button>
      )}
    </nav>
  );
}
