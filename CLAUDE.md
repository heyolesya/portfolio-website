# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite, http://localhost:5173)
- **Build:** `npm run build` (outputs to `dist/`)
- **Lint:** `npm run lint` (ESLint 9 flat config)
- **Preview prod build:** `npm run preview`

## Architecture

Single-page React portfolio site (no router). Sections render top-to-bottom in `App.jsx`:

```
Navbar → Hero → About → Portfolio → Timeline → Skills → Contact → Footer
```

**Stack:** React 19 + Vite, Tailwind CSS v4 (via `@tailwindcss/vite` plugin), Framer Motion for scroll/layout animations. Plain JSX, no TypeScript.

**Navigation:** Smooth scroll via `scrollIntoView()` targeting section `id` attributes (`#about`, `#portfolio`, `#experience`, `#skills`, `#contact`).

## Theme System

Custom colors and fonts are defined as `@theme` variables in `src/index.css` and used as Tailwind utility classes:

- **Accent:** `coral` (#FF6B6B), `coral-dark`, `coral-light`
- **Backgrounds:** `dark` (#0A0A0A), `dark-card` (#141414), `dark-border` (#1E1E1E)
- **Text:** `gray-muted` (#9CA3AF)
- **Fonts:** `font-heading` (Outfit) for headings, `font-body` (Inter) for body text

Google Fonts are loaded via `<link>` in `index.html`.

## Animation Patterns

All section components use Framer Motion with consistent patterns:
- `whileInView` with `viewport={{ once: true }}` for scroll-triggered fade/slide animations
- `AnimatePresence` + `layout` prop for the Portfolio filter grid transitions
- `whileHover` for card scale effects
- Staggered children using `staggerChildren` in parent variants

## Data

Placeholder content lives in `src/data/` as JS arrays:
- `projects.js` — 6 portfolio cards with category field used for filtering (categories: YouTube, TV / Broadcast, Music Videos, Branded Content)
- `experience.js` — 4 timeline entries
- `skills.js` — 8 skill strings

## Key Decisions

- Contact form is UI-only (not wired to a backend)
- Mobile nav uses a full-screen animated drawer (hamburger menu below `md` breakpoint)
- Navbar transitions from transparent to solid (`bg-dark/95` + backdrop blur) on scroll
- Portfolio grid: 1 col → 2 cols (md) → 3 cols (lg)
