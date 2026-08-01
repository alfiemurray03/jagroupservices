import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminPolicies } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export async function adminPolicyGetHandler(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const [policy] = await db!.select().from(adminPolicies).where(eq(adminPolicies.id, id)).limit(1);
    if (!policy) return res.status(404).json({ error: 'Policy not found.' });
    return res.json(policy);
  } catch (err) {
    console.error('Get policy error:', err);
    return res.status(500).json({ error: 'Failed to fetch policy.' });
  }
}

export default adminPolicyGetHandler;
