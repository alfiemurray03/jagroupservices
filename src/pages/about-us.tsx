import { Helmet } from '@dr.pogodin/react-helmet';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Globe2,
  Handshake,
  Headphones,
  Landmark,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Network,
  Scale,
  ServerCog,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const site = 'https://jagroupservices.co.uk';
const url = `${site}/about-us`;

const companyFacts = [
  {
    icon: Building2,
    label: 'Legal status',
    value: 'Active private limited company',
  },
  {
    icon: FileCheck2,
    label: 'Company number',
    value: '16314179',
  },
  {
    icon: Landmark,
    label: 'Incorporated',
    value: '13 March 2025',
  },
  {
    icon: ShieldCheck,
    label: 'ICO registration',
    value: 'ZB877370',
  },
] as const;

const operatingAreas = [
  {
    icon: Layers3,
    title: 'Digital platforms and web services',
    description:
      'We develop, operate and manage customer-facing digital platforms, online accounts, web portals and supporting service systems.',
  },
  {
    icon: Headphones,
    title: 'Customer service and administration',
    description:
      'We provide account support, service guidance, customer communications, complaints handling, billing coordination and other central support functions.',
  },
  {
    icon: Network,
    title: 'Reseller and facilitated services',
    description:
      'We may provide access to authorised third-party products and platforms through reseller, white-label, service-management or facilitation arrangements.',
  },
  {
    icon: Handshake,
    title: 'Affiliate and commercial partnerships',
    description:
      'We may introduce customers to selected third-party services through affiliate, referral or other commercial partner arrangements, with the relationship explained clearly.',
  },
] as const;

const operatingSteps = [
  {
    number: '01',
    title: 'We create or select the service',
    description:
      'A service may be developed and operated directly by JA Group Services Ltd or made available through an approved commercial or technology partner.',
  },
  {
    number: '02',
    title: 'We manage the customer experience',
    description:
      'We organise the customer journey, explain the service, administer accounts and provide support within the scope of our role.',
  },
  {
    number: '03',
    title: 'We resolve or escalate issues',
    description:
      'Our team investigates customer matters directly. Where provider-level action is required, we refer or escalate the matter through the correct channel.',
  },
  {
    number: '04',
    title: 'We remain accountable',
    description:
      'We maintain records, apply our policies, respond to complaints and review service performance so that responsibilities remain clear and documented.',
  },
] as const;

const companyResponsibilities = [
  'Operation and support of our own websites, platforms and customer accounts',
  'Customer communications, service information and administrative guidance',
  'Billing and renewal coordination where these functions form part of our service',
  'First-line support and appropriate provider escalation',
  'Complaints about our administration, conduct or contractual responsibilities',
  'Data protection for personal data controlled by JA Group Services Ltd',
] as const;

const partnerResponsibilities = [
  'Underlying products, platforms, infrastructure or technical systems',
  'Registrar, hosting, booking or other provider-level decisions',
  'Delivery and fulfilment of services contracted directly with an affiliate partner',
  'Provider availability, product rules and technical limitations',
  'Matters governed by the provider’s own contract, policies or complaint process',
] as const;

const governanceAreas = [
  {
    icon: Scale,
    title: 'Board oversight',
    description:
      'The Board retains authority over governance, strategy, statutory filings, accounts, financial control, material contracts, major policies, divisional structure and significant legal or compliance matters.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Day-to-day management',
    description:
      'The Chief Executive Officer manages the Company’s day-to-day operations under delegated authority, implements Board strategy and escalates material risks or reserved matters.',
  },
  {
    icon: LockKeyhole,
    title: 'Data protection and accountability',
    description:
      'JA Group Services Ltd acts as Data Controller where applicable, maintains formal privacy and complaints arrangements, and records decisions and responsibilities through its governance framework.',
  },
] as const;

