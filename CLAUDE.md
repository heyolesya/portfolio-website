# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite, http://localhost:5173)
- **Build:** `npm run build` (outputs to `dist/`)
- **Lint:** `npm run lint` (ESLint 9 flat config)
- **Preview prod build:** `npm run preview`

## Architecture

Single-page React portfolio site (no router) with a clean white/blue editorial design. Sections render top-to-bottom in `App.jsx`:

```
Nav → Hero (+ Lightbox) → Work → Bottom → NewFooter
```

**Stack:** React 19 + Vite, Tailwind CSS v4 (via `@tailwindcss/vite` plugin). Plain JSX, no TypeScript.

**Navigation:** Scroll-aware fixed nav (transparent → white blur on scroll). Smooth scroll via anchor hrefs (`#work`, `#info`). No mobile hamburger menu.

**Reference design:** `exploration/olesia-portfolio-white-blue.html` — the static HTML prototype this React site is based on.

## Theme System

Custom colors and fonts defined as `@theme` variables in `src/index.css`:

- **Accent:** `blue` (#2A2AFF electric blue), `blue-light` (rgba 0.08), `blue-hover` (#1A1AE0)
- **Backgrounds:** `white` (#FFFFFF), `bg` (#F5F5F3 light gray), `surface` (#EBEBEA)
- **Borders:** `line` (rgba(10,10,10,0.08)), `line-strong` (rgba(10,10,10,0.14))
- **Text:** `black` (#0A0A0A), `dark` (#2A2A2A), `mid` (#6B6B6B), `light` (#A0A0A0)
- **Fonts:** `font-display` (Bebas Neue) for headings/titles, `font-body` (DM Sans) for body, `font-serif` (Playfair Display italic) for the hero "Producer" text

Google Fonts loaded via `<link>` in `index.html`. Thumbnail gradient classes (`.t1`–`.t9`) are light gray tones defined in `index.css`.

## Animation Patterns

- **Hero:** CSS keyframe animations (`heroIn`, `fadeUp`) for entrance effects
- **Lightbox:** CSS opacity transitions + `barFill` keyframe for the progress bar. Vimeo showreel embedded with autoplay.
- **Scroll reveal:** IntersectionObserver adds `.vis` class to `.reveal` elements (used in Work and Bottom components)
- **Hover effects:** CSS transitions for project row indent, filter tab colors, skill tag fill, play button scale
- **Nav:** Scroll listener toggles white backdrop-blur background after 60px

No Framer Motion — all animations use CSS transitions/keyframes and IntersectionObserver.

## Data

All content lives in `src/data/projects.js` with named exports:
- `featuredProjects` — 2 large featured cards (MTV Unplugged, Believe in Love) with video embeds
- `projects` — 7 project rows with `filterCat` for filtering, most with `videoUrl` for iframe embeds
- `filters` — 9 filter buttons (All, TV, Live, Music Videos, Commercials, YouTube, Animation, Podcast, Documentaries)
- `skills` — 6 skill tag strings (Content Production, Creative Strategy, etc.)

## Key Decisions

- White background with electric blue (#2A2AFF) as the sole accent color
- Editorial list-row layout for projects (not a card grid)
- Video iframes embedded directly in project cards (YouTube embed URLs and Vimeo player URLs)
- Hero has a "Play Showreel" button that opens a Lightbox with Vimeo embed
- About and Contact are combined in a single split-column Bottom section with light gray background
- Skills shown as blue-bordered tags with hover fill effect
- Filtering uses conditional rendering (show/hide), not animated transitions
