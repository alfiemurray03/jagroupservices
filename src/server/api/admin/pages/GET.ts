import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminPages } from '@/server/db/schema';
import { desc } from 'drizzle-orm';

export async function adminPagesGetHandler(_req: Request, res: Response) {
  try {
    const pages = await db!.select().from(adminPages).orderBy(desc(adminPages.createdAt));
    return res.json(pages);
  } catch (err) {
    console.error('Get pages error:', err);
    return res.status(500).json({ error: 'Failed to fetch pages.' });
  }
}

export default adminPagesGetHandler;
