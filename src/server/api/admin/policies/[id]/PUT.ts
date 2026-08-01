import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminPolicies, adminAuditLog } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export async function adminPolicyPutHandler(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const { title, slug, seoTitle, seoDescription, content, status, version } = req.body;

    const [existing] = await db!.select().from(adminPolicies).where(eq(adminPolicies.id, id)).limit(1);
    if (!existing) return res.status(404).json({ error: 'Policy not found.' });

    await db!.update(adminPolicies).set({
      title: title ?? existing.title,
      slug: slug ?? existing.slug,
      seoTitle: seoTitle ?? existing.seoTitle,
      seoDescription: seoDescription ?? existing.seoDescription,
      content: content ?? existing.content,
      status: status ?? existing.status,
      version: version ?? existing.version,
    }).where(eq(adminPolicies.id, id));

    const adminUser = (req as any).adminUser;
    await db!.insert(adminAuditLog).values({
      userId: adminUser.id,
      action: 'update',
      resource: 'policy',
      resourceId: String(id),
      detail: `Updated policy: ${title ?? existing.title}`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Update policy error:', err);
    return res.status(500).json({ error: 'Failed to update policy.' });
  }
}

export default adminPolicyPutHandler;
