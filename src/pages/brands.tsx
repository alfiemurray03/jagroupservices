import { Helmet } from '@dr.pogodin/react-helmet';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  ExternalLink,
  Globe2,
  GraduationCap,
  Headphones,
  Layers3,
  LifeBuoy,
  Network,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const site = 'https://jagroupservices.co.uk';
const url = `${site}/about-our-divisions`;

const operatingModel = [
  {
    icon: Building2,
    title: 'One legal operating company',
    description:
      'JA Group Services Ltd remains the legal operating company, contracting party and entity responsible for the brands and services shown on this page.',
  },
  {
    icon: Layers3,
    title: 'One master brand',
    description:
      'Sousa Murray is the Company’s master brand and trading identity. It is not a separate company, partnership or legal entity.',
  },
  {
    icon: Headphones,
    title: 'Central customer support',
    description:
      'Customers can contact JA Group Services Ltd for account support, complaints, data protection, safeguarding and other operational enquiries.',
  },
  {
    icon: Workflow,
    title: 'Partner-supported delivery',
    description:
      'Some services use authorised external providers. We explain those relationships and coordinate support when provider-level action is required.',
  },
] as const;

type Brand = {
  name: string;
  eyebrow: string;
  classification: string;
  icon: LucideIcon;
  accent: 'blue' | 'violet' | 'emerald' | 'navy';
  description: readonly string[];
  services: readonly string[];
  audience: string;
  support: string;
  href?: string;
  button?: string;
  alternate?: boolean;
  comingSoon?: boolean;
};

