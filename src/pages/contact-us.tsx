import { Helmet } from '@dr.pogodin/react-helmet';
import {
  AlertCircle,
  ArrowRight,
  Building2,
  Clock,
  ExternalLink,
  FileText,
  Headphones,
  Landmark,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const pageUrl = 'https://jagroupservices.co.uk/contactus';

interface ContactRoute {
  icon: LucideIcon;
  title: string;
  description: string;
  email?: string;
  subject?: string;
  href?: string;
  linkLabel?: string;
}

const contactRoutes: readonly ContactRoute[] = [
  {
    icon: MessageSquare,
    title: 'General enquiries',
    description: 'Company information, help finding the right service, website feedback and enquiries that do not fit another route.',
    email: 'contact@jagroupservices.co.uk',
    subject: 'General Enquiry',
  },
  {
    icon: Headphones,
    title: 'Customers and service support',
    description: 'Questions about an account, order, subscription, payment, website service, learner enrolment or an existing support case.',
    href: '/customer-support',
    linkLabel: 'Open Customer Support',
  },
  {
    icon: Building2,
    title: 'Corporate and governance enquiries',
    description: 'Formal corporate correspondence, governance matters, professional advisers, authorised business enquiries and media requests.',
    email: 'alfie@jagroupservices.co.uk',
    subject: 'Corporate Enquiry',
  },
  {
    icon: Users,
    title: 'Shareholder enquiries',
    description: 'For existing shareholders, authorised representatives and professional advisers. Identity and authority checks may be required.',
    href: '/shareholder-information',
    linkLabel: 'Open Shareholder Information',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy and data protection',
    description: 'Data-subject rights, privacy questions and correspondence for the Data Protection Officer. Mark the email clearly for the attention of the DPO.',
    email: 'contact@jagroupservices.co.uk',
    subject: 'For the Attention of the Data Protection Officer',
  },
  {
    icon: AlertCircle,
    title: 'Complaints and refunds',
    description: 'Formal complaints, service dissatisfaction and refund requests should follow the published complaints and refunds process.',
    href: '/complaints-policy',
    linkLabel: 'Read Complaints & Refunds',
  },
  {
    icon: ShieldCheck,
    title: 'Security concerns',
    description: 'Report suspected vulnerabilities, account compromise, fraud or other security concerns through the controlled security route.',
    href: '/security',
    linkLabel: 'Open Security Information',
  },
  {
    icon: Landmark,
    title: 'Suppliers and partnerships',
    description: 'Introductions from technology providers, professional advisers, suppliers and potential commercial partners.',
    href: '/partner-with-us',
    linkLabel: 'Partners and Suppliers',
  },
] as const;

const emailGuidance = [
  'State your full name and, where relevant, the organisation you represent.',
  'Include the relevant Sousa Murray brand, service, order number, account reference or support-case reference.',
  'Explain the outcome or assistance you are seeking.',
  'Do not send passwords, one-time codes, full payment-card details or unnecessary special-category personal data.',
] as const;

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title>Contact JA Group Services Ltd</title>
        <meta
          name="description"
          content="Contact JA Group Services Ltd for general, customer, corporate, shareholder, privacy, complaints, security, supplier and partnership enquiries."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Contact JA Group Services Ltd" />
        <meta
          property="og:description"
          content="Telephone, email, registered-office and dedicated enquiry routes for JA Group Services Ltd."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#07152E] via-[#0A1F44] to-[#1A3FA8] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold">
                <MessageSquare className="h-4 w-4" />
                Corporate contact centre
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Contact Us</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Contact JA Group Services Ltd through the route that best matches your enquiry. Clear routing helps us protect information, identify the right service and respond appropriately.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white font-bold text-[#0A1F44] hover:bg-blue-50">
                  <a href="mailto:contact@jagroupservices.co.uk?subject=General%20Enquiry">Email general enquiries</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-white/5 font-semibold text-white hover:bg-white/10 hover:text-white">
                  <a href="tel:02038342790"><Phone className="mr-2 h-4 w-4" />020 3834 2790</a>
                </Button>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md"
              aria-label="Main contact details"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Main contact details</p>
              <div className="mt-5 space-y-4">
                <QuickContact icon={Phone} label="Main switchboard" value="020 3834 2790" href="tel:02038342790" />
                <QuickContact icon={Mail} label="General enquiries" value="contact@jagroupservices.co.uk" href="mailto:contact@jagroupservices.co.uk" />
                <QuickContact icon={Mail} label="Corporate office" value="alfie@jagroupservices.co.uk" href="mailto:alfie@jagroupservices.co.uk" />
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" />
                    <div>
                      <p className="text-xs text-white/60">Published office hours</p>
                      <p className="mt-1 font-semibold">Monday to Friday, 09:00–17:00 UK time</p>
                      <p className="mt-1 text-xs leading-relaxed text-white/65">Excluding public holidays. Service and emergency response times may differ.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Enquiry directory</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Choose the right contact route</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Using the correct route helps your enquiry reach the responsible team and reduces the need to repeat personal or commercial information.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {contactRoutes.map((route, index) => (
                <ContactRouteCard key={route.title} route={route} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <motion.article className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Mail className="h-10 w-10 text-primary" />
              <h2 className="mt-5 text-3xl font-bold text-foreground">What to include in an email</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Give us enough information to understand and route your enquiry, but avoid sending sensitive information that is not necessary at the first-contact stage.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {emailGuidance.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
              <div className="border-b border-border bg-muted/40 p-6 sm:p-8">
                <MapPin className="h-10 w-10 text-primary" />
                <h2 className="mt-5 text-3xl font-bold text-foreground">Registered office and postal correspondence</h2>
              </div>
              <div className="p-6 sm:p-8">
                <address className="not-italic leading-relaxed text-foreground">
                  <strong>JA Group Services Ltd</strong><br />
                  167–169 Great Portland Street<br />
                  5th Floor<br />
                  London<br />
                  W1W 5PF<br />
                  United Kingdom
                </address>
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/25 dark:text-amber-100">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <h3 className="font-bold">Registered office—not a public walk-in reception</h3>
                      <p className="mt-2 text-sm leading-relaxed">
                        Please do not attend without a confirmed appointment. The registered office is the Company’s statutory and formal correspondence address and may not be staffed for unscheduled visitors or customer support.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Clearly mark formal correspondence with the intended department or office. Allow sufficient time for post to be received, processed and routed.
                </p>
              </div>
            </motion.article>
          </div>
        </section>

        <section className="border-b border-border py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <CompanyFact icon={Building2} title="Legal name" value="JA Group Services Ltd" />
              <CompanyFact
                icon={FileText}
                title="Company number"
                value="16314179"
                href="https://find-and-update.company-information.service.gov.uk/company/16314179"
              />
              <CompanyFact
                icon={ShieldCheck}
                title="ICO registration"
                value="ZB877370"
                href="https://ico.org.uk/ESDWebPages/Entry/ZB877370"
              />
              <CompanyFact icon={Scale} title="Company type" value="Private company limited by shares" />
            </div>
          </div>
        </section>

        <section className="bg-[#0A1F44] py-14 text-white sm:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Headphones className="mx-auto h-10 w-10 text-blue-200" />
            <h2 className="mt-5 text-3xl font-bold">Already a customer?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/75">
              Use the Customer Support Centre for account, billing, service, learner, complaint and technical-support routes before sending a general corporate enquiry.
            </p>
            <Button asChild size="lg" className="mt-7 bg-white font-bold text-[#0A1F44] hover:bg-blue-50">
              <Link to="/customer-support">Open Customer Support</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}

function QuickContact({ icon: Icon, label, value, href }: { icon: LucideIcon; label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 transition-colors hover:bg-white/15">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-white/60">{label}</span>
        <span className="block break-words text-sm font-semibold">{value}</span>
      </span>
    </a>
  );
}

function ContactRouteCard({ route, index }: { route: ContactRoute; index: number }) {
  const Icon = route.icon;
  const emailHref = route.email
    ? `mailto:${route.email}${route.subject ? `?subject=${encodeURIComponent(route.subject)}` : ''}`
    : undefined;

  return (
    <motion.article
      className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.035 }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h2 className="mt-4 text-xl font-bold text-foreground">{route.title}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{route.description}</p>
      {emailHref && route.email ? (
        <a href={emailHref} className="mt-5 inline-flex items-center gap-2 break-all text-sm font-semibold text-primary hover:underline">
          {route.email}<ArrowRight className="h-4 w-4 shrink-0" />
        </a>
      ) : route.href && route.linkLabel ? (
        <Link to={route.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          {route.linkLabel}<ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </motion.article>
  );
}

function CompanyFact({ icon: Icon, title, value, href }: { icon: LucideIcon; title: string; value: string; href?: string }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <Icon className="h-7 w-7 text-primary" />
      <h2 className="mt-4 font-bold text-foreground">{title}</h2>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
          {value}<ExternalLink className="h-3.5 w-3.5" />
        </a>
      ) : (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value}</p>
      )}
    </article>
  );
}
