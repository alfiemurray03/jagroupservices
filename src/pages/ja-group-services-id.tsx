import { useState, type ComponentType } from 'react';
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
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  Settings2,
  ShieldCheck,
  Smartphone,
  UserRoundCog,
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
  { name: 'Profile Centre', description: 'Digital profiles and identity presentation', status: 'Connection ready' },
  { name: 'Planyx', description: 'Experience and itinerary planning', status: 'Connection ready' },
  { name: 'JA Domain Hub', description: 'Domains and managed website services', status: 'Connection ready' },
  { name: 'Dealt With', description: 'Connected customer service platform', status: 'Planned' },
];

const signInUrl = String(import.meta.env.VITE_JA_ID_SIGN_IN_URL || '').trim();
const microsoftConnectionReady = /^https:\/\//i.test(signInUrl);

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function LockedValue({ label, icon: Icon }: { label: string; icon: IconType }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/35 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
          <p className="mt-1 text-sm font-semibold text-foreground">Sign in to view</p>
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

function SignInPanel() {
  return (
    <div className="overflow-hidden rounded-3xl border border-primary/25 bg-card shadow-lg">
      <div className="bg-[#071a38] px-6 py-7 text-white sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
              <ShieldCheck className="h-4 w-4" />
              Secure customer access
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Sign in to your central account</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-white/78">
              Your JA Group Services ID will be the single place to manage your main personal details, security, sessions and connected services.
            </p>
          </div>
          <div className="shrink-0">
            {microsoftConnectionReady ? (
              <a
                href={signInUrl}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#071a38] shadow-sm transition hover:bg-blue-50 sm:w-auto"
              >
                <LogIn className="h-5 w-5" />
                Sign in with Microsoft
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-white/15 px-5 py-3 font-semibold text-white/70 sm:w-auto"
                title="Microsoft External ID connection is awaiting deployment configuration"
              >
                <LogIn className="h-5 w-5" />
                Sign-in connection pending
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="grid gap-4 px-6 py-6 sm:grid-cols-3 sm:px-8">
        <div className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">One JA Group Services ID across connected brands.</p>
        </div>
        <div className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">Personal details are edited centrally, not separately on each brand.</p>
        </div>
        <div className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">Head Office retains security and customer-operations control.</p>
        </div>
      </div>
    </div>
  );
}

function OverviewSection() {
  return (
    <>
      <SectionHeading
        title="Account overview"
        description="This will become the customer’s main control centre for their JA Group Services ID. Personal information remains protected until Microsoft sign-in is completed."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <LockedValue label="Account holder" icon={CircleUserRound} />
        <LockedValue label="Unique Customer Number" icon={KeyRound} />
        <LockedValue label="Account status" icon={ShieldCheck} />
        <LockedValue label="Connected services" icon={Building2} />
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <ActionCard
          icon={UserRoundCog}
          title="Keep your details consistent"
          description="Update your central name, email address, telephone number and address once. Connected brands will display the latest authorised information in read-only form."
          action="Sign in required"
        />
        <ActionCard
          icon={ShieldCheck}
          title="Control account security"
          description="Manage password routes, authentication methods, security alerts and recovery settings for your JA Group Services ID."
          action="Sign in required"
        />
        <ActionCard
          icon={MonitorSmartphone}
          title="Review signed-in sessions"
          description="See the devices and JA services using your account, revoke individual sessions or sign out across connected services."
          action="Sign in required"
        />
      </div>
    </>
  );
}

function PersonalDetailsSection() {
  return (
    <>
      <SectionHeading
        title="Personal details"
        description="These are the central identity details that connected brand websites will display in full but will not be permitted to edit."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <LockedValue label="Full name" icon={CircleUserRound} />
        <LockedValue label="Primary email address" icon={Mail} />
        <LockedValue label="Telephone number" icon={Phone} />
        <LockedValue label="Address" icon={MapPin} />
      </div>
      <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-card-foreground">Central editing only</h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
              Planyx, Profile Centre, JA Domain Hub and other connected services will show these details as read-only. Customers will return here whenever they need to make a change.
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

function SecuritySection() {
  return (
    <>
      <SectionHeading
        title="Security settings"
        description="Microsoft External ID will handle authentication. The dashboard will provide the customer-facing controls while Head Office keeps administrative and recovery authority."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <ActionCard icon={KeyRound} title="Password and sign-in" description="Open Microsoft’s secure password and sign-in journey without JA Group Services storing or displaying the customer’s password." action="Microsoft sign-in required" />
        <ActionCard icon={Smartphone} title="Verification methods" description="Review and manage available authentication and recovery methods, subject to Microsoft External ID capabilities and security checks." action="Microsoft sign-in required" />
        <ActionCard icon={Bell} title="Security notifications" description="Receive warnings about important changes, unfamiliar activity, session revocations and recovery actions." action="Account connection required" />
        <ActionCard icon={Activity} title="Recent security activity" description="Review customer-visible events without exposing internal Head Office notes, markers or investigation details." action="Account connection required" />
      </div>
    </>
  );
}

function SessionsSection() {
  return (
    <>
      <SectionHeading
        title="Sessions and devices"
        description="This area will combine central JA application sessions with Microsoft sign-in controls, allowing customers to manage access across connected services."
      />
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center py-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
            <Laptop className="h-8 w-8" />
          </div>
          <h3 className="mt-5 text-xl font-bold text-card-foreground">Sign in to view active sessions</h3>
          <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
            Once connected, each session will show the service, device, browser, approximate location, sign-in time and last activity. Customers will be able to revoke one session or sign out everywhere.
          </p>
        </div>
      </div>
    </>
  );
}

function ServicesSection() {
  return (
    <>
      <SectionHeading
        title="Connected services"
        description="Customers will see which JA Group Services brands are linked to their central identity and can open each service from one place."
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
              <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">{service.status}</span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function PrivacySection() {
  return (
    <>
      <SectionHeading
        title="Privacy and preferences"
        description="Group-wide communication choices and customer data requests will be available here, while service-specific preferences remain within the relevant brand."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <ActionCard icon={Bell} title="Communication preferences" description="Manage group-wide service updates and optional marketing choices from one central account." action="Sign in required" />
        <ActionCard icon={FileText} title="Data protection requests" description="Request access, correction or other data-protection assistance through the appropriate JA Group Services process." action="Sign in required" />
      </div>
      <div className="mt-6 rounded-3xl border border-primary/20 bg-primary/5 p-6">
        <p className="font-semibold text-foreground">Need information before signing in?</p>
        <p className="mt-2 leading-relaxed text-muted-foreground">The public Privacy Centre explains your rights and how JA Group Services handles personal information.</p>
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
        description="Normal Microsoft self-service recovery will come first. Where that fails, the customer will be directed to JA Group Services Customer Services for verified Head Office assistance."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><KeyRound className="h-6 w-6" /></div>
          <h3 className="mt-5 text-lg font-bold text-card-foreground">Forgotten password</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">Customers will use Microsoft’s secure forgotten-password process. JA Group Services will never display or retrieve a customer’s password.</p>
        </article>
        <article className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><LifeBuoy className="h-6 w-6" /></div>
          <h3 className="mt-5 text-lg font-bold text-card-foreground">Cannot use normal recovery</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">Customer Services can open a recovery case for Head Office verification and authorised assistance where the usual Microsoft options cannot be used.</p>
          <Link to="/customer-support" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            Open Customer Support
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </div>
    </>
  );
}

function DashboardContent({ section }: { section: DashboardSection }) {
  switch (section) {
    case 'personal-details':
      return <PersonalDetailsSection />;
    case 'security':
      return <SecuritySection />;
    case 'sessions':
      return <SessionsSection />;
    case 'services':
      return <ServicesSection />;
    case 'privacy':
      return <PrivacySection />;
    case 'support':
      return <SupportSection />;
    default:
      return <OverviewSection />;
  }
}

export default function JAGroupServicesIDPage() {
  const [activeSection, setActiveSection] = useState<DashboardSection>('overview');

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
            <SignInPanel />
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
              <DashboardContent section={activeSection} />
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
