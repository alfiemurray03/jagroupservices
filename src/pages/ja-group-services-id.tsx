import { useEffect, useState, type ComponentType } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import {
  Activity,
  ArrowRight,
  Bell,
  Building2,
  CheckCircle2,
  CircleUserRound,
  FileText,
  Globe2,
  KeyRound,
  Laptop,
  LifeBuoy,
  LockKeyhole,
  LogIn,
  LogOut,
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  Settings2,
  ShieldCheck,
  Smartphone,
  UserRoundCog,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type DashboardSection =
  | 'overview'
  | 'personal-details'
  | 'security'
  | 'sessions'
  | 'services'
  | 'privacy'
  | 'support';

type IconType = ComponentType<{ className?: string }>;

interface NavigationItem {
  id: DashboardSection;
  label: string;
  description: string;
  icon: IconType;
}

interface IdentityUser {
  id: string;
  objectId: string;
  tenantId: string;
  name: string;
  email: string;
  identityProvider: string;
}

interface IdentitySession {
  authenticated: true;
  user: IdentityUser;
  session: {
    issuedAt: string;
    expiresAt: string;
    authTime: string;
    authenticationContext: string | null;
  };
}

const navigationItems: NavigationItem[] = [
  { id: 'overview', label: 'Overview', description: 'Your central account at a glance', icon: CircleUserRound },
  { id: 'personal-details', label: 'Personal details', description: 'The information shared with connected services', icon: UserRoundCog },
  { id: 'security', label: 'Security', description: 'Password, verification and recovery settings', icon: ShieldCheck },
  { id: 'sessions', label: 'Sessions and devices', description: 'Review where your account is signed in', icon: MonitorSmartphone },
  { id: 'services', label: 'Connected services', description: 'See the JA services linked to your ID', icon: Building2 },
  { id: 'privacy', label: 'Privacy and preferences', description: 'Control communications and data requests', icon: Settings2 },
  { id: 'support', label: 'Help and recovery', description: 'Get help when you cannot access your account', icon: LifeBuoy },
];

const connectedServices = [
  { name: 'Sousa Murray Profiles', description: 'Digital profiles and identity presentation', status: 'Central connection planned' },
  { name: 'Sousa Murray Planeia', description: 'Experience and itinerary planning', status: 'Central connection planned' },
  { name: 'Sousa Murray Domains', description: 'Domains and managed website services', status: 'Central connection planned' },
  { name: 'Dealt With', description: 'Connected customer service platform', status: 'Planned' },
];

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Unavailable';
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function authErrorMessage(code: string | null) {
  switch (code) {
    case 'access_denied':
      return 'Microsoft sign-in was cancelled or access was not granted.';
    case 'configuration':
      return 'The JA Group Services ID connection is not fully configured yet.';
    case 'metadata':
      return 'Microsoft identity services could not be reached.';
    case 'state':
      return 'The sign-in request expired. Please start again.';
    case 'token':
      return 'Microsoft could not complete the secure sign-in exchange.';
    case 'authentication':
      return 'The sign-in could not be completed securely.';
    default:
      return null;
  }
}

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function DetailValue({ label, value, icon: Icon }: { label: string; value: string; icon: IconType }) {
  return (
    <div className="min-w-0 rounded-2xl border border-border bg-muted/35 p-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
          <p className="mt-1 break-words text-sm font-semibold text-foreground [overflow-wrap:anywhere]">{value}</p>
        </div>
      </div>
    </div>
  );
}

function ActionCard({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: IconType;
  title: string;
  description: string;
  action: string;
}) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-card-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
        <LockKeyhole className="h-4 w-4" />
        {action}
      </div>
    </article>
  );
}

