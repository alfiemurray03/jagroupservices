import { Helmet } from '@dr.pogodin/react-helmet';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  ExternalLink,
  Globe2,
  Headphones,
  Layers3,
  LifeBuoy,
  Network,
  ServerCog,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const site = 'https://jagroupservices.co.uk';
const url = `${site}/about-our-divisions`;

const operatingModel = [
  {
    icon: Building2,
    title: 'One operating company',
    description:
      'JA Group Services Ltd develops, operates and manages the platforms, customer services and central support functions described on this page.',
  },
  {
    icon: Headphones,
    title: 'Central customer support',
    description:
      'Customers can contact JA Group Services Ltd for service guidance, account support, complaints, data protection and other operational enquiries.',
  },
  {
    icon: Workflow,
    title: 'Partner-supported delivery',
    description:
      'Some products or technical services use authorised third-party platforms. We explain that relationship and coordinate support where provider action is required.',
  },
] as const;

const profileServices = [
  'Personal and professional digital profile pages',
  'Organisation profile pages and team features',
  'Links, contact details and social media information',
  'QR code sharing and downloadable contact options',
  'Media, galleries and document attachments',
  'Themes, branding and profile presentation tools',
  'vCard and email-signature tools',
  'Profile management and subscription features',
] as const;

const planyxServices = [
  'Travel, experience and day-out itinerary planning',
  'Structured plans with dates, places and activities',
  'Individual and organisation accounts',
  'Read-only and editable plan sharing',
  'Collaborative planning features',
  'Selected experience and activity discovery',
  'Affiliate partner links and booking options',
  'Central management of saved plans and ideas',
] as const;

const domainServices = [
  'Domain search, registration and renewal support',
  'Domain transfer and account-administration guidance',
  'DNS, subdomain and connection support',
  'Business email and online-presence guidance',
  'Website and profile-domain connection assistance',
  'Billing, renewal and product-administration support',
  'Access to authorised reseller products and services',
  'Ongoing customer support and provider escalation',
] as const;

const supportSteps = [
  {
    number: '01',
    title: 'Contact Sousa Murray Domains',
    description:
      'Sousa Murray Domains is the first point of contact for customer support relating to services purchased or managed through the division.',
  },
  {
    number: '02',
    title: 'We investigate the issue',
    description:
      'Our team reviews the account, service information and available troubleshooting steps, and resolves the matter directly wherever we are able to do so.',
  },
  {
    number: '03',
    title: 'We escalate when required',
    description:
      'Where the matter requires registrar-level, platform-level or infrastructure action, we escalate it to GoDaddy or the relevant authorised provider.',
  },
  {
    number: '04',
    title: 'We manage the follow-up',
    description:
      'Sousa Murray Domains remains the customer-facing contact, explains the outcome and helps coordinate any further action needed to progress the case.',
  },
] as const;

