import type { Request, Response } from 'express';
import { desc, eq } from 'drizzle-orm';

import { getFallbackAnnouncementSummaries } from '@/data/public-announcements';
import { db } from '@/server/db/client';
import { adminAnnouncements } from '@/server/db/schema';

function sendFallbackAnnouncements(res: Response) {
  return res
    .status(200)
    .set('Cache-Control', 'public, max-age=60, stale-while-revalidate=300')
    .set('X-Announcements-Source', 'published-fallback')
    .json(getFallbackAnnouncementSummaries());
}

export async function publicAnnouncementsGetHandler(_req: Request, res: Response) {
  try {
    const announcements = await db
      .select({
        id: adminAnnouncements.id,
        title: adminAnnouncements.title,
        slug: adminAnnouncements.slug,
        summary: adminAnnouncements.summary,
        category: adminAnnouncements.category,
        authorName: adminAnnouncements.authorName,
        isFeatured: adminAnnouncements.isFeatured,
        publishedAt: adminAnnouncements.publishedAt,
        updatedAt: adminAnnouncements.updatedAt,
      })
      .from(adminAnnouncements)
      .where(eq(adminAnnouncements.status, 'published'))
      .orderBy(desc(adminAnnouncements.isFeatured), desc(adminAnnouncements.publishedAt), desc(adminAnnouncements.createdAt));

    if (announcements.length === 0) return sendFallbackAnnouncements(res);

    return res
      .status(200)
      .set('Cache-Control', 'public, max-age=60, stale-while-revalidate=300')
      .set('X-Announcements-Source', 'database')
      .json(announcements);
  } catch (err) {
    console.error('Public announcements database unavailable; serving published fallback:', err);
    return sendFallbackAnnouncements(res);
  }
}

export default publicAnnouncementsGetHandler;
