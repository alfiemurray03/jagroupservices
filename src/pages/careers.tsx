import { Helmet } from '@dr.pogodin/react-helmet';
import type { LucideIcon } from 'lucide-react';
import {
  Accessibility,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  FileSearch,
  HeartHandshake,
  Laptop,
  Mail,
  Megaphone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const pageUrl = 'https://jagroupservices.co.uk/careers';

const futureAreas = [
  {
    icon: Laptop,
    title: 'Technology and digital delivery',
    description:
      'Future opportunities may support website development, digital platforms, technical operations, integrations, testing, security and service improvement.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer and learner support',
    description:
      'Roles may arise supporting customers, learners, accounts, service enquiries, complaints handling and appropriate provider escalation.',
  },
  {
    icon: Building2,
    title: 'Corporate and business operations',
    description:
      'As the Company develops, future needs may include administration, finance support, governance, supplier management, compliance and operational coordination.',
  },
  {
    icon: Megaphone,
    title: 'Brand, communications and growth',
    description:
      'Potential future work may include corporate communications, content, responsible marketing, partnerships, affiliate operations and brand administration.',
  },
] as const;

const recruitmentPrinciples = [
  {
    icon: BadgeCheck,
    title: 'Fair and role-based selection',
    description:
      'Applications will be considered against the published requirements of the role, using a proportionate and documented selection process.',
  },
  {
    icon: Accessibility,
    title: 'Accessible recruitment',
    description:
      'We intend to provide reasonable adjustments and accessible alternatives throughout recruitment wherever they are required and reasonably practicable.',
  },
  {
    icon: Users,
    title: 'Equality and respect',
    description:
      'We are committed to treating applicants with dignity and will not unlawfully discriminate during recruitment or employment.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe and responsible appointments',
    description:
      'Identity, right-to-work, reference, safeguarding or other checks may apply where they are lawful, necessary and relevant to the position.',
  },
] as const;

const plannedJourney = [
  {
    number: '01',
    title: 'A vacancy is formally approved',
    description:
      'The Company confirms the business need, reporting line, employment status, budget, responsibilities and authority to recruit before advertising a role.',
  },
  {
    number: '02',
    title: 'The role is published',
    description:
      'The vacancy page will state the duties, essential and desirable criteria, location or working arrangement, pay information where applicable, closing date and application method.',
  },
  {
    number: '03',
    title: 'Applications are reviewed',
    description:
      'Applications will be assessed against the published criteria. We may use a shortlist, structured questions, practical exercises or interviews where proportionate to the role.',
  },
  {
    number: '04',
    title: 'Checks and conditional offer',
    description:
      'A successful applicant may receive a conditional offer subject to relevant identity, right-to-work, reference, qualification, safeguarding or background checks.',
  },
  {
    number: '05',
    title: 'Appointment and onboarding',
    description:
      'Once conditions are satisfied, appointment documents, policies, system access, induction, role objectives and any probation arrangements will be confirmed.',
  },
] as const;

const applicantGuidance = [
  'Apply only through the method stated in the official vacancy notice.',
  'Read the job description and person specification before submitting an application.',
  'Explain clearly how your experience, skills or potential meet the published criteria.',
  'Tell us promptly if you require a reasonable adjustment for any stage of recruitment.',
  'Do not send passports, bank details or other high-risk identity documents unless formally requested through an approved secure process.',
  'Keep copies of the vacancy notice and any correspondence for your records.',
] as const;

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
}

function PrincipleCard({ icon: Icon, title, description, index }: { icon: LucideIcon; title: string; description: string; index: number }) {
  return (
    <motion.article
      className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.38, delay: index * 0.05 }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mt-4 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.article>
  );
}