const brands: readonly Brand[] = [
  {
    name: 'Sousa Murray Profiles',
    eyebrow: 'Digital profile and contact sharing',
    classification: 'Customer-facing brand of JA Group Services Ltd',
    icon: Users,
    accent: 'blue',
    description: [
      'Sousa Murray Profiles, formerly Profile Centre, is the digital profile and contact-sharing platform operated by JA Group Services Ltd.',
      'The platform may include personal, professional and business profiles, digital contact information, QR-code profile access, digital identity presentation and profile administration.',
    ],
    services: [
      'Personal, professional and business profiles',
      'Digital contact information',
      'QR-code profile access',
      'Digital identity presentation',
      'Profile administration',
      'Organisation and team profile features',
      'Contact and link sharing tools',
      'Customer account and subscription management',
    ],
    audience:
      'Individuals, sole traders, professionals, teams and organisations that want a clear and manageable digital profile.',
    support:
      'JA Group Services Ltd provides customer and account support for Sousa Murray Profiles, including access, subscriptions, profile administration and platform enquiries.',
    href: 'https://sousamurrayprofiles.jagroupservices.co.uk/',
    button: 'Visit Sousa Murray Profiles',
  },
  {
    name: 'Sousa Murray Planeia',
    eyebrow: 'Guided planning-builder platform',
    classification: 'Customer-facing brand of JA Group Services Ltd',
    icon: Compass,
    accent: 'violet',
    alternate: true,
    description: [
      'Sousa Murray Planeia, formerly Planyx, is the guided planning-builder platform operated by JA Group Services Ltd.',
      'It may support customers with day trips, family days out, holidays and travel itineraries, occasions and events, budgets, checklists, accessibility arrangements, emergency and preparation information, and shared planning.',
      'Sousa Murray Planeia is not a travel agency, package holiday organiser, airline, transport provider, visa provider or hotel provider. Relevant third-party providers are identified where their activities or services are displayed or promoted.',
    ],
    services: [
      'Day-trip and family-day-out planning',
      'Holiday and travel itinerary planning',
      'Occasion and event planning',
      'Budgets and checklists',
      'Accessibility arrangements',
      'Emergency and preparation information',
      'Read-only and editable plan sharing',
      'Collaborative and shared planning',
    ],
    audience:
      'Individuals, families, groups and organisations planning travel, activities, occasions, events or shared experiences.',
    support:
      'JA Group Services Ltd supports Sousa Murray Planeia accounts and platform features. Third-party activities and services remain subject to the relevant provider’s own terms.',
    href: 'https://sousamurrayplaneia.jagroupservices.co.uk/',
    button: 'Visit Sousa Murray Planeia',
  },
  {
    name: 'Sousa Murray eLearning',
    eyebrow: 'Authorised e-learning reseller services',
    classification: 'Customer-facing brand of JA Group Services Ltd',
    icon: GraduationCap,
    accent: 'emerald',
    description: [
      'Sousa Murray eLearning, formerly Aptenvo, is the authorised third-party e-learning reseller and learner-administration brand operated by JA Group Services Ltd.',
      'The service may include access to authorised third-party courses, learner enrolment administration, course information, access instructions, reseller-based course sales and associated learner support. JA Group Services Ltd remains the contractual Reseller under the Highfield E-learning Reseller Agreement.',
      'JA Learning Hub remains closed and is not being reinstated, reopened or revived. Sousa Murray eLearning is not an awarding organisation, approved training centre, regulated education provider, assessment body or qualification issuer.',
    ],
    services: [
      'Authorised third-party e-learning courses',
      'Highfield e-learning reseller services',
      'Learner enrolment administration',
      'Course information and access instructions',
      'Reseller-based course sales',
      'Learner access support',
      'Customer and operational administration',
      'Course completion and certificate guidance',
    ],
    audience:
      'Adults, professionals, employers and organisations seeking convenient online training and workplace learning options.',
    support:
      'Sousa Murray eLearning and JA Group Services Ltd provide first-line customer and learner-administration support. Matters controlled by the training provider are referred or escalated to that provider when required.',
    href: 'https://sousamurrayelearning.jagroupservices.co.uk/',
    button: 'Visit Sousa Murray eLearning',
  },
  {
    name: 'Sousa Murray Domains',
    eyebrow: 'Domain and digital identity services',
    classification: 'Customer-facing brand of JA Group Services Ltd',
    icon: Globe2,
    accent: 'navy',
    alternate: true,
    description: [
      'Sousa Murray Domains, formerly JA Domain Hub, is the customer-facing brand for the Company’s domain registration support and authorised reseller-based domain services.',
      'The service includes the Company’s GoDaddy reseller services, the turnkey domain storefront, domain registration, renewal, transfer and management support, digital identity support and related authorised reseller products and services.',
      'Sousa Murray Domains is not a domain registry, accredited domain registrar, independent hosting infrastructure operator or telecommunications provider. GoDaddy or another relevant third-party provider is identified where it supplies a product or service.',
    ],
    services: [
      'GoDaddy authorised reseller services',
      'Turnkey domain storefront access',
      'Domain registration support',
      'Domain renewal support',
      'Domain transfer support',
      'Domain management support',
      'Digital identity support',
      'Related authorised reseller products and services',
    ],
    audience:
      'Individuals, sole traders, small organisations and other customers who want supported access to domain and digital-identity services.',
    support:
      'Sousa Murray Domains is the first point of contact for services purchased or managed through the brand. JA Group Services Ltd investigates issues and escalates provider-level matters where required.',
    href: 'https://sousamurraydomains.jagroupservices.co.uk/',
    button: 'Visit Sousa Murray Domains',
  },
  {
    name: 'Sousa Murray Sites',
    eyebrow: 'Managed Website Services',
    classification: 'Approved forthcoming brand of JA Group Services Ltd',
    icon: Network,
    accent: 'blue',
    comingSoon: true,
    description: [
      'Sousa Murray Sites is the approved forthcoming brand for Managed Website Services designed, built, configured, maintained or managed directly by JA Group Services Ltd.',
      'The Sousa Murray Sites website and customer-facing service area are still being built and have not yet launched. It will remain separate from the authorised reseller-based domain services presented through Sousa Murray Domains.',
    ],
    services: [
      'Managed website design',
      'Website construction and configuration',
      'Website management',
      'Website maintenance',
      'Content updates',
      'Website support',
      'Associated managed digital services',
      'Customer-specific project arrangements',
    ],
    audience:
      'Individuals, sole traders and organisations seeking a website designed, built, maintained or managed by JA Group Services Ltd.',
    support:
      'Customer support and service-access arrangements will be confirmed before Sousa Murray Sites launches. Existing Managed Website Service enquiries remain handled by JA Group Services Ltd.',
  },
];

const supportSteps = [
  {
    number: '01',
    title: 'Contact the relevant brand',
    description:
      'Start with the brand through which the service was purchased, accessed or managed.',
  },
  {
    number: '02',
    title: 'We investigate',
    description:
      'JA Group Services Ltd reviews the account, service information and available resolution steps.',
  },
  {
    number: '03',
    title: 'We escalate when required',
    description:
      'Where a matter is controlled by an authorised provider, we refer or escalate it through the correct provider route.',
  },
  {
    number: '04',
    title: 'We manage the follow-up',
    description:
      'We keep the customer informed, explain the outcome and coordinate any further action that is needed.',
  },
] as const;

