import type { Request, Response } from 'express';
import { getAuth } from '@/lib/auth/auth';
import { db } from '@/server/db/client';
import { user } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export async function adminLoginHandler(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const auth = getAuth();
    // Use BetterAuth's sign-in API
    const signInRes = await auth.api.signInEmail({
      body: { email, password },
      headers: req.headers as Record<string, string>,
    });

    if (!signInRes) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    // Check admin flag
    const [adminUser] = await db!.select().from(user).where(eq(user.email, email)).limit(1);
    if (!adminUser?.isAdmin) {
      return res.status(403).json({ error: 'Access denied. Admin privileges required.' });
    }

    // Forward Set-Cookie headers from BetterAuth
    const setCookie = (signInRes as any).headers?.get?.('set-cookie');
    if (setCookie) res.setHeader('Set-Cookie', setCookie);

    return res.json({ ok: true, user: { id: adminUser.id, name: adminUser.name, email: adminUser.email } });
  } catch (err) {
    console.error('Admin login error:', err);
    return res.status(401).json({ error: 'Invalid credentials.' });
  }
}

export default adminLoginHandler;
