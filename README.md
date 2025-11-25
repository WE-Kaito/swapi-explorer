# SWAPI Explorer

Browse the [Star Wars API](https://swapi.dev/) with a modern Next.js app.

## Features

- All SWAPI resources: People, Planets, Films, Species, Vehicles, Starships
- Paginated lists with detail pages
- Lazy-loaded related resources via accordion
- Animated starfield background with flying ships
- Fully cached responses

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI primitives and icons
- tsparticles

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Possible Improvements

- **Documentation**: More documentation for consistency
- **Testing**: E2E tests with Playwright for navigation and data fetching
- **Storybook**: Component documentation and visual testing
- **Accessibility**: Breadcrumbs, Screen reader behavior (/keyboard navigation) on non-interactive elements, ...
- **Tailwind**: Better utilization of theme variables and breakpoints
