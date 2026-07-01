# Form Studio

A Next.js PWA for Form Studio — a brand identity studio based in London.

## Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + inline styles
- **Animation:** [Motion](https://motion.dev/) (`motion/react`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **PWA:** [@ducanh2912/next-pwa](https://github.com/DuCanhGH/next-pwa) (Workbox-based service worker)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

The production build generates a service worker (`/sw.js`) and Workbox runtime files for offline support.

## PWA

The app ships as an installable Progressive Web App:

- **Manifest:** `/public/manifest.json`
- **Service worker:** generated to `/public/sw.js` at build time
- **Icons:** `/public/icons/` (72 → 512 px)
- **Theme colour:** `#f5f4f2` (warm off-white)
- **Display mode:** standalone

The service worker is disabled in development (`NODE_ENV !== 'production'`) to avoid caching conflicts during local development.
