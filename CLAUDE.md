# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite, http://localhost:5173)
- **Build:** `npm run build` (outputs to `dist/`)
- **Lint:** `npm run lint` (ESLint 9 flat config)
- **Preview prod build:** `npm run preview`

## Architecture

Single-page React portfolio site (no router) with an editorial/cinematic design. Sections render top-to-bottom in `App.jsx`:

```
Nav → Hero (+ Lightbox) → Work → Bottom → NewFooter
```

**Stack:** React 19 + Vite, Tailwind CSS v4 (via `@tailwindcss/vite` plugin). Plain JSX, no TypeScript.

**Navigation:** `mix-blend-mode: difference` fixed nav. Smooth scroll via anchor hrefs (`#work`, `#info`). No mobile hamburger menu.

**Reference design:** `exploration/olesia-portfolio-v4.html` — the static HTML prototype this React site is based on.

## Theme System

Custom colors and fonts defined as `@theme` variables in `src/index.css`:

- **Accent:** `neon` (#C78BFA purple), `neon-glow`, `neon-bright`
- **Warm:** `warm` (#C8956A gold)
- **Backgrounds:** `black` (#000), `near-black` (#0A0A0A), `surface` (#111)
- **Borders:** `line` (rgba(255,255,255,0.07))
- **Text:** `white` (#F2F0ED), `mid` (#6B6660), `dim` (#333028)
- **Fonts:** `font-display` (Bebas Neue) for headings/titles, `font-body` (DM Sans) for body, `font-serif` (Playfair Display italic) for the hero "Producer" text

Google Fonts loaded via `<link>` in `index.html`. Thumbnail gradient classes (`.t1`–`.t9`) defined in `index.css`.

## Animation Patterns

- **Hero:** CSS keyframe animations (`heroIn`, `fadeUp`, `reelCycle`) for entrance effects and the 4-frame crossfading gradient reel background
- **Lightbox:** CSS opacity transitions + `barFill` keyframe for the progress bar
- **Scroll reveal:** IntersectionObserver adds `.vis` class to `.reveal` elements (used in Work and Bottom components)
- **Hover effects:** CSS transitions for thumbnail scale/saturate, arrow slide-in, border color changes

No Framer Motion — all animations use CSS transitions/keyframes and IntersectionObserver.

## Data

All content lives in `src/data/projects.js` with named exports:
- `featuredProjects` — 2 large featured cards (MTV Unplugged, YouTube channel)
- `projects` — 7 project rows with `filterCat` for filtering
- `filters` — filter button definitions (All, TV & Live, Music Videos, Commercials, YouTube, Animation, Podcast)
- `skills` — 8 skill tag strings displayed in the Bottom section

## Key Decisions

- Editorial list-row layout for projects (not a card grid)
- Hero has a "Play Showreel" button that opens a Lightbox modal (placeholder for Vimeo/YouTube embed)
- About and Contact are combined in a single split-column Bottom section
- No separate experience timeline or skills section — skills shown as tags under the bio
- Filtering uses show/hide (conditional rendering), not animated layout transitions
