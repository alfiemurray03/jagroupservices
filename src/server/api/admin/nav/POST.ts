import type { Request, Response } from 'express';
import { db } from '@/server/db/client';
import { adminNavLinks, adminAuditLog } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export async function adminNavPostHandler(req: Request, res: Response) {
  try {
    const { action, links } = req.body;

    if (action === 'replace' && Array.isArray(links)) {
      // Replace all links for a location
      const location = links[0]?.location;
      if (location) {
        await db!.delete(adminNavLinks).where(eq(adminNavLinks.location, location));
      }
      if (links.length > 0) {
        await db!.insert(adminNavLinks).values(links.map((l: any, i: number) => ({
          location: l.location,
          label: l.label,
          href: l.href,
          isExternal: l.isExternal ?? false,
          sortOrder: l.sortOrder ?? i,
          parentId: l.parentId ?? null,
          isActive: l.isActive ?? true,
        })));
      }
    } else {
      const { location, label, href, isExternal, sortOrder, parentId } = req.body;
      await db!.insert(adminNavLinks).values({ location, label, href, isExternal: isExternal ?? false, sortOrder: sortOrder ?? 0, parentId: parentId ?? null });
    }

    const adminUser = (req as any).adminUser;
    await db!.insert(adminAuditLog).values({
      userId: adminUser.id,
      action: 'update',
      resource: 'nav',
      resourceId: null,
      detail: 'Updated navigation links',
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Update nav error:', err);
    return res.status(500).json({ error: 'Failed to update navigation.' });
  }
}

export default adminNavPostHandler;
