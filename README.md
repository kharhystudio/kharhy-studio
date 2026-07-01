# Print Layout Toolkit

Print Layout Toolkit is a fast, browser-based Next.js site with practical print calculators and guides for paper sizes, DPI, images, margins, bleed, booklets, posters, labels, and layout planning.

The calculators run client-side and do not require login, uploads, a database, or a backend API.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run test:calc
npm run build
npm run start
```

## Deploying on Vercel

1. Push this repository to GitHub.
2. Import it into Vercel as a Next.js project.
3. Set the production URL environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

The app defaults to `http://localhost:3000` for local development, so set `NEXT_PUBLIC_SITE_URL` before publishing.

## Custom Domain

Add your custom domain in the Vercel project settings, update DNS as Vercel instructs, then set `NEXT_PUBLIC_SITE_URL` to the final `https://` domain.

## Contact Email

The public contact email is configured in `lib/site.ts`:

```ts
NEXT_PUBLIC_CONTACT_EMAIL=hello@example.com
```

Replace `hello@example.com` before publishing.

## Search Console

Set this environment variable after Google Search Console gives you a verification token:

```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-token
```

The site also exposes:

- `/sitemap.xml`
- `/robots.txt`

## Analytics

Google Analytics is not enabled unless this variable is present:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

The integration point is in `components/AnalyticsScripts.tsx`. Update the Privacy Policy before enabling analytics.

## AdSense

AdSense is not enabled unless this variable is present:

```bash
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
```

No ad blocks or placeholders are included. Update the Privacy Policy before enabling ads.

## Main Routes

- `/`
- `/tools`
- `/guides`
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/accessibility`
- `/sitemap.xml`
- `/robots.txt`

## Tool Routes

- `/dpi-calculator`
- `/pixels-to-inches`
- `/inches-to-pixels`
- `/pixels-to-centimeters`
- `/image-print-size`
- `/print-resolution-checker`
- `/aspect-ratio-calculator`
- `/image-crop-calculator`
- `/paper-sizes`
- `/paper-size-converter`
- `/custom-paper-size`
- `/margin-calculator`
- `/bleed-calculator`
- `/safe-area-calculator`
- `/printable-area-calculator`
- `/sheet-yield-calculator`
- `/poster-tiling-calculator`
- `/booklet-page-count-calculator`
- `/booklet-imposition-guide`
- `/signature-calculator`
- `/book-spine-width-calculator`
- `/label-sheet-calculator`
- `/photo-print-layout-calculator`

Older compatibility routes under `/tools/[slug]` also work, but the canonical URLs are the root tool routes above.

## Guide Routes

- `/dpi-vs-ppi`
- `/print-bleed-guide`
- `/print-margins-guide`
- `/paper-size-guide`
- `/booklet-printing-guide`
- `/poster-printing-guide`
- `/print-resolution-guide`

Older compatibility routes under `/guides/[slug]` also work, but the canonical URLs are the root guide routes above.

## Project Structure

- `app/page.tsx` - homepage
- `app/[slug]/page.tsx` - canonical root pages for tools, guides, and legal pages
- `app/tools/page.tsx` - all tools directory
- `app/guides/page.tsx` - all guides directory
- `components/calculators/CalculatorRenderer.tsx` - all interactive calculators
- `components/pages/` - shared page layouts
- `lib/tools.ts` - tool metadata
- `lib/guides.ts` - guide content
- `lib/legalPages.ts` - trust and legal page content
- `lib/printMath.ts` - calculation utilities
- `lib/seo.ts` - metadata and JSON-LD helpers
- `lib/site.ts` - site URL, contact email, analytics, and AdSense config
