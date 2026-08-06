import type { Request, Response } from 'express';
import { and, eq } from 'drizzle-orm';

import { getFallbackAnnouncement } from '@/data/public-announcements';
import { db } from '@/server/db/client';
import { adminAnnouncements } from '@/server/db/schema';

function sendFallbackAnnouncement(slug: string, res: Response) {
  const announcement = getFallbackAnnouncement(slug);
  if (!announcement) return res.status(404).json({ error: 'Announcement not found.' });

  return res
    .status(200)
    .set('Cache-Control', 'public, max-age=60, stale-while-revalidate=300')
    .set('X-Announcements-Source', 'published-fallback')
    .json(announcement);
}

export async function publicAnnouncementGetHandler(req: Request, res: Response) {
  try {
    const [announcement] = await db
      .select()
      .from(adminAnnouncements)
      .where(and(
        eq(adminAnnouncements.slug, req.params.slug),
        eq(adminAnnouncements.status, 'published'),
      ))
      .limit(1);

    if (!announcement) return sendFallbackAnnouncement(req.params.slug, res);

    return res
      .status(200)
      .set('Cache-Control', 'public, max-age=60, stale-while-revalidate=300')
      .set('X-Announcements-Source', 'database')
      .json(announcement);
  } catch (err) {
    console.error('Public announcement database unavailable; checking published fallback:', err);
    return sendFallbackAnnouncement(req.params.slug, res);
  }
}

export default publicAnnouncementGetHandler;
