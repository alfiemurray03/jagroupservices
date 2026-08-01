import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Building2, MessageSquare } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageProvider';
import { t } from '@/lib/translations';

const contactReasons = [
  {
    icon: Building2,
    title: 'Corporate Inquiries',
    description: 'Learn about our corporate structure and services',
  },
  {
    icon: MessageSquare,
    title: 'General Questions',
    description: 'Get answers to your questions about our operations',
  },
  {
    icon: Phone,
    title: 'Professional Support',
    description: 'Connect with our team for professional assistance',
  },
];

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
        <a href="mailto:contact@jagroupservices.co.uk" className="break-all font-semibold text-primary transition-colors hover:underline">
          contact@jagroupservices.co.uk
        </a>
      ),
    },
    {
      icon: MapPin,
      title: t('contactPage.info.address', language),
      content: (
        <p className="text-sm leading-relaxed text-muted-foreground">
          167-169 Great Portland Street<br />
          5th Floor<br />
          London, W1W 5PF
        </p>
      ),
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: (
        <p className="text-sm leading-relaxed text-muted-foreground">
          Monday - Friday<br />
          9:00 AM - 5:00 PM GMT
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
          content="Get in touch with JA Group Services Ltd. Contact our team for inquiries about our services and corporate solutions."
        />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#07152E] via-[#0A1F44] to-[#1A3FA8] py-16 sm:py-20 lg:py-24">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-sm">
                {t('contactPage.badge', language)}
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {t('contactPage.title', language)}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
                {t('contactPage.subtitle', language)}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {contactCards.map(({ icon: Icon, title, content }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="rounded-2xl border border-border bg-card p-6 text-center text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-2 text-lg font-semibold text-foreground">{title}</h2>
                  {content}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/40 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-10">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="lg:col-span-2"
              >
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Contact Us?</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We're here to answer your questions and discuss how our services can support your organisation.
                </p>

                <div className="mt-8 space-y-4">
                  {contactReasons.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
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
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="lg:col-span-3"
              >
                <Card className="border-border bg-card text-card-foreground shadow-lg">
                  <CardContent className="p-6 sm:p-8">
                    <div className="py-8 text-center sm:py-10">
                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">
                        <MessageSquare className="h-10 w-10 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Contact Form Coming Soon</h2>
                      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                        We're currently setting up our contact form. In the meantime, please reach out to us using the contact information provided.
                      </p>
                      <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5 font-semibold text-primary">
                        <Clock className="h-5 w-5" />
                        <span>Available Soon</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Card className="border-border bg-card text-card-foreground shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">Company Information</h2>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-muted/30 p-5">
                    <h3 className="font-semibold text-foreground">Registered Company</h3>
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
                  <div className="rounded-2xl border border-border bg-muted/30 p-5">
                    <h3 className="font-semibold text-foreground">Data Protection</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      ICO Registration:{' '}
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
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
