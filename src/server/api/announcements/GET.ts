import type { Request, Response } from 'express';
import { desc, eq } from 'drizzle-orm';

import { db } from '@/server/db/client';
import { adminAnnouncements } from '@/server/db/schema';

export async function publicAnnouncementsGetHandler(_req: Request, res: Response) {
  try {
    const announcements = await db!
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

    return res.json(announcements);
  } catch (err) {
    console.error('Public announcements error:', err);
    return res.status(500).json({ error: 'Failed to fetch announcements.' });
  }
}

export default publicAnnouncementsGetHandler;
