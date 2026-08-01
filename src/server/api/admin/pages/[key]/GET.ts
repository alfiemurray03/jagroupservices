import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminPages } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export async function adminPageGetHandler(req: Request, res: Response) {
  try {
    const pageKey = req.params.key;
    const [page] = await db!.select().from(adminPages).where(eq(adminPages.pageKey, pageKey)).limit(1);
    if (!page) return res.status(404).json({ error: 'Page not found.' });
    return res.json({ ...page, sections: page.sections ? JSON.parse(page.sections) : null });
  } catch (err) {
    console.error('Get page error:', err);
    return res.status(500).json({ error: 'Failed to fetch page.' });
  }
}

export default adminPageGetHandler;
