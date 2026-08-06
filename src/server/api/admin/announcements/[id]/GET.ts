import type { Request, Response } from 'express';
import { eq } from 'drizzle-orm';

import { db } from '@/server/db/client';
import { adminAnnouncements } from '@/server/db/schema';

export async function adminAnnouncementGetHandler(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id, 10);
    if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid announcement ID.' });

    const [announcement] = await db!
      .select()
      .from(adminAnnouncements)
      .where(eq(adminAnnouncements.id, id))
      .limit(1);

    if (!announcement) return res.status(404).json({ error: 'Announcement not found.' });
    return res.json(announcement);
  } catch (err) {
    console.error('Get announcement error:', err);
    return res.status(500).json({ error: 'Failed to fetch announcement.' });
  }
}

export default adminAnnouncementGetHandler;
