/**
 * Database configuration loader — environment variable implementation.
 *
 * This file provides the same DatabaseCredentials interface as the
 * Airo-managed config.ts but reads from standard environment variables
 * instead of /alloc/config.json.
 *
 * Used by db/client-env.ts which replaces the Airo-specific db/client.ts
 * on non-Airo hosts.
 *
 * Required environment variables:
 *   DB_HOST     — MySQL host (e.g. db.example.com)
 *   DB_PORT     — MySQL port (default: 3306)
 *   DB_USER     — MySQL username
 *   DB_PASS     — MySQL password
 *   DB_NAME     — Database name
 */

export interface DatabaseCredentials {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export function getDatabaseCredentials(): DatabaseCredentials {
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT ?? '3306';
  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;
  const database = process.env.DB_NAME;

  const missing: string[] = [];
  if (!host) missing.push('DB_HOST');
  if (!user) missing.push('DB_USER');
  if (!password) missing.push('DB_PASS');
  if (!database) missing.push('DB_NAME');

  if (missing.length > 0) {
    throw new Error(
      `Missing required database environment variables: ${missing.join(', ')}. ` +
        'Set these in your .env file or deployment secrets.'
    );
  }

  return {
    host: host!,
    port: parseInt(port, 10),
    user: user!,
    password: password!,
    database: database!,
  };
}
