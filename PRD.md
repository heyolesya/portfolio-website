# PRD — Portfolio Website for Olesia Petrochenkova

## Overview

A single-page portfolio website for a Content Producer showcasing video projects, professional experience, and skills. The site targets potential clients, collaborators, and employers in the media/entertainment industry.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion (scroll-triggered fade/slide effects) |
| Fonts | Google Fonts — Inter (body), Outfit or Sora (headings) |
| Deployment | Vercel or Netlify (static build) |

## Design Direction

- **Background:** Dark (#0a0a0a or similar near-black)
- **Accent:** Coral (~#FF6B6B or tuned variant)
- **Text:** Off-white primary, muted gray secondary
- **Feel:** Clean, cinematic, editorial
- **Layout:** Mobile-first, responsive (breakpoints: 640, 768, 1024, 1280px)
- **Navigation:** Fixed top nav with smooth scroll to sections

## Sections

### 1. Navigation

- Fixed/sticky header with transparent-to-solid background on scroll
- Links: About, Portfolio, Experience, Skills, Contact
- Mobile: hamburger menu with slide-in drawer

### 2. Hero

- Full-viewport height
- Name: **Olesia Petrochenkova**
- Title: **Content Producer**
- Tagline: "Music and Media Storytelling | YouTube & TV Projects | Strategy, Production, Promotion"
- Placeholder headshot (styled circle/rounded with subtle border glow)
- CTA button → scrolls to Contact section
- Subtle entrance animation (fade + slide up)

### 3. About

- Brief bio paragraph covering:
  - 9+ years of international experience
  - 60+ successful projects
  - Work with MTV Unplugged and multi-million-subscriber YouTube channels
  - Volunteer podcast production at BraveMaker nonprofit
- Optional: key stats displayed as animated counters (9+, 60+, etc.)
- Fade-in on scroll

### 4. Portfolio / Work

- Section title + short intro line
- Filter bar with categories: **All, YouTube, TV / Broadcast, Music Videos, Branded Content**
- Grid of 6 placeholder cards (2–3 columns responsive)
- Each card:
  - Thumbnail placeholder (16:9 aspect ratio)
  - Project title
  - Short description (1–2 lines)
  - Category tag
  - Click/hover → expandable modal or inline embed area for YouTube/Vimeo
- Smooth filter transitions (layout animation)

### 5. Experience Timeline

- Vertical timeline with alternating left/right layout (stacked on mobile)
- Entries:

| Role | Company | Period |
|---|---|---|
| Content Producer | Dark Matter Design, LLC | Oct 2024 – Present |
| Content Producer (Freelance) | TV, Digital, Social Media | Oct 2022 – Sep 2024 |
| Senior Producer, CIS & Baltic Region | Paramount | Dec 2018 – Oct 2022 |
| Content Producer & Entrepreneur | Digital, TV, Social Media | 2012 – 2017 |

- Each entry has a 1–2 line highlight
- Timeline nodes animate in on scroll

### 6. Skills & Tools

- Visual tags/badges in a flex-wrap layout
- Skills: YouTube Analytics, Content Strategy, Video Production, Cross-functional Team Leadership, Social Media Growth, Budget Management, Pre- & Post-Production, Animation Production
- Subtle hover effect on each badge
- Staggered fade-in animation

### 7. Contact

- Section with email and LinkedIn links
- Contact form (UI only, not wired up):
  - Fields: Name, Email, Message
  - Submit button (disabled or shows "Coming soon" toast)
- Email: olesya.petrochenkova@gmail.com
- LinkedIn: linkedin.com/in/olesiapetrochenkova

### 8. Footer

- Copyright line
- Repeat social links (LinkedIn, Email)

## SEO & Performance

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- Meta tags: title, description, Open Graph
- Lazy-load images and video embeds
- Lighthouse target: 90+ across all categories

## Project Structure (Planned)

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Portfolio.jsx
    ProjectCard.jsx
    Timeline.jsx
    Skills.jsx
    Contact.jsx
    Footer.jsx
  data/
    projects.js      ← placeholder project data
    experience.js    ← timeline entries
    skills.js        ← skills list
  App.jsx
  main.jsx
  index.css          ← Tailwind imports + custom styles
public/
  images/            ← headshot, thumbnails
index.html
```

## Implementation Plan

### Phase 1 — Scaffold & Layout
1. Initialize Vite + React project
2. Install Tailwind CSS, Framer Motion, Google Fonts
3. Set up base layout (App shell, Navbar, section containers)
4. Configure dark theme and color palette in Tailwind config

### Phase 2 — Build Sections (top to bottom)
5. Hero section with placeholder headshot and CTA
6. About section with bio text
7. Portfolio grid with filter bar and 6 placeholder cards
8. Experience timeline
9. Skills badges
10. Contact section with form UI
11. Footer

### Phase 3 — Polish
12. Scroll animations (Framer Motion `whileInView`)
13. Smooth scroll navigation
14. Responsive testing and adjustments
15. SEO meta tags
16. Final visual polish (spacing, typography, hover states)

## Out of Scope (for now)

- Contact form backend/integration
- CMS or admin panel
- Blog section
- Analytics integration
- Custom domain setup
