import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminSeoSettings } from '@/server/db/schema';

export async function adminSeoGetHandler(_req: Request, res: Response) {
  try {
    const settings = await db!.select().from(adminSeoSettings);
    return res.json(settings);
  } catch (err) {
    console.error('Get SEO settings error:', err);
    return res.status(500).json({ error: 'Failed to fetch SEO settings.' });
  }
}

export default adminSeoGetHandler;
