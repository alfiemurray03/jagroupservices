import type { Request, Response } from 'express';
import { eq } from 'drizzle-orm';

import { db } from '@/server/db/client';
import { adminAnnouncements, adminAuditLog } from '@/server/db/schema';

export async function adminAnnouncementPutHandler(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id, 10);
    if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid announcement ID.' });

    const [existing] = await db!
      .select()
      .from(adminAnnouncements)
      .where(eq(adminAnnouncements.id, id))
      .limit(1);

    if (!existing) return res.status(404).json({ error: 'Announcement not found.' });

    const nextStatus = req.body.status ?? existing.status;
    const nextPublishedAt = req.body.publishedAt
      ? new Date(req.body.publishedAt)
      : nextStatus === 'published' && !existing.publishedAt
        ? new Date()
        : existing.publishedAt;

    await db!.update(adminAnnouncements).set({
      title: req.body.title ?? existing.title,
      slug: req.body.slug ?? existing.slug,
      summary: req.body.summary ?? existing.summary,
      content: req.body.content ?? existing.content,
      category: req.body.category ?? existing.category,
      authorName: req.body.authorName ?? existing.authorName,
      status: nextStatus,
      isFeatured: req.body.isFeatured ?? existing.isFeatured,
      seoTitle: req.body.seoTitle ?? existing.seoTitle,
      seoDescription: req.body.seoDescription ?? existing.seoDescription,
      publishedAt: nextStatus === 'published' ? nextPublishedAt : existing.publishedAt,
    }).where(eq(adminAnnouncements.id, id));

    const adminUser = (req as any).adminUser;
    await db!.insert(adminAuditLog).values({
      userId: adminUser.id,
      action: 'update',
      resource: 'announcement',
      resourceId: String(id),
      detail: `Updated announcement: ${req.body.title ?? existing.title}`,
    });

    return res.json({ ok: true });
  } catch (err: any) {
    if (err?.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'An announcement with that slug already exists.' });
    }
    console.error('Update announcement error:', err);
    return res.status(500).json({ error: 'Failed to update announcement.' });
  }
}

export default adminAnnouncementPutHandler;