function SignInPanel({
  identitySession,
  loading,
  signingOut,
  error,
  onSignOut,
}: {
  identitySession: IdentitySession | null;
  loading: boolean;
  signingOut: boolean;
  error: string | null;
  onSignOut: () => Promise<void>;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-primary/25 bg-card shadow-lg">
      <div className="bg-[#071a38] px-6 py-7 text-white sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
              <ShieldCheck className="h-4 w-4" />
              Secure customer access
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              {identitySession ? `Welcome, ${identitySession.user.name}` : 'Sign in to your central account'}
            </h2>
            <p className="mt-2 max-w-2xl break-words leading-relaxed text-white/78 [overflow-wrap:anywhere]">
              {identitySession
                ? `You are securely signed in using ${identitySession.user.email || 'your JA Group Services ID'}.`
                : 'Use your JA Group Services ID to access your central personal details, security, sessions and connected services.'}
            </p>
          </div>
          <div className="shrink-0">
            {loading ? (
              <div className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white/15 px-5 py-3 font-semibold text-white/75">
                Checking secure session…
              </div>
            ) : identitySession ? (
              <button
                type="button"
                onClick={() => void onSignOut()}
                disabled={signingOut}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/55 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
              >
                <LogOut className="h-5 w-5" />
                {signingOut ? 'Signing out…' : 'Sign out'}
              </button>
            ) : (
              <a
                href="/api/id/sign-in"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#071a38] shadow-sm transition hover:bg-blue-50 sm:w-auto"
              >
                <LogIn className="h-5 w-5" />
                Sign in with Microsoft
              </a>
            )}
          </div>
        </div>
        {error && (
          <div className="mt-5 rounded-2xl border border-red-200/35 bg-red-950/30 px-4 py-3 text-sm leading-relaxed text-red-50">
            {error}
          </div>
        )}
      </div>
      <div className="grid gap-4 px-6 py-6 sm:grid-cols-3 sm:px-8">
        <div className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">One JA Group Services ID across connected brands.</p>
        </div>
        <div className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">Main personal details will be edited centrally rather than separately on each brand.</p>
        </div>
        <div className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">Head Office retains security and customer-operations control.</p>
        </div>
      </div>
    </div>
  );
}

function OverviewSection({ identitySession }: { identitySession: IdentitySession | null }) {
  return (
    <>
      <SectionHeading
        title="Account overview"
        description="Your JA Group Services ID is the central identity used across connected customer services."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DetailValue label="Account holder" icon={CircleUserRound} value={identitySession?.user.name || 'Sign in to view'} />
        <DetailValue label="Unique Customer Number" icon={KeyRound} value={identitySession ? 'Awaiting central customer record' : 'Sign in to view'} />
        <DetailValue label="Account status" icon={ShieldCheck} value={identitySession ? 'Microsoft session active' : 'Signed out'} />
        <DetailValue label="Connected services" icon={Building2} value={identitySession ? 'Connections being prepared' : 'Sign in to view'} />
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <ActionCard
          icon={UserRoundCog}
          title="Keep your details consistent"
          description="Update central identity information once. Connected brands will display the latest authorised information in read-only form when the customer record service is connected."
          action={identitySession ? 'Central customer record required' : 'Sign in required'}
        />
        <ActionCard
          icon={ShieldCheck}
          title="Control account security"
          description="Microsoft External ID now performs the secure sign-in. Further authentication and recovery controls will be added as the identity service develops."
          action={identitySession ? 'Microsoft identity connected' : 'Sign in required'}
        />
        <ActionCard
          icon={MonitorSmartphone}
          title="Review signed-in sessions"
          description="The current JA Group Services website session is shown now. Group-wide brand session control will follow when each service is connected."
          action={identitySession ? 'Current session available' : 'Sign in required'}
        />
      </div>
    </>
  );
}

function PersonalDetailsSection({ identitySession }: { identitySession: IdentitySession | null }) {
  return (
    <>
      <SectionHeading
        title="Personal details"
        description="Connected brand websites will display central identity details in full but will not be permitted to edit them."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <DetailValue label="Full name" icon={CircleUserRound} value={identitySession?.user.name || 'Sign in to view'} />
        <DetailValue label="Primary email address" icon={Mail} value={identitySession?.user.email || (identitySession ? 'Not supplied by Microsoft' : 'Sign in to view')} />
        <DetailValue label="Telephone number" icon={Phone} value={identitySession ? 'Awaiting central customer record' : 'Sign in to view'} />
        <DetailValue label="Address" icon={MapPin} value={identitySession ? 'Awaiting central customer record' : 'Sign in to view'} />
      </div>
      <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-card-foreground">Central editing only</h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
              Microsoft has verified the signed-in identity. Editing, telephone, address and UCN functions will activate when this dashboard is connected to the central customer record shared with Head Office.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
            <LockKeyhole className="h-4 w-4" />
            Protected
          </span>
        </div>
      </div>
    </>
  );
}

