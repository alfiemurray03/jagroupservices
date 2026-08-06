import type { Request, Response } from 'express';
import { eq } from 'drizzle-orm';

import { db } from '@/server/db/client';
import { adminAnnouncements, adminAuditLog } from '@/server/db/schema';

export async function adminAnnouncementDeleteHandler(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id, 10);
    if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid announcement ID.' });

    const [existing] = await db!
      .select()
      .from(adminAnnouncements)
      .where(eq(adminAnnouncements.id, id))
      .limit(1);

    if (!existing) return res.status(404).json({ error: 'Announcement not found.' });

    await db!.delete(adminAnnouncements).where(eq(adminAnnouncements.id, id));

    const adminUser = (req as any).adminUser;
    await db!.insert(adminAuditLog).values({
      userId: adminUser.id,
      action: 'delete',
      resource: 'announcement',
      resourceId: String(id),
      detail: `Deleted announcement: ${existing.title}`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Delete announcement error:', err);
    return res.status(500).json({ error: 'Failed to delete announcement.' });
  }
}

export default adminAnnouncementDeleteHandler;
