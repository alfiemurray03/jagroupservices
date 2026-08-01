import type { Request, Response } from 'express';
import { getAuth } from '@/lib/auth/auth';
import { db } from '@/server/db/client';
import { user } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export async function adminSessionHandler(req: Request, res: Response) {
  try {
    const auth = getAuth();
    const session = await auth.api.getSession({
      headers: req.headers as Record<string, string>,
    });

    if (!session?.user?.id) {
      return res.status(401).json({ authenticated: false });
    }

    const [adminUser] = await db!.select().from(user).where(eq(user.id, session.user.id)).limit(1);
    if (!adminUser?.isAdmin) {
      return res.status(403).json({ authenticated: false, error: 'Not an admin.' });
    }

    return res.json({
      authenticated: true,
      user: { id: adminUser.id, name: adminUser.name, email: adminUser.email },
    });
  } catch {
    return res.status(401).json({ authenticated: false });
  }
}

export default adminSessionHandler;
