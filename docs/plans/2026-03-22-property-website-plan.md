# 111 S 6th St — Property Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a luxury single-property listing website for 111 S 6th St, Fernandina Beach, FL 32034 and deploy it to Vercel via GitHub.

**Architecture:** Next.js 14 App Router with static export. Single scrolling page (`app/page.tsx`) composed of section components. All property data and photo URLs in `lib/data.ts`. Images served from Zillow CDN — no local image hosting. Tailwind CSS for all styling. Scroll animations via Intersection Observer in a custom hook.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS 3.4, TypeScript, Google Fonts (Playfair Display + Lato), Vercel

**Design Doc:** `docs/plans/2026-03-22-property-website-design.md`

---

## Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `.gitignore`

**Step 1: Initialize Next.js with Tailwind**

```bash
cd /Users/alexwhitesides/ClaudeCowork/1116thSt
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

If directory not empty, move docs folder temporarily or use `--yes` flag.

**Step 2: Configure next.config.ts for static export**

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

We need `unoptimized: true` because static export doesn't support Next.js image optimization, and we're serving from Zillow CDN anyway.

**Step 3: Configure Tailwind with custom theme**

In `tailwind.config.ts`, extend the theme with our color palette and fonts:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#2C2C2C",
        cream: "#FAF7F2",
        gold: "#C9A96E",
        muted: "#6B6B6B",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Lato", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "900px",
      },
    },
  },
  plugins: [],
};

export default config;
```

**Step 4: Set up globals.css**

```css
@import "tailwindcss";

@theme {
  --color-charcoal: #2C2C2C;
  --color-cream: #FAF7F2;
  --color-gold: #C9A96E;
  --color-muted: #6B6B6B;
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "Lato", Helvetica, Arial, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-cream);
  color: var(--color-charcoal);
}

.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

.scroll-bounce {
  animation: bounce 2s infinite;
}
```

**Step 5: Set up app/layout.tsx with fonts and metadata**

Configure Playfair Display + Lato via next/font/google. Set full metadata object with title, description, Open Graph, Twitter cards, canonical URL. Use `font-body` and `bg-cream text-charcoal` on body.

**Step 6: Verify it runs**

```bash
npm run dev
# Open http://localhost:3000 — should see default page with cream background
```

**Step 7: Commit**

```bash
git init
git add .
git commit -m "chore: scaffold Next.js 14 project with Tailwind and custom theme"
```

---

## Task 2: Property Data & Photo URLs

**Files:**
- Create: `lib/data.ts`

**Step 1: Create data file with all property info and 88 photo URLs**

This file exports all property data, feature lists, photo URLs, historical content, and neighborhood info used across every component. Every piece of content on the site comes from this file.

Key exports:
- `property` — price, beds, baths, sqft, lot, year, MLS, address, description
- `features` — array of { icon, title, description } for the features grid
- `photos` — array of all 88 Zillow CDN URLs with alt text
- `history` — historical narrative content and timeline entries
- `neighborhood` — nearby landmarks with distances
- `agents` — agent names, brokerage, phone, email
- `seoData` — JSON-LD structured data object

Photo URL pattern: `https://photos.zillowstatic.com/fp/{hash}-uncropped_scaled_within_1536_1152.webp`

