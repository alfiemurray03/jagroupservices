import { Helmet } from '@dr.pogodin/react-helmet';
import {
  ArrowDown,
  Building2,
  CheckCircle2,
  ExternalLink,
  FileText,
  Network,
  Shield,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const parentCompanyFacts = [
  {
    icon: Building2,
    title: 'Parent company',
    description: 'JSDS Group Ltd is the parent company of JA Group Services Ltd.',
  },
  {
    icon: Shield,
    title: 'Majority shareholder and PSC',
    description: 'Companies House records ownership of 75% or more of the shares and voting rights.',
  },
  {
    icon: FileText,
    title: 'Corporate Director',
    description: 'JSDS Group Ltd is appointed as an active corporate director of JA Group Services Ltd.',
  },
] as const;

const operatingCompanyFacts = [
  {
    icon: Network,
    title: 'Operating company',
    description: 'JA Group Services Ltd develops, operates and manages digital platforms and customer services.',
  },
  {
    icon: Users,
    title: 'Customer and commercial operations',
    description: 'The Company manages its platforms, operating brands, partnerships and central support functions.',
  },
  {
    icon: TrendingUp,
    title: 'Day-to-day management',
    description: 'Executive management is exercised by the Chief Executive Officer, subject to Board oversight.',
  },
] as const;

const governanceFacts = [
  {
    title: 'Board of Directors',
    description:
      'The active directors are Mr Alfie Thomas Holywood Murray and JSDS Group Ltd. The Board acts collectively on governance, strategy and reserved company matters.',
  },
  {
    title: 'Corporate Director representation',
    description:
      'JSDS Group Ltd acts through its authorised representative in Board matters. Mr Jack Nicolau Sousa Da Silva acts through JSDS Group Ltd in that capacity and is not a current individual director of JA Group Services Ltd.',
  },
  {
    title: 'Executive management',
    description:
      'Mr Alfie Thomas Holywood Murray is the Chief Executive Officer and Director responsible for day-to-day management, operational oversight and implementing Board decisions.',
  },
] as const;

export default function OurGroupStructurePage() {
  return (
    <>
      <Helmet>
        <title>Our Group Structure — JA Group Services Ltd</title>
        <meta
          name="description"
          content="Verified information about the relationship between JSDS Group Ltd and JA Group Services Ltd, including ownership, directors and operating responsibilities."
        />
        <link rel="canonical" href="https://jagroupservices.co.uk/our-group-structure" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#07152E] via-[#0A1F44] to-[#1A3FA8] py-14 sm:py-18 lg:py-22">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-300/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                Corporate structure
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Group Structure
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Clear information about the ownership, governance and operating relationship between JSDS Group Ltd and JA Group Services Ltd.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mx-auto mb-10 max-w-3xl text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Current legal relationship</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Two separate companies with defined roles</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground sm:text-lg">
                JSDS Group Ltd is the parent company and majority shareholder. JA Group Services Ltd is a separate legal entity and the operating company responsible for its own business activities and obligations.
              </p>
            </motion.div>

            <div className="space-y-6">
              <CompanyCard
                eyebrow="Parent company"
                name="JSDS Group Ltd"
                companyNumber="16687934"
                description="An active private limited holding company incorporated in England and Wales. It provides parent-company oversight and participates in the governance of JA Group Services Ltd as its majority shareholder and Corporate Director."
                facts={parentCompanyFacts}
                companiesHouseUrl="https://find-and-update.company-information.service.gov.uk/company/16687934"
              />

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="h-8 w-px bg-primary/60" />
                  <div className="flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    <ArrowDown className="h-4 w-4" />
                    Majority-owned subsidiary and corporate-director relationship
                  </div>
                  <div className="h-8 w-px bg-primary/60" />
                </div>
              </div>

              <CompanyCard
                eyebrow="Operating company"
                name="JA Group Services Ltd"
                companyNumber="16314179"
                description="An active private limited company incorporated in England and Wales. It develops, operates and manages digital platforms and customer services, combining its own technology, central support functions and selected partner services."
                facts={operatingCompanyFacts}
                companiesHouseUrl="https://find-and-update.company-information.service.gov.uk/company/16314179"
                highlighted
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/40 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-9 max-w-3xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Governance</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">How authority is exercised</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground sm:text-lg">
                Ownership, Board authority and executive management are related but distinct. This section explains who acts in each capacity.
              </p>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-3">
              {governanceFacts.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                  className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <motion.article
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">Shareholder and parent-company control</h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <FactLine text="JSDS Group Ltd is the active person with significant control of JA Group Services Ltd." />
                  <FactLine text="Companies House records ownership of 75% or more of the shares and voting rights." />
                  <FactLine text="JSDS Group Ltd has the right to appoint or remove directors." />
                  <FactLine text="The relationship is therefore majority ownership, not a statement that JA Group Services Ltd is wholly owned." />
                </ul>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">Operating-company responsibility</h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <FactLine text="JA Group Services Ltd remains a separate legal entity with its own rights, duties, contracts and liabilities." />
                  <FactLine text="The Board retains authority over governance, strategy, statutory matters and reserved decisions." />
                  <FactLine text="The Chief Executive Officer manages day-to-day operations subject to Board oversight." />
                  <FactLine text="The Company manages customer services, digital platforms, commercial relationships and central operational functions." />
                </ul>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm sm:p-8"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground sm:text-3xl">Verified corporate information</h2>
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                The statutory company details on this page were checked against the Companies House register on 2 August 2026. Governance responsibilities are presented consistently with the Company’s Corporate Governance Charter 2026. Statutory public filings take precedence where applicable.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-h-12 bg-[#1A3FA8] px-6 font-bold text-white hover:bg-[#153588]">
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/16314179"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View JA Group Services Ltd
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-12 px-6 font-semibold">
                  <Link to="/about-us">About the Company</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

function CompanyCard({
  eyebrow,
  name,
  companyNumber,
  description,
  facts,
  companiesHouseUrl,
  highlighted = false,
}: {
  eyebrow: string;
  name: string;
  companyNumber: string;
  description: string;
  facts: readonly { icon: LucideIcon; title: string; description: string }[];
  companiesHouseUrl: string;
  highlighted?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Card
        className={`overflow-hidden bg-card text-card-foreground shadow-sm ${
          highlighted ? 'border-primary/40 shadow-md' : 'border-border'
        }`}
      >
        <CardHeader className="border-b border-border p-6 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${highlighted ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                {highlighted ? <Network className="h-6 w-6" /> : <Building2 className="h-6 w-6" />}
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">{eyebrow}</p>
                <CardTitle className="mt-1 text-2xl font-bold text-card-foreground sm:text-3xl">{name}</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">Company number {companyNumber}</p>
              </div>
            </div>
            <a
              href={companiesHouseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-lg border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Companies House
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </CardHeader>
        <CardContent className="p-6 sm:p-7">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">{description}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {facts.map(({ icon: Icon, title, description: factDescription }) => (
              <div key={title} className="rounded-2xl border border-border bg-muted/30 p-4">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-bold text-card-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{factDescription}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function FactLine({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <span>{text}</span>
    </li>
  );
}