export default function CareersPage() {
  return (
    <>
      <Helmet>
        <title>Careers and Vacancies — Coming Soon | JA Group Services Ltd</title>
        <meta
          name="description"
          content="The official careers and vacancies page for JA Group Services Ltd. There are currently no vacancies available. Learn about our planned recruitment approach and future opportunities."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Careers and Vacancies — Coming Soon | JA Group Services Ltd" />
        <meta
          property="og:description"
          content="There are currently no vacancies at JA Group Services Ltd. Explore our future recruitment approach, principles and applicant guidance."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <BriefcaseBusiness className="h-4 w-4" />
                Careers at JA Group Services Ltd
                <span className="rounded-full bg-amber-300 px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wide text-amber-950">
                  Coming Soon
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Careers and Vacancies
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
                We are building the corporate careers centre for future opportunities across JA Group Services Ltd and the Sousa Murray brand family.
              </p>

              <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-6 text-left shadow-xl backdrop-blur-sm sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-300 text-amber-950">
                    <CalendarClock className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">There are currently no vacancies available</h2>
                    <p className="mt-2 leading-relaxed text-white/75">
                      JA Group Services Ltd is not presently advertising or accepting applications for any employed, worker, internship, apprenticeship or contractor vacancy. Any future vacancy will be published formally on this page with a closing date and approved application method.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-[#0A1F44] hover:bg-blue-50">
                  <a href="#future-opportunities">
                    Explore future opportunities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-h-12 !border-white/60 !bg-transparent px-7 font-semibold !text-white hover:!bg-white/15 hover:!text-white"
                >
                  <Link to="/announcements">Company announcements</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-amber-500/30 bg-amber-500/10 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:text-amber-300">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Please do not send speculative applications</h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    We are not currently operating a talent pool and cannot promise to retain or consider unsolicited CVs, portfolios or application documents for future roles. Please wait until an official vacancy is published and follow the application instructions shown in that notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="future-opportunities" className="scroll-mt-24 border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Future opportunities"
              title="Where opportunities may develop"
              description="The areas below describe possible future capability needs only. They are not current vacancies, commitments to recruit or invitations to apply."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {futureAreas.map(({ icon, title, description }, index) => (
                <PrincipleCard key={title} icon={icon} title={title} description={description} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our recruitment commitments"
              title="A professional, fair and accessible process"
              description="Before recruitment opens, we intend to establish clear responsibilities and controls so applicants know what to expect and decisions can be made consistently."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {recruitmentPrinciples.map(({ icon, title, description }, index) => (
                <PrincipleCard key={title} icon={icon} title={title} description={description} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Planned recruitment journey"
              title="How future vacancies are expected to be managed"
              description="The exact process may vary by role, but vacancies will not be treated as live until they have been formally approved and published by JA Group Services Ltd."
            />

            <div className="space-y-4">
              {plannedJourney.map(({ number, title, description }, index) => (
                <motion.article
                  key={number}
                  className="grid gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:grid-cols-[auto_1fr] sm:p-6"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-sm font-extrabold text-primary">
                    {number}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.article
              className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <SearchCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Guidance for future applicants</h2>
              <ul className="mt-6 space-y-3">
                {applicantGuidance.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <FileSearch className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Recruitment privacy</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  When recruitment opens, applicant information will be collected for recruitment, selection, pre-employment checks and related administration. The vacancy or application process will explain the relevant purposes, lawful bases, recipients and retention arrangements.
                </p>
                <p>
                  Special category or criminal-offence information will only be requested where there is a lawful and proportionate reason. Applicants will be directed to a recruitment privacy notice before submitting personal data.
                </p>
              </div>
              <Link to="/privacy-policy" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Read the corporate Privacy Policy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#071a38] py-14 text-white sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">Recruitment safety</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Check that a vacancy is genuinely ours</h2>
              <p className="mt-5 leading-relaxed text-white/75">
                Official vacancies will be published on this website and will identify JA Group Services Ltd as the recruiting organisation. Be cautious of messages using unofficial domains, personal payment accounts or pressure to act immediately.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-blue-200" />
                <div>
                  <h3 className="text-xl font-bold text-white">We will not charge an application or recruitment fee</h3>
                  <p className="mt-3 leading-relaxed text-white/75">
                    We will not ask an applicant to pay for an interview, job offer, right-to-work check or ordinary recruitment processing. We will not require money to be transferred through cryptocurrency, gift cards or a personal bank account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-xl sm:p-10">
              <Sparkles className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-5 text-3xl font-bold text-foreground">No vacancies today — but this is where they will appear</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Please return to this page or review our official announcements for Company developments. We are not currently accepting applications or operating a vacancy-alert mailing list.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild>
                  <Link to="/announcements">
                    View announcements
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/about-us">Learn about the Company</Link>
                </Button>
              </div>
              <p className="mt-7 text-xs leading-relaxed text-muted-foreground">
                Recruitment accessibility enquiries may be sent to{' '}
                <a href="mailto:contact@jagroupservices.co.uk?subject=Recruitment%20Accessibility%20Enquiry" className="font-semibold text-primary hover:underline">
                  contact@jagroupservices.co.uk
                </a>. This address is not currently accepting speculative applications.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