All 88 hashes (from research):
a58f1d0b3943b31133d16105469b0c93, 8e372a0c736fc41a3c80c2bf87028948, 81ab7066af35df9f2b906ad5be4002f8, 9b6b871b82dab9120fa02a8ed7b478cb, 5d242e6b26317cdcf614f61df682ce61, b4d52072e0ece2be6b7cc1706689f84c, be65034c0d6e79c97308f1c2bf404487, 1a8d4ceaad327121ee09b128e8c7c35b, 35da708f351eb4e15d3adf28d98bc330, c6b67cfbb896a97cd401ff3868e7f2f1, 607c43ba7a54d5dad93385264c1422b7, e020c8bc4e9155b80f6d20f76983d672, 51bbb9a507bd4e7db4b576c96b9f644f, aa2609884eb6ceaadd9fc8b74bec9f99, 0c4974da5a4c516ff381c970f1e5ca94, d5c757f25e1cfa8d87c11195ab958bc1, 248d2fff870f66ce73a50e65a947658a, 1376a57ba5974719db885366c804a94e, 42d81c2642ab676feed946e39530befa, b7ca3cc07cc4b9f96062e157ea5ec9d4, 4489bca4e62ef3044b78360b41631c33, 7bafbdd1406e4af2502d88ce7a13c0fa, e71cb641a3621c9d4381d7d7f310ff5a, 4ed0fffa155c5c74caf131959f282c4c, a5e44b29c0953b4851a5ef4f8c0cbfc9, c9afd2cbaa5aeee4d870badb495b2f55, 3b8566c6d41f206a720d82092e88964c, 2c8d0101173904464501540d8c1069a6, ff835a900c50df8b06c6741f8b5f3add, 04e399f7caff68aa5fc285f01216c297, f6cbdb96d6a29a5c546b23ad1e49f51b, 533e4d2fbb549a81ba03cbc887389ade, 05a3a92c2ce5ea296792da28bf80d75a, 233c6171265665f35d2238fb412e7569, afd39a493986fc14539a0ffda4677cdf, d823e3bd2e52564806f11eb114ab1303, 10913c5776ec48a9ecdf8c5bb9a4ecff, ca2d4e14a7215c3095bc2aed3e2e27d5, 4401b6892f20c6307c9de9d1d731bf53, b689925a219b5d39b8fc908a76b17b33, 14758e738a49475bffc0ff0262ced012, ac87feba55219ba9f6870406a1947211, 3aaef26a639f23d5427eb3f2b326d651, e59986d971eb0f7d5e3915238a370d7c, 9a1cde182fc4cf88f267fea74999f560, 086a45b1d5fc1ab0de205e4089312788, bcfdd9b890b3eb45af94225d3f0dd0fd, 6650b58c8c1a8a9eb4b0240ee25c2a21, 908dbe47026428856a2cc9ef2e9d8316, 34a089d3b1e7f2b946e35e6c17251857, 57905accb0cdbcf3539f68fa238b63e6, c9b07fa7a11701f224f456ac08a4043c, b77c86eb74612cce9d3e36f8fd694bdf, 2524b2b4ac6c41797e718e13dc7119d2, 05b6ee5ae2d57e0db165d56cbd3af49e, 2635759253420c7a2ff2fae12f23c3ea, 7b785462729c87db8dcf691ba428b5db, fd9169bddde30ba3a5dc801351c7846b, 58ee3b519d2828b1942082e09aa982a9, e27c6a440c69ad159cae57b11c408311, efeffee98759462694d7a2b3d8661a85, 2bde3889e5c80c5b7c003f83ac923ae0, 56a6cd60da39134cc2994318e1a283cc, c4060b88a47cb7d6cce216941b75792d, 6159dc26069e0b7b9ee4a248ac9a426b, e92072da87846f2df9c2cb01471f280f, b85c3bbd52b4d684c1ce42eceda1eeca, cd4b19a9ca92feb82000dfebcb422ed1, 275b564226aa335dde6763db3f343fa9, 8fc9c798142de130c6342773f96c9f69, cbc4b0bbcc8f530d01adde0c8983b5a5, e5e5322edd78950f9a05bc660b28b6ae, 6ffe7e7186e8499d9cc3f1ce541af3ac, 38e5074cb563466b5a00ff5eda9a6ed1, d5c49e0580be97ff4d42f23b5d4b3a97, f0a06c490becef64566c0615038e4471, 11f7bb33ee13ae3ba8bb01fa56353a3d, 6a104f0861207aaacf8e7e78a33caef5, 03391eb2042350d6eca3ddb4aa7db1e4, 80850b39fbfaf4bbccdbf5d80b597178, 97bcee08007bb6ca2fb5ac4e69c46ede, a30506c6a311064e8d3253b3dba83b17, 44ed6d41a487ede23405c3be6b05b31f, dc1269c60a82ed54063b54d015cf06f6, 57ef1fb10a3d62748c6493510fecccf9, a52d55b8d849ebbe0554c845cdebdb55, 185bdc2a61ab7fdfe2f03c66dd19c85b, f093dac50399c72259640d727b5ff93e

