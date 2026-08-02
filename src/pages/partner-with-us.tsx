import { Helmet } from '@dr.pogodin/react-helmet';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Handshake,
  Mail,
  Network,
  Scale,
  SearchCheck,
  ShieldCheck,
  Store,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const site = 'https://jagroupservices.co.uk';
const url = `${site}/partner-with-us`;
const title = 'Partner With Us — Coming Soon | JA Group Services Ltd';
const description =
  'JA Group Services Ltd is developing a formal partnership programme for selected technology, reseller, affiliate, supplier and commercial relationships. Public applications are not yet open.';

const partnershipAreas = [
  {
    icon: Network,
    title: 'Technology and platform providers',
    description:
      'Potential integrations, infrastructure services and authorised platforms that can support or extend our digital services.',
  },
  {
    icon: Store,
    title: 'Reseller and service arrangements',
    description:
      'Structured arrangements where JA Group Services Ltd may facilitate, resell or support access to an authorised third-party service.',
  },
  {
    icon: Handshake,
    title: 'Affiliate and referral relationships',
    description:
      'Transparent referral or affiliate arrangements for relevant products, experiences or services that may benefit our users.',
  },
  {
    icon: Building2,
    title: 'Suppliers and commercial collaborations',
    description:
      'Suppliers, professional service providers and organisations that can support the Company’s operations or future service development.',
  },
] as const;

const plannedStandards = [
  {
    icon: BadgeCheck,
    title: 'Legitimate business standing',
    description:
      'Organisations will need a clear legal identity, verifiable contact information and a genuine business purpose.',
  },
  {
    icon: SearchCheck,
    title: 'Clear customer value',
    description:
      'The proposed relationship should solve a real need or add meaningful value to our platforms, services or customers.',
  },
  {
    icon: Scale,
    title: 'Lawful and responsible operation',
    description:
      'The organisation and proposed activity must comply with applicable law, regulation and relevant industry requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Security and data protection',
    description:
      'Appropriate security, privacy, data-processing and incident-management arrangements will be expected where relevant.',
  },
  {
    icon: Workflow,
    title: 'Defined responsibilities',
    description:
      'Customer support, service delivery, complaints, billing and escalation responsibilities must be clear before launch.',
  },
  {
    icon: FileCheck2,
    title: 'Written approval and agreement',
    description:
      'No partnership will be treated as approved until the required internal approval has been completed and written terms are agreed.',
  },
] as const;

const plannedProcess = [
  {
    number: '01',
    title: 'Expression of interest',
    description:
      'Once launched, organisations will provide basic information about their business and proposed relationship.',
  },
  {
    number: '02',
    title: 'Initial suitability review',
    description:
      'JA Group Services Ltd will consider relevance, customer value, business fit and any obvious conflicts or risks.',
  },
  {
    number: '03',
    title: 'Due diligence and assessment',
    description:
      'Where appropriate, legal identity, service standards, security, data protection, commercial terms and operational responsibilities will be reviewed.',
  },
  {
    number: '04',
    title: 'Approval and written terms',
    description:
      'The proposal will be referred for the required internal approval, including Board approval where the matter is reserved or material.',
  },
  {
    number: '05',
    title: 'Onboarding and ongoing review',
    description:
      'Approved relationships will be documented, introduced carefully and reviewed against the agreed standards and responsibilities.',
  },
] as const;

