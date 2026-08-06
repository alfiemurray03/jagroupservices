import express, { type Express, type NextFunction, type Request, type Response } from "express";
import { readFileSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

import authActionGet from "./api/auth/[action]/GET";
import authActionPost from "./api/auth/[action]/POST";
import authActionDetailGet from "./api/auth/[action]/[detail]/GET";
import authActionDetailPost from "./api/auth/[action]/[detail]/POST";
import commerceCreateCheckoutSessionPost from "./api/commerce/create-checkout-session/POST";
import configAnalyticsGet from "./api/config/analytics/GET";
import contactPost from "./api/contact/POST";
import healthGet from "./api/health/GET";
import announcementsGet from "./api/announcements/GET";
import announcementGet from "./api/announcements/[slug]/GET";

import adminAuthPost from "./api/admin/auth/POST";
import adminSessionGet from "./api/admin/session/GET";
import adminLogoutPost from "./api/admin/logout/POST";
import adminSeedPost from "./api/admin/seed/POST";
import adminPoliciesGet from "./api/admin/policies/GET";
import adminPoliciesPost from "./api/admin/policies/POST";
import adminPolicyGet from "./api/admin/policies/[id]/GET";
import adminPolicyPut from "./api/admin/policies/[id]/PUT";
import adminPolicyDelete from "./api/admin/policies/[id]/DELETE";
import adminAnnouncementsGet from "./api/admin/announcements/GET";
import adminAnnouncementsPost from "./api/admin/announcements/POST";
import adminAnnouncementGet from "./api/admin/announcements/[id]/GET";
import adminAnnouncementPut from "./api/admin/announcements/[id]/PUT";
import adminAnnouncementDelete from "./api/admin/announcements/[id]/DELETE";
import adminPagesGet from "./api/admin/pages/GET";
import adminPageGet from "./api/admin/pages/[key]/GET";
import adminPagePut from "./api/admin/pages/[key]/PUT";
import adminSeoGet from "./api/admin/seo/GET";
import adminSeoPut from "./api/admin/seo/PUT";
import adminNavGet from "./api/admin/nav/GET";
import adminNavPost from "./api/admin/nav/POST";

import { seoRoutes } from "../lib/seo-routes";
import { runAdminMigrations } from "./admin-migrate";
import {
  loadAdSenseRuntimeConfig,
  resolveAdSenseTextFile,
  type AdSenseRuntimeConfig,
} from "./adsense-manifest";
import { loadIndexNowKey } from "./indexnow-key";
import { llmsTxtHandler } from "./llms-txt";
import { requireAdmin } from "./middleware/adminAuth";
import { isSystemHost } from "./seo-host";

export interface SsrRenderResult {
  html: string;
  head: string;
  status: number;
  redirect?: string;
}

export function registerAdSenseTextRoutes(app: Express, config: AdSenseRuntimeConfig): void {
  app.get("/ads.txt", (_req, res) => {
    const content = resolveAdSenseTextFile(config, "adsTxt");
    if (content === null) {
      res.status(404).type("text/plain").set("Cache-Control", "no-cache").send("Not found\n");
      return;
    }
    res.type("text/plain").set("Cache-Control", "no-cache").send(content);
  });

  app.get("/app-ads.txt", (_req, res) => {
    const content = resolveAdSenseTextFile(config, "appAdsTxt");
    if (content === null) {
      res.status(404).type("text/plain").set("Cache-Control", "no-cache").send("Not found\n");
      return;
    }
    res.type("text/plain").set("Cache-Control", "no-cache").send(content);
  });
}

export function renderSsrDocument(
  template: string,
  result: Pick<SsrRenderResult, "head" | "html">,
  adSenseConfig: Pick<AdSenseRuntimeConfig, "scriptHtml">,
): string {
  const head = [result.head, adSenseConfig.scriptHtml].filter(Boolean).join("\n");
  return template
    .replace("<!--app-head-->", () => head)
    .replace("<!--app-html-->", () => result.html);
}

function normalizeCommerceApiBaseUrlEnv(): void {
  if (process.env.GODADDY_API_BASE_URL) return;
  const hostOnly = process.env.VITE_GODADDY_API_HOST;
  if (!hostOnly) return;
  const normalizedHost = hostOnly.replace(/^https?:\/\//, "").trim();
  if (normalizedHost) process.env.GODADDY_API_BASE_URL = `https://${normalizedHost}`;
}

function ensureContentTables(_req: Request, _res: Response, next: NextFunction): void {
  runAdminMigrations().then(() => next()).catch((error) => {
    console.error("content.migration.failed", {
      error: error instanceof Error ? error.message : String(error),
    });
    next(error);
  });
}

function baseUrl(req: Request): string {
  return `${req.protocol}://${req.hostname}`;
}

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (character) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[character]!,
  );
}

