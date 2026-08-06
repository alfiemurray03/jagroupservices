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
      'JA Group Services Ltd expands its corporate website and stakeholder information services',
      'sousa-murray-website-structure-confirmed',
      'JA Group Services Ltd has introduced an expanded corporate website designed to provide clearer access to company information, customer support, brand services and stakeholder resources.',
      '## A clearer corporate information point\n\nJA Group Services Ltd has expanded its corporate website to provide a more complete and accessible information point for customers, suppliers, commercial partners, shareholders, professional advisers and other stakeholders.\n\nThe website brings together information about the Company, its governance, the Sousa Murray brand family, customer-support arrangements, legal policies and official corporate announcements.\n\n## Access to Sousa Murray services\n\nThe corporate website provides direct access to Sousa Murray Domains, Sousa Murray Sites, Sousa Murray Planeia, Sousa Murray Profiles and Sousa Murray eLearning. It also explains the relationship between each service brand and JA Group Services Ltd as the legal operating company.\n\n## Better routes for customers and stakeholders\n\nDedicated information is available for customers, suppliers, commercial partners, existing shareholders, professional advisers, prospective applicants and people interested in the planned Affiliate Partner Programme. The Contact Us page provides structured routes for general, customer, corporate, shareholder, privacy, complaints, security and supplier enquiries.\n\n## Transparency, governance and trust\n\nThe corporate website brings together registered-company details, governance information, privacy and data-protection information, security reporting, safeguarding, accessibility, complaints procedures and legal policies. Official Company announcements are published through the Announcements Centre.\n\n## Private-company status\n\nJA Group Services Ltd is a private company limited by shares. It is not listed on a stock exchange and the website does not advertise shares, solicit public investment or invite members of the public to become shareholders. A dedicated Shareholder Information page is available for existing shareholders and authorised representatives.\n\n## Continuing development\n\nThe Company will continue to improve the corporate website and service websites as systems, customer needs and operational arrangements develop. Planned maintenance may occasionally affect individual features, and notices will be displayed where appropriate.',
      'Company Update',
      'JA Group Services Ltd',
      'published',
      true,
      'JA Group Services Ltd expands corporate website and stakeholder information',
      'JA Group Services Ltd announces an expanded corporate website with clearer company, customer, brand, shareholder, supplier and stakeholder information.',
      NOW()
    WHERE NOT EXISTS (
      SELECT 1 FROM \`admin_announcements\` WHERE \`slug\` = 'sousa-murray-website-structure-confirmed'
    )`,
  `UPDATE \`admin_announcements\` SET
      \`title\` = 'JA Group Services Ltd expands its corporate website and stakeholder information services',
      \`summary\` = 'JA Group Services Ltd has introduced an expanded corporate website designed to provide clearer access to company information, customer support, brand services and stakeholder resources.',
      \`content\` = '## A clearer corporate information point\n\nJA Group Services Ltd has expanded its corporate website to provide a more complete and accessible information point for customers, suppliers, commercial partners, shareholders, professional advisers and other stakeholders.\n\nThe website brings together information about the Company, its governance, the Sousa Murray brand family, customer-support arrangements, legal policies and official corporate announcements.\n\n## Access to Sousa Murray services\n\nThe corporate website provides direct access to Sousa Murray Domains, Sousa Murray Sites, Sousa Murray Planeia, Sousa Murray Profiles and Sousa Murray eLearning. It also explains the relationship between each service brand and JA Group Services Ltd as the legal operating company.\n\n## Better routes for customers and stakeholders\n\nDedicated information is available for customers, suppliers, commercial partners, existing shareholders, professional advisers, prospective applicants and people interested in the planned Affiliate Partner Programme. The Contact Us page provides structured routes for general, customer, corporate, shareholder, privacy, complaints, security and supplier enquiries.\n\n## Transparency, governance and trust\n\nThe corporate website brings together registered-company details, governance information, privacy and data-protection information, security reporting, safeguarding, accessibility, complaints procedures and legal policies. Official Company announcements are published through the Announcements Centre.\n\n## Private-company status\n\nJA Group Services Ltd is a private company limited by shares. It is not listed on a stock exchange and the website does not advertise shares, solicit public investment or invite members of the public to become shareholders. A dedicated Shareholder Information page is available for existing shareholders and authorised representatives.\n\n## Continuing development\n\nThe Company will continue to improve the corporate website and service websites as systems, customer needs and operational arrangements develop. Planned maintenance may occasionally affect individual features, and notices will be displayed where appropriate.',
      \`category\` = 'Company Update',
      \`author_name\` = 'JA Group Services Ltd',
      \`status\` = 'published',
      \`is_featured\` = true,
      \`seo_title\` = 'JA Group Services Ltd expands corporate website and stakeholder information',
      \`seo_description\` = 'JA Group Services Ltd announces an expanded corporate website with clearer company, customer, brand, shareholder, supplier and stakeholder information.'
    WHERE \`slug\` = 'sousa-murray-website-structure-confirmed'`,
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
 *
 * A content-database outage must not take the public corporate website offline.
 * The public handlers provide approved published fallback content, while admin
 * endpoints will still report their own database errors if editing is unavailable.
 */
export async function runAdminMigrations(): Promise<void> {
  if (global.__adminMigrationRan) return;
  if (!global.__adminMigrationPromise) {
    global.__adminMigrationPromise = _runMigrations();
  }

  try {
    await global.__adminMigrationPromise;
  } catch (error) {
    console.error('[admin-migrate] Continuing with public content fallbacks:', {
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
