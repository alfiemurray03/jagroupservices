import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminPages, adminAuditLog } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export async function adminPagePutHandler(req: Request, res: Response) {
  try {
    const pageKey = req.params.key;
    const { title, slug, heroHeading, heroText, sections, seoTitle, seoDescription, status } = req.body;

    const [existing] = await db!.select().from(adminPages).where(eq(adminPages.pageKey, pageKey)).limit(1);

    if (existing) {
      await db!.update(adminPages).set({
        title: title ?? existing.title,
        slug: slug ?? existing.slug,
        heroHeading: heroHeading ?? existing.heroHeading,
        heroText: heroText ?? existing.heroText,
        sections: sections !== undefined ? JSON.stringify(sections) : existing.sections,
        seoTitle: seoTitle ?? existing.seoTitle,
        seoDescription: seoDescription ?? existing.seoDescription,
        status: status ?? existing.status,
      }).where(eq(adminPages.pageKey, pageKey));
    } else {
      await db!.insert(adminPages).values({
        pageKey,
        title: title || pageKey,
        slug: slug || `/${pageKey}`,
        heroHeading: heroHeading || null,
        heroText: heroText || null,
        sections: sections ? JSON.stringify(sections) : null,
        seoTitle: seoTitle || null,
        seoDescription: seoDescription || null,
        status: status || 'published',
      });
    }

    const adminUser = (req as any).adminUser;
    await db!.insert(adminAuditLog).values({
      userId: adminUser.id,
      action: existing ? 'update' : 'create',
      resource: 'page',
      resourceId: pageKey,
      detail: `Updated page: ${pageKey}`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Update page error:', err);
    return res.status(500).json({ error: 'Failed to update page.' });
  }
}

export default adminPagePutHandler;
