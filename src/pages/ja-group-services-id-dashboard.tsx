import { useEffect, useMemo, useState, type ComponentType, type FormEvent } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import {
  Activity,
  AlertCircle,
  ArrowRight,
  Bell,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleUserRound,
  FileText,
  Globe2,
  HelpCircle,
  Home,
  KeyRound,
  Laptop,
  LifeBuoy,
  LockKeyhole,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  Save,
  Settings2,
  ShieldCheck,
  Smartphone,
  UserRoundCog,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { DARK_THEME_LOGO } from '@/lib/site-logos';

type IconType = ComponentType<{ className?: string }>;
type DashboardSection = 'overview' | 'personal' | 'security' | 'sessions' | 'services' | 'privacy' | 'help';

type SessionResponse = {
  authenticated: boolean;
  user?: {
    id: string;
    objectId: string;
    tenantId: string;
    name: string;
    email: string;
    identityProvider: string;
  };
  session?: {
    issuedAt: string;
    expiresAt: string;
    authTime: string;
    authenticationContext?: string | null;
  };
  error?: string;
};

type CentralProfile = {
  customer?: {
    id: string;
    customerNumber: string;
    displayName: string;
    verifiedEmail: string;
    accountStatus: string;
    securityStatus: string;
    firstRegisteredAt?: string | null;
    lastActivityAt?: string | null;
    updatedAt?: string | null;
  };
  profile?: ProfileForm;
  identities?: Array<{
    provider?: string;
    display_name?: string;
    primary_email?: string;
    account_enabled?: number;
    directory_status?: string;
    last_synced_at?: string;
  }>;
  connectedServices?: Array<{
    code?: string;
    name?: string;
    external_account_id?: string;
    status?: string;
    linked_at?: string;
    last_synced_at?: string;
  }>;
};

type ProfileForm = {
  preferredName: string;
  telephoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  townCity: string;
  countyRegion: string;
  postcode: string;
  country: string;
  emailServiceUpdates: boolean;
  emailMarketing: boolean;
  smsServiceUpdates: boolean;
  profileCompletedAt?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

const emptyProfile: ProfileForm = {
  preferredName: '',
  telephoneNumber: '',
  addressLine1: '',
  addressLine2: '',
  townCity: '',
  countyRegion: '',
  postcode: '',
  country: 'United Kingdom',
  emailServiceUpdates: true,
  emailMarketing: false,
  smsServiceUpdates: false,
};

const navigation: Array<{ id: DashboardSection; label: string; icon: IconType }> = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'personal', label: 'Personal information', icon: UserRoundCog },
  { id: 'security', label: 'Security settings', icon: ShieldCheck },
  { id: 'sessions', label: 'Sessions and devices', icon: MonitorSmartphone },
  { id: 'services', label: 'Connected services', icon: Building2 },
  { id: 'privacy', label: 'Privacy and preferences', icon: Settings2 },
  { id: 'help', label: 'Help and recovery', icon: LifeBuoy },
];

const fieldClass =
  'mt-2 min-h-11 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground';

function initials(name?: string, email?: string) {
  const source = String(name || email || 'JA').trim();
  const parts = source.split(/\s+/).filter(Boolean);
  return (parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : source.slice(0, 2)).toUpperCase();
}