**Step 2: Commit**

```bash
git add lib/data.ts
git commit -m "feat: add property data, photos, and content"
```

---

## Task 3: Scroll Animation Hook

**Files:**
- Create: `hooks/useScrollReveal.ts`

**Step 1: Create Intersection Observer hook**

Client component hook. Returns a ref to attach to any div. Adds `visible` class when element enters viewport (threshold 0.1). Unobserves after first intersection. Pairs with `.fade-up` CSS class from globals.css.

**Step 2: Commit**

```bash
git add hooks/useScrollReveal.ts
git commit -m "feat: add scroll reveal animation hook"
```

---

## Task 4: Navigation Component

**Files:**
- Create: `components/Navigation.tsx`

Client component. Fixed position, full width, z-50. Transparent initially, gains `bg-charcoal` on scroll via scroll event listener. Links: Home, Gallery, History, Neighborhood, Contact — smooth scroll to section IDs. Mobile: hamburger menu with slide-in panel. Logo/address text left, links right. All text uppercase Lato with letter-spacing 2px.

**Commit:** `git commit -m "feat: add navigation with scroll-triggered background"`

---

## Task 5: Hero Section

**Files:**
- Create: `components/Hero.tsx`

`min-h-screen` with photo #1 as CSS `background-image` (cover, center). Dark gradient overlay bottom-to-top. Address in font-display light weight, white, text-4xl md:text-6xl centered. "Fernandina Beach, Florida" uppercase tracking-widest below. Price "$999,000" in font-display text-3xl. Scroll indicator: SVG chevron-down with scroll-bounce animation.

**Commit:** `git commit -m "feat: add hero section with exterior photo"`

---

## Task 6: Stats Bar

**Files:**
- Create: `components/StatsBar.tsx`

Horizontal bar: Bedrooms (3), Bathrooms (3), Living Area (2,189 SF), Lot (4,735 SF), Year Built (c. 1884), MLS# (115315). Number in font-display text-2xl, label uppercase text-xs tracking-widest text-muted. Gold vertical dividers. 3x2 grid on mobile. fade-up animation.

**Commit:** `git commit -m "feat: add property stats bar"`

---

## Task 7: Story Section

**Files:**
- Create: `components/Story.tsx`

Max-width 900px centered, py-24. Headline "A Storied Residence in the Heart of Historic Fernandina" font-display text-3xl. Gold decorative line below. 2-3 lifestyle narrative paragraphs covering walking distance amenities, kitchen/fireplace details, 2024 Garden Tours feature, treehouse bedroom, detached studio. font-body text-lg leading-relaxed text-muted. fade-up.

**Commit:** `git commit -m "feat: add story narrative section"`

---

## Task 8: Full-Width Interior Photo

**Files:**
- Create: `components/InteriorPhoto.tsx`

Full-width, h-[60vh], bg-cover bg-center bg-fixed (parallax). Uses kitchen/fireplace photo URL from data.

**Commit:** `git commit -m "feat: add full-width interior photo section"`

---

## Task 9: Features Grid

**Files:**
- Create: `components/Features.tsx`

Heading "Distinctive Details". Gold line. 3-column grid (1 col mobile, 2 tablet). 9 feature cards: inline SVG icon (gold) + title font-display text-xl + description text-muted. Features: Thermador Kitchen, Two Fireplaces, Hardwood Floors, Detached Studio, Vintage Glass, Treehouse Bedroom, Built-in Banquette, French Doors, Zoned Climate. Staggered fade-up.

**Commit:** `git commit -m "feat: add features grid with icons"`

---

## Task 10: Photo Gallery with Lightbox

**Files:**
- Create: `components/Gallery.tsx`
- Create: `components/Lightbox.tsx`

