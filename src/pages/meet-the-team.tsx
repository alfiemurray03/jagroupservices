import { Helmet } from '@dr.pogodin/react-helmet';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Compass,
  Mail,
  Network,
  Phone,
  Scale,
  ShieldCheck,
  UsersRound,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { teamMembers } from '@/data/team-members';

const site = 'https://jagroupservices.co.uk';
const url = `${site}/meet-the-team`;

const leadershipPrinciples: readonly {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Compass,
    title: 'Strategic direction',
    description:
      'Group and Board leadership establishes the wider direction, priorities and long-term development of the organisation.',
  },
  {
    icon: Workflow,
    title: 'Operational accountability',
    description:
      'Executive leadership turns agreed direction into managed services, structured operations and accountable day-to-day delivery.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance and protection',
    description:
      'Corporate governance, Board oversight and data protection responsibilities remain clearly identified and documented.',
  },
];

const leadershipFlow = [
  {
    number: '01',
    title: 'Group direction',
    description: 'JSDS Group Ltd provides group-level leadership and acts as the corporate director of JA Group Services Ltd.',
  },
  {
    number: '02',
    title: 'Board oversight',
    description: 'The Board and shareholders receive structured leadership, chairmanship and governance oversight.',
  },
  {
    number: '03',
    title: 'Company delivery',
    description: 'JA Group Services Ltd is managed through executive leadership, operational accountability and data protection oversight.',
  },
] as const;

export default function MeetTheTeamPage() {
  return (
    <>
      <Helmet>
        <title>Meet the Team | JA Group Services Ltd</title>
        <meta
          name="description"
          content="Meet the leadership team responsible for group direction, Board oversight, executive management and data protection at JA Group Services Ltd."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Meet the Team | JA Group Services Ltd" />
        <meta
          property="og:description"
          content="Meet the people responsible for leadership, governance and operational accountability across JA Group Services Ltd."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#071a38] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <UsersRound className="h-4 w-4" />
                Leadership, governance and accountability
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Meet the people leading JA Group Services
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Our leadership structure brings together group direction, Board oversight, executive management and data protection accountability under clearly defined responsibilities.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-h-12 bg-white text-[#0A1F44] hover:bg-white/90">
                  <a href="#leadership-profiles">
                    Meet our leadership
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link to="/our-group-structure">View our group structure</Link>
                </Button>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Network className="h-5 w-5 text-blue-200" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Leadership at a glance</p>
                  <h2 className="text-xl font-bold text-white">A connected leadership structure</h2>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <LeadershipStat value="2" label="Leadership profiles" />
                <LeadershipStat value="2" label="Connected companies" />
                <LeadershipStat value="4" label="Core leadership functions" />
                <LeadershipStat value="Direct" label="Published contact access" />
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="flex items-start gap-3 text-sm leading-relaxed text-white/75">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" />
                  Roles are presented separately so visitors can see who is responsible for group leadership, corporate direction, Board oversight, company management and data protection.
                </p>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">How we lead</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Clear roles. Connected decisions.</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Leadership responsibilities are divided clearly while remaining connected through the Company’s governance and operating structure.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {leadershipPrinciples.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership-profiles" className="scroll-mt-28 border-b border-border bg-background py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Leadership profiles</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">The people behind the responsibilities</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Explore each profile to understand the person’s formal appointments, leadership remit and direct contact details.
              </p>
            </div>

            <div className="grid gap-7 lg:grid-cols-2">
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.slug}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[2rem] border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#071a38] via-[#12366f] to-[#2563EB] p-7 text-white sm:p-8">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-white/5" />

                    <div className="relative flex items-start justify-between gap-5">
                      <div>
                        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-100">
                          {member.leadershipLabel}
                        </span>
                        <h3 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">{member.name}</h3>
                        <p className="mt-2 text-sm font-medium text-blue-100">{member.roles[0]}</p>
                      </div>

                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-2xl font-extrabold tracking-tight text-white shadow-lg backdrop-blur-sm sm:h-24 sm:w-24 sm:text-3xl">
                        {member.monogram}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-4">
                      <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Organisations</p>
                        <p className="mt-1 text-sm font-semibold text-foreground">{member.company}</p>
                      </div>
                    </div>

                    <p className="mt-6 leading-relaxed text-muted-foreground">{member.profile[0]}</p>

                    <div className="mt-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Leadership remit</p>
                      <ul className="space-y-2.5">
                        {member.areas.map((area) => (
                          <li key={area} className="flex items-start gap-2.5 text-sm text-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
                      <a
                        href={`tel:${member.phoneHref}`}
                        className="flex min-h-11 items-center gap-3 rounded-xl bg-muted/50 px-4 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                      >
                        <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                        {member.phone}
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex min-h-11 items-center gap-3 rounded-xl bg-muted/50 px-4 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                      >
                        <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <span className="min-w-0 truncate">{member.email}</span>
                      </a>
                    </div>

                    <Button asChild className="mt-6 min-h-11 w-full">
                      <Link to={`/team/${member.slug}`}>
                        View {member.firstName}&apos;s full profile
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Leadership structure</p>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">How leadership connects</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  The structure separates group, Board and executive responsibilities while creating a clear route from strategic direction to operational delivery.
                </p>
                <Button asChild variant="outline" className="mt-7 min-h-11 border-primary text-primary hover:bg-primary/10">
                  <Link to="/our-group-structure">
                    Explore the full structure
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {leadershipFlow.map((step, index) => (
                  <motion.article
                    key={step.number}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="flex gap-4 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0A1F44] text-sm font-bold text-white">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0A1F44] px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact our leadership team</h2>
                <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/75">
                  Use the published contact details on each profile for matters that should be directed to Jack or Alfie personally. General customer and service enquiries should continue through our Contact Us page.
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button asChild size="lg" className="min-h-12 bg-white text-[#0A1F44] hover:bg-white/90">
                    <Link to="/contactus">Contact JA Group Services</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                    <a href="mailto:contact@jagroupservices.co.uk">Email our central team</a>
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

function LeadershipStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-2xl font-extrabold text-white">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/55">{label}</p>
    </div>
  );
}
