# SWAPI Explorer

Next.js 16 application for exploring the Star Wars API (SWAPI).

## Tech Stack

- Next.js 16 (App Router)
- React 19.2
- TypeScript 5
- Tailwind CSS v4
- Radix UI (Accordion, Navigation Menu, Icons)
- tsparticles (animated starfield + ships)
- tailwind-merge

## Project Structure

```
src/
├── app/                      # App Router
│   └── (explorer)/           # SWAPI resource routes
│       └── [resource]/[id]/  # Detail pages
├── components/
│   ├── ui/                   # Design system
│   ├── features/             # Feature components
│   ├── cn.ts                 # Tailwind class merge utility
│   └── index.ts              # Re-exports
└── services/swapi/
    ├── queries/              # Data fetching functions
    ├── types/                # DTOs
    ├── swapi-fetch.ts        # Base fetch with caching
    └── config.ts             # API base URL
```

## Caching

Uses Next.js Data Cache via `fetch` with `cache: "force-cache"`. SWAPI data is static, so responses are cached indefinitely.

## Conventions

- Absolute imports with `@/` alias
- `type` over `interface`
- `twJoin` for internal styles, `cn()` for className props
- Prettier: 2 spaces, double quotes
- Conventional Commits (English, imperative)

## Routes

`/people`, `/planets`, `/films`, `/species`, `/vehicles`, `/starships` + `/[id]` detail pages
