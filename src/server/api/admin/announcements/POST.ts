import type { Request, Response } from 'express';

import { db } from '@/server/db/client';
import { adminAnnouncements, adminAuditLog } from '@/server/db/schema';

export async function adminAnnouncementsPostHandler(req: Request, res: Response) {
  try {
    const {
      title,
      slug,
      summary,
      content,
      category,
      authorName,
      status,
      isFeatured,
      seoTitle,
      seoDescription,
      publishedAt,
    } = req.body;

    if (!title || !slug || !summary || !content) {
      return res.status(400).json({ error: 'Title, slug, summary and content are required.' });
    }

    const nextStatus = status === 'published' ? 'published' : 'draft';
    const [result] = await db!.insert(adminAnnouncements).values({
      title,
      slug,
      summary,
      content,
      category: category || 'Corporate',
      authorName: authorName || 'JA Group Services Ltd',
      status: nextStatus,
      isFeatured: Boolean(isFeatured),
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
      publishedAt: nextStatus === 'published'
        ? (publishedAt ? new Date(publishedAt) : new Date())
        : null,
    });

    const adminUser = (req as any).adminUser;
    await db!.insert(adminAuditLog).values({
      userId: adminUser.id,
      action: 'create',
      resource: 'announcement',
      resourceId: String((result as any).insertId),
      detail: `Created announcement: ${title}`,
    });

    return res.status(201).json({ ok: true, id: (result as any).insertId });
  } catch (err: any) {
    if (err?.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'An announcement with that slug already exists.' });
    }
    console.error('Create announcement error:', err);
    return res.status(500).json({ error: 'Failed to create announcement.' });
  }
}

export default adminAnnouncementsPostHandler;
