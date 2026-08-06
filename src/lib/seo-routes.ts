/**
 * Auto-synced registry of publicly-crawlable routes. Consumed by the
 * /sitemap.xml handler in src/server/entry.ts.
 *
 * DO NOT add or remove paths by hand. Static paths are mirrored here from
 * src/routes.tsx automatically whenever that file is edited (any manual
 * path edit would be overwritten on the next routes.tsx change). For sync
 * to pick up a route, its `path` must be a literal string starting with "/";
 * template literals and identifier refs are skipped, and dynamic-param routes
 * like "/products/:id" are excluded.
 *
 * The only fields safe to hand-edit are the per-entry metadata below, after a
 * sync:
 * - `priority` (0.0–1.0): Home = 1.0, main sections = 0.8, deep pages = 0.5.
 * - `changefreq` and `lastmod`.
 */

export interface SeoRoute {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  lastmod?: string;
}

export const seoRoutes: SeoRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about-us", changefreq: "monthly", priority: 0.8 },
  { path: "/meet-the-team", changefreq: "monthly", priority: 0.8 },
  { path: "/team/jack-nicolau-sousa-da-silva", changefreq: "monthly", priority: 0.6 },
  { path: "/team/alfie-thomas-holywood-murray", changefreq: "monthly", priority: 0.6 },
  { path: "/about-our-divisions", changefreq: "monthly", priority: 0.8 },
  { path: "/our-group-structure", changefreq: "monthly", priority: 0.8 },
  { path: "/corporate-information", changefreq: "monthly", priority: 0.8, lastmod: "2026-08-06" },
  { path: "/shareholder-information", changefreq: "monthly", priority: 0.7, lastmod: "2026-08-06" },
  { path: "/services", changefreq: "monthly", priority: 0.9, lastmod: "2026-08-03" },
  { path: "/customer-support", changefreq: "monthly", priority: 0.9, lastmod: "2026-08-03" },
  { path: "/accessibility-statement", changefreq: "yearly", priority: 0.7, lastmod: "2026-08-03" },
  { path: "/security", changefreq: "monthly", priority: 0.8, lastmod: "2026-08-03" },
  { path: "/privacy-centre", changefreq: "monthly", priority: 0.8, lastmod: "2026-08-03" },
  { path: "/governance", changefreq: "monthly", priority: 0.8, lastmod: "2026-08-03" },
  { path: "/safeguarding", changefreq: "monthly", priority: 0.8, lastmod: "2026-08-03" },
  { path: "/partner-with-us", changefreq: "monthly", priority: 0.8 },
  { path: "/affiliate-partners", changefreq: "monthly", priority: 0.7, lastmod: "2026-08-06" },
  { path: "/careers", changefreq: "monthly", priority: 0.7, lastmod: "2026-08-06" },
  { path: "/cookies-policy", changefreq: "monthly", priority: 0.8 },
  { path: "/contactus", changefreq: "monthly", priority: 0.9, lastmod: "2026-08-06" },
  { path: "/complaints-policy", changefreq: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changefreq: "monthly", priority: 0.8 },
  { path: "/terms-of-service", changefreq: "monthly", priority: 0.8 },
  { path: "/announcements", changefreq: "weekly", priority: 0.8, lastmod: "2026-08-06" },
  { path: "/sitemap", changefreq: "monthly", priority: 0.8 },
  // Admin routes intentionally excluded from sitemap
];
