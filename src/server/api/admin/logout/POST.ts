import type { Request, Response } from 'express';
import { getAuth } from '@/lib/auth/auth';

export async function adminLogoutHandler(req: Request, res: Response) {
  try {
    const auth = getAuth();
    await auth.api.signOut({
      headers: req.headers as Record<string, string>,
    });
    return res.json({ ok: true });
  } catch (err) {
    console.error('Logout error:', err);
    return res.status(500).json({ error: 'Logout failed.' });
  }
}

export default adminLogoutHandler;