function formatDate(value?: string | null) {
  if (!value) return 'Not available';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Not available';
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function statusLabel(value?: string) {
  const clean = String(value || 'pending').replaceAll('_', ' ');
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function DashboardCard({
  icon: Icon,
  title,
  value,
  detail,
}: {
  icon: IconType;
  title: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{title}</p>
          <p className="mt-2 break-words text-xl font-bold text-card-foreground">{value}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </article>
  );
}

function SectionTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function ToggleRow({
  title,
  description,
  checked,
  onChange,
  disabled,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <span>
        <span className="block font-semibold text-card-foreground">{title}</span>
        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{description}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 accent-primary"
      />
    </label>
  );
}

export default function JAGroupServicesIDDashboardPage() {
  const [session, setSession] = useState<SessionResponse | null>(null);
  const [central, setCentral] = useState<CentralProfile | null>(null);
  const [profile, setProfile] = useState<ProfileForm>(emptyProfile);
  const [activeSection, setActiveSection] = useState<DashboardSection>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [profileError, setProfileError] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const loadProfile = async () => {
    setLoadingProfile(true);
    setProfileError('');
    try {
      const response = await fetch('/api/id/profile', {
        credentials: 'include',
        cache: 'no-store',
        headers: { Accept: 'application/json' },
      });
      const data = await response.json();
      if (!response.ok || data.success === false) throw new Error(data.error || 'The central profile could not be loaded.');
      setCentral(data);
      setProfile({ ...emptyProfile, ...(data.profile || {}) });
    } catch (error) {
      setProfileError(error instanceof Error ? error.message : 'The central profile could not be loaded.');
    } finally {
      setLoadingProfile(false);
    }
  };

  useEffect(() => {
    let cancelled = false;
    fetch('/api/id/session', { credentials: 'include', cache: 'no-store' })
      .then((response) => response.json())
      .then((data: SessionResponse) => {
        if (cancelled) return;
        if (!data.authenticated) {
          window.location.replace('/id/sign-in');
          return;
        }
        setSession(data);
        void loadProfile();
      })
      .catch(() => {
        if (!cancelled) window.location.replace('/id/sign-in?auth_error=session');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const completion = useMemo(() => {
    const values = [
      profile.preferredName,
      profile.telephoneNumber,
      profile.addressLine1,
      profile.townCity,
      profile.postcode,
      profile.country,
    ];
    return Math.round((values.filter((value) => String(value).trim()).length / values.length) * 100);
  }, [profile]);

  const setField = <K extends keyof ProfileForm>(field: K, value: ProfileForm[K]) => {
    setSaved(false);
    setProfile((current) => ({ ...current, [field]: value }));
  };

  const saveProfile = async (event?: FormEvent) => {
    event?.preventDefault();
    setSaving(true);
    setSaved(false);
    setProfileError('');
    try {
      const response = await fetch('/api/id/profile', {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ profile }),
      });
      const data = await response.json();
      if (!response.ok || data.success === false) throw new Error(data.error || 'Your information could not be saved.');
      setCentral(data);
      setProfile({ ...emptyProfile, ...(data.profile || {}) });
      setSaved(true);
    } catch (error) {
      setProfileError(error instanceof Error ? error.message : 'Your information could not be saved.');
    } finally {
      setSaving(false);
    }
  };

  const signOut = async () => {
    try {
      await fetch('/api/id/sign-out', { method: 'POST', credentials: 'include' });
    } finally {
      window.location.href = '/id/sign-in?logged_out=1';
    }
  };

  if (!session?.authenticated || !session.user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </div>
    );
  }

  const user = session.user;
  const customer = central?.customer;
  const services = central?.connectedServices || [];

  const content = (() => {
    if (activeSection === 'overview') {
      return (
        <>
          <div className="overflow-hidden rounded-3xl bg-[#071a38] p-6 text-white shadow-xl sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-200">JA Group Services ID Dashboard</p>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Welcome back, {profile.preferredName || user.name.split(' ')[0] || user.name}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-white/72">
                  Manage your central identity, security and connected JA Group Services platforms from one place.
                </p>
              </div>
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-2xl font-bold">
                {initials(profile.preferredName || user.name, user.email)}
              </div>
            </div>
          </div>

          {profileError && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-amber-950">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <p className="font-semibold">Central profile connection needs attention</p>
                <p className="mt-1 text-sm leading-relaxed">{profileError}</p>
              </div>
            </div>
          )}

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <DashboardCard
              icon={KeyRound}
              title="Customer number"
              value={customer?.customerNumber || (loadingProfile ? 'Loading…' : 'Awaiting link')}
              detail="Your universal JA Group Services customer reference."
            />
            <DashboardCard
              icon={ShieldCheck}
              title="Account status"
              value={statusLabel(customer?.accountStatus || 'active')}
              detail="Controlled centrally by Head Office customer operations."
            />
            <DashboardCard
              icon={LockKeyhole}
              title="Security status"
              value={statusLabel(customer?.securityStatus || 'clear')}
              detail="Customer-visible status only; internal markers remain restricted."
            />
            <DashboardCard
              icon={Building2}
              title="Connected services"
              value={String(services.length)}
              detail="JA platforms currently linked to this identity."
            />
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
            <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">Complete your central profile</h3>
                  <p className="mt-1 text-sm text-muted-foreground">These details are shared with connected services where needed.</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">{completion}%</span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${completion}%` }} />
              </div>
              <button
                type="button"
                onClick={() => setActiveSection('personal')}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                Manage personal information
                <ArrowRight className="h-4 w-4" />
              </button>
            </section>

            <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <Activity className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-bold text-card-foreground">Current sign-in</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Authenticated through {user.identityProvider || 'Microsoft Entra External ID'}.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Signed in</p>
              <p className="mt-1 text-sm font-medium text-foreground">{formatDate(session.session?.authTime)}</p>
            </section>
          </div>
        </>
      );
    }

    if (activeSection === 'personal') {
      return (
        <form onSubmit={saveProfile}>
          <SectionTitle
            title="Personal information"
            description="Update the central details used by JA Group Services and connected platforms. Verified sign-in information remains protected."
          />

          {profileError && (
            <div className="mb-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-900">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-sm leading-relaxed">{profileError}</p>
            </div>
          )}
          {saved && (
            <div className="mb-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-sm font-semibold">Your central customer information has been updated.</p>
            </div>
          )}

          <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
            <div className="flex items-start gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <CircleUserRound className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-card-foreground">Verified identity</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Your legal sign-in name and primary email come from Microsoft. Sensitive changes may require verification.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-foreground">
                Microsoft account name
                <input className={fieldClass} value={user.name} disabled />
              </label>
              <label className="text-sm font-semibold text-foreground">
                Verified email address
                <input className={fieldClass} value={user.email || 'Not supplied by Microsoft'} disabled />
              </label>
            </div>
          </section>

          <section className="mt-6 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
            <h3 className="text-lg font-bold text-card-foreground">Contact and correspondence details</h3>
            <p className="mt-1 text-sm text-muted-foreground">These details become part of your central Head Office customer record.</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-foreground">
                Preferred name
                <input
                  className={fieldClass}
                  value={profile.preferredName}
                  onChange={(event) => setField('preferredName', event.target.value)}
                  autoComplete="nickname"
                />
              </label>
              <label className="text-sm font-semibold text-foreground">
                Telephone number
                <input
                  className={fieldClass}
                  value={profile.telephoneNumber}
                  onChange={(event) => setField('telephoneNumber', event.target.value)}
                  autoComplete="tel"
                  inputMode="tel"
                />
              </label>
              <label className="text-sm font-semibold text-foreground sm:col-span-2">
                Address line 1
                <input
                  className={fieldClass}
                  value={profile.addressLine1}
                  onChange={(event) => setField('addressLine1', event.target.value)}
                  autoComplete="address-line1"
                />
              </label>
              <label className="text-sm font-semibold text-foreground sm:col-span-2">
                Address line 2
                <input
                  className={fieldClass}
                  value={profile.addressLine2}
                  onChange={(event) => setField('addressLine2', event.target.value)}
                  autoComplete="address-line2"
                />
              </label>
              <label className="text-sm font-semibold text-foreground">
                Town or city
                <input
                  className={fieldClass}
                  value={profile.townCity}
                  onChange={(event) => setField('townCity', event.target.value)}
                  autoComplete="address-level2"
                />
              </label>
              <label className="text-sm font-semibold text-foreground">
                County or region
                <input
                  className={fieldClass}
                  value={profile.countyRegion}
                  onChange={(event) => setField('countyRegion', event.target.value)}
                  autoComplete="address-level1"
                />
              </label>
              <label className="text-sm font-semibold text-foreground">
                Postcode
                <input
                  className={fieldClass}
                  value={profile.postcode}
                  onChange={(event) => setField('postcode', event.target.value.toUpperCase())}
                  autoComplete="postal-code"
                />
              </label>
              <label className="text-sm font-semibold text-foreground">
                Country
                <input
                  className={fieldClass}
                  value={profile.country}
                  onChange={(event) => setField('country', event.target.value)}
                  autoComplete="country-name"
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Last updated: {formatDate(profile.updatedAt || customer?.updatedAt)}
              </p>
              <button
                type="submit"
                disabled={saving || loadingProfile}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Save className="h-4 w-4" />
                {saving ? 'Saving…' : 'Save information'}
              </button>
            </div>
          </section>
        </form>
      );
    }

    if (activeSection === 'security') {
      return (
        <>
          <SectionTitle
            title="Security settings"
            description="Microsoft protects your sign-in. JA Group Services controls customer operations, recovery cases and access across connected services."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <KeyRound className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-bold text-card-foreground">Password and account recovery</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Use Microsoft’s forgotten-password option on the sign-in screen. JA Group Services never sees your password.
              </p>
              <Link to="/id/sign-in" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                Go to secure sign-in
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>
            <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <Smartphone className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-bold text-card-foreground">Authentication methods</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Authentication-method management will appear here when the relevant Microsoft Graph permissions and customer flow are enabled.
              </p>
              <span className="mt-5 inline-flex rounded-full bg-muted px-3 py-1.5 text-sm font-semibold text-muted-foreground">Integration planned</span>
            </section>
            <section className="rounded-3xl border border-border bg-card p-6 shadow-sm md:col-span-2">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-card-foreground">Sign out of this browser</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">End the current JA Group Services ID dashboard session on this device.</p>
                </div>
                <button
                  type="button"
                  onClick={signOut}
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-red-300 bg-red-50 px-5 py-2.5 font-semibold text-red-700 transition hover:bg-red-100"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            </section>
          </div>
        </>
      );
    }

    if (activeSection === 'sessions') {
      return (
        <>
          <SectionTitle
            title="Sessions and devices"
            description="Review the current dashboard session. Group-wide brand sessions will be added as each connected platform reports them centrally."
          />
          <section className="rounded-3xl border border-emerald-200 bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Laptop className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-card-foreground">This browser</h3>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">Active now</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">JA Group Services ID Dashboard</p>
                  <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    <div><dt className="text-muted-foreground">Signed in</dt><dd className="font-semibold text-foreground">{formatDate(session.session?.authTime)}</dd></div>
                    <div><dt className="text-muted-foreground">Session expires</dt><dd className="font-semibold text-foreground">{formatDate(session.session?.expiresAt)}</dd></div>
                  </dl>
                </div>
              </div>
              <button
                type="button"
                onClick={signOut}
                className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          </section>
          <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <p className="font-semibold text-foreground">Coming next: every connected JA session</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Sousa Murray Planeia, Sousa Murray Profiles, Sousa Murray Domains and future services will report device sessions to the central register so customers and Head Office can revoke them safely.
            </p>
          </div>
        </>
      );
    }

    if (activeSection === 'services') {
      return (
        <>
          <SectionTitle
            title="Connected services"
            description="These services have linked an account to your universal JA Group Services customer record."
          />
          {services.length ? (
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <article key={`${service.code || service.name}-${index}`} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Globe2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-card-foreground">{service.name || service.code || 'JA Group Services platform'}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Linked {formatDate(service.linked_at)}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">{statusLabel(service.status || 'active')}</span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center">
              <Building2 className="mx-auto h-10 w-10 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-bold text-card-foreground">No connected services are showing yet</h3>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Services will appear automatically as Sousa Murray Planeia, Sousa Murray Profiles, Sousa Murray Domains and other platforms link to your central customer record.
              </p>
            </div>
          )}
        </>
      );
    }

    if (activeSection === 'privacy') {
      return (
        <form onSubmit={saveProfile}>
          <SectionTitle
            title="Privacy and preferences"
            description="Control group-wide communication choices. Service-specific preferences remain within the relevant platform."
          />
          <div className="space-y-4">
            <ToggleRow
              title="Essential service updates by email"
              description="Receive important account, security, service and operational information."
              checked={profile.emailServiceUpdates}
              onChange={(value) => setField('emailServiceUpdates', value)}
            />
            <ToggleRow
              title="Optional marketing by email"
              description="Receive optional news, product information and relevant offers from JA Group Services."
              checked={profile.emailMarketing}
              onChange={(value) => setField('emailMarketing', value)}
            />
            <ToggleRow
              title="Essential service updates by SMS"
              description="Allow urgent or important account messages to be sent to your central telephone number."
              checked={profile.smsServiceUpdates}
              onChange={(value) => setField('smsServiceUpdates', value)}
            />
          </div>
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/privacy-centre" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              <FileText className="h-4 w-4" />
              Open the Privacy Centre
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-semibold text-primary-foreground disabled:opacity-60"
            >
              <Save className="h-4 w-4" />
              {saving ? 'Saving…' : 'Save preferences'}
            </button>
          </div>
        </form>
      );
    }

    return (
      <>
        <SectionTitle
          title="Help and account recovery"
          description="Use Microsoft self-service first. Head Office Customer Operations can assist after appropriate identity verification where normal recovery is unavailable."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <KeyRound className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-lg font-bold text-card-foreground">Forgotten password</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">Use the “Forgot password?” option during Microsoft sign-in.</p>
            <Link to="/id/sign-in" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              Open sign-in page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
          <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <LifeBuoy className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-lg font-bold text-card-foreground">Cannot access recovery methods</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">Contact Customer Services so Head Office can open a verified recovery case.</p>
            <Link to="/customer-support" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              Open Customer Support
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
          <section className="rounded-3xl border border-border bg-card p-6 shadow-sm md:col-span-2">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-primary" /><div><p className="font-semibold">Email</p><p className="text-sm text-muted-foreground">contact@jagroupservices.co.uk</p></div></div>
              <div className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-primary" /><div><p className="font-semibold">Telephone</p><p className="text-sm text-muted-foreground">020 3834 2790</p></div></div>
              <div className="flex items-start gap-3"><HelpCircle className="mt-0.5 h-5 w-5 text-primary" /><div><p className="font-semibold">Customer number</p><p className="text-sm text-muted-foreground">{customer?.customerNumber || 'Shown once linked'}</p></div></div>
            </div>
          </section>
        </div>
      </>
    );
  })();

  return (
    <>
      <Helmet>
        <title>My JA Group Services ID Dashboard</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </Helmet>

      <div className="min-h-screen bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-white">
        <aside className={`fixed inset-y-0 left-0 z-50 flex w-[290px] flex-col bg-[#071a38] text-white shadow-2xl transition-transform lg:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
            <Link to="/" className="flex min-w-0 items-center" aria-label="JA Group Services home">
              <img src={DARK_THEME_LOGO} alt="JA Group Services" className="h-14 w-auto max-w-[210px] object-contain" />
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="rounded-xl p-2 text-white/70 hover:bg-white/10 hover:text-white lg:hidden" aria-label="Close dashboard navigation">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="border-b border-white/10 px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 font-bold text-white">
                {initials(profile.preferredName || user.name, user.email)}
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold text-white">{profile.preferredName || user.name}</p>
                <p className="truncate text-xs text-white/55">{customer?.customerNumber ? `UCN ${customer.customerNumber}` : user.email}</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4" aria-label="JA Group Services ID dashboard navigation">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${active ? 'bg-white text-[#071a38] shadow-sm' : 'text-white/72 hover:bg-white/10 hover:text-white'}`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="min-w-0 flex-1 truncate">{item.label}</span>
                  {active && <ChevronRight className="h-4 w-4 shrink-0" />}
                </button>
              );
            })}
          </nav>

          <div className="border-t border-white/10 p-3">
            <button type="button" onClick={signOut} className="flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-white/72 transition hover:bg-red-500/15 hover:text-red-100">
              <LogOut className="h-5 w-5" />
              Sign out
            </button>
          </div>
        </aside>

        {mobileMenuOpen && <button type="button" aria-label="Close navigation overlay" className="fixed inset-0 z-40 bg-slate-950/55 backdrop-blur-sm lg:hidden" onClick={() => setMobileMenuOpen(false)} />}

        <div className="min-h-screen lg:pl-[290px]">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/95 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setMobileMenuOpen(true)} className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-100 lg:hidden" aria-label="Open dashboard navigation">
                <Menu className="h-5 w-5" />
              </button>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">JA Group Services ID</p>
                <p className="hidden text-sm font-semibold text-slate-900 dark:text-white sm:block">{navigation.find((item) => item.id === activeSection)?.label}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{profile.preferredName || user.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Secure customer session</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071a38] text-sm font-bold text-white">
                {initials(profile.preferredName || user.name, user.email)}
              </div>
            </div>
          </header>

          <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="mx-auto max-w-7xl">{content}</div>
          </main>
        </div>
      </div>
    </>
  );
}
