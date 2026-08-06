import { Helmet } from '@dr.pogodin/react-helmet';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Clock3,
  Coins,
  FileCheck2,
  Handshake,
  Link2,
  Mail,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const url = 'https://jagroupservices.co.uk/affiliate-partners';

const plannedBenefits = [
  {
    icon: Link2,
    title: 'Trackable referrals',
    description: 'Unique links or approved referral codes designed to attribute eligible introductions and purchases accurately.',
  },
  {
    icon: Coins,
    title: 'Clear commission rules',
    description: 'Published eligibility, validation, payment and reversal rules before an affiliate begins promoting a participating service.',
  },
  {
    icon: Megaphone,
    title: 'Approved brand resources',
    description: 'Current descriptions, messages, disclosures and promotional materials that represent each Sousa Murray service accurately.',
  },
  {
    icon: BarChart3,
    title: 'Performance information',
    description: 'A planned way to view validated clicks, referrals, conversions and commission status when the programme is operational.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible promotion',
    description: 'Clear advertising, privacy, safeguarding and brand-safety standards protecting customers, affiliates and the Company.',
  },
  {
    icon: Handshake,
    title: 'Affiliate support',
    description: 'A defined route for programme questions, campaign clarification, payment enquiries and compliance support.',
  },
] as const;

const suitableApplicants = [
  'Content creators and publishers with a genuine and relevant audience',
  'Business consultants, web professionals and digital agencies',
  'Community organisations and professional networks',
  'Training, technology and small-business communities',
  'Existing customers able to make honest and appropriate referrals',
  'Other organisations whose audience may benefit from an approved Sousa Murray service',
] as const;

const plannedStandards = [
  'Be aged 18 or over and legally able to enter an affiliate agreement',
  'Provide accurate identity, payment, tax and contact information',
  'Use only approved claims, links, codes and brand materials',
  'Make affiliate advertising obviously identifiable before engagement',
  'Avoid spam, unsolicited bulk contact, misleading claims and pressure selling',
  'Protect customer information and never collect credentials on our behalf',
  'Do not bid on protected brand terms or imitate an official Company website unless expressly permitted',
  'Comply with applicable advertising, consumer, privacy and platform rules',
] as const;

const plannedJourney = [
  {
    number: '01',
    title: 'Programme launch',
    description: 'We publish the final programme scope, participating services, commission rules, eligibility and affiliate terms.',
  },
  {
    number: '02',
    title: 'Application',
    description: 'Prospective affiliates provide identity, audience, promotional-method and payment information through a secure application.',
  },
  {
    number: '03',
    title: 'Suitability review',
    description: 'We assess relevance, brand fit, compliance risk, traffic methods and any conflicts before deciding whether to approve access.',
  },
  {
    number: '04',
    title: 'Agreement and onboarding',
    description: 'Approved affiliates accept written terms and receive the applicable links, codes, disclosures and programme guidance.',
  },
  {
    number: '05',
    title: 'Promotion and validation',
    description: 'Referrals are tracked and checked for eligibility, genuine customer activity, refunds, cancellations and prohibited conduct.',
  },
  {
    number: '06',
    title: 'Commission and review',
    description: 'Validated commission is processed under the published payment timetable and the relationship remains subject to monitoring.',
  },
] as const;

export default function AffiliatePartnersPage() {
  return (
    <>
      <Helmet>
        <title>Affiliate Partner Programme — Coming Soon | JA Group Services Ltd</title>
        <meta
          name="description"
          content="JA Group Services Ltd is developing a responsible affiliate programme for approved individuals and organisations to promote participating Sousa Murray services."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Affiliate Partner Programme — Coming Soon | JA Group Services Ltd" />
        <meta
          property="og:description"
          content="Explore the planned affiliate programme, intended participants, standards and future application process."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#1A3FA8] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                <Sparkles className="h-4 w-4" />
                Affiliate Partner Programme
                <span className="rounded-full bg-amber-300 px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wide text-amber-950">Coming Soon</span>
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Help introduce people to the right Sousa Murray service
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
                We are designing a controlled affiliate programme for approved people and organisations to promote participating services honestly, responsibly and transparently.
              </p>

              <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur-sm sm:p-6">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-6 w-6 shrink-0 text-amber-300" />
                  <div>
                    <h2 className="font-bold text-white">The affiliate programme is not live yet</h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                      Applications, affiliate links, commission rates and payment arrangements have not launched. Registering early interest does not create an application, approval, entitlement to commission or authority to promote yourself as an affiliate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-[#0A1F44] hover:bg-blue-50">
                  <a href="#programme">
                    Explore the planned programme
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white">
                  <a href="mailto:contact@jagroupservices.co.uk?subject=Affiliate%20Partner%20Programme%20-%20Early%20Interest">
                    <Mail className="mr-2 h-4 w-4" />
                    Register early interest
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="programme" className="scroll-mt-24 border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Programme vision"
              title="A professional affiliate programme built around trust"
              description="The programme is intended to grow awareness of participating services without sacrificing transparency, customer protection or brand standards."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {plannedBenefits.map(({ icon: Icon, title, description }, index) => (
                <FeatureCard key={title} icon={Icon} title={title} description={description} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.article
              className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Who the programme may suit</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Final eligibility will be published at launch. We currently expect to consider applications from people and organisations with a genuine, appropriate route to relevant audiences.
              </p>
              <ul className="mt-6 space-y-3">
                {suitableApplicants.map((item) => (
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
                <BadgeCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground">Planned minimum standards</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Approval will not be automatic. Affiliates will be expected to protect customers and represent JA Group Services Ltd and the Sousa Murray services accurately.
              </p>
              <ul className="mt-6 space-y-3">
                {plannedStandards.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </section>

        <section className="border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Planned application journey"
              title="How the programme is expected to work"
              description="The final process and commercial terms may change before launch, but no affiliate relationship will exist without approval and written terms."
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
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-sm font-extrabold text-primary">{number}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0A1F44] py-14 text-white sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">Responsible advertising</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Affiliate promotion must be clear that it is advertising</h2>
              <p className="mt-5 leading-relaxed text-white/75">
                Affiliates and the Company may both carry responsibility for affiliate marketing. Promotional content will need clear, prominent advertising disclosure before people engage with it, together with accurate claims and fair presentation.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-start gap-3">
                <FileCheck2 className="mt-0.5 h-6 w-6 shrink-0 text-blue-200" />
                <div>
                  <h3 className="text-xl font-bold">No unofficial promotion or commission promises</h3>
                  <p className="mt-3 leading-relaxed text-white/75">
                    Until launch, nobody is authorised to issue affiliate links, promise commission, recruit sub-affiliates, use an affiliate badge or describe themselves as a JA Group Services or Sousa Murray affiliate partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-xl sm:p-10">
              <Handshake className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-5 text-3xl font-bold text-foreground">Interested in the future programme?</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                You may register non-binding early interest. We will not treat it as an application, and we cannot guarantee launch timing, eligibility, approval or commission terms.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="mailto:contact@jagroupservices.co.uk?subject=Affiliate%20Partner%20Programme%20-%20Early%20Interest">
                    Register early interest
                    <Mail className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/partner-with-us">Other partnership opportunities</Link>
                </Button>
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
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, description, index }: { icon: LucideIcon; title: string; description: string; index: number }) {
  return (
    <motion.article
      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.article>
  );
}
