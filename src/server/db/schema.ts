import { mysqlTable, int, varchar, text, timestamp, boolean } from 'drizzle-orm/mysql-core';

/**
 * Example Table
 */
export const exampleTable = mysqlTable('example_table', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export type ExampleRecord = typeof exampleTable.$inferSelect;
export type NewExampleRecord = typeof exampleTable.$inferInsert;

// ─── BetterAuth required tables ───────────────────────────────────────────────

export const user = mysqlTable('user', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: text('name').notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  emailVerified: boolean('email_verified').notNull().default(false),
  image: text('image'),
  isAdmin: boolean('is_admin').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
});

export const session = mysqlTable('session', {
  id: varchar('id', { length: 36 }).primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: varchar('token', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => user.id, { onDelete: 'cascade' }),
});

export const account = mysqlTable('account', {
  id: varchar('id', { length: 36 }).primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
});

export const verification = mysqlTable('verification', {
  id: varchar('id', { length: 36 }).primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
});

// ─── Admin content tables ──────────────────────────────────────────────────────

export const adminPolicies = mysqlTable('admin_policies', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  seoTitle: varchar('seo_title', { length: 255 }),
  seoDescription: text('seo_description'),
  content: text('content').notNull(),
  status: varchar('status', { length: 20 }).notNull().default('draft'), // 'draft' | 'published'
  version: varchar('version', { length: 50 }).notNull().default('1.0'),
  lastUpdated: timestamp('last_updated').notNull().defaultNow().onUpdateNow(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const adminAnnouncements = mysqlTable('admin_announcements', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  summary: text('summary').notNull(),
  content: text('content').notNull(),
  category: varchar('category', { length: 100 }).notNull().default('Corporate'),
  authorName: varchar('author_name', { length: 255 }).notNull().default('JA Group Services Ltd'),
  status: varchar('status', { length: 20 }).notNull().default('draft'), // 'draft' | 'published'
  isFeatured: boolean('is_featured').notNull().default(false),
  seoTitle: varchar('seo_title', { length: 255 }),
  seoDescription: text('seo_description'),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
});

export const adminPages = mysqlTable('admin_pages', {
  id: int('id').primaryKey().autoincrement(),
  pageKey: varchar('page_key', { length: 100 }).notNull().unique(), // e.g. 'homepage', 'about-us'
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  heroHeading: text('hero_heading'),
  heroText: text('hero_text'),
  sections: text('sections'), // JSON blob
  seoTitle: varchar('seo_title', { length: 255 }),
  seoDescription: text('seo_description'),
  status: varchar('status', { length: 20 }).notNull().default('published'),
  lastUpdated: timestamp('last_updated').notNull().defaultNow().onUpdateNow(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const adminNavLinks = mysqlTable('admin_nav_links', {
  id: int('id').primaryKey().autoincrement(),
  location: varchar('location', { length: 50 }).notNull(), // 'header' | 'footer'
  label: varchar('label', { length: 100 }).notNull(),
  href: varchar('href', { length: 500 }).notNull(),
  isExternal: boolean('is_external').notNull().default(false),
  sortOrder: int('sort_order').notNull().default(0),
  parentId: int('parent_id'),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const adminSeoSettings = mysqlTable('admin_seo_settings', {
  id: int('id').primaryKey().autoincrement(),
  pageKey: varchar('page_key', { length: 100 }).notNull().unique(),
  seoTitle: varchar('seo_title', { length: 255 }),
  seoDescription: text('seo_description'),
  ogImage: text('og_image'),
  noIndex: boolean('no_index').notNull().default(false),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
});

export const adminAuditLog = mysqlTable('admin_audit_log', {
  id: int('id').primaryKey().autoincrement(),
  userId: varchar('user_id', { length: 36 }).notNull(),
  action: varchar('action', { length: 100 }).notNull(),
  resource: varchar('resource', { length: 100 }).notNull(),
  resourceId: varchar('resource_id', { length: 100 }),
  detail: text('detail'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
