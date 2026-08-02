# Ceylon Vantage — Website

A Next.js 16 site for Ceylon Vantage, a private Sri Lanka travel company.

## Before you do anything else

Your Gmail App Password was previously exposed in `.env.example`. That
file has been cleaned up, but if you haven't already, **revoke the old
App Password and generate a new one**:
Google Account → Security → App Passwords → revoke the old one → generate
a new one. Only put the new one in your hosting provider's environment
variables (see below) — never in a file that gets shared, zipped, or
committed to a public repo.

## Local setup

```bash
npm install
cp .env.example .env.local   # then fill in your real values
npm run dev
```

Open http://localhost:3000.

## Environment variables

See `.env.example` for the full list and setup steps. In short:

- `EMAIL_USER` / `EMAIL_APP_PASSWORD` — required, so the "Plan Your Trip"
  form can email inquiries to you.
- `EMAIL_TO` — optional, defaults to `EMAIL_USER`.
- `MONGODB_URI` — optional, only if you want a database backup of every
  inquiry in addition to the email.

## Deploying (Vercel — recommended, easiest with Next.js)

1. Push this project to a GitHub/GitLab repo (a fresh `git init` — the
   old repo history was removed from this delivery on purpose, since it
   contained the exposed credential mentioned above).
2. Import the repo at vercel.com/new.
3. In the project's Settings → Environment Variables, add
   `EMAIL_USER`, `EMAIL_APP_PASSWORD`, `EMAIL_TO` (and `MONGODB_URI` if
   you're using it) — the *new*, rotated app password, not the old one.
4. Deploy. Vercel handles HTTPS, image optimization, and the security
   headers configured in `next.config.ts` automatically.

Any other Node.js host works too (Netlify, Render, a VPS with
`npm run build && npm run start`) — just set the same environment
variables there.

## Adding content

- **Gallery photos**: drop `.jpg` / `.jpeg` / `.png` / `.webp` files into
  `public/images/gallery/` — they appear automatically, captioned from
  the filename. No code changes needed.
- **Testimonial collage photos**: drop up to 6 images into
  `public/images/testimonials/` as `collage-1.jpg` through
  `collage-6.jpg`.
- **Real guest quotes**: edit the `TESTIMONIALS` array in
  `src/components/Testimonials.tsx`.
- **Google Reviews**: once your Google Business Profile is verified and
  has reviews, see the instructions at the top of
  `src/app/reviews/page.tsx` for wiring it in.

## What's already handled

- Security headers (CSP, HSTS, X-Frame-Options, etc.) — `next.config.ts`
- Rate limiting + spam honeypot on the inquiry form —
  `src/app/api/inquiries/route.ts`
- SEO: sitemap (`src/app/sitemap.ts`), robots (`src/app/robots.ts`),
  Open Graph/Twitter cards and JSON-LD structured data (`layout.tsx`)
- Mobile web-app manifest (`public/manifest.json`) for "Add to Home
  Screen" support on phones