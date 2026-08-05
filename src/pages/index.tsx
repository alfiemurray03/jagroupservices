import { Helmet } from '@dr.pogodin/react-helmet';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileText,
  Globe2,
  Handshake,
  Headphones,
  Layers3,
  Mail,
  Network,
  Phone,
  Scale,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const site = 'https://jagroupservices.co.uk';
const title = 'JA Group Services Ltd | Digital Platforms and Customer Services';
const description =
  'JA Group Services Ltd develops, operates and manages digital platforms and customer services. We combine our own technology, central support functions and selected partner services to provide practical online solutions for individuals and organisations.';

const companyFacts = [
  {
    label: 'Registered company',
    value: 'JA Group Services Ltd',
  },
  {
    label: 'Company number',
    value: '16314179',
    href: 'https://find-and-update.company-information.service.gov.uk/company/16314179',
  },
  {
    label: 'Jurisdiction',
    value: 'England and Wales',
  },
  {
    label: 'ICO registration',
    value: 'ZB877370',
    href: 'https://ico.org.uk/ESDWebPages/Entry/ZB877370',
  },
] as const;

const operatingAreas = [
  {
    icon: Layers3,
    title: 'Digital platforms',
    description:
      'We develop and operate practical web-based platforms designed for individuals, organisations and business users.',
  },
  {
    icon: Headphones,
    title: 'Customer services',
    description:
      'We provide customer-facing support, enquiry handling, complaints routes and service administration across our operations.',
  },
  {
    icon: Workflow,
    title: 'Central operations',
    description:
      'We coordinate service management, administration, governance, data protection and operational oversight from one company structure.',
  },
  {
    icon: Handshake,
    title: 'Partner-supported services',
    description:
      'Selected services may be supported by authorised technology providers, reseller platforms or affiliate partners.',
  },
] as const;

const operatingModel = [
  {
    number: '01',
    title: 'We design and manage services',
    description:
      'JA Group Services Ltd develops its operating model, customer experience, service standards and internal controls.',
  },
  {
    number: '02',
    title: 'We support our customers',
    description:
      'Customers contact us through the relevant brand or Company channel. We investigate, assist and manage the enquiry.',
  },
  {
    number: '03',
    title: 'We work with selected providers',
    description:
      'Where an underlying provider controls a platform or technical function, we escalate matters that require provider-level action.',
  },
  {
    number: '04',
    title: 'We maintain accountability',
    description:
      'Responsibilities, complaints routes, data protection arrangements and material decisions are governed through documented processes.',
  },
] as const;

const portfolio = [
  {
    name: 'Sousa Murray Profiles',
    type: 'Digital profile platform',
    icon: Users,
    description:
      'A platform for creating and managing professional digital profiles, contact information, links, media, documents and QR-based sharing.',
    highlights: ['Personal and organisation profiles', 'Digital identity tools', 'Profile and sharing controls'],
    href: 'https://sousamurrayprofiles.jagroupservices.co.uk/',
  },
  {
    name: 'Sousa Murray Planeia',
    type: 'Experience and itinerary platform',
    icon: Globe2,
    description:
      'A planning platform that helps users organise travel, days out, activities and shared itineraries while discovering selected partner options.',
    highlights: ['Itinerary planning', 'Shared plans', 'Selected affiliate discovery'],
    href: 'https://sousamurrayplaneia.jagroupservices.co.uk/',
  },
  {
    name: 'Sousa Murray Domains',
    type: 'Domain and digital identity support',
    icon: Network,
    description:
      'A customer-facing domain support and reseller service providing access to domain-related products through authorised provider platforms.',
    highlights: ['First-line customer support', 'Domain and account assistance', 'Provider escalation where required'],
    href: 'https://sousamurraydomains.jagroupservices.co.uk/',
  },
] as const;