export default function AboutOurDivisionsPage() {
  return (
    <>
      <Helmet>
        <title>Our Brands and Division — JA Group Services Ltd</title>
        <meta
          name="description"
          content="Learn how JA Group Services Ltd operates Sousa Murray Profiles, Sousa Murray Planeia and Sousa Murray Domains, including their services, support arrangements and third-party delivery model."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Our Brands and Division — JA Group Services Ltd" />
        <meta
          property="og:description"
          content="Detailed information about Sousa Murray Profiles, Sousa Murray Planeia and Sousa Murray Domains, including Sousa Murray Domains's first-line customer support and provider-escalation process."
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
                Our services and operating model
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Our Brands and Division
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                JA Group Services Ltd operates digital platforms and customer services through Sousa Murray Profiles, Sousa Murray Planeia and Sousa Murray Domains. Each has a distinct purpose, while customer support, governance and operational accountability remain with JA Group Services Ltd.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">How our operating model works</h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                We combine our own platforms and support functions with selected authorised partner services. The sections below explain what we manage directly and where an underlying provider is involved.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
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

        <BrandSection
          eyebrow="Digital profile platform"
          title="Sousa Murray Profiles"
          icon={Users}
          accent="blue"
          description={[
            'Sousa Murray Profiles is a digital profile platform developed and operated by JA Group Services Ltd. It gives individuals and organisations a structured place to publish professional information, contact options, links, media and documents.',
            'The platform is designed to make digital profiles easier to create, maintain and share. Customers manage their information through a central account and can use QR codes, downloadable contact tools and profile links to connect with others.',
          ]}
          services={profileServices}
          audience="Individuals, sole traders, professionals, teams and organisations that want a clear and manageable digital profile."
          support="JA Group Services Ltd provides customer and account support for Sousa Murray Profiles, including access, subscriptions, profile administration and platform enquiries."
          href="https://sousamurrayprofiles.jagroupservices.co.uk/"
          button="Visit Sousa Murray Profiles"
        />

        <BrandSection
          eyebrow="Experience-planning platform"
          title="Sousa Murray Planeia"
          icon={Compass}
          accent="violet"
          alternate
          description={[
            'Sousa Murray Planeia is an experience and itinerary-planning platform operated by JA Group Services Ltd. It helps customers organise travel, days out, activities and shared plans in one structured space.',
            'Customers can build and share plans while exploring selected activities and experiences made available through affiliate partners. Sousa Murray Planeia supports the planning process but does not act as a travel agency or provide the underlying attraction, transport or accommodation service.',
          ]}
          services={planyxServices}
          audience="Individuals, families, groups and organisations planning travel, activities, events or shared experiences."
          support="JA Group Services Ltd supports Sousa Murray Planeia accounts and platform features. Questions about a booking or service completed with an affiliate partner may need to be handled by that partner under its own terms."
          href="https://sousamurrayplaneia.jagroupservices.co.uk/"
          button="Visit Sousa Murray Planeia"
        />

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  <Globe2 className="h-4 w-4" />
                  Domain and online-presence division
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Trading division</p>
                  <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Sousa Murray Domains</h2>
                </div>

                <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Sousa Murray Domains is the domain, digital identity and online-presence division operated by JA Group Services Ltd. It provides reseller-based access to authorised domain and related digital services, supported by human customer service and administrative guidance.
                  </p>
                  <p>
                    The division helps customers search for and manage domains, understand renewals, organise DNS and subdomains, connect services and obtain support when something is unclear or not working as expected.
                  </p>
                </div>

                <InfoPanel title="Who it is for" icon={Users}>
                  Individuals, sole traders, small organisations and other customers who want more guidance and customer support than a fully self-service domain platform normally provides.
                </InfoPanel>

                <InfoPanel title="Our customer-support responsibility" icon={LifeBuoy} emphasis>
                  Sousa Murray Domains is the first point of contact for customer support on all matters relating to services purchased or managed through the division. We investigate and resolve issues ourselves wherever possible. Where provider-level action is needed, we escalate the matter and continue supporting the customer through the process.
                </InfoPanel>

                <a href="https://sousamurraydomains.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" className="inline-block pt-1">
                  <Button size="lg" className="min-h-12 bg-[#0A1F44] px-7 font-bold text-white hover:bg-[#12346c]">
                    Visit Sousa Murray Domains
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>

              <motion.div
                className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Network className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">What Sousa Murray Domains supports</p>
                    <h3 className="text-xl font-bold text-card-foreground">Services and administration</h3>
                  </div>
                </div>
                <FeatureList items={domainServices} />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Sousa Murray Domains support process</h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Customers do not need to work out who is responsible before asking for help. Start with Sousa Murray Domains and we will assess the issue and follow the correct route.
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
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Clear responsibilities</h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Sousa Murray Domains provides the customer relationship, guidance and first-line support. The authorised provider remains responsible for the underlying registrar, platform and infrastructure functions.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <ResponsibilityCard
                icon={LifeBuoy}
                title="Sousa Murray Domains and JA Group Services Ltd"
                items={[
                  'First point of contact for customer support',
                  'Initial investigation and troubleshooting',
                  'Customer communication and service guidance',
                  'Account, billing and renewal coordination',
                  'DNS, subdomain and connection guidance',
                  'Escalation to GoDaddy or the relevant provider',
                  'Follow-up and explanation of the outcome',
                ]}
              />
              <ResponsibilityCard
                icon={ServerCog}
                title="GoDaddy or the authorised provider"
                items={[
                  'Underlying registrar and platform systems',
                  'Technical infrastructure and service availability',
                  'Provider-level security and system integrity',
                  'Actions requiring registrar or platform access',
                  'Product rules, availability and provider terms',
                  'Technical decisions reserved to the provider',
                ]}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-secondary p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Transparency:</strong> Sousa Murray Domains is not a domain registry, accredited registrar, hosting infrastructure operator or telecommunications provider. It operates as a reseller, facilitator and customer-support division using authorised third-party platforms.
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
              View the corporate structure behind our services or contact JA Group Services Ltd for help choosing the right platform, resolving an issue or understanding how a partner-supported service works.
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

type BrandSectionProps = {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  accent: 'blue' | 'violet';
  alternate?: boolean;
  description: readonly string[];
  services: readonly string[];
  audience: string;
  support: string;
  href: string;
  button: string;
};

function BrandSection({
  eyebrow,
  title,
  icon: Icon,
  accent,
  alternate = false,
  description,
  services,
  audience,
  support,
  href,
  button,
}: BrandSectionProps) {
  const accentClasses =
    accent === 'violet'
      ? {
          badge: 'border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-300',
          icon: 'bg-violet-500/10 text-violet-600 dark:text-violet-300',
          button: 'bg-violet-700 text-white hover:bg-violet-800',
        }
      : {
          badge: 'border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-300',
          icon: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
          button: 'bg-[#1A3FA8] text-white hover:bg-[#153588]',
        };

  return (
    <section className={`border-b border-border py-14 sm:py-16 lg:py-20 ${alternate ? 'bg-secondary' : 'bg-background'}`}>
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
              {eyebrow}
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Operating brand of JA Group Services Ltd</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <InfoPanel title="Who it is for" icon={Users}>
              {audience}
            </InfoPanel>
            <InfoPanel title="Customer support" icon={Headphones}>
              {support}
            </InfoPanel>

            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block pt-1">
              <Button size="lg" className={`min-h-12 px-7 font-bold ${accentClasses.button}`}>
                {button}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
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
                <p className="text-sm font-medium text-muted-foreground">What the platform provides</p>
                <h3 className="text-xl font-bold text-card-foreground">Main features and services</h3>
              </div>
            </div>
            <FeatureList items={services} />
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
  emphasis = false,
}: {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div className={`rounded-2xl border p-5 ${emphasis ? 'border-primary/30 bg-primary/10' : 'border-border bg-card'}`}>
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

function ResponsibilityCard({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title: string;
  items: readonly string[];
}) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
