import type { Request, Response, NextFunction } from 'express';
import { getAuth } from '@/lib/auth/auth';
import { db } from '@/server/db/client';
import { user } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export async function requireAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const auth = getAuth();
    const session = await auth.api.getSession({
      headers: req.headers as Record<string, string>,
    });

    if (!session?.user?.id) {
      return res.status(401).json({ error: 'Unauthorised. Please log in.' });
    }

    const [adminUser] = await db!.select().from(user).where(eq(user.id, session.user.id)).limit(1);
    if (!adminUser?.isAdmin) {
      return res.status(403).json({ error: 'Forbidden. Admin access required.' });
    }

    (req as any).adminUser = adminUser;
    return next();
  } catch (err) {
    console.error('Admin auth middleware error:', err);
    return res.status(401).json({ error: 'Unauthorised.' });
  }
}
