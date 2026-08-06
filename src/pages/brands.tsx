import { Helmet } from '@dr.pogodin/react-helmet';
import {
  ArrowRight,
  Building2,
  Compass,
  ExternalLink,
  Globe2,
  GraduationCap,
  Network,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { BRAND_SITES } from '@/lib/brand-sites';

const site = 'https://jagroupservices.co.uk';
const url = `${site}/about-our-divisions`;

type WebsiteCard = {
  name: string;
  host: string;
  url: string;
  description: string;
  icon: LucideIcon;
  services: readonly string[];
  accent: string;
  nestedService?: {
    name: string;
    url: string;
    description: string;
  };
};

const websites: readonly WebsiteCard[] = [
  {
    name: BRAND_SITES.domains.name,
    host: BRAND_SITES.domains.host,
    url: BRAND_SITES.domains.url,
    description: BRAND_SITES.domains.description,
    icon: Globe2,
    accent: 'from-blue-500/15 to-cyan-500/10',
    services: [
      'Domain registration, renewal and transfer support',
      'Authorised reseller products and services',
      'Hosting, security and related digital services',
      'Digital identity and domain-management support',
    ],
    nestedService: {
      name: BRAND_SITES.sites.name,
      url: BRAND_SITES.sites.url,
      description:
        'Sousa Murray Sites is the Managed Website Services area within the Sousa Murray Domains website. It does not use a separate public subdomain.',
    },
  },
  {
    name: BRAND_SITES.planeia.name,
    host: BRAND_SITES.planeia.host,
    url: BRAND_SITES.planeia.url,
    description: BRAND_SITES.planeia.description,
    icon: Compass,
    accent: 'from-violet-500/15 to-fuchsia-500/10',
    services: [
      'Trip, day-out and occasion planning',
      'Budgets, checklists and preparation information',
      'Accessibility and emergency planning tools',
      'Read-only and collaborative plan sharing',
    ],
  },
  {
    name: BRAND_SITES.profiles.name,
    host: BRAND_SITES.profiles.host,
    url: BRAND_SITES.profiles.url,
    description: BRAND_SITES.profiles.description,
    icon: Users,
    accent: 'from-sky-500/15 to-blue-500/10',
    services: [
      'Personal, professional and business profiles',
      'Digital contact and link sharing',
      'QR-code profile access',
      'Organisation and profile administration tools',
    ],
  },
  {
    name: BRAND_SITES.elearning.name,
    host: BRAND_SITES.elearning.host,
    url: BRAND_SITES.elearning.url,
    description: BRAND_SITES.elearning.description,
    icon: GraduationCap,
    accent: 'from-emerald-500/15 to-teal-500/10',
    services: [
      'Authorised third-party e-learning courses',
      'Highfield e-learning reseller services',
      'Learner enrolment and access administration',
      'Course information and first-line learner support',
    ],
  },
];

const operatingPrinciples = [
  {
    icon: Building2,
    title: 'One legal operating company',
    description:
      'JA Group Services Ltd is the contracting entity, payment recipient and organisation responsible for the approved Sousa Murray services.',
  },
  {
    icon: Globe2,
    title: 'Four website destinations',
    description:
      'The approved public map uses four Sousa Murray subdomains. Managed Website Services sits inside the Domains website rather than on a fifth subdomain.',
  },
  {
    icon: ShieldCheck,
    title: 'Central accountability',
    description:
      'Corporate governance, privacy, complaints, safeguarding and customer operations remain centrally accountable through JA Group Services Ltd.',
  },
] as const;

export default function BrandsPage() {
  return (
    <>
      <Helmet>
        <title>Sousa Murray Brands and Websites | JA Group Services Ltd</title>
        <meta
          name="description"
          content="The approved Sousa Murray brand and subdomain map operated by JA Group Services Ltd, including Sousa Murray Sites within Sousa Murray Domains."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Sousa Murray Brands and Websites | JA Group Services Ltd" />
        <meta
          property="og:description"
          content="Five customer-facing service brands delivered through four approved Sousa Murray website destinations."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#071a38] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                <Globe2 className="h-4 w-4" />
                Approved corporate website map
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Sousa Murray Brands</h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Sousa Murray is the master brand of JA Group Services Ltd. There are five customer-facing service brands delivered through four approved website destinations.
              </p>
              <div className="mt-7 inline-flex rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90">
                Sousa Murray Sites is part of the Sousa Murray Domains website.
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {operatingPrinciples.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Website destinations</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Use the links below to reach each approved customer-facing website and service area.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {websites.map((website, index) => {
                const Icon = website.icon;
                return (
                  <motion.article
                    key={website.name}
                    className={`overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${website.accent} p-[1px] shadow-sm`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="h-full rounded-[calc(1.5rem-1px)] bg-card p-6 text-card-foreground sm:p-8">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">{website.name}</h3>
                            <p className="mt-1 break-all font-mono text-xs text-primary">{website.host}</p>
                          </div>
                        </div>
                        <a
                          href={website.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          Visit website <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>

                      <p className="mt-5 leading-relaxed text-muted-foreground">{website.description}</p>
                      <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                        {website.services.map((service) => (
                          <li key={service} className="flex items-start gap-2">
                            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>

                      {website.nestedService && (
                        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                              <Network className="h-5 w-5 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                  <h4 className="font-bold text-foreground">{website.nestedService.name}</h4>
                                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{website.nestedService.description}</p>
                                </div>
                                <a
                                  href={website.nestedService.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
                                >
                                  Managed Websites <ExternalLink className="h-4 w-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-14 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-foreground">One company behind every service</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              JA Group Services Ltd remains responsible for corporate governance, central customer operations, complaints and data protection unless a service-specific notice expressly explains a third-party provider’s role.
            </p>
            <Button asChild className="mt-7">
              <Link to="/customer-support">Open Customer Support</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
