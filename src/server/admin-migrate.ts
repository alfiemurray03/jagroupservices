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
  `CREATE TABLE IF NOT EXISTS \`admin_announcements\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`title\` varchar(255) NOT NULL,
    \`slug\` varchar(255) NOT NULL,
    \`summary\` text NOT NULL,
    \`content\` text NOT NULL,
    \`category\` varchar(100) NOT NULL DEFAULT 'Corporate',
    \`author_name\` varchar(255) NOT NULL DEFAULT 'JA Group Services Ltd',
    \`status\` varchar(20) NOT NULL DEFAULT 'draft',
    \`is_featured\` boolean NOT NULL DEFAULT false,
    \`seo_title\` varchar(255),
    \`seo_description\` text,
    \`published_at\` timestamp NULL,
    \`created_at\` timestamp NOT NULL DEFAULT (now()),
    \`updated_at\` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT \`admin_announcements_id\` PRIMARY KEY(\`id\`),
    CONSTRAINT \`admin_announcements_slug_unique\` UNIQUE(\`slug\`)
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
  `INSERT INTO \`admin_announcements\`
    (\`title\`, \`slug\`, \`summary\`, \`content\`, \`category\`, \`author_name\`, \`status\`, \`is_featured\`, \`seo_title\`, \`seo_description\`, \`published_at\`)
    SELECT
      'JA Group Services Ltd confirms the Sousa Murray website structure',
      'sousa-murray-website-structure-confirmed',
      'The corporate website now acts as the central information point for the approved Sousa Murray brands and their public website destinations.',
      '## A single corporate home\n\nJA Group Services Ltd has confirmed the public website structure for the Sousa Murray master brand. The corporate website remains the central source of company, governance, support, supplier, partner and legal information.\n\n## Approved website destinations\n\n- **Sousa Murray Domains:** sousamurraydomains.jagroupservices.co.uk\n- **Sousa Murray Planeia:** sousamurrayplaneia.jagroupservices.co.uk\n- **Sousa Murray Profiles:** sousamurrayprofiles.jagroupservices.co.uk\n- **Sousa Murray eLearning:** sousamurrayelearning.jagroupservices.co.uk\n\n**Sousa Murray Sites** is the Managed Website Services area within the Sousa Murray Domains website and does not use a separate public subdomain.\n\n## Central accountability\n\nJA Group Services Ltd remains the legal operating company behind the approved services, with central responsibility for governance, customer operations, complaints and data protection unless a service-specific notice explains a third-party provider role.',
      'Corporate',
      'JA Group Services Ltd',
      'published',
      true,
      'Sousa Murray website structure confirmed | JA Group Services Ltd',
      'JA Group Services Ltd confirms the approved Sousa Murray brands, subdomains and the position of Sousa Murray Sites within Sousa Murray Domains.',
      NOW()
    WHERE NOT EXISTS (
      SELECT 1 FROM \`admin_announcements\` WHERE \`slug\` = 'sousa-murray-website-structure-confirmed'
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