export default function BrandsPage() {
  return (
    <>
      <Helmet>
        <title>Sousa Murray Brands — JA Group Services Ltd</title>
        <meta
          name="description"
          content="Explore the Sousa Murray master brand and the customer-facing brands operated by JA Group Services Ltd."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Sousa Murray Brands — JA Group Services Ltd" />
        <meta
          property="og:description"
          content="Learn about Sousa Murray Domains, Sousa Murray Sites, Sousa Murray Planeia, Sousa Murray Profiles and Sousa Murray eLearning."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#0A1F44] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-4xl space-y-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <Layers3 className="h-4 w-4" />
                The master brand of JA Group Services Ltd
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Sousa Murray Brands
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Sousa Murray is the master brand of JA Group Services Ltd. The five customer-facing brands below each have a distinct purpose while legal responsibility, governance and operational accountability remain with JA Group Services Ltd.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">How our operating model works</h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Sousa Murray provides a consistent public brand family while JA Group Services Ltd remains the legal operating company behind every approved brand and service.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {operatingModel.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-card-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {brands.map((brand) => (
          <BrandSection key={brand.name} brand={brand} />
        ))}

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <LifeBuoy className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">One coordinated support route</h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Customers do not need to work out every supplier relationship before asking for help. Start with the relevant Sousa Murray brand and JA Group Services Ltd will assess the issue and follow the correct route.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {supportSteps.map(({ number, title, description }, index) => (
                <motion.article
                  key={number}
                  className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <span className="mb-5 inline-flex rounded-lg bg-primary/10 px-3 py-1 text-sm font-extrabold text-primary">{number}</span>
                  <h3 className="mb-2 text-lg font-bold text-card-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </motion.article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-secondary p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Service transparency:</strong> where an authorised external provider supplies an underlying course, booking option, registrar service, platform or infrastructure function, that provider remains responsible for the functions it controls. JA Group Services Ltd remains responsible for its own customer relationship, administration, communications and support obligations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Building2 className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="mb-3 text-3xl font-bold text-foreground">Learn more or contact us</h2>
            <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              View the corporate structure behind the Sousa Murray brand family or contact JA Group Services Ltd for help choosing a service, resolving an issue or understanding a partner-supported arrangement.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="min-h-12 bg-[#1A3FA8] px-7 font-bold text-white hover:bg-[#153588]">
                <Link to="/our-group-structure">
                  View Group Structure
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-12 border-2 border-primary px-7 font-semibold text-primary hover:bg-primary/10">
                <Link to="/contactus">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function BrandSection({ brand }: { brand: Brand }) {
  const accentClasses = {
    blue: {
      badge: 'border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-300',
      icon: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
      button: 'bg-[#1A3FA8] text-white hover:bg-[#153588]',
    },
    violet: {
      badge: 'border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-300',
      icon: 'bg-violet-500/10 text-violet-700 dark:text-violet-300',
      button: 'bg-violet-700 text-white hover:bg-violet-800',
    },
    emerald: {
      badge: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
      icon: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
      button: 'bg-emerald-700 text-white hover:bg-emerald-800',
    },
    navy: {
      badge: 'border-primary/20 bg-primary/10 text-primary',
      icon: 'bg-primary/10 text-primary',
      button: 'bg-[#0A1F44] text-white hover:bg-[#12346c]',
    },
  }[brand.accent];

  const Icon = brand.icon;

  return (
    <section className={`border-b border-border py-14 sm:py-16 lg:py-20 ${brand.alternate ? 'bg-secondary' : 'bg-background'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${accentClasses.badge}`}>
              <Icon className="h-4 w-4" />
              {brand.eyebrow}
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">{brand.classification}</p>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{brand.name}</h2>
                {brand.comingSoon && (
                  <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                    Coming soon
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {brand.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <InfoPanel title="Who it is for" icon={Users}>
              {brand.audience}
            </InfoPanel>
            <InfoPanel title="Customer support" icon={Headphones}>
              {brand.support}
            </InfoPanel>

            {brand.comingSoon ? (
              <Button type="button" size="lg" variant="outline" disabled className="min-h-12 px-7 font-bold">
                Coming soon
              </Button>
            ) : (
              <a href={brand.href} target="_blank" rel="noopener noreferrer" className="inline-block pt-1">
                <Button size="lg" className={`min-h-12 px-7 font-bold ${accentClasses.button}`}>
                  {brand.button}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            )}
          </motion.div>

          <motion.div
            className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentClasses.icon}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">What the brand provides</p>
                <h3 className="text-xl font-bold text-card-foreground">Main features and services</h3>
              </div>
            </div>
            <FeatureList items={brand.services} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-secondary/60 p-3">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span className="text-sm leading-relaxed text-card-foreground">{item}</span>
        </div>
      ))}
    </div>
  );
}

function InfoPanel({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: LucideIcon;
  children: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
