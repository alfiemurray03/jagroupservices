import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminPolicies, adminAuditLog } from '@/server/db/schema';

export async function adminPoliciesPostHandler(req: Request, res: Response) {
  try {
    const { title, slug, seoTitle, seoDescription, content, status, version } = req.body;
    if (!title || !slug || !content) {
      return res.status(400).json({ error: 'Title, slug, and content are required.' });
    }

    const [result] = await db!.insert(adminPolicies).values({
      title,
      slug,
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
      content,
      status: status || 'draft',
      version: version || '1.0',
    });

    const adminUser = (req as any).adminUser;
    await db!.insert(adminAuditLog).values({
      userId: adminUser.id,
      action: 'create',
      resource: 'policy',
      resourceId: String((result as any).insertId),
      detail: `Created policy: ${title}`,
    });

    return res.status(201).json({ ok: true, id: (result as any).insertId });
  } catch (err: any) {
    if (err?.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'A policy with that slug already exists.' });
    }
    console.error('Create policy error:', err);
    return res.status(500).json({ error: 'Failed to create policy.' });
  }
}

export default adminPoliciesPostHandler;
