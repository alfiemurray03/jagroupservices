import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminNavLinks } from '@/server/db/schema';
import { asc } from 'drizzle-orm';

export async function adminNavGetHandler(_req: Request, res: Response) {
  try {
    const links = await db!.select().from(adminNavLinks).orderBy(asc(adminNavLinks.sortOrder));
    return res.json(links);
  } catch (err) {
    console.error('Get nav links error:', err);
    return res.status(500).json({ error: 'Failed to fetch nav links.' });
  }
}

export default adminNavGetHandler;