normalizeCommerceApiBaseUrlEnv();

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Core public APIs
app.get("/api/auth/:action", authActionGet);
app.post("/api/auth/:action", authActionPost);
app.get("/api/auth/:action/:detail", authActionDetailGet);
app.post("/api/auth/:action/:detail", authActionDetailPost);
app.post("/api/commerce/create-checkout-session", commerceCreateCheckoutSessionPost);
app.get("/api/config/analytics", configAnalyticsGet);
app.post("/api/contact", contactPost);
app.get("/api/health", healthGet);

// Public newsroom APIs. The same idempotent migration prepares the content table
// before a visitor or search engine requests the first announcement.
app.use("/api/announcements", ensureContentTables);
app.get("/api/announcements", announcementsGet);
app.get("/api/announcements/:slug", announcementGet);

// Admin APIs
app.use("/api/admin", ensureContentTables);
app.post("/api/admin/auth", adminAuthPost);
app.get("/api/admin/session", adminSessionGet);
app.post("/api/admin/logout", adminLogoutPost);
app.post("/api/admin/seed", adminSeedPost);

app.get("/api/admin/policies", requireAdmin, adminPoliciesGet);
app.post("/api/admin/policies", requireAdmin, adminPoliciesPost);
app.get("/api/admin/policies/:id", requireAdmin, adminPolicyGet);
app.put("/api/admin/policies/:id", requireAdmin, adminPolicyPut);
app.delete("/api/admin/policies/:id", requireAdmin, adminPolicyDelete);

app.get("/api/admin/announcements", requireAdmin, adminAnnouncementsGet);
app.post("/api/admin/announcements", requireAdmin, adminAnnouncementsPost);
app.get("/api/admin/announcements/:id", requireAdmin, adminAnnouncementGet);
app.put("/api/admin/announcements/:id", requireAdmin, adminAnnouncementPut);
app.delete("/api/admin/announcements/:id", requireAdmin, adminAnnouncementDelete);

app.get("/api/admin/pages", requireAdmin, adminPagesGet);
app.get("/api/admin/pages/:key", requireAdmin, adminPageGet);
app.put("/api/admin/pages/:key", requireAdmin, adminPagePut);
app.get("/api/admin/seo", requireAdmin, adminSeoGet);
app.put("/api/admin/seo", requireAdmin, adminSeoPut);
app.get("/api/admin/nav", requireAdmin, adminNavGet);
app.post("/api/admin/nav", requireAdmin, adminNavPost);

app.use("/api", (error: unknown, req: Request, res: Response, _next: NextFunction) => {
  console.error("ssr.api.error", {
    url: req.url,
    error: error instanceof Error ? error.stack : String(error),
  });
  res.status(500).json({ error: "Internal server error" });
});