function SecuritySection({ identitySession }: { identitySession: IdentitySession | null }) {
  return (
    <>
      <SectionHeading
        title="Security settings"
        description="Microsoft External ID handles authentication, while this dashboard provides customer-facing controls and Head Office retains administrative recovery authority."
      />
      {identitySession && (
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <DetailValue label="Identity provider" icon={ShieldCheck} value={identitySession.user.identityProvider} />
          <DetailValue label="Last authenticated" icon={Activity} value={formatDate(identitySession.session.authTime)} />
        </div>
      )}
      <div className="grid gap-5 md:grid-cols-2">
        <ActionCard icon={KeyRound} title="Password and sign-in" description="Passwords remain entirely within Microsoft’s secure identity system and are never stored or displayed by JA Group Services." action={identitySession ? 'Managed by Microsoft' : 'Sign in required'} />
        <ActionCard icon={Smartphone} title="Verification methods" description="Authentication and recovery methods will be presented here where supported by Microsoft External ID and JA security policy." action="Further integration required" />
        <ActionCard icon={Bell} title="Security notifications" description="Important sign-in, recovery and account-change notifications will be recorded and delivered through the central identity service." action="Central record required" />
        <ActionCard icon={Activity} title="Recent security activity" description="Customers will see appropriate security events without exposing internal Head Office notes, markers or investigations." action="Central audit service required" />
      </div>
    </>
  );
}

function SessionsSection({
  identitySession,
  signingOut,
  onSignOut,
}: {
  identitySession: IdentitySession | null;
  signingOut: boolean;
  onSignOut: () => Promise<void>;
}) {
  return (
    <>
      <SectionHeading
        title="Sessions and devices"
        description="The current secure JA Group Services website session is available now. Sessions from connected brands will appear here as those services adopt the central session register."
      />
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        {identitySession ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex min-w-0 items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Laptop className="h-7 w-7" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-card-foreground">This browser</h3>
                  <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-700 dark:text-green-300">Active now</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">JA Group Services ID Dashboard</p>
                <p className="mt-1 text-sm text-muted-foreground">Started {formatDate(identitySession.session.issuedAt)}</p>
                <p className="mt-1 text-sm text-muted-foreground">Expires {formatDate(identitySession.session.expiresAt)}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => void onSignOut()}
              disabled={signingOut}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-muted px-4 py-2.5 font-semibold text-foreground transition hover:bg-secondary disabled:cursor-wait disabled:opacity-70"
            >
              <LogOut className="h-4 w-4" />
              {signingOut ? 'Signing out…' : 'Sign out this session'}
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
              <Laptop className="h-8 w-8" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-card-foreground">Sign in to view active sessions</h3>
            <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">Your current secure dashboard session will appear here after Microsoft sign-in.</p>
          </div>
        )}
      </div>
    </>
  );
}

