import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminPolicies } from '@/server/db/schema';
import { desc } from 'drizzle-orm';

export async function adminPoliciesGetHandler(_req: Request, res: Response) {
  try {
    const policies = await db!.select().from(adminPolicies).orderBy(desc(adminPolicies.createdAt));
    return res.json(policies);
  } catch (err) {
    console.error('Get policies error:', err);
    return res.status(500).json({ error: 'Failed to fetch policies.' });
  }
}

export default adminPoliciesGetHandler;
