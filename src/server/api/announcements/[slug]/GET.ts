import type { Request, Response } from 'express';
import { and, eq } from 'drizzle-orm';

import { db } from '@/server/db/client';
import { adminAnnouncements } from '@/server/db/schema';

export async function publicAnnouncementGetHandler(req: Request, res: Response) {
  try {
    const [announcement] = await db!
      .select()
      .from(adminAnnouncements)
      .where(and(
        eq(adminAnnouncements.slug, req.params.slug),
        eq(adminAnnouncements.status, 'published'),
      ))
      .limit(1);

    if (!announcement) return res.status(404).json({ error: 'Announcement not found.' });
    return res.json(announcement);
  } catch (err) {
    console.error('Public announcement error:', err);
    return res.status(500).json({ error: 'Failed to fetch announcement.' });
  }
}

export default publicAnnouncementGetHandler;