function ServicesSection() {
  return (
    <>
      <SectionHeading
        title="Connected services"
        description="This will show which JA Group Services brands are linked to the central identity and provide one place to open each service."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {connectedServices.map((service) => (
          <article key={service.name} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-card-foreground">{service.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </div>
              <span className="max-w-32 shrink-0 rounded-full bg-muted px-3 py-1 text-center text-xs font-semibold text-muted-foreground">{service.status}</span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function PrivacySection({ identitySession }: { identitySession: IdentitySession | null }) {
  return (
    <>
      <SectionHeading
        title="Privacy and preferences"
        description="Group-wide communication choices and customer data requests will be available here, while service-specific preferences remain within the relevant brand."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <ActionCard icon={Bell} title="Communication preferences" description="Manage group-wide service updates and optional marketing choices from one central account." action={identitySession ? 'Central record required' : 'Sign in required'} />
        <ActionCard icon={FileText} title="Data protection requests" description="Request access, correction or other data-protection assistance through the appropriate JA Group Services process." action={identitySession ? 'Request workflow to be connected' : 'Sign in required'} />
      </div>
      <div className="mt-6 rounded-3xl border border-primary/20 bg-primary/5 p-6">
        <p className="font-semibold text-foreground">Need information about your rights?</p>
        <p className="mt-2 leading-relaxed text-muted-foreground">The public Privacy Centre explains how JA Group Services handles personal information.</p>
        <Link to="/privacy-centre" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          Open the Privacy Centre
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}

function SupportSection() {
  return (
    <>
      <SectionHeading
        title="Help and account recovery"
        description="Normal Microsoft self-service recovery comes first. Where that fails, Customer Services can route the customer into the Head Office recovery process."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><KeyRound className="h-6 w-6" /></div>
          <h3 className="mt-5 text-lg font-bold text-card-foreground">Forgotten password</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">Use the forgotten-password option shown by Microsoft during sign-in. JA Group Services never displays or retrieves a customer’s password.</p>
          <a href="/api/id/sign-in" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            Open Microsoft sign-in
            <ArrowRight className="h-4 w-4" />
          </a>
        </article>
        <article className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><LifeBuoy className="h-6 w-6" /></div>
          <h3 className="mt-5 text-lg font-bold text-card-foreground">Cannot use normal recovery</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">Customer Services can open a recovery case for Head Office verification and authorised assistance where Microsoft’s normal options cannot be used.</p>
          <Link to="/customer-support" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            Open Customer Support
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </div>
    </>
  );
}

function DashboardContent({
  section,
  identitySession,
  signingOut,
  onSignOut,
}: {
  section: DashboardSection;
  identitySession: IdentitySession | null;
  signingOut: boolean;
  onSignOut: () => Promise<void>;
}) {
  switch (section) {
    case 'personal-details':
      return <PersonalDetailsSection identitySession={identitySession} />;
    case 'security':
      return <SecuritySection identitySession={identitySession} />;
    case 'sessions':
      return <SessionsSection identitySession={identitySession} signingOut={signingOut} onSignOut={onSignOut} />;
    case 'services':
      return <ServicesSection />;
    case 'privacy':
      return <PrivacySection identitySession={identitySession} />;
    case 'support':
      return <SupportSection />;
    default:
      return <OverviewSection identitySession={identitySession} />;
  }
}

export default function JAGroupServicesIDPage() {
  const [activeSection, setActiveSection] = useState<DashboardSection>('overview');
  const [identitySession, setIdentitySession] = useState<IdentitySession | null>(null);
  const [loading, setLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);
  const [sessionError, setSessionError] = useState<string | null>(null);
  const location = useLocation();
  const callbackError = authErrorMessage(new URLSearchParams(location.search).get('auth_error'));

  useEffect(() => {
    let cancelled = false;

    async function loadSession() {
      try {
        const response = await fetch('/api/id/session', {
          credentials: 'include',
          headers: { accept: 'application/json' },
        });
        const data = await response.json();
        if (cancelled) return;

        if (response.ok && data.authenticated) {
          setIdentitySession(data as IdentitySession);
          setSessionError(null);
        } else if (response.status === 503) {
          setSessionError('The secure identity service is temporarily unavailable.');
        } else {
          setIdentitySession(null);
        }
      } catch {
        if (!cancelled) setSessionError('The secure identity service could not be reached.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadSession();
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSignOut() {
    setSigningOut(true);
    try {
      const response = await fetch('/api/id/sign-out', {
        method: 'POST',
        credentials: 'include',
        headers: { accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Sign-out failed');
      setIdentitySession(null);
      setActiveSection('overview');
      setSessionError(null);
    } catch {
      setSessionError('We could not end the session. Please try again.');
    } finally {
      setSigningOut(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>JA Group Services ID | Central Account Dashboard</title>
        <meta name="description" content="The central customer account dashboard for JA Group Services ID, security, sessions, connected services and account recovery." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://jagroupservices.co.uk/id" />
      </Helmet>

      <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#071a38] py-14 text-white sm:py-18 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                <ShieldCheck className="h-4 w-4" />
                Central customer account
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">JA Group Services ID</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                One secure dashboard for your main personal details, account security, signed-in sessions, connected JA Group Services brands and recovery support.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SignInPanel
              identitySession={identitySession}
              loading={loading}
              signingOut={signingOut}
              error={callbackError || sessionError}
              onSignOut={handleSignOut}
            />
          </div>
        </section>

        <section className="bg-secondary py-10 sm:py-12">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8">
            <aside className="h-fit rounded-3xl border border-border bg-card p-3 shadow-sm lg:sticky lg:top-24">
              <div className="px-3 pb-3 pt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Account controls</p>
              </div>
              <nav className="space-y-1" aria-label="JA Group Services ID dashboard">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const active = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveSection(item.id)}
                      className={`flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition ${
                        active ? 'bg-primary text-primary-foreground shadow-sm' : 'text-foreground hover:bg-muted'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${active ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">{item.label}</span>
                        <span className={`mt-0.5 block text-xs leading-relaxed ${active ? 'text-primary-foreground/75' : 'text-muted-foreground'}`}>{item.description}</span>
                      </span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            <div className="min-w-0 rounded-3xl border border-border bg-background p-5 shadow-sm sm:p-7 lg:p-8">
              <DashboardContent
                section={activeSection}
                identitySession={identitySession}
                signingOut={signingOut}
                onSignOut={handleSignOut}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#071a38] py-12 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Account access problem?</h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-white/75">Use the Customer Support Centre when normal Microsoft self-service recovery is unavailable.</p>
            </div>
            <Link to="/customer-support" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-white/60 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20">
              Get account help
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
