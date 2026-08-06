import { Helmet } from '@dr.pogodin/react-helmet';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe2,
  GraduationCap,
  Handshake,
  Headphones,
  Landmark,
  Mail,
  Megaphone,
  Network,
  Scale,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { BRAND_SITES } from '@/lib/brand-sites';

const site = 'https://jagroupservices.co.uk';

const companyFacts = [
  { label: 'Registered company', value: 'JA Group Services Ltd' },
  {
    label: 'Company number',
    value: '16314179',
    href: 'https://find-and-update.company-information.service.gov.uk/company/16314179',
  },
  { label: 'Registered in', value: 'England and Wales' },
  {
    label: 'ICO registration',
    value: 'ZB877370',
    href: 'https://ico.org.uk/ESDWebPages/Entry/ZB877370',
  },
] as const;

const stakeholderRoutes = [
  {
    icon: Headphones,
    title: 'Customers',
    description: 'Access support, account guidance, complaints, refunds, privacy and the right service contact point.',
    href: '/customer-support',
    label: 'Customer Support Centre',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Suppliers',
    description: 'Introduce technology, professional, operational or customer-service capabilities through a controlled corporate route.',
    href: '/partner-with-us',
    label: 'Supplier information',
  },
  {
    icon: Handshake,
    title: 'Partners and affiliates',
    description: 'Explore commercial partnership information and the planned Affiliate Partner Programme.',
    href: '/affiliate-partners',
    label: 'Affiliate programme',
  },
  {
    icon: TrendingUp,
    title: 'Investors and future shareholders',
    description: 'Review public Company information and the process for non-binding corporate enquiries.',
    href: '/corporate-information#investors',
    label: 'Investor information',
  },
] as const;

const brandDestinations = [
  {
    name: BRAND_SITES.domains.name,
    type: 'Domains, hosting and managed websites',
    description: BRAND_SITES.domains.description,
    href: BRAND_SITES.domains.url,
    icon: Network,
    highlights: [
      'Domain registration, renewal and transfer support',
      'Authorised reseller products and services',
      'Sousa Murray Sites Managed Website Services',
    ],
    nestedLabel: 'Managed Websites',
    nestedHref: BRAND_SITES.sites.url,
  },
  {
    name: BRAND_SITES.planeia.name,
    type: 'Guided planning platform',
    description: BRAND_SITES.planeia.description,
    href: BRAND_SITES.planeia.url,
    icon: Globe2,
    highlights: ['Trips, occasions and shared plans', 'Budgets, checklists and preparation', 'Collaborative planning tools'],
  },
  {
    name: BRAND_SITES.profiles.name,
    type: 'Digital profiles and contact sharing',
    description: BRAND_SITES.profiles.description,
    href: BRAND_SITES.profiles.url,
    icon: Users,
    highlights: ['Personal and business profiles', 'QR and digital contact sharing', 'Profile administration tools'],
  },
  {
    name: BRAND_SITES.elearning.name,
    type: 'Authorised e-learning reseller services',
    description: BRAND_SITES.elearning.description,
    href: BRAND_SITES.elearning.url,
    icon: GraduationCap,
    highlights: ['Authorised third-party courses', 'Learner enrolment administration', 'First-line learner support'],
  },
] as const;

const corporateInformation = [
  { icon: Building2, title: 'About the Company', description: 'Who we are, what we do and how the legal operating company works.', href: '/about-us' },
  { icon: Scale, title: 'Governance', description: 'Authority, oversight, corporate accountability and decision-making information.', href: '/governance' },
  { icon: Landmark, title: 'Stakeholder Centre', description: 'Information for suppliers, investors, shareholders, advisers and institutions.', href: '/corporate-information' },
  { icon: Megaphone, title: 'Announcements', description: 'Official corporate, brand, governance and service publications.', href: '/announcements' },
  { icon: ShieldCheck, title: 'Trust and Protection', description: 'Privacy, security, accessibility, safeguarding and customer accountability.', href: '/privacy-centre' },
  { icon: FileText, title: 'Legal and Policies', description: 'Terms, privacy, cookies, complaints and refunds information.', href: '/terms-of-service' },
] as const;

