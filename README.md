# JA Group Services Ltd — Corporate Website

**Live domain:** jagroupservices.co.uk  
**Tech stack:** React 19 · TypeScript · Vite · Express · Drizzle ORM · MySQL · BetterAuth · Tailwind CSS · shadcn/ui

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Environment Variables](#environment-variables)
4. [Database Setup](#database-setup)
5. [Running Locally](#running-locally)
6. [Building for Production](#building-for-production)
7. [Deployment](#deployment)
   - [Cloudflare Workers](#cloudflare-workers)
   - [Cloudflare Pages + Workers](#cloudflare-pages--workers)
   - [Node.js VPS / Docker](#nodejs-vps--docker)
8. [Admin Portal](#admin-portal)
9. [Project Structure](#project-structure)
10. [Available Scripts](#available-scripts)

---

## Prerequisites

| Tool | Minimum version |
|------|----------------|
| Node.js | 18.17.0 |
| npm | 9.0.0 |
| MySQL | 8.0 (or PlanetScale / Turso-compatible) |

---

## Installation

```bash
# Clone the repository
git clone https://github.com/your-org/ja-group-services.git
cd ja-group-services

# Install dependencies
npm install

# Copy environment template
cp .env.example .env
# Edit .env and fill in all required values (see Environment Variables below)
```

---

## Environment Variables

Copy `.env.example` to `.env` and populate every value. See [`.env.example`](.env.example) for the full list with descriptions.

**Critical variables:**

| Variable | Purpose |
|----------|---------|
| `DB_HOST` | MySQL host |
| `DB_PORT` | MySQL port (default 3306) |
| `DB_USER` | MySQL username |
| `DB_PASS` | MySQL password |
| `DB_NAME` | MySQL database name |
| `BETTER_AUTH_SECRET` | 64-character random string for session encryption |
| `ADMIN_SEED_TOKEN` | One-time token used to create the first admin account |
| `SMTP_HOST` | SMTP server for contact form emails |
| `SMTP_PORT` | SMTP port (587 for TLS, 465 for SSL) |
| `SMTP_USER` | SMTP username / sender address |
| `SMTP_PASS` | SMTP password |
| `GOOGLE_ANALYTICS_ID` | GA4 Measurement ID (optional) |

> **Important:** This project was originally built on GoDaddy Airo, which injects database credentials via `/alloc/config.json` at runtime. After migration, the `src/server/db/config.ts` file must be updated to read from standard environment variables instead. See [Database Setup](#database-setup) below.

---

## Database Setup

### Updating the database config for self-hosted deployment

The file `src/server/db/config.ts` currently reads credentials from `/alloc/config.json` (a GoDaddy Airo-specific path). After migration, replace its contents with:

```typescript
// src/server/db/config.ts — self-hosted version
export interface DatabaseCredentials {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export function getDatabaseCredentials(): DatabaseCredentials {
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;
  const database = process.env.DB_NAME;

  if (!host || !port || !user || !password || !database) {
    throw new Error('Missing required database environment variables: DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME');
  }

  return {
    host,
    port: parseInt(port, 10),
    user,
    password,
    database,
  };
}
```

### Creating the database schema

Run the migration script to create all required tables:

```bash
node scripts/create-admin-tables.mjs
```

This creates the following tables:
- `user` — BetterAuth user accounts
- `session` — BetterAuth sessions
- `account` — BetterAuth OAuth accounts
- `verification` — BetterAuth email verification tokens
- `admin_policies` — CMS-managed legal/policy pages
- `admin_pages` — CMS-managed page hero content and SEO
- `admin_nav_links` — CMS-managed navigation links
- `admin_seo_settings` — Per-page SEO overrides
- `admin_audit_log` — Admin action audit trail

Alternatively, use Drizzle Kit (after updating `drizzle.config.ts` to read from env vars):

```bash
npm run db:migrate
```

---

## Running Locally

```bash
# Development server with hot module replacement
npm run dev
# → http://localhost:5173

# Preview production build locally
npm run build
npm run preview
```

---

## Building for Production

```bash
npm run build
```

This produces:
- `dist/client/` — Static frontend assets (HTML, JS, CSS, images)
- `dist/server.bundle.mjs` — Bundled Express SSR server

The server entry point is `dist/server.bundle.mjs`. Start it with:

```bash
node dist/server.bundle.mjs
```

Environment variables `PORT` (default 3000) and `HOST` (default 0.0.0.0) control the listening address.

---

## Deployment

### Node.js VPS / Docker

The simplest deployment path. Build the project and run the server bundle directly.

**Dockerfile example:**

```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "dist/server.bundle.mjs"]
```

**Environment variables** must be injected at runtime (via Docker `-e` flags, a `.env` file, or a secrets manager).

### Cloudflare Workers

> ⚠️ **Significant adaptation required.** The current server is a standard Node.js/Express application. Cloudflare Workers run in the V8 isolate runtime, which does not support Node.js APIs (`fs`, `path`, `process`, etc.) or native modules.

To deploy on Cloudflare Workers:

1. **Replace Express with Hono or itty-router** — both are Workers-compatible HTTP frameworks.
2. **Replace MySQL2 with a Workers-compatible database driver** — options include:
   - [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite, free tier available)
   - [PlanetScale serverless driver](https://github.com/planetscale/database-js) (MySQL-compatible)
   - [Turso](https://turso.tech/) (libSQL/SQLite edge)
3. **Replace `#airo/secrets` with Cloudflare Workers Secrets** — use `env.SECRET_NAME` in the Worker handler.
4. **Replace `nodemailer` with a Workers-compatible email API** — options include [Resend](https://resend.com), [SendGrid Web API](https://sendgrid.com), or [Cloudflare Email Workers](https://developers.cloudflare.com/email-routing/email-workers/).
5. **Replace `better-auth`** — verify Workers compatibility or use a JWT-based alternative.
6. **Use `@cloudflare/vite-plugin`** for the Vite build.

### Cloudflare Pages + Workers

A hybrid approach that is closer to the current architecture:

1. Deploy static assets (`dist/client/`) to **Cloudflare Pages**.
2. Deploy the API and SSR logic as a **Cloudflare Worker** (Pages Functions).
3. Use a **Cloudflare Workers-compatible database** (D1 or PlanetScale).

This approach still requires replacing `nodemailer`, `mysql2`, and reviewing `better-auth` compatibility.

**Recommended path for fastest migration:** Deploy to a Node.js VPS (e.g. Hetzner, DigitalOcean, Fly.io) first — zero code changes required. Migrate to Cloudflare Workers later if edge deployment is needed.

---

## Admin Portal

The admin portal is available at `/admin/login`.

### First-time setup

1. Navigate to `/admin/setup`
2. Enter your `ADMIN_SEED_TOKEN` (from your environment variables)
3. Create your admin account (name, email, password)
4. Log in at `/admin/login`

### Admin sections

| Path | Purpose |
|------|---------|
| `/admin/dashboard` | Overview and statistics |
| `/admin/policies` | Create and manage legal/policy pages |
| `/admin/pages` | Edit hero content and SEO per page |
| `/admin/navigation` | Manage header and footer links |
| `/admin/seo` | Per-page SEO title, description, OG image |

---

## Project Structure

```
├── public/                  Static assets served as-is
├── scripts/
│   └── create-admin-tables.mjs   Database setup script
├── src/
│   ├── components/
│   │   ├── admin/           Admin portal components
│   │   └── ui/              shadcn/ui component library
│   ├── layouts/
│   │   └── parts/           Header.tsx, Footer.tsx
│   ├── lib/
│   │   ├── auth/            BetterAuth client and server config
│   │   ├── translations.ts  Multi-language translation strings (~450 keys)
│   │   └── seo-routes.ts    Sitemap route registry
│   ├── pages/
│   │   ├── admin/           Admin portal pages
│   │   └── *.tsx            Public website pages
│   ├── server/
│   │   ├── api/             Express route handlers
│   │   ├── db/              Drizzle ORM client, schema, config
│   │   ├── middleware/      Admin auth middleware
│   │   ├── admin-migrate.ts Idempotent DB migration runner
│   │   └── entry.ts         Express server entry point
│   ├── styles/globals.css   Tailwind CSS + CSS variables
│   ├── routes.tsx           React Router route definitions
│   ├── App.tsx              Client-side router
│   └── entry-server.tsx     SSR render entry
├── drizzle/                 Drizzle migration files
├── .env.example             Environment variable template
├── drizzle.config.ts        Drizzle Kit configuration
├── tailwind.config.js       Tailwind configuration
├── tsconfig.json            TypeScript configuration
└── vite.config.ts           Vite build configuration
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (Vite HMR) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run Vitest test suite |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript type checking |
| `npm run db:generate` | Generate Drizzle migration files |
| `npm run db:migrate` | Apply Drizzle migrations |
| `npm run audit` | npm security audit |

---

## Public Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/about-us` | About Us |
| `/about-our-divisions` | About Our Divisions |
| `/our-group-structure` | Our Group Structure |
| `/partner-with-us` | Partner With Us |
| `/contactus` | Contact Us |
| `/complaints-policy` | Complaints Policy |
| `/privacy-policy` | Privacy Policy |
| `/cookies-policy` | Cookies Policy |
| `/terms-of-service` | Terms of Service |
| `/announcements` | Announcements |
| `/sitemap` | Sitemap |
| `/partners/tide` | Tide Partnership (direct URL only) |

---

*Last updated: August 2026*
