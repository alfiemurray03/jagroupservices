/**
 * Run admin schema migrations using the app's live DB connection.
 * Uses the raw MySQL2 pool directly.
 * Idempotent — CREATE TABLE IF NOT EXISTS throughout.
 */
import { getDatabaseCredentials } from '@/server/db/config';
import mysql from 'mysql2/promise';

// Use a global flag so it survives HMR module reloads in dev
declare global {
  // eslint-disable-next-line no-var
  var __adminMigrationRan: boolean | undefined;
  // eslint-disable-next-line no-var
  var __adminMigrationPromise: Promise<void> | null | undefined;
}

const ADMIN_TABLES_SQL = [
  `CREATE TABLE IF NOT EXISTS \`admin_policies\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`title\` varchar(255) NOT NULL,
    \`slug\` varchar(255) NOT NULL,
    \`seo_title\` varchar(255),
    \`seo_description\` text,
    \`content\` text NOT NULL,
    \`status\` varchar(20) NOT NULL DEFAULT 'draft',
    \`version\` varchar(50) NOT NULL DEFAULT '1.0',
    \`last_updated\` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
    \`created_at\` timestamp NOT NULL DEFAULT (now()),
    CONSTRAINT \`admin_policies_id\` PRIMARY KEY(\`id\`),
    CONSTRAINT \`admin_policies_slug_unique\` UNIQUE(\`slug\`)
  )`,
  `CREATE TABLE IF NOT EXISTS \`admin_pages\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`page_key\` varchar(100) NOT NULL,
    \`title\` varchar(255) NOT NULL,
    \`slug\` varchar(255) NOT NULL,
    \`hero_heading\` text,
    \`hero_text\` text,
    \`sections\` text,
    \`seo_title\` varchar(255),
    \`seo_description\` text,
    \`status\` varchar(20) NOT NULL DEFAULT 'published',
    \`last_updated\` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
    \`created_at\` timestamp NOT NULL DEFAULT (now()),
    CONSTRAINT \`admin_pages_id\` PRIMARY KEY(\`id\`),
    CONSTRAINT \`admin_pages_page_key_unique\` UNIQUE(\`page_key\`)
  )`,
  `CREATE TABLE IF NOT EXISTS \`admin_nav_links\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`location\` varchar(50) NOT NULL,
    \`label\` varchar(100) NOT NULL,
    \`href\` varchar(500) NOT NULL,
    \`is_external\` boolean NOT NULL DEFAULT false,
    \`sort_order\` int NOT NULL DEFAULT 0,
    \`parent_id\` int,
    \`is_active\` boolean NOT NULL DEFAULT true,
    \`created_at\` timestamp NOT NULL DEFAULT (now()),
    CONSTRAINT \`admin_nav_links_id\` PRIMARY KEY(\`id\`)
  )`,
  `CREATE TABLE IF NOT EXISTS \`admin_seo_settings\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`page_key\` varchar(100) NOT NULL,
    \`seo_title\` varchar(255),
    \`seo_description\` text,
    \`og_image\` text,
    \`no_index\` boolean NOT NULL DEFAULT false,
    \`updated_at\` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT \`admin_seo_settings_id\` PRIMARY KEY(\`id\`),
    CONSTRAINT \`admin_seo_settings_page_key_unique\` UNIQUE(\`page_key\`)
  )`,
  `CREATE TABLE IF NOT EXISTS \`admin_audit_log\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`user_id\` varchar(36) NOT NULL,
    \`action\` varchar(100) NOT NULL,
    \`resource\` varchar(100) NOT NULL,
    \`resource_id\` varchar(100),
    \`detail\` text,
    \`created_at\` timestamp NOT NULL DEFAULT (now()),
    CONSTRAINT \`admin_audit_log_id\` PRIMARY KEY(\`id\`)
  )`,
];

async function _runMigrations(): Promise<void> {
  console.log('[admin-migrate] Starting admin table creation...');
  const creds = getDatabaseCredentials();

  const conn = await mysql.createConnection({
    host: creds.host,
    port: creds.port,
    user: creds.user,
    password: creds.password,
    database: creds.database,
    ssl: { rejectUnauthorized: false },
  });

  try {
    for (let i = 0; i < ADMIN_TABLES_SQL.length; i++) {
      await conn.query(ADMIN_TABLES_SQL[i]);
    }
    console.log('[admin-migrate] Admin tables ready.');
    global.__adminMigrationRan = true;
  } catch (err) {
    console.error('[admin-migrate] Failed:', err);
    global.__adminMigrationPromise = null;
    throw err;
  } finally {
    await conn.end();
  }
}

/**
 * Ensure admin tables exist. Safe to call on every request — only runs once per process.
 */
export async function runAdminMigrations(): Promise<void> {
  if (global.__adminMigrationRan) return;
  if (!global.__adminMigrationPromise) {
    global.__adminMigrationPromise = _runMigrations();
  }
  return global.__adminMigrationPromise;
}