Gallery: Heading "The Residence". CSS grid masonry with ~30 curated photos, lazy loading, hover zoom+overlay. Click opens lightbox at that index.

Lightbox: Fixed fullscreen overlay bg-black/90 z-50. Centered photo, left/right SVG chevron arrows, close X button, counter "12 / 88". Keyboard (arrows, escape) and touch swipe. Body scroll lock. Preload adjacent images.

**Commit:** `git commit -m "feat: add photo gallery with lightbox"`

---

## Task 11: History Section

**Files:**
- Create: `components/History.tsx`

Two-column desktop (stacks mobile). Left: "Where History Lives" heading, paragraphs on Isle of Eight Flags, Silk Stocking District, National Register, Golden Age. Pull quote about Smithsonian. Right: vertical timeline with gold line and dots — key dates from 1562 to 2024. fade-up animations.

**Commit:** `git commit -m "feat: add history section with timeline"`

---

## Task 12: Neighborhood Section

**Files:**
- Create: `components/Neighborhood.tsx`

White bg. "The Neighborhood" heading. 2-column grid of nearby landmarks with icon + name + distance. Below: Google Maps iframe embed centered on 30.6693, -81.4627. fade-up.

**Commit:** `git commit -m "feat: add neighborhood section with map"`

---

## Task 13: Agent Contact Section

**Files:**
- Create: `components/Contact.tsx`

Charcoal bg, white text. "Schedule a Private Showing" heading. Two columns: Left = agent info (Tina Smith & Brenda Slater, Pineywoods Realty, phone, email). Right = contact form (name, email, phone, message textarea). Gold submit button. Form uses mailto or Formspree action.

**Commit:** `git commit -m "feat: add agent contact section with form"`

---

## Task 14: Footer

**Files:**
- Create: `components/Footer.tsx`

Charcoal bg. Equal housing text, MLS disclaimer, Pineywoods Realty credit, copyright 2026. All text-muted text-xs centered.

**Commit:** `git commit -m "feat: add footer with disclaimers"`

---

## Task 15: Assemble Page & JSON-LD

**Files:**
- Modify: `app/page.tsx`
- Create: `components/JsonLd.tsx`

JsonLd component renders a script tag with type="application/ld+json" containing RealEstateListing + Residence + PostalAddress + GeoCoordinates schema. Note: the JSON-LD content is hardcoded static data (property details), not user input, so it is safe to render as a script tag.

page.tsx imports and renders all sections in order with section IDs for nav scrolling. Build and test locally with `npm run build && npm run start`.

**Commit:** `git commit -m "feat: assemble full page with JSON-LD structured data"`

---

## Task 16: Mobile Sticky CTA

**Files:**
- Create: `components/MobileCTA.tsx`
- Modify: `app/page.tsx`

Fixed bottom, full width, md:hidden. Gold bg, charcoal text. "Schedule a Showing" + phone icon. Links to #contact. Appears after scrolling past hero via Intersection Observer.

**Commit:** `git commit -m "feat: add mobile sticky CTA bar"`

---

## Task 17: Static Files (sitemap, robots)

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`

Sitemap with single URL https://111south6th.com. Robots allowing all crawlers with sitemap reference.

**Commit:** `git commit -m "feat: add sitemap, robots.txt"`

---

## Task 18: Deploy to GitHub + Vercel

**Step 1: Create GitHub repo**

```bash
gh repo create 111south6th --public --source=. --push
```

**Step 2: Deploy to Vercel**

```bash
npx vercel --yes
npx vercel --prod
```

**Step 3: Verify deployment** — check all sections, lightbox, mobile, JSON-LD.

**Step 4: Connect custom domain** — add 111south6th.com in Vercel dashboard.

---

## Execution Notes

- **Tasks 4-14 are independent** — all section components can be built in parallel by subagents since they share no state (only import from `lib/data.ts`)
- Task 2 (data) must complete before section components
- Task 3 (scroll hook) must complete before components that use it
- Task 15 (assembly) requires all sections complete
- Task 18 (deploy) requires Task 15 + 17 complete
