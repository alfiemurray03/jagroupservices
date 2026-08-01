import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminSeoSettings, adminAuditLog } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export async function adminSeoPutHandler(req: Request, res: Response) {
  try {
    const { pageKey, seoTitle, seoDescription, ogImage, noIndex } = req.body;
    if (!pageKey) return res.status(400).json({ error: 'pageKey is required.' });

    const [existing] = await db!.select().from(adminSeoSettings).where(eq(adminSeoSettings.pageKey, pageKey)).limit(1);

    if (existing) {
      await db!.update(adminSeoSettings).set({
        seoTitle: seoTitle ?? existing.seoTitle,
        seoDescription: seoDescription ?? existing.seoDescription,
        ogImage: ogImage ?? existing.ogImage,
        noIndex: noIndex ?? existing.noIndex,
      }).where(eq(adminSeoSettings.pageKey, pageKey));
    } else {
      await db!.insert(adminSeoSettings).values({ pageKey, seoTitle, seoDescription, ogImage, noIndex: noIndex ?? false });
    }

    const adminUser = (req as any).adminUser;
    await db!.insert(adminAuditLog).values({
      userId: adminUser.id,
      action: 'update',
      resource: 'seo',
      resourceId: pageKey,
      detail: `Updated SEO for: ${pageKey}`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Update SEO error:', err);
    return res.status(500).json({ error: 'Failed to update SEO settings.' });
  }
}

export default adminSeoPutHandler;
