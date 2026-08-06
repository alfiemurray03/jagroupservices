import type { Request, Response } from 'express';
import { desc } from 'drizzle-orm';

import { db } from '@/server/db/client';
import { adminAnnouncements } from '@/server/db/schema';

export async function adminAnnouncementsGetHandler(_req: Request, res: Response) {
  try {
    const announcements = await db!
      .select()
      .from(adminAnnouncements)
      .orderBy(desc(adminAnnouncements.publishedAt), desc(adminAnnouncements.createdAt));

    return res.json(announcements);
  } catch (err) {
    console.error('Get announcements error:', err);
    return res.status(500).json({ error: 'Failed to fetch announcements.' });
  }
}

export default adminAnnouncementsGetHandler;
