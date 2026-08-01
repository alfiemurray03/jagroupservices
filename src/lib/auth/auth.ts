/**
 * BetterAuth Server Configuration
 *
 * Supports both Email/Password and OAuth authentication.
 * Enable/disable methods by uncommenting the relevant sections.
 *
 * Secrets (read from process.env):
 * - BETTER_AUTH_SECRET: Session encryption key
 * - OAuth credentials (GOOGLE_CLIENT_ID, etc.) for social login
 *
 * CORS/Trusted Origins:
 * - Trusts jagroupservices.co.uk, www.jagroupservices.co.uk, and localhost
 * - Additional origins via BETTER_AUTH_TRUSTED_ORIGINS (comma-separated)
 */

import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import { db } from '@/server/db/client';
import { user, session, account, verification } from '@/server/db/schema';
// Lazy singleton — betterAuth() must NOT run at module init time.
//
// BETTER_AUTH_SECRET is read from process.env at request time so the auth
// instance is constructed after the environment is fully loaded.
let _auth: ReturnType<typeof betterAuth> | null = null;

export function getAuth() {
  if (_auth) return _auth;

  const authSecret = process.env.BETTER_AUTH_SECRET;
  if (!authSecret || typeof authSecret !== 'string') {
    throw new Error('BETTER_AUTH_SECRET environment variable is not set');
  }

  if (!db) {
    throw new Error('Database not configured. Install the database skill first, then configure auth.');
  }

  const auth = betterAuth({
    // Schema passed explicitly — avoids BetterAuth's runtime schema inference.
    database: drizzleAdapter(db, {
      provider: 'mysql',
      schema: { user, session, account, verification },
    }),

    secret: authSecret,

    // Protect admin status field from user input
    user: {
      additionalFields: {
        isAdmin: {
          type: 'boolean',
          defaultValue: false,
          input: false,  // Prevent clients from writing this field
          returned: true,
        },
      },
    },

    // CORS: Trusts production domains and localhost by default.
    // Add custom domains here or set BETTER_AUTH_TRUSTED_ORIGINS env var.
    trustedOrigins: (request?: Request) => {
      if (!request) return [];

      const origin = request.headers.get('origin');
      if (!origin) return [];

      try {
        const originUrl = new URL(origin);
        const hostname = originUrl.hostname;

        // Trust production domains
        if (
          hostname === 'jagroupservices.co.uk' ||
          hostname === 'www.jagroupservices.co.uk'
        ) {
          return [origin];
        }

        // Trust all airoapp.ai subdomains (Airo preview/publish)
        if (hostname.endsWith('.airoapp.ai') || hostname.endsWith('.test-airoapp.ai')) {
          return [origin];
        }

        // Trust localhost for development
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
          return [origin];
        }

        // Trust any additional origins from BETTER_AUTH_TRUSTED_ORIGINS env var
        const extraOrigins = process.env.BETTER_AUTH_TRUSTED_ORIGINS;
        if (extraOrigins) {
          const allowed = extraOrigins.split(',').map((o) => o.trim());
          if (allowed.includes(origin)) return [origin];
        }

        return [];
      } catch {
        return [];
      }
    },

    // In preview mode the site runs in an iframe embedded by the builder on a different
    // origin, so cookies need SameSite=None + Secure + Partitioned (CHIPS) for cross-site
    // access. In publish mode (standalone) we use the safer SameSite=Lax default.
    ...(process.env.AIRO_PREVIEW === 'true' && {
      advanced: {
        defaultCookieAttributes: {
          sameSite: 'none' as const,
          secure: true,
          partitioned: true,
        },
      },
    }),

    emailAndPassword: { enabled: true },

    // socialProviders: {
    //   google: {
    //     clientId: process.env.GOOGLE_CLIENT_ID as string,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    //   },
    //   github: {
    //     clientId: process.env.GITHUB_CLIENT_ID as string,
    //     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    //   },
    // },
  });

  _auth = auth as unknown as ReturnType<typeof betterAuth>;
  return auth;
}

export type Session = ReturnType<typeof getAuth>['$Infer']['Session'];
export type User = ReturnType<typeof getAuth>['$Infer']['Session']['user'];
