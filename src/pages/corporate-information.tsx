import { Helmet } from '@dr.pogodin/react-helmet';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ExternalLink,
  FileCheck2,
  FileText,
  Handshake,
  Landmark,
  Mail,
  Megaphone,
  Scale,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const pageUrl = 'https://jagroupservices.co.uk/corporate-information';

const companyFacts = [
  { label: 'Legal name', value: 'JA Group Services Ltd' },
  {
    label: 'Company number',
    value: '16314179',
    href: 'https://find-and-update.company-information.service.gov.uk/company/16314179',
  },
  { label: 'Place of registration', value: 'England and Wales' },
  { label: 'Company type', value: 'Private company limited by shares' },
  {
    label: 'ICO registration',
    value: 'ZB877370',
    href: 'https://ico.org.uk/ESDWebPages/Entry/ZB877370',
  },
  { label: 'Registered office', value: '167-169 Great Portland Street, 5th Floor, London, W1W 5PF' },
] as const;

const audiences = [
  {
    icon: Users,
    title: 'Customers and service users',
    description: 'Find the right Sousa Murray service, account support, complaints route, privacy information and Company contact point.',
    href: '/customer-support',
    label: 'Customer Support Centre',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Suppliers and service providers',
    description: 'Understand how to introduce a business, technology, professional or operational service to JA Group Services Ltd.',
    href: '/partner-with-us',
    label: 'Supplier and partnership information',
  },
  {
    icon: Handshake,
    title: 'Commercial and affiliate partners',
    description: 'Review current partnership information and the planned Affiliate Partner Programme before registering interest.',
    href: '/affiliate-partners',
    label: 'Affiliate programme information',
  },
  {
    icon: TrendingUp,
    title: 'Investors and future shareholders',
    description: 'Access public corporate information and understand how non-binding corporate enquiries are considered.',
    href: '#investors',
    label: 'Investor information',
  },
  {
    icon: Landmark,
    title: 'Professional advisers and institutions',
    description: 'Locate governance, data protection, security, legal and registered-company information for proportionate due diligence.',
    href: '#information-library',
    label: 'Corporate information library',
  },
  {
    icon: Megaphone,
    title: 'Media and interested stakeholders',
    description: 'Read official Company announcements and contact the corporate office for clarification or authorised comment.',
    href: '/announcements',
    label: 'Corporate newsroom',
  },
] as const;

const informationLinks = [
  { icon: Building2, title: 'About JA Group Services Ltd', description: 'Company purpose, operating model and corporate identity.', href: '/about-us' },
  { icon: Scale, title: 'Governance', description: 'Authority, oversight, accountability and corporate governance information.', href: '/governance' },
  { icon: FileCheck2, title: 'Group and brand structure', description: 'The relationship between the legal company, Sousa Murray master brand and services.', href: '/our-group-structure' },
  { icon: Megaphone, title: 'Announcements', description: 'Official corporate, brand, governance and service publications.', href: '/announcements' },
  { icon: ShieldCheck, title: 'Privacy and security', description: 'Data-protection rights, security reporting and trust information.', href: '/privacy-centre' },
  { icon: FileText, title: 'Legal and policy information', description: 'Terms, privacy, cookies, complaints and refunds information.', href: '/terms-of-service' },
] as const;