const principles = [
  {
    icon: Users,
    title: 'Accessible support',
    description:
      'We aim to make digital services easier to understand by combining online systems with clear, human customer support.',
  },
  {
    icon: Globe2,
    title: 'Practical digital services',
    description:
      'Our services are designed around practical online needs rather than technology for its own sake.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear responsibility',
    description:
      'We explain what we manage, when a partner is involved and who is responsible for the underlying service.',
  },
  {
    icon: Workflow,
    title: 'Structured operations',
    description:
      'We use documented processes, governance controls and escalation routes to support consistent decision-making and service delivery.',
  },
] as const;

const companyHistory = [
  { date: '13 March 2025', name: 'J&A Hubstore Limited', note: 'The Company was incorporated in England and Wales.' },
  { date: '16 July 2025', name: 'J A Training Ltd', note: 'The legal name was changed as the original business concept developed.' },
  { date: '18 July 2025', name: 'JA Learning Hub Ltd', note: 'The Company adopted a learning-focused identity during an earlier stage of development.' },
  { date: '5 December 2025', name: 'JA Group Services Ltd', note: 'The current name reflects the Company’s broader operating and service-management role.' },
] as const;

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About JA Group Services Ltd</title>
        <meta
          name="description"
          content="Learn who JA Group Services Ltd is, what the Company does, how its digital platforms and customer services operate, and how direct and partner-supported services are managed."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="About JA Group Services Ltd" />
        <meta
          property="og:description"
          content="A detailed overview of JA Group Services Ltd, its digital platforms, customer services, operating model, governance and responsibilities."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#0A1F44] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-5xl space-y-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <Building2 className="h-4 w-4" />
                About the Company
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                About JA Group Services Ltd
              </h1>
              <div className="mx-auto max-w-4xl space-y-3 text-base leading-relaxed text-white/85 sm:text-lg">
                <p>JA Group Services Ltd develops, operates and manages digital platforms and customer services.</p>
                <p>
                  We combine our own technology, central support functions and selected partner services to provide practical online solutions for individuals and organisations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {companyFacts.map(({ icon: Icon, label, value }, index) => (
                <motion.article
                  key={label}
                  className="rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{label}</p>
                  <p className="mt-1 font-bold text-card-foreground">{value}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who we are</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">One company supporting several digital services</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  JA Group Services Ltd is an active private limited company incorporated in England and Wales. The Company is the legal and operational organisation responsible for the platforms, customer services, commercial arrangements and central support functions it manages.
                </p>
                <p>
                  We operate online services for individuals and organisations, including Sousa Murray Profiles, Sousa Murray Planeia and Sousa Murray Domains. These services have different purposes, but they are supported through a common approach to customer administration, governance, data protection and service management.
                </p>
                <p>
                  Our role varies by service. Some platform functions are developed and managed directly by the Company. Other products or technical services are made available through authorised reseller, affiliate or technology partners.
                </p>
              </div>
            </motion.div>

            <motion.aside
              className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Layers3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Our current service structure</p>
                  <h3 className="text-xl font-bold text-card-foreground">Platforms and division</h3>
                </div>
              </div>

              <div className="space-y-3">
                <ServiceSummary
                  name="Sousa Murray Profiles"
                  description="A digital profile platform for individuals and organisations."
                />
                <ServiceSummary
                  name="Sousa Murray Planeia"
                  description="An experience and itinerary-planning platform."
                />
                <ServiceSummary
                  name="Sousa Murray Domains"
                  description="A domain, digital identity and online-presence trading division."
                />
              </div>

              <Button asChild variant="outline" className="mt-6 min-h-11 w-full border-primary text-primary hover:bg-primary/10">
                <Link to="/about-our-divisions">
                  Read about our services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.aside>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">What we do</p>
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Our main operating activities</h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                The Company brings together digital platforms, customer support and selected partner services under a structured operating model.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {operatingAreas.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">How we operate</p>
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">A managed and accountable service model</h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Our role is not identical for every service. We define the customer journey, explain who provides what and use documented escalation routes when another provider must act.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {operatingSteps.map(({ number, title, description }, index) => (
                <motion.article
                  key={number}
                  className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <span className="mb-5 inline-flex rounded-lg bg-primary/10 px-3 py-1 text-sm font-extrabold text-primary">{number}</span>
                  <h3 className="mb-2 text-lg font-bold text-card-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Service transparency</p>
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Clear responsibility when partners are involved</h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                We do not present ourselves as the underlying provider where a third party supplies the product, platform or infrastructure. The applicable service information and terms explain the relationship.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <ResponsibilityCard
                icon={LifeBuoy}
                title="JA Group Services Ltd"
                subtitle="Our direct responsibilities may include"
                items={companyResponsibilities}
              />
              <ResponsibilityCard
                icon={ServerCog}
                title="Authorised service partners"
                subtitle="Partner responsibilities may include"
                items={partnerResponsibilities}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/10 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">The contract depends on the service:</strong> for some reseller or managed services, JA Group Services Ltd may be the customer’s contracting party. For affiliate or referral services, the customer normally contracts directly with the relevant third-party provider.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Governance and accountability</p>
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">How the Company is directed and managed</h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                The Company operates under its Articles of Association, Corporate Governance Charter and approved policies and frameworks.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {governanceAreas.map(({ icon: Icon, title, description }, index) => (
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
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </motion.article>
              ))}
            </div>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild className="min-h-11 bg-[#1A3FA8] px-6 font-bold text-white hover:bg-[#153588]">
                <Link to="/our-group-structure">
                  View Group Structure
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="min-h-11 border-primary px-6 font-semibold text-primary hover:bg-primary/10">
                <Link to="/complaints-policy">Read our Complaints Policy</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our approach</p>
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">What customers should expect from us</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {principles.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
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

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our development</p>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">How the Company’s identity developed</h2>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  The Company has used several legal names as its business model developed. The current name was adopted to support a broader range of digital platforms, customer services and commercial arrangements.
                </p>
              </div>

              <div className="space-y-4">
                {companyHistory.map(({ date, name, note }, index) => (
                  <motion.article
                    key={`${date}-${name}`}
                    className="grid gap-3 rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm sm:grid-cols-[9rem_1fr] sm:p-6"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                  >
                    <p className="text-sm font-semibold text-primary">{date}</p>
                    <div>
                      <h3 className="font-bold text-card-foreground">{name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{note}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Legal and registration details</p>
                    <h2 className="text-2xl font-bold text-card-foreground">Company information</h2>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <CompanyDetail label="Registered name" value="JA Group Services Ltd" />
                  <CompanyDetail label="Company number" value="16314179" />
                  <CompanyDetail label="Company status" value="Active" />
                  <CompanyDetail label="Company type" value="Private limited company" />
                  <CompanyDetail label="Jurisdiction" value="England and Wales" />
                  <CompanyDetail label="ICO registration" value="ZB877370" />
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">Registered office</p>
                  <address className="not-italic leading-relaxed text-card-foreground">
                    167–169 Great Portland Street<br />
                    5th Floor<br />
                    London<br />
                    W1W 5PF<br />
                    United Kingdom
                  </address>
                </div>

                <a
                  href="https://find-and-update.company-information.service.gov.uk/company/16314179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  View the Companies House record
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl bg-[#0A1F44] p-6 text-white shadow-sm sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Contact JA Group Services Ltd</h2>
                <p className="mt-3 leading-relaxed text-white/75">
                  Contact our team about the Company, our platforms, customer support, partnerships, complaints or data protection.
                </p>
                <div className="mt-7 flex flex-col gap-3">
                  <Button asChild className="min-h-11 bg-white font-bold text-[#0A1F44] hover:bg-white/90">
                    <Link to="/contactus">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" className="min-h-11 border-white/30 bg-transparent font-semibold text-white hover:bg-white/10 hover:text-white">
                    <Link to="/partner-with-us">Partner With Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ServiceSummary({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/70 p-4">
      <p className="font-bold text-card-foreground">{name}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function ResponsibilityCard({
  icon: Icon,
  title,
  subtitle,
  items,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: readonly string[];
}) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
          <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
        </div>
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

function CompanyDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-sm font-medium text-muted-foreground">{label}</p>
      <p className="font-semibold text-card-foreground">{value}</p>
    </div>
  );
}
