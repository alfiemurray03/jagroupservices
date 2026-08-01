import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Building2,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Users,
} from 'lucide-react';

import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/translations';

const contactReasons = [
  {
    icon: Building2,
    title: 'Corporate enquiries',
    description: 'Questions about JA Group Services Ltd, our structure, services or operating brands.',
  },
  {
    icon: Users,
    title: 'General enquiries',
    description: 'Help finding the right service, brand, department or point of contact.',
  },
  {
    icon: Headphones,
    title: 'Professional support',
    description: 'Speak with our team about an existing enquiry or an issue requiring assistance.',
  },
] as const;

export default function ContactUsPage() {
  const { language } = useLanguage();

  const contactCards = [
    {
      icon: Phone,
      title: t('contactPage.info.phone', language),
      content: (
        <a href="tel:02038342790" className="font-semibold text-primary transition-colors hover:underline">
          020 3834 2790
        </a>
      ),
    },
    {
      icon: Mail,
      title: t('contactPage.info.email', language),
      content: (
        <a
          href="mailto:contact@jagroupservices.co.uk"
          className="break-words text-sm font-semibold text-primary transition-colors hover:underline sm:text-base"
        >
          contact@jagroupservices.co.uk
        </a>
      ),
    },
    {
      icon: MapPin,
      title: t('contactPage.info.address', language),
      content: (
        <p className="text-sm leading-relaxed text-muted-foreground">
          167–169 Great Portland Street<br />
          5th Floor<br />
          London, W1W 5PF
        </p>
      ),
    },
    {
      icon: Clock,
      title: 'Business hours',
      content: (
        <p className="text-sm leading-relaxed text-muted-foreground">
          Monday – Friday<br />
          9:00 am – 5:00 pm GMT
        </p>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('contactPage.title', language)} — JA Group Services Ltd</title>
        <meta
          name="description"
          content="Contact JA Group Services Ltd by telephone or email for general, corporate and service-related enquiries."
        />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#07152E] via-[#0A1F44] to-[#1A3FA8] py-12 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-sm">
                <MessageSquare className="h-4 w-4" />
                Contact JA Group Services
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t('contactPage.title', language)}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
                {t('contactPage.subtitle', language)}
              </p>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-md sm:p-6"
              aria-label="Quick contact options"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Quick contact</p>
              <h2 className="mt-2 text-2xl font-bold">Speak with our team</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Use email for detailed enquiries or call our main switchboard during business hours.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:02038342790"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition-colors hover:bg-white/15"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-white/60">Telephone</span>
                      <span className="block font-semibold">020 3834 2790</span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-white/60" />
                </a>

                <a
                  href="mailto:contact@jagroupservices.co.uk"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition-colors hover:bg-white/15"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-white/60">Email</span>
                      <span className="block break-words text-sm font-semibold">contact@jagroupservices.co.uk</span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-white/60" />
                </a>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="border-b border-border bg-background py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {contactCards.map(({ icon: Icon, title, content }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group min-w-0 rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg sm:p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="mb-2 text-base font-semibold text-foreground">{title}</h2>
                  <div className="min-w-0">{content}</div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/45 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">How we can help</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why contact us?</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                We can help route enquiries to the right service, explain how our operating brands work and provide assistance with company-related questions.
              </p>

              <div className="mt-8 space-y-3">
                {contactReasons.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-xl"
            >
              <div className="border-b border-border bg-muted/40 p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">Send us an enquiry</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                  Email is the best option for detailed enquiries. Please include enough information for our team to understand and route your message correctly.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-background p-5">
                    <Mail className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-semibold text-foreground">Email our team</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Suitable for general, corporate and service-related enquiries.
                    </p>
                    <Button asChild className="mt-5 w-full bg-[#1A3FA8] font-semibold text-white hover:bg-[#153588]">
                      <a href="mailto:contact@jagroupservices.co.uk">
                        Send an email
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5">
                    <Phone className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-semibold text-foreground">Call head office</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Call the main switchboard during the published business hours.
                    </p>
                    <Button asChild variant="outline" className="mt-5 w-full border-primary font-semibold text-primary hover:bg-primary/10">
                      <a href="tel:02038342790">Call 020 3834 2790</a>
                    </Button>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/10 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Please do not send passwords, payment-card details or other unnecessary sensitive information by ordinary email.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Corporate details</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Company information</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
                <Building2 className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Registered company</h3>
                <p className="mt-2 text-sm text-muted-foreground">JA Group Services Ltd</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Company No.{' '}
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/16314179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    16314179
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Data protection</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  ICO Registration{' '}
                  <a
                    href="https://ico.org.uk/ESDWebPages/Entry/ZB877370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    ZB877370
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Registered office</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  167–169 Great Portland Street, 5th Floor, London, W1W 5PF
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