const accountability = [
  {
    icon: Scale,
    title: 'Governance and oversight',
    description:
      'The Company operates under its Articles of Association, Corporate Governance Charter and approved policies. Material and reserved matters remain subject to Board oversight.',
  },
  {
    icon: ShieldCheck,
    title: 'Data protection',
    description:
      'JA Group Services Ltd is responsible for personal data it controls and maintains dedicated data-protection contact and escalation arrangements.',
  },
  {
    icon: FileText,
    title: 'Complaints and accountability',
    description:
      'Customers have access to a published complaints route, documented review stages and clear escalation arrangements.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent service roles',
    description:
      'We explain when a service is operated directly by the Company and when an authorised third party provides the underlying platform or service.',
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${site}/`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-14 sm:py-18 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute -bottom-44 left-1/3 h-80 w-80 rounded-full bg-cyan-300/5 blur-3xl" />
            <div className="absolute inset-y-0 left-0 w-1 bg-blue-500" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-5 inline-flex items-center gap-2 border-l-2 border-blue-400 pl-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-200 sm:text-sm">
                  Digital platforms · Customer services · Partner-supported solutions
                </div>

                <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  JA Group Services Ltd
                </h1>

                <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                  <p>JA Group Services Ltd develops, operates and manages digital platforms and customer services.</p>
                  <p>
                    We combine our own technology, central support functions and selected partner services to provide practical online solutions for individuals and organisations.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-[#0A1F44] hover:bg-blue-50">
                    <Link to="/about-us">
                      About the Company
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link to="/about-our-divisions">Our Brands and Division</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-md"
                aria-label="Company profile"
              >
                <div className="border-b border-white/15 px-5 py-5 sm:px-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Company profile</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Registered and accountable</h2>
                </div>

                <dl className="divide-y divide-white/10">
                  {companyFacts.map((fact) => (
                    <div key={fact.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[150px_1fr] sm:gap-5 sm:px-6">
                      <dt className="text-xs font-medium text-white/55 sm:text-sm">{fact.label}</dt>
                      <dd className="text-sm font-semibold text-white sm:text-right">
                        {'href' in fact ? (
                          <a
                            href={fact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-blue-200"
                          >
                            {fact.value}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="border-t border-white/15 bg-black/10 px-5 py-4 sm:px-6">
                  <Link to="/our-group-structure" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-200">
                    View the Company structure
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <CorporateFact icon={Building2} label="Legal entity" value="Private limited company" />
              <CorporateFact icon={Layers3} label="Core activity" value="Digital platforms and services" />
              <CorporateFact icon={Headphones} label="Customer support" value="Company-managed support routes" />
              <CorporateFact icon={ShieldCheck} label="Accountability" value="Governance and data protection" />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42 }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Who we are</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  One company supporting a focused digital portfolio
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
                  JA Group Services Ltd brings its platforms, customer services and operational functions together under one managed company structure. This allows us to maintain consistent support, administration, governance and accountability across the services we operate.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground sm:text-lg">
                  Our role can differ by service. Some technology and customer functions are managed directly by us, while selected underlying services are supplied through authorised commercial partners.
                </p>
                <Button asChild variant="outline" className="mt-7 min-h-11 border-primary font-semibold text-primary hover:bg-primary/10">
                  <Link to="/about-us">
                    Read more about JA Group Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {operatingAreas.map(({ icon: Icon, title: itemTitle, description: copy }, index) => (
                  <motion.article
                    key={itemTitle}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm sm:p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-card-foreground">{itemTitle}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How we operate"
              title="A structured and transparent operating model"
              description="Our services are managed through clear responsibilities, customer-support routes and documented provider relationships."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {operatingModel.map(({ number, title: itemTitle, description: copy }, index) => (
                <motion.article
                  key={number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                >
                  <div className="absolute right-5 top-4 text-4xl font-extrabold text-primary/10">{number}</div>
                  <div className="relative">
                    <div className="mb-5 h-1 w-10 rounded-full bg-primary" />
                    <h3 className="text-lg font-bold text-card-foreground">{itemTitle}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Operating portfolio</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our brands and services</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground sm:text-lg">
                  Each service has a distinct purpose while sharing the Company’s central support, administration and accountability framework.
                </p>
              </div>
              <Button asChild variant="outline" className="min-h-11 border-primary font-semibold text-primary hover:bg-primary/10">
                <Link to="/about-our-divisions">
                  View detailed service information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {portfolio.map(({ name, type, icon: Icon, description: copy, highlights, href }, index) => (
                <motion.article
                  key={name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card text-card-foreground shadow-sm"
                >
                  <div className="border-b border-border p-6">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{type}</p>
                        <h3 className="mt-2 text-2xl font-bold text-card-foreground">{name}</h3>
                      </div>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="leading-relaxed text-muted-foreground">{copy}</p>
                    <ul className="mt-5 space-y-2.5">
                      {highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="mt-7 min-h-11 w-full border-border font-semibold text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary">
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        Visit {name}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0A1F44] py-14 text-white sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42 }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">Governance and standards</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Accountability is part of how we operate</h2>
                <p className="mt-5 leading-relaxed text-white/75 sm:text-lg">
                  The Company maintains formal governance, data-protection and complaints arrangements to support responsible decision-making and clear customer accountability.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Button asChild size="lg" className="min-h-12 bg-white px-6 font-bold text-[#0A1F44] hover:bg-blue-50">
                    <Link to="/our-group-structure">Company Structure</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="min-h-12 border-white/30 bg-white/5 px-6 font-semibold text-white hover:bg-white/10 hover:text-white">
                    <Link to="/complaints-policy">Complaints Policy</Link>
                  </Button>
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {accountability.map(({ icon: Icon, title: itemTitle, description: copy }, index) => (
                  <motion.article
                    key={itemTitle}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-5 w-5 text-blue-200" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{itemTitle}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{copy}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42 }}
              className="grid items-center gap-6 rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm lg:grid-cols-[1fr_auto] lg:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
                  <Clock3 className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-bold text-card-foreground sm:text-2xl">Partnership programme</h2>
                    <span className="rounded-full bg-amber-300 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wide text-amber-950">Coming Soon</span>
                  </div>
                  <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
                    We are developing a formal and transparent route for selected technology, reseller, affiliate, supplier and commercial relationships. Public applications are not yet open.
                  </p>
                </div>
              </div>
              <Button asChild className="min-h-11 bg-[#1A3FA8] px-6 font-bold text-white hover:bg-[#153588]">
                <Link to="/partner-with-us">
                  View programme information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <motion.div
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42 }}
                  className="p-6 sm:p-8 lg:p-10"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Contact the Company</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Speak with JA Group Services Ltd</h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">
                    Contact us about the Company, our services, customer support, partnerships, complaints or data-protection matters.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg" className="min-h-12 bg-[#1A3FA8] px-7 font-bold text-white hover:bg-[#153588]">
                      <Link to="/contactus">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="min-h-12 border-primary px-7 font-semibold text-primary hover:bg-primary/10">
                      <a href="tel:02038342790">Call 020 3834 2790</a>
                    </Button>
                  </div>
                </motion.div>

                <div className="border-t border-border bg-secondary p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                  <div className="space-y-4">
                    <ContactRow
                      icon={Mail}
                      label="General enquiries"
                      value="contact@jagroupservices.co.uk"
                      href="mailto:contact@jagroupservices.co.uk"
                    />
                    <ContactRow
                      icon={Phone}
                      label="Main switchboard"
                      value="020 3834 2790"
                      href="tel:02038342790"
                    />
                    <ContactRow
                      icon={Building2}
                      label="Registered office"
                      value="167–169 Great Portland Street, 5th Floor, London, W1W 5PF"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function CorporateFact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-semibold text-card-foreground">{value}</p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title: heading, description: copy }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42 }}
      className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
    >
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{heading}</h2>
      <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">{copy}</p>
    </motion.div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-semibold leading-relaxed text-foreground">{value}</p>
      </div>
    </>
  );

  return href ? (
    <a href={href} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/5">
      {content}
    </a>
  ) : (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">{content}</div>
  );
}