export default function CorporateInformationPage() {
  return (
    <>
      <Helmet>
        <title>Corporate Information & Stakeholder Centre | JA Group Services Ltd</title>
        <meta
          name="description"
          content="The central corporate information point for customers, suppliers, partners, investors, shareholders, advisers and other stakeholders of JA Group Services Ltd."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Corporate Information & Stakeholder Centre | JA Group Services Ltd" />
        <meta
          property="og:description"
          content="Company facts, stakeholder routes, governance information, supplier guidance and investor enquiries from JA Group Services Ltd."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                  <Landmark className="h-4 w-4" />
                  Corporate gateway
                </div>
                <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                  Corporate Information &amp; Stakeholder Centre
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                  A central information point for people and organisations seeking reliable information about JA Group Services Ltd, the Sousa Murray brand family, governance, commercial relationships and corporate enquiries.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-[#0A1F44] hover:bg-blue-50">
                    <a href="#stakeholder-routes">Find your route <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white">
                    <Link to="/announcements">Company announcements</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-md"
                aria-label="Registered company information"
              >
                <div className="border-b border-white/15 px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Registered company information</p>
                  <h2 className="mt-2 text-2xl font-bold">Corporate profile</h2>
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
              </motion.aside>
            </div>
          </div>
        </section>

        <section id="stakeholder-routes" className="scroll-mt-24 border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Stakeholder routes"
              title="Find the information or contact point you need"
              description="The corporate website is designed to serve different audiences while keeping one clear legal and governance centre."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {audiences.map(({ icon: Icon, title, description, href, label }, index) => (
                <motion.article
                  key={title}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-foreground">{title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  {href.startsWith('#') ? (
                    <a href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{label}<ArrowRight className="h-4 w-4" /></a>
                  ) : (
                    <Link to={href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{label}<ArrowRight className="h-4 w-4" /></Link>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="information-library" className="scroll-mt-24 border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Corporate information library"
              title="Public information from one controlled source"
              description="Use the sections below for current Company, governance, brand, policy and announcement information."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {informationLinks.map(({ icon: Icon, title, description, href }, index) => (
                <motion.article
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
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

        <section className="border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.article className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <BriefcaseBusiness className="h-10 w-10 text-primary" />
              <h2 className="mt-5 text-3xl font-bold text-foreground">Suppliers and professional service providers</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Organisations may introduce relevant technology, infrastructure, professional, operational or customer-service capabilities. An introduction does not create a procurement process, approved-supplier status or commitment to purchase.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>Provide a clear legal identity and named business contact.</li>
                <li>Explain the service, customer or operational value and commercial model.</li>
                <li>Identify material data protection, security, subcontracting or regulatory implications.</li>
                <li>Be prepared for proportionate due diligence and written terms before appointment.</li>
              </ul>
              <Button asChild className="mt-7"><Link to="/partner-with-us">Supplier and partnership information</Link></Button>
            </motion.article>

            <motion.article id="investors" className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}>
              <TrendingUp className="h-10 w-10 text-primary" />
              <h2 className="mt-5 text-3xl font-bold text-foreground">Investors and future shareholders</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                JA Group Services Ltd is a private company. This website provides corporate information but does not constitute an invitation, offer or recommendation to acquire shares, securities or any financial product.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A corporate or investment enquiry is non-binding. It creates no right to shares, information, negotiation or future participation. Any proposal would require appropriate authority, due diligence, legal documentation and compliance with applicable law and the Company’s governance arrangements.
              </p>
              <Button asChild variant="outline" className="mt-7"><a href="mailto:contact@jagroupservices.co.uk?subject=Corporate%20or%20Investment%20Enquiry">Make a corporate enquiry<Mail className="ml-2 h-4 w-4" /></a></Button>
            </motion.article>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0A1F44] py-14 text-white sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">Due diligence and document requests</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Public information first; controlled disclosure where justified</h2>
              <p className="mt-5 leading-relaxed text-white/75">
                We direct stakeholders to published corporate records and website information first. Requests for non-public documents are reviewed according to identity, authority, purpose, confidentiality, proportionality and the Company’s legal and governance obligations.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="text-xl font-bold">Before confidential information is shared</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/75">
                <li>We may verify the requesting person and organisation.</li>
                <li>We may require a clear purpose, authority and defined document scope.</li>
                <li>Confidentiality undertakings or a non-disclosure agreement may be required.</li>
                <li>Personal data, privileged information and security-sensitive material may be redacted or withheld.</li>
                <li>Nothing on this page creates an entitlement to non-public Company information.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-xl sm:p-10">
              <Mail className="mx-auto h-11 w-11 text-primary" />
              <h2 className="mt-5 text-3xl font-bold text-foreground">Contact the corporate office</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Identify who you represent, the purpose of your enquiry and the information or action requested. We will direct it to the appropriate corporate, operational or governance route.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg"><a href="mailto:contact@jagroupservices.co.uk?subject=Corporate%20Enquiry">Email corporate enquiries</a></Button>
                <Button asChild size="lg" variant="outline"><Link to="/contactus">Contact page</Link></Button>
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
