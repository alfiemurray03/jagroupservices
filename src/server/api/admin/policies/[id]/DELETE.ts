import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminPolicies, adminAuditLog } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export async function adminPolicyDeleteHandler(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const [existing] = await db!.select().from(adminPolicies).where(eq(adminPolicies.id, id)).limit(1);
    if (!existing) return res.status(404).json({ error: 'Policy not found.' });

    await db!.delete(adminPolicies).where(eq(adminPolicies.id, id));

    const adminUser = (req as any).adminUser;
    await db!.insert(adminAuditLog).values({
      userId: adminUser.id,
      action: 'delete',
      resource: 'policy',
      resourceId: String(id),
      detail: `Deleted policy: ${existing.title}`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Delete policy error:', err);
    return res.status(500).json({ error: 'Failed to delete policy.' });
  }
}

export default adminPolicyDeleteHandler;
