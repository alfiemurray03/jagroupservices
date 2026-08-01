import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import * as esbuild from "esbuild";

// ---------------------------------------------------------------------------
// Airo-specific plugins (sourceMapperPlugin, devToolsPlugin, fullStoryPlugin,
// errorInterceptorPlugin, mediaVersionsPlugin, apiRoutes) have been removed.
// They are Airo platform internals and are not needed on any external host.
// The application builds and runs correctly without them.
// ---------------------------------------------------------------------------
import { mediaAssetsPlugin } from "./export-plugins/media-assets-plugin.ts";
function extractHostname(value: string): string {
  try {
    if (value.includes("://")) {
      return new URL(value).hostname;
    }
    return value;
  } catch {
    return value;
  }
}

function serverBundlePlugin(): Plugin {
  let built = false;
  const databaseConfigPath = path.resolve(__dirname, "src/server/db/config-env.ts");
  const databaseDirectory = path.resolve(__dirname, "src/server/db");
  return {
    name: "server-bundle",
    apply: "build",
    closeBundle: async () => {
      if (built) return;
      built = true;
      console.log("Bundling server code with esbuild...");
      await esbuild.build({
        entryPoints: [path.resolve(__dirname, "src/server/entry.ts")],
        bundle: true,
        platform: "node",
        target: "node22",
        format: "esm",
        outfile: path.resolve(__dirname, "dist", "server.bundle.mjs"),
        packages: "bundle",
        sourcemap: true,
        // Remap the Airo-managed db/config.ts to the env-var implementation so
        // the production bundle reads DB_HOST/DB_USER/etc. instead of
        // /alloc/config.json. esbuild's alias option only accepts package-like
        // names, so use a resolver for these source imports instead.
        plugins: [{
          name: "database-config-env",
          setup(build) {
            build.onResolve(
              { filter: /^(?:@\/server\/db\/config|\.\/config(?:\.js)?)$/ },
              (args) => {
                const isDatabaseConfigImport =
                  args.path.startsWith("@/") || path.dirname(args.importer) === databaseDirectory;
                return isDatabaseConfigImport ? { path: databaseConfigPath } : null;
              }
            );
          }
        }],
        banner: {
          js: `import { createRequire } from 'module';
const require = createRequire(import.meta.url);`
        }
      });
      console.log("Server bundle created at dist/server.bundle.mjs");
    }
  };
}

const allowedHosts: string[] = [];
const corsOrigins: string[] = [];

if (process.env.FRONTEND_DOMAIN) {
  const frontendHost = extractHostname(process.env.FRONTEND_DOMAIN);
  allowedHosts.push(frontendHost);
  corsOrigins.push(`http://${frontendHost}`, `https://${frontendHost}`);
}
if (process.env.ALLOWED_ORIGINS) {
  const origins = process.env.ALLOWED_ORIGINS.split(",");
  allowedHosts.push(...origins.map(extractHostname));
  corsOrigins.push(...origins);
}
if (process.env.VITE_PARENT_ORIGIN) {
  allowedHosts.push(extractHostname(process.env.VITE_PARENT_ORIGIN));
  corsOrigins.push(process.env.VITE_PARENT_ORIGIN);
}
if (allowedHosts.length === 0) {
  allowedHosts.push("*");
}
if (corsOrigins.length === 0) {
  corsOrigins.push("*");
}

export default defineConfig(({ mode: _mode }) => ({
  // Standard VITE_ prefix for client-side env vars
  envPrefix: ["VITE_"],

  plugins: [
  react(),
  serverBundlePlugin(), mediaAssetsPlugin()],


  resolve: {
    dedupe: ["react", "react-dom", "react-router-dom"],
    alias: {
      "@/api": path.resolve(__dirname, "./src/server/api"),
      "@": path.resolve(__dirname, "./src"),
      // Remap the Airo-managed db/config.ts to the env-var implementation.
      // On Airo the original file is used at runtime (not via this alias);
      // on any other host this ensures DB_HOST/etc. are read from process.env.
      [path.resolve(__dirname, "src/server/db/config.ts")]:
      path.resolve(__dirname, "src/server/db/config-env.ts")
    }
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "motion/react"]
  },

  server: {
    host: process.env.HOST || "0.0.0.0",
    port: parseInt(process.env.PORT || "5173"),
    strictPort: !!process.env.PORT,
    allowedHosts: true,
    cors: {
      origin: corsOrigins,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "Accept", "User-Agent"]
    },
    hmr: {
      overlay: false
    },
    watch: {
      ignored: ["**/dist/**", "**/.api/**"]
    }
  },

  preview: {
    host: process.env.HOST || "0.0.0.0",
    port: parseInt(process.env.PORT || "5173"),
    strictPort: !!process.env.PORT,
    allowedHosts,
    cors: {
      origin: corsOrigins,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "Accept", "User-Agent"]
    }
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "radix-ui": [
          "@radix-ui/react-accordion",
          "@radix-ui/react-alert-dialog",
          "@radix-ui/react-aspect-ratio",
          "@radix-ui/react-avatar",
          "@radix-ui/react-checkbox",
          "@radix-ui/react-collapsible",
          "@radix-ui/react-context-menu",
          "@radix-ui/react-dialog",
          "@radix-ui/react-dropdown-menu",
          "@radix-ui/react-hover-card",
          "@radix-ui/react-label",
          "@radix-ui/react-menubar",
          "@radix-ui/react-navigation-menu",
          "@radix-ui/react-popover",
          "@radix-ui/react-progress",
          "@radix-ui/react-scroll-area",
          "@radix-ui/react-select",
          "@radix-ui/react-separator",
          "@radix-ui/react-slider",
          "@radix-ui/react-slot",
          "@radix-ui/react-switch",
          "@radix-ui/react-tabs",
          "@radix-ui/react-toast",
          "@radix-ui/react-toggle",
          "@radix-ui/react-toggle-group",
          "@radix-ui/react-tooltip"],

          query: ["@tanstack/react-query"]
        }
      }
    }
  }
}));
