# NovaGate Immigration — Public Website

Standalone marketing website for **NovaGate Immigration**, separate from the internal ERP and client portal applications.

**Production URL:** https://novagateimmi.com

## Stack

- React 19 + TypeScript
- Vite
- React Router
- Tailwind CSS v4

## Run locally

```bash
cd NovaGate_Website
npm install
npm run dev
```

Open **http://localhost:5180**

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```text
src/
  components/   layout, ui, home, contact, seo
  data/         site copy, services, articles, FAQs
  pages/        route screens
  index.css     design tokens + utilities
```

## Design system

- **Navy** `#0B1F3A` — primary brand
- **Accent** `#1A6B8A` — CTAs / emphasis
- **Mist / fog** — soft page atmosphere
- **Fonts:** Libre Baskerville (display) + Source Sans 3 (body)

## Contact form (email without ERP)

Cloudflare Pages hosts static files only — it does **not** send email by itself.

This site uses **[Web3Forms](https://web3forms.com)** (free tier) so consultation requests
arrive in your inbox while the ERP stays offline.

### 1. Create a Web3Forms key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your receiving email (e.g. `info@novagateimmi.com`)
3. Copy the **Access Key**

### 2. Local development

```bash
cd NovaGate_Website
cp .env.example .env
```

Edit `.env` and set your key on one line (no `#` comment):

```bash
VITE_WEB3FORMS_ACCESS_KEY=your-key-here
```

Then start the site:

```bash
npm run dev
```

If you see `Port 5180 is already in use`, stop the other terminal running the site, or run:

```bash
lsof -ti:5180 | xargs kill -9
npm run dev
```

### 3. Cloudflare Pages (production)

1. Pages project → **Settings** → **Environment variables**
2. Add:
   - **Name:** `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value:** your Web3Forms access key
   - Environments: Production (and Preview if you want)
3. **Redeploy** the site (Vite bakes `VITE_*` vars into the build)

Test the Contact page — you should receive an email.

Later, when Spring Boot is online, you can switch `submitContactForm` to your API.

## Deploy to Cloudflare Pages

1. Push this folder to GitHub (or connect the monorepo and set root directory to `NovaGate_Website`).
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Root directory:** `NovaGate_Website` (if monorepo)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare will use `public/_redirects` for SPA routing (`/* → /index.html`).

### Custom domain: novagateimmi.com

1. Cloudflare Pages project → **Custom domains** → Add `novagateimmi.com` and `www.novagateimmi.com`.
2. Follow DNS instructions (usually CNAME/`proxied` records if the domain is already on Cloudflare).
3. Enable HTTPS (automatic with Cloudflare).
4. Recommended: redirect `www` → apex (or the reverse) in Pages domain settings.

### Suggested host map

| Host | App |
|---|---|
| `novagateimmi.com` / `www` | This marketing site |
| Staff ERP / portal | Hosted separately when the database backend is available |

## SEO

- Per-page titles & meta descriptions via `Seo` component
- `public/robots.txt`
- `public/sitemap.xml` (update URLs if path structure changes)
- Semantic landmarks, headings, and descriptive image alt text

## Content updates

- Services: `src/data/services.ts`
- Articles / FAQs / team: `src/data/content.ts`
- Company contact block: `src/data/site.ts`
