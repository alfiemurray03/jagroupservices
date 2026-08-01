import { Helmet } from '@dr.pogodin/react-helmet';
import {
  ArrowRight,
  Award,
  Building2,
  ExternalLink,
  Globe2,
  Handshake,
  Mail,
  Phone,
  Shield,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/translations';

const stats = [
  { icon: Building2, label: 'UK Registered', value: 'Company No. 16314179', colour: '#2563EB' },
  { icon: Shield, label: 'ICO Registered', value: 'ZB877370', colour: '#0891B2' },
  { icon: Globe2, label: 'Operating Brands', value: 'Profile Centre, Planyx & JA Domain Hub', colour: '#8B5CF6' },
  { icon: Award, label: 'Service Focus', value: 'Digital Identity & Domains', colour: '#10B981' },
] as const;

const brands = [
  {
    name: 'Profile Centre',
    description:
      'A digital profile platform operated by JA Group Services Ltd. Create and manage professional profile pages with links, QR codes, contact options, media, documents, themes and organisation tools.',
    tags: ['Personal Profiles', 'Organisation Profiles', 'QR Sharing', 'Digital Identity'],
    href: 'https://profilecentre.jagroupservices.co.uk/',
    button: 'Visit Profile Centre',
    icon: Users,
    gradient: 'from-[#1A3FA8] to-[#0891B2]',
    buttonClass: 'bg-[#1A3FA8] hover:bg-[#153588]',
  },
  {
    name: 'Planyx',
    description:
      'An experience and itinerary planning platform that helps customers organise travel, days out and activities while exploring selected affiliate partner options.',
    tags: ['Itinerary Planning', 'Experiences', 'Shared Plans', 'Partner Discovery'],
    href: 'https://planyx.jagroupservices.co.uk/',
    button: 'Visit Planyx',
    icon: Globe2,
    gradient: 'from-[#312E81] to-[#7C3AED]',
    buttonClass: 'bg-[#6D28D9] hover:bg-[#5B21B6]',
  },
  {
    name: 'JA Domain Hub',
    description:
      'The customer-facing domain support and GoDaddy reseller storefront brand operated by JA Group Services Ltd. Search for domains, purchase domain-related products, and access domain services powered by GoDaddy.',
    tags: ['Domain Search', 'DNS Setup', 'Email Setup', 'GoDaddy Reseller'],
    href: 'https://jadomainhub.jagroupservices.co.uk/',
    button: 'Visit JA Domain Hub',
    icon: Globe2,
    gradient: 'from-[#0A1F44] to-[#1A3FA8]',
    buttonClass: 'bg-[#0A1F44] hover:bg-[#0d2a5e]',
  },
] as const;

const reasons = [
  {
    icon: Building2,
    title: 'UK Registered Business',
    description: 'Registered in England & Wales. Company No. 16314179.',
    colour: '#2563EB',
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description: 'Our operating brands are built around the needs of individuals and businesses.',
    colour: '#0891B2',
  },
  {
    icon: Shield,
    title: 'ICO Registered',
    description: "Registered with the Information Commissioner's Office. ICO No. ZB877370.",
    colour: '#8B5CF6',
  },
  {
    icon: Award,
    title: 'Professional Standards',
    description: 'We maintain clear operating standards across all our brands and services.',
    colour: '#10B981',
  },
] as const;

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>JA Group Services Ltd — Digital Identity, Domains &amp; Business Services</title>
        <meta
          name="description"
          content="JA Group Services Ltd supports digital identity, online presence, domains, profile pages, and structured business services through focused operating brands: Profile Centre, Planyx and JA Domain Hub."
        />
        <link rel="canonical" href="https://jagroupservices.co.uk/" />
        <meta property="og:title" content="JA Group Services Ltd — Digital Identity, Domains & Business Services" />
        <meta
          property="og:description"
          content="JA Group Services Ltd supports digital identity, online presence, domains, profile pages, and structured business services through focused operating brands."
        />
        <meta property="og:url" content="https://jagroupservices.co.uk/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-background py-14 sm:py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl sm:h-[520px] sm:w-[520px]" />
            <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl sm:h-[420px] sm:w-[420px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div
                className="space-y-6 sm:space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t('hero.title', language)}
                </motion.h1>

                <motion.p
                  className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.18 }}
                >
                  JA Group Services Ltd supports digital identity, online presence, domains, profile pages, and structured business services through focused operating brands.
                </motion.p>

                <motion.div
                  className="flex flex-col gap-3 sm:flex-row"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                >
                  <Button asChild size="lg" className="min-h-12 w-full bg-[#1A3FA8] px-6 font-bold text-white shadow-lg hover:bg-[#153588] sm:w-auto">
                    <Link to="/about-our-divisions">
                      Our Operating Brands
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="min-h-12 w-full border-2 border-primary px-6 font-semibold text-primary hover:bg-primary/10 sm:w-auto">
                    <Link to="/contactus">{t('hero.cta.contact', language)}</Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {stats.map(({ icon: Icon, label, value, colour }, index) => (
                  <motion.div
                    key={label}
                    className="rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${colour}1A` }}>
                      <Icon className="h-5 w-5" style={{ color: colour }} />
                    </div>
                    <p className="mb-1 text-xs font-medium text-muted-foreground">{label}</p>
                    <p className="text-sm font-bold leading-snug text-card-foreground">{value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Our Operating Brands</h2>
              <p className="text-base text-muted-foreground sm:text-lg">
                JA Group Services Ltd operates three focused brands, each serving a distinct area of digital business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {brands.map(({ name, description, tags, href, button, icon: Icon, gradient, buttonClass }, index) => (
                <motion.article
                  key={name}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: index * 0.08 }}
                >
                  <div className={`bg-gradient-to-br ${gradient} p-6 text-white sm:p-7`}>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">{name}</h3>
                    <p className="text-sm text-white/80">An operating brand of JA Group Services Ltd</p>
                  </div>

                  <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
                    <p className="flex-1 leading-relaxed text-muted-foreground">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="mt-auto block">
                      <Button size="lg" className={`min-h-12 w-full px-6 font-bold text-white ${buttonClass}`}>
                        {button}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-10 sm:mb-14"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">{t('why.title', language)}</h2>
              <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{t('why.subtitle', language)}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {reasons.map(({ icon: Icon, title, description, colour }, index) => (
                <motion.div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: `${colour}1A` }}>
                    <Icon className="h-6 w-6" style={{ color: colour }} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-card-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.48 }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Handshake className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Partner With Us</h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                We welcome appropriate partnership enquiries from service providers, platforms, and organisations that align with our operating standards and customer needs.
              </p>
              <div className="flex flex-col justify-center gap-3 pt-1 sm:flex-row">
                <Button asChild size="lg" className="min-h-12 w-full bg-[#1A3FA8] px-6 font-bold text-white hover:bg-[#153588] sm:w-auto">
                  <Link to="/partner-with-us">
                    View Partnership Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-12 w-full border-2 border-primary px-6 font-semibold text-primary hover:bg-primary/10 sm:w-auto">
                  <Link to="/contactus">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#1A3FA8] py-14 text-white sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="space-y-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{t('contact.title', language)}</h2>
                <p className="text-base leading-relaxed text-white/80 sm:text-lg">{t('contact.subtitle', language)}</p>
                <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                  <Button asChild size="lg" className="min-h-12 w-full bg-white px-6 font-bold text-[#1A3FA8] shadow-xl hover:bg-gray-100 sm:w-auto">
                    <Link to="/contactus">
                      {t('contact.cta.primary', language)}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="min-h-12 w-full border border-white/30 px-6 font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto">
                    <Link to="/about-us">{t('contact.cta.secondary', language)}</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col gap-3"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <ContactCard href="tel:02038342790" icon={<Phone className="h-5 w-5 text-white" />} label="Phone" value="020 3834 2790" />
                <ContactCard
                  href="mailto:contact@jagroupservices.co.uk"
                  icon={<Mail className="h-5 w-5 text-white" />}
                  label="Email"
                  value="contact@jagroupservices.co.uk"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function ContactCard({ href, icon, label, value }: { href: string; icon: React.ReactNode; label: string; value: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 transition-all hover:bg-white/15 sm:px-6"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">{icon}</div>
      <div className="min-w-0">
        <p className="mb-0.5 text-xs text-white/60">{label}</p>
        <p className="break-words text-sm font-semibold text-white">{value}</p>
      </div>
    </a>
  );
}
