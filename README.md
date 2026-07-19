# RoomAndDine — Marketing Site

The public marketing site for RoomAndDine (`roomanddine.com`) — a separate, static Vite/React
project from the actual app (which lives in its own repo and runs at `app.roomanddine.com`).
Login/Sign Up/Start Free Trial buttons here just link out to the app; there's no shared code,
API, or session between the two.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- React Router (client-side routing for `/`, `/terms`, `/privacy`)
- [Web3Forms](https://web3forms.com) — backend-less form submission for the Contact form and
  Book a Demo modal (no server of its own)

## Getting Started

```bash
npm install
cp .env.example .env   # then fill in VITE_WEB3FORMS_KEY (see below)
npm run dev
```

### Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_APP_URL` | Where Login/Sign Up/Demo-success buttons point. Defaults to `https://app.roomanddine.com` if unset — only needed locally to point at a dev instance of the app. |
| `VITE_WEB3FORMS_KEY` | Free access key from [web3forms.com](https://web3forms.com) (just enter an email, no account needed). Contact form and Book a Demo submissions are emailed to that address. Without it, forms show a clear "not connected yet" error instead of failing silently. |

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Typecheck and build for production (`dist/`) |
| `npm run preview` | Preview the production build locally |

## Before going live

- **`legal/` content (Terms/Privacy pages) is still a draft** — placeholders like Company Legal
  Name, Registered Address, and jurisdiction are highlighted in yellow on the actual pages
  (`src/pages/Terms.tsx`, `src/pages/Privacy.tsx`). Needs real business details and a lawyer's
  review before publishing for real customers.
- **`public/og-image.png` doesn't exist yet** — the `index.html` meta tags reference it for link
  previews (WhatsApp/LinkedIn/Facebook/X); add a real 1200×630 image or previews will show broken.
- Testimonials on the homepage are placeholder quotes (role-labeled, not fabricated named
  customers) — replace with real ones once you have them.