export default function CorporateHomePage() {
  return (
    <>
      <Helmet>
        <title>JA Group Services Ltd | Corporate Home of the Sousa Murray Brands</title>
        <meta
          name="description"
          content="The corporate home of JA Group Services Ltd and the Sousa Murray brands, providing Company, customer, supplier, partner, investor, governance and legal information."
        />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content="JA Group Services Ltd | Corporate Home of the Sousa Murray Brands" />
        <meta
          property="og:description"
          content="The central corporate gateway for the Company, its brands, customers, suppliers, partners, investors and stakeholders."
        />
        <meta property="og:url" content={`${site}/`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-32 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
            <div className="absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                  <Building2 className="h-4 w-4" />
                  The corporate home of JA Group Services Ltd
                </div>
                <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  The Company behind the Sousa Murray brand family
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
                  JA Group Services Ltd develops, operates and supports digital services under the Sousa Murray master brand. This website is the central information point for our business, brands, customers, suppliers, partners, investors and wider stakeholders.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-[#0A1F44] hover:bg-blue-50">
                    <Link to="/about-our-divisions">Explore our brands<ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white">
                    <Link to="/corporate-information">Corporate information</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white">
                    <Link to="/customer-support">Customer support</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-md"
              >
                <div className="border-b border-white/15 px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Company profile</p>
                  <h2 className="mt-2 text-2xl font-bold">Registered and accountable</h2>
                </div>
                <dl className="divide-y divide-white/10">
                  {companyFacts.map((fact) => (
                    <div key={fact.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[145px_1fr] sm:gap-5">
                      <dt className="text-xs text-white/55 sm:text-sm">{fact.label}</dt>
                      <dd className="text-sm font-semibold text-white sm:text-right">
                        {'href' in fact ? (
                          <a href={fact.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-blue-200">
                            {fact.value}<ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ) : fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-white/15 bg-black/10 px-6 py-4">
                  <Link to="/our-group-structure" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-blue-200">View Company and brand structure<ArrowRight className="h-4 w-4" /></Link>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            <CorporateFact icon={Building2} label="Legal company" value="JA Group Services Ltd" />
            <CorporateFact icon={Globe2} label="Master brand" value="Sousa Murray" />
            <CorporateFact icon={Network} label="Public websites" value="Four approved destinations" />
            <CorporateFact icon={ShieldCheck} label="Central accountability" value="Governance, support and privacy" />
          </div>
        </section>

        <section className="border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Start here"
              title="A corporate gateway for every audience"
              description="Choose the route that best describes why you are visiting. Each area connects back to the same legal company and central accountability framework."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {stakeholderRoutes.map(({ icon: Icon, title, description, href, label }, index) => (
                <motion.article
                  key={title}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"><Icon className="h-5 w-5 text-primary" /></div>
                  <h2 className="mt-4 text-xl font-bold text-foreground">{title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  <Link to={href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{label}<ArrowRight className="h-4 w-4" /></Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Sousa Murray portfolio</p>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Our brands and website destinations</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground sm:text-lg">
                  Five customer-facing service brands are delivered through four approved public website destinations. Sousa Murray Sites forms the Managed Website Services area within Sousa Murray Domains.
                </p>
              </div>
              <Button asChild variant="outline" className="min-h-11 border-primary font-semibold text-primary hover:bg-primary/10">
                <Link to="/about-our-divisions">Detailed brand map<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {brandDestinations.map(({ name, type, description, href, icon: Icon, highlights, nestedLabel, nestedHref }, index) => (
                <motion.article
                  key={name}
                  className="flex h-full flex-col rounded-3xl border border-border bg-card shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                >
                  <div className="border-b border-border p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{type}</p>
                        <h3 className="mt-2 text-2xl font-bold text-foreground">{name}</h3>
                      </div>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10"><Icon className="h-5 w-5 text-primary" /></div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="leading-relaxed text-muted-foreground">{description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Button asChild variant="outline" className="min-h-11 flex-1">
                        <a href={href} target="_blank" rel="noopener noreferrer">Visit {name}<ExternalLink className="ml-2 h-4 w-4" /></a>
                      </Button>
                      {nestedLabel && nestedHref && (
                        <Button asChild className="min-h-11 flex-1">
                          <a href={nestedHref} target="_blank" rel="noopener noreferrer">{nestedLabel}<ExternalLink className="ml-2 h-4 w-4" /></a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Company information"
              title="A reliable information point for the business"
              description="Corporate information, public records, governance, policies and announcements are brought together so stakeholders can find the right source without navigating separate brand websites."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {corporateInformation.map(({ icon: Icon, title, description, href }, index) => (
                <motion.article
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10"><Icon className="h-5 w-5 text-primary" /></div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground">{title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                      <Link to={href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Open section<ArrowRight className="h-4 w-4" /></Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0A1F44] py-14 text-white sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">Corporate standards</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Clear responsibility across every service</h2>
              <p className="mt-5 leading-relaxed text-white/75 sm:text-lg">
                JA Group Services Ltd remains the legal operating company behind the Sousa Murray services. We publish central routes for governance, complaints, data protection, security, safeguarding and corporate enquiries.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white font-bold text-[#0A1F44] hover:bg-blue-50"><Link to="/governance">Governance</Link></Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"><Link to="/complaints-policy">Complaints &amp; Refunds</Link></Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <TrustCard icon={Scale} title="Governance" description="Documented authority, oversight and accountability." />
              <TrustCard icon={ShieldCheck} title="Data protection" description="A dedicated Privacy Centre and Data Protection Officer route." />
              <TrustCard icon={Headphones} title="Customer accountability" description="Published support, complaint and refund procedures." />
              <TrustCard icon={FileText} title="Transparent roles" description="Clear distinction between Company and third-party provider responsibilities." />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm lg:grid-cols-[1fr_auto] lg:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10"><Megaphone className="h-6 w-6 text-primary" /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Corporate newsroom</p>
                  <h2 className="mt-2 text-2xl font-bold text-foreground">Official announcements now have a permanent home</h2>
                  <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
                    Read published Company news, governance notices, brand updates and service developments from one controlled source.
                  </p>
                </div>
              </div>
              <Button asChild className="min-h-11 px-6"><Link to="/announcements">View announcements<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-7 sm:p-9 lg:p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Contact JA Group Services Ltd</p>
                  <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Speak to the right part of the Company</h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">
                    Contact us about the Company, a Sousa Murray service, customer support, a supplier or partnership proposal, corporate information, complaints or data protection.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg"><Link to="/contactus">Contact the Company<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                    <Button asChild size="lg" variant="outline"><a href="mailto:contact@jagroupservices.co.uk">Email us<Mail className="ml-2 h-4 w-4" /></a></Button>
                  </div>
                </div>
                <div className="border-t border-border bg-secondary p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
                  <h3 className="text-xl font-bold text-foreground">Corporate contact</h3>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div><dt className="text-muted-foreground">General and corporate enquiries</dt><dd className="mt-1 font-semibold text-foreground">contact@jagroupservices.co.uk</dd></div>
                    <div><dt className="text-muted-foreground">Main switchboard</dt><dd className="mt-1 font-semibold text-foreground">020 3834 2790</dd></div>
                    <div><dt className="text-muted-foreground">Registered office</dt><dd className="mt-1 font-semibold leading-relaxed text-foreground">167-169 Great Portland Street, 5th Floor, London, W1W 5PF</dd></div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
    </motion.div>
  );
}

function CorporateFact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10"><Icon className="h-4 w-4 text-primary" /></div>
      <div><p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p><p className="mt-1 text-sm font-semibold text-foreground">{value}</p></div>
    </div>
  );
}

function TrustCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><Icon className="h-5 w-5 text-blue-200" /></div>
      <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
    </div>
  );
}
