import type { Request, Response } from 'express';
import { getAuth } from '@/lib/auth/auth';
import { db } from '@/server/db/client';
import { user } from '@/server/db/schema';
import { eq } from 'drizzle-orm';
// One-time seed endpoint — only works if no super admin exists yet
// Protected by ADMIN_SEED_TOKEN environment variable
export async function adminSeedHandler(req: Request, res: Response) {
  try {
    const seedToken = process.env.ADMIN_SEED_TOKEN;
    const { token, name, email, password } = req.body;

    if (!seedToken || token !== seedToken) {
      return res.status(403).json({ error: 'Invalid seed token.' });
    }

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'name, email, and password are required.' });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters.' });
    }

    // Check if any admin already exists
    const [existingAdmin] = await db!.select().from(user).where(eq(user.isAdmin, true)).limit(1);
    if (existingAdmin) {
      return res.status(409).json({ error: 'A super admin already exists.' });
    }

    const auth = getAuth();
    await auth.api.signUpEmail({
      body: { name, email, password },
    });

    // Set isAdmin flag
    await db!.update(user).set({ isAdmin: true }).where(eq(user.email, email));

    return res.json({ ok: true, message: 'Super admin created successfully.' });
  } catch (err: any) {
    console.error('Seed admin error:', err);
    return res.status(500).json({ error: 'Failed to create admin user.' });
  }
}

export default adminSeedHandler;