app.get("/robots.txt", (req, res) => {
  if (isSystemHost(req)) {
    res
      .type("text/plain")
      .set("Cache-Control", "public, max-age=60, must-revalidate")
      .set("Vary", "Host")
      .send("User-agent: *\nDisallow: /\n");
    return;
  }

  const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${baseUrl(req)}/sitemap.xml`, ""].join("\n");
  res
    .type("text/plain")
    .set("Cache-Control", "public, max-age=60, must-revalidate")
    .set("Vary", "Host")
    .send(body);
});

app.get("/sitemap.xml", (req, res) => {
  if (isSystemHost(req)) {
    const empty = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>\n`;
    res
      .type("application/xml")
      .set("Cache-Control", "public, max-age=60, must-revalidate")
      .set("Vary", "Host")
      .send(empty);
    return;
  }

  const base = baseUrl(req);
  const urls = seoRoutes
    .filter((route) => route.path.startsWith("/"))
    .map((route) => {
      const parts = [`    <loc>${escapeXml(`${base}${route.path}`)}</loc>`];
      if (route.lastmod) parts.push(`    <lastmod>${escapeXml(route.lastmod)}</lastmod>`);
      if (route.changefreq) parts.push(`    <changefreq>${route.changefreq}</changefreq>`);
      if (route.priority !== undefined) parts.push(`    <priority>${route.priority.toFixed(1)}</priority>`);
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  res
    .type("application/xml")
    .set("Cache-Control", "public, max-age=60, must-revalidate")
    .set("Vary", "Host")
    .send(body);
});

app.get("/llms.txt", llmsTxtHandler);

if (import.meta.env.PROD) {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const clientDir = join(__dirname, "client");
  const adSenseRuntimeConfig = loadAdSenseRuntimeConfig(__dirname);
  const indexNowKey = loadIndexNowKey(__dirname);

  registerAdSenseTextRoutes(app, adSenseRuntimeConfig);

  if (indexNowKey !== null) {
    app.get(`/${indexNowKey}.txt`, (_req, res) => {
      res.type("text/plain").set("Cache-Control", "public, max-age=86400").send(indexNowKey);
    });
  }

  app.use(
    express.static(clientDir, {
      index: false,
      setHeaders(res, filePath) {
        res.set(
          "Cache-Control",
          filePath.includes("/assets/")
            ? "public, max-age=31536000, immutable"
            : "no-cache",
        );
      },
    }),
  );

  app.use((_req, res, next) => {
    res.set("Cache-Control", "no-cache");
    next();
  });

  let template: string;
  try {
    template = readFileSync(join(clientDir, "index.html"), "utf-8");
  } catch (error) {
    console.error("ssr.template.load-failed", {
      path: join(clientDir, "index.html"),
      error: error instanceof Error ? error.message : String(error),
    });
    process.exit(1);
  }

  if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
    console.error("ssr.template.markers-missing");
    process.exit(1);
  }

  const fallbackShell = template
    .replace("<!--app-head-->", "")
    .replace("<!--app-html-->", "");

  let renderFn: ((url: string) => Promise<SsrRenderResult>) | null = null;
  const loadTimeout = setTimeout(() => {
    if (renderFn !== null) return;
    console.error("ssr.module.load-timeout", { timeoutMs: 30_000 });
    process.exit(1);
  }, 30_000);
  loadTimeout.unref();

  import("../entry-server").then(
    (module) => {
      clearTimeout(loadTimeout);
      renderFn = module.render;
    },
    (error) => {
      clearTimeout(loadTimeout);
      console.error("ssr.module.load-failed", {
        error: error instanceof Error ? error.stack : String(error),
      });
      process.exit(1);
    },
  );

  app.get(/.*/, async (req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api") || extname(req.path)) return next();

    const sendFallback = () =>
      res
        .status(503)
        .set("Content-Type", "text/html; charset=utf-8")
        .set("Cache-Control", "no-store")
        .send(fallbackShell);

    if (renderFn === null) return sendFallback();

    try {
      const result = await renderFn(req.url);
      if (result.redirect) {
        res.redirect(result.status, result.redirect);
        return;
      }
      if (!result.html) {
        res
          .status(result.status)
          .set("Content-Type", "text/html; charset=utf-8")
          .set("Cache-Control", "no-store")
          .send(fallbackShell);
        return;
      }

      const seoHead = isSystemHost(req)
        ? `<meta name="robots" content="noindex,nofollow">`
        : `<link rel="canonical" href="${escapeXml(`${req.protocol}://${req.hostname}${req.path}`)}">`;
      const output = renderSsrDocument(
        template,
        { ...result, head: seoHead + result.head },
        adSenseRuntimeConfig,
      );

      res
        .status(result.status)
        .set("Content-Type", "text/html; charset=utf-8")
        .set("Cache-Control", "no-cache")
        .send(output);
    } catch (error) {
      console.error("ssr.render.failed", {
        url: req.url,
        error: error instanceof Error ? error.stack : String(error),
      });
      sendFallback();
    }
  });

  const shutdown = async (signal: string) => {
    console.log(`Got ${signal}, shutting down gracefully...`);
    try {
      const dbClient = "./db/client" + ".js";
      const module = await import(/* @vite-ignore */ dbClient);
      if (typeof module.closeConnection === "function") await module.closeConnection();
    } catch (error: unknown) {
      const code = (error as { code?: string } | null)?.code;
      if (code !== "ERR_MODULE_NOT_FOUND") {
        console.error("ssr.shutdown.db-failed", {
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }
    process.exit(0);
  };

  (["SIGTERM", "SIGINT"] as const).forEach((signal) => {
    process.once(signal, () => void shutdown(signal));
  });

  const rawPort = process.env.PORT || "3000";
  const port = Number.parseInt(rawPort, 10);
  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    console.error("ssr.server.invalid-port", { rawPort });
    process.exit(1);
  }

  const host = process.env.HOST || "0.0.0.0";
  const server = app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
  server.on("error", (error: NodeJS.ErrnoException) => {
    console.error("ssr.server.listen-failed", {
      port,
      host,
      code: error.code,
      error: error.message,
    });
    process.exit(1);
  });
}

export default app;