export default function PartnerWithUsPage() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#07152E] via-[#0A1F44] to-[#1A3FA8] py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                <Handshake className="h-4 w-4" />
                Partnership Programme
                <span className="rounded-full bg-amber-300 px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wide text-amber-950">
                  Coming Soon
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Partner with JA Group Services Ltd
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
                We are developing a formal and transparent pathway for selected technology, reseller, affiliate, supplier and commercial relationships.
              </p>

              <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur-sm sm:p-6">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-6 w-6 shrink-0 text-amber-300" />
                  <div>
                    <h2 className="font-bold text-white">Public applications are not yet open</h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                      The public partnership programme, application process and onboarding framework are still being prepared. We are not currently accepting formal applications through this website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-h-12 bg-blue-600 px-7 font-bold text-white hover:bg-blue-500">
                  <a href="#programme">
                    See What Is Planned
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white">
                  <a href="mailto:contact@jagroupservices.co.uk?subject=Future%20Partnership%20Interest">
                    <Mail className="mr-2 h-4 w-4" />
                    Register Early Interest
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Current status"
              title="What “coming soon” means"
              description="We want this page to be useful without suggesting that a programme already exists when it does not."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <StatusCard
                title="Not available yet"
                icon={Clock3}
                items={[
                  'There is no public partnership application form or partner portal at present.',
                  'Submitting an email does not create an application, approval or commercial commitment.',
                  'We cannot promise a launch date or guarantee that every proposed partnership type will be offered.',
                  'No organisation may describe itself as an approved partner without written confirmation from JA Group Services Ltd.',
                ]}
              />

              <StatusCard
                title="What continues normally"
                icon={CheckCircle2}
                items={[
                  'Existing authorised supplier, reseller, affiliate and technology arrangements continue under their existing terms.',
                  'JA Group Services Ltd may still speak directly with organisations about specific business needs or opportunities.',
                  'General supplier and corporate enquiries can still be sent through our normal contact channels.',
                  'Early expressions of interest may be recorded for future consideration when the programme is ready.',
                ]}
              />
            </div>
          </div>
        </section>

        <section id="programme" className="scroll-mt-24 border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Future opportunities"
              title="Partnership areas we expect to consider"
              description="These are indicative areas only. Final eligibility, scope and availability will be confirmed when the programme launches."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {partnershipAreas.map(({ icon: Icon, title: itemTitle, description: copy }, index) => (
                <motion.article
                  key={itemTitle}
                  className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-card-foreground">{itemTitle}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Programme development"
              title="What we are building"
              description="The aim is to create a controlled process that protects customers, the Company and prospective partners."
            />

            <div className="grid gap-5 md:grid-cols-3">
              <ProgrammeCard
                icon={Workflow}
                title="A structured entry route"
                description="A clear method for organisations to explain their proposal, provide supporting information and understand what happens next."
              />
              <ProgrammeCard
                icon={SearchCheck}
                title="Proportionate due diligence"
                description="Checks appropriate to the proposed relationship, including legal identity, business standing, security, data protection and operational risk."
              />
              <ProgrammeCard
                icon={FileCheck2}
                title="Documented accountability"
                description="Written responsibilities, commercial terms, customer-support routes, escalation arrangements and internal approval before public launch."
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Planned standards"
              title="What future partners will be expected to demonstrate"
              description="These principles will guide the final partnership framework and may be expanded or adjusted before launch."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {plannedStandards.map(({ icon: Icon, title: itemTitle, description: copy }, index) => (
                <motion.article
                  key={itemTitle}
                  className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-card-foreground">{itemTitle}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Planned journey"
              title="How the future review process is expected to work"
              description="The final process may change before launch, but no partnership will move directly from an enquiry to public promotion."
            />

            <div className="space-y-4">
              {plannedProcess.map(({ number, title: itemTitle, description: copy }, index) => (
                <motion.article
                  key={number}
                  className="grid gap-4 rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm sm:grid-cols-[auto_1fr] sm:items-start sm:p-6"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-sm font-extrabold text-primary">
                    {number}
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground">{itemTitle}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-12 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-amber-400/35 bg-card p-5 text-card-foreground shadow-sm sm:p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-amber-500" />
                <div>
                  <h2 className="font-bold text-card-foreground">Important transparency notice</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    An expression of interest is not a partnership application, offer, endorsement, appointment or agreement. It does not create exclusivity, authority to act for JA Group Services Ltd, or permission to use the Company’s brands or intellectual property. Any future relationship will remain subject to due diligence, the required internal approval and written agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-[#07152E] via-[#0A1F44] to-[#1A3FA8] py-16 sm:py-20">
          <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <Clock3 className="mx-auto mb-4 h-10 w-10 text-amber-300" />
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Register an early interest</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Organisations may send a brief note for future reference. Please include your legal business name, website, contact details and a short explanation of the proposed relationship.
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
                We may acknowledge or retain the information, but we cannot guarantee a detailed review or response before the programme launches.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-h-12 bg-blue-600 px-7 font-bold text-white hover:bg-blue-500">
                  <a href="mailto:contact@jagroupservices.co.uk?subject=Future%20Partnership%20Interest">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Early Interest
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white">
                  <Link to="/contactus">
                    General Contact Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title: heading,
  description: copy,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{heading}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{copy}</p>
    </motion.div>
  );
}

function StatusCard({
  title: heading,
  icon: Icon,
  items,
}: {
  title: string;
  icon: LucideIcon;
  items: readonly string[];
}) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-card-foreground">{heading}</h3>
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

function ProgrammeCard({
  icon: Icon,
  title: heading,
  description: copy,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <motion.article
      className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-card-foreground">{heading}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
    </motion.article>
  );
}
