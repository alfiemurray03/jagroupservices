import { useEffect, useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  MonitorSmartphone,
  ShieldCheck,
  UserRoundCog,
} from 'lucide-react';
import { Link } from 'react-router-dom';

type SessionState = {
  authenticated: boolean;
  user?: { name?: string; email?: string };
};

export default function JAGroupServicesIDSignInPage() {
  const [session, setSession] = useState<SessionState | null>(null);

  useEffect(() => {
    fetch('/api/id/session', { credentials: 'include', cache: 'no-store' })
      .then((response) => response.json())
      .then((data) => setSession(data))
      .catch(() => setSession({ authenticated: false }));
  }, []);

  const authenticated = session?.authenticated === true;

  return (
    <>
      <Helmet>
        <title>Sign in to JA Group Services ID</title>
        <meta
          name="description"
          content="Sign in securely to the central JA Group Services ID Dashboard."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://jagroupservices.co.uk/id/sign-in" />
      </Helmet>

      <main className="min-h-[calc(100vh-5rem)] overflow-hidden bg-background text-foreground">
        <section className="relative bg-[#071a38] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-28 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-44 -left-24 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                <ShieldCheck className="h-4 w-4" />
                Secure customer access
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Sign in to your JA Group Services ID Dashboard
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                Use one secure account to manage your central personal information, account security,
                signed-in sessions and connected JA Group Services platforms.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  [UserRoundCog, 'Manage your information', 'Update the details shared across connected JA services.'],
                  [MonitorSmartphone, 'Review account access', 'See the sessions and devices using your central ID.'],
                  [Building2, 'Open connected services', 'Reach your JA platforms from one central dashboard.'],
                  [KeyRound, 'Get recovery support', 'Use Microsoft self-service or verified Head Office assistance.'],
                ].map(([Icon, title, description]) => (
                  <div key={String(title)} className="rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-blue-200" />
                    <p className="mt-3 font-semibold text-white">{String(title)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">{String(description)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white text-slate-900 shadow-2xl shadow-black/25">
              <div className="border-b border-slate-200 px-7 py-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071a38] text-white">
                    <LockKeyhole className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">JA Group Services ID</p>
                    <p className="text-sm text-slate-500">Protected by Microsoft Entra External ID</p>
                  </div>
                </div>
              </div>

              <div className="px-7 py-7">
                {session === null ? (
                  <div className="flex min-h-40 items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                  </div>
                ) : authenticated ? (
                  <>
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                        <div>
                          <p className="font-semibold text-emerald-950">You are already signed in</p>
                          <p className="mt-1 text-sm text-emerald-800">
                            {session.user?.name || session.user?.email || 'Your JA Group Services ID'} is ready.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/id/dashboard"
                      className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#071a38] px-5 py-3 font-semibold text-white transition hover:bg-[#0b2b59]"
                    >
                      Open my dashboard
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-950">Continue securely</h2>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      Microsoft will confirm your identity and return you securely to your personalised dashboard.
                    </p>
                    <a
                      href="/api/id/sign-in"
                      className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#071a38] px-5 py-3 font-semibold text-white transition hover:bg-[#0b2b59]"
                    >
                      Sign in to JA Group Services ID
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
                      JA Group Services never sees or stores your Microsoft password.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <LayoutDashboard className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">One central identity, properly controlled</h2>
            <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-muted-foreground">
              Your dashboard gives you customer-facing controls. Head Office continues to govern security,
              account recovery and customer operations behind the scenes.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
