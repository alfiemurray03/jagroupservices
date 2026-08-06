import { Helmet } from '@dr.pogodin/react-helmet';
import {
  ArrowRight,
  Building2,
  ExternalLink,
  FileCheck2,
  FileText,
  Landmark,
  LockKeyhole,
  Mail,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const pageUrl = 'https://jagroupservices.co.uk/shareholder-information';

const companyFacts = [
  { label: 'Legal name', value: 'JA Group Services Ltd' },
  { label: 'Company type', value: 'Private company limited by shares' },
  { label: 'Company number', value: '16314179' },
  { label: 'Registered in', value: 'England and Wales' },
  { label: 'Registered office', value: '167–169 Great Portland Street, 5th Floor, London, W1W 5PF' },
] as const;

const shareholderRequests = [
  'Questions about formal notices, resolutions or shareholder communications.',
  'Requests to update a shareholder correspondence address or other recorded details.',
  'Queries about share certificates, transfers or entries in the Company’s statutory records.',
  'Requests made by a duly authorised representative or professional adviser acting for a shareholder.',
] as const;

const restrictedInformation = [
  'Personal information about shareholders, directors, staff, customers or other individuals.',
  'Confidential board papers, internal legal advice or commercially sensitive records.',
  'Information that the requester is not legally entitled or authorised to receive.',
  'Security, fraud-prevention or operational information whose disclosure could create a risk.',
] as const;

export default function ShareholderInformationPage() {
  return (
    <>
      <Helmet>
        <title>Shareholder Information | JA Group Services Ltd</title>
        <meta
          name="description"
          content="Private-company shareholder information, contact routes and important notices for existing shareholders and authorised representatives of JA Group Services Ltd."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Shareholder Information | JA Group Services Ltd" />
        <meta
          property="og:description"
          content="Information for existing shareholders and authorised representatives of JA Group Services Ltd, a private company limited by shares."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                <Users className="h-4 w-4" />
                Private-company information
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Shareholder Information</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Information and contact routes for existing shareholders of JA Group Services Ltd, their duly authorised representatives and professional advisers.
              </p>
              <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm leading-relaxed text-white/85">
                <p className="font-bold text-white">Important private-company notice</p>
                <p className="mt-2">
                  JA Group Services Ltd is a private company limited by shares. It is not listed on a stock exchange and this page is not an invitation, offer or recommendation to acquire shares, securities or any financial product.
                </p>
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
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Registered company details</p>
                <h2 className="mt-2 text-2xl font-bold">JA Group Services Ltd</h2>
              </div>
              <dl className="divide-y divide-white/10">
                {companyFacts.map((fact) => (
                  <div key={fact.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[130px_1fr] sm:gap-5">
                    <dt className="text-xs text-white/55 sm:text-sm">{fact.label}</dt>
                    <dd className="text-sm font-semibold text-white sm:text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.aside>
          </div>
        </section>

        <section className="border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Purpose of this page</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">A controlled information point for existing shareholders</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                This page explains how shareholder-related enquiries are handled and where public company information can be found. It does not replace the Company’s statutory registers, articles of association, formal notices or any shareholder agreement.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <InfoCard
                icon={FileCheck2}
                title="Formal communications"
                description="Formal notices, written resolutions and other shareholder communications are issued through the contact details recorded by the Company and in accordance with applicable law and governing documents."
              />
              <InfoCard
                icon={LockKeyhole}
                title="Identity and authority checks"
                description="Before account, shareholding or non-public information is discussed, the Company may verify identity, authority, contact details and the purpose of the request."
              />
              <InfoCard
                icon={Scale}
                title="Rights depend on the legal record"
                description="Rights and entitlements are determined by applicable law, the articles of association, statutory records and any binding agreement—not by general website wording."
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.article className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Shareholder enquiries we can route</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {shareholderRequests.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Information that may be restricted</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {restrictedInformation.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </section>

        <section className="border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <motion.article className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Landmark className="h-10 w-10 text-primary" />
              <h2 className="mt-5 text-3xl font-bold text-foreground">Public company information</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Statutory filings made publicly available by the registrar of companies can be viewed through the Companies House service. Public filings should be read in context and may not contain all current internal information.
              </p>
              <Button asChild className="mt-7">
                <a href="https://find-and-update.company-information.service.gov.uk/company/16314179" target="_blank" rel="noopener noreferrer">
                  View the Companies House record <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.article>

            <motion.article className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
              <Building2 className="h-10 w-10 text-primary" />
              <h2 className="mt-5 text-2xl font-bold text-foreground">No public share offering</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The Company does not use this website to solicit public investment, advertise shares for sale, publish investment returns or invite members of the public to become shareholders.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Unsolicited approaches do not create a right to information, negotiation, shares or participation in the Company.
              </p>
            </motion.article>
          </div>
        </section>

        <section className="bg-[#0A1F44] py-14 text-white sm:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Mail className="mx-auto h-10 w-10 text-blue-200" />
            <h2 className="mt-5 text-3xl font-bold">Contact the corporate office</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/75">
              Existing shareholders and authorised representatives should provide their full name, the capacity in which they are contacting the Company and enough information for the request to be verified and routed securely.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white font-bold text-[#0A1F44] hover:bg-blue-50">
                <a href="mailto:alfie@jagroupservices.co.uk?subject=Shareholder%20Enquiry">Email the corporate office</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/35 bg-white/5 font-semibold text-white hover:bg-white/10 hover:text-white">
                <Link to="/contactus">View all contact routes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function InfoCard({ icon: Icon, title, description }: { icon: typeof Users; title: string; description: string }) {
  return (
    <motion.article
      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h2 className="mt-4 text-xl font-bold text-foreground">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.article>
  );
}
