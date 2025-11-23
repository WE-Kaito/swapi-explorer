# SWAPI Explorer

## Overview

Next.js 16 application for exploring the Star Wars API (SWAPI).

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Radix UI Primitives
- Cache Components enabled

## Architecture

### Folder Structure

- `src/app/` – Routing (App Router)
- `src/components/ui/` – Design System (Radix + Tailwind)
- `src/components/features/` – Feature-specific components
- `src/services/swapi/` – SWAPI queries and types
- `src/hooks/` – Custom hooks
- `src/lib/` – Utilities

### Import Convention

Always use absolute imports with `@/` alias. Never relative imports.
Never use separate `import type` – combine types and values in one import.

### File Naming Convention

No generic `types.ts` or `utils.ts`. Each file has a descriptive name and is re-exported via `index.ts`.

### Type Convention

Prefer `type` over `interface` unless extending is required.

### SWAPI Service Structure

```
src/services/swapi/
├── config.ts          # SWAPI_BASE_URL
├── queries/           # One fetch function per file, cached with "use cache"
├── types/             # One type per file, includes Page<T> for pagination
└── index.ts           # Re-exports all
```

### Routing

- Route group `(explorer)` for all SWAPI resources
- Dynamic routes `[id]` for detail pages
- Each route has `loading.tsx` and `error.tsx`

### Caching Strategy

SWAPI data never changes → `"use cache"` with `cacheLife("max")`.

### Tailwind Class Handling

- `twJoin` for internal component styles
- `cn(base, className?)` for merging with external props

## Conventions

### Code Style

- Prettier: 2 spaces, double quotes
- ESLint: Next.js + Prettier config

### Commits

Conventional Commits in English, imperative mood.

### Components

- Functional components
- `cn()` for external className merging
- `twJoin` for internal style composition

## SWAPI Resources

`/people`, `/planets`, `/films`, `/species`, `/vehicles`, `/starships`

## Key Files

- `next.config.ts` – cacheComponents: true
- `src/lib/cn.ts` – Tailwind class utilities
- `src/services/swapi/` – API layer
