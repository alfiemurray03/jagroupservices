import { motion } from 'motion/react';
import { Building2, Handshake, Shield, TrendingUp } from 'lucide-react';

import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { t } from '@/lib/translations';

const values = [
  { icon: Shield, titleKey: 'about.governance.title', descriptionKey: 'about.governance.desc', delay: 0.1 },
  { icon: TrendingUp, titleKey: 'about.growth.title', descriptionKey: 'about.growth.desc', delay: 0.2 },
  { icon: Building2, titleKey: 'about.professional.title', descriptionKey: 'about.professional.desc', delay: 0.3 },
  { icon: Handshake, titleKey: 'about.partnerships.title', descriptionKey: 'about.partnerships.desc', delay: 0.4 },
] as const;

export default function AboutUsPage() {
  const { language } = useLanguage();

  return (
    <>
      <title>{t('aboutPage.title', language)} - JA Group Services</title>
      <meta
        name="description"
        content="Learn about JA Group Services Ltd - a professionally governed operating company providing structured frameworks for business divisions."
      />

      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#0A1F44] py-16 sm:py-20 lg:py-28">
          <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-4xl space-y-5 text-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                {t('aboutPage.title', language)}
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
                {t('aboutPage.subtitle', language)}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl space-y-12 sm:space-y-16">
              <motion.div
                className="space-y-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  {t('about.whoWeAre.title', language)}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>{t('about.whoWeAre.p1', language)}</p>
                  <p>{t('about.whoWeAre.p2', language)}</p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  {t('about.ourPurpose.title', language)}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>{t('about.ourPurpose.p1', language)}</p>
                  <p>{t('about.ourPurpose.p2', language)}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-10 sm:space-y-12">
              <motion.div
                className="space-y-4 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  {t('about.coreValues.title', language)}
                </h2>
                <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                  {t('about.coreValues.subtitle', language)}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                {values.map(({ icon: Icon, titleKey, descriptionKey, delay }) => (
                  <motion.div
                    key={titleKey}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay }}
                  >
                    <Card className="h-full rounded-2xl border-border bg-card text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                      <CardHeader className="p-5 pb-3 sm:p-6 sm:pb-3">
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-bold text-card-foreground sm:text-2xl">
                          {t(titleKey, language)}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-5 pt-2 sm:p-6 sm:pt-2">
                        <p className="leading-relaxed text-muted-foreground">
                          {t(descriptionKey, language)}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <Card className="rounded-2xl border-border bg-card text-card-foreground shadow-sm">
                  <CardHeader className="p-5 sm:p-6">
                    <CardTitle className="text-2xl font-bold text-card-foreground">Company Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 p-5 pt-0 sm:p-6 sm:pt-0">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                      <CompanyDetail label="Registered Name" value="JA Group Services Ltd" />
                      <CompanyDetail label="Company Number" value="16314179" />
                      <CompanyDetail label="ICO Registration" value="ZB877370" />
                      <CompanyDetail label="Jurisdiction" value="England & Wales" />
                    </div>

                    <div className="border-t border-border pt-5">
                      <p className="mb-2 text-sm font-medium text-muted-foreground">Registered Office</p>
                      <p className="text-card-foreground">
                        167-169 Great Portland Street<br />
                        5th Floor<br />
                        London W1W 5PF<br />
                        United Kingdom
                      </p>
                    </div>

                    <div className="border-t border-border pt-5">
                      <p className="text-sm text-muted-foreground">JA Group Services Ltd operates as part of JSDS Group Ltd.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function CompanyDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-sm font-medium text-muted-foreground">{label}</p>
      <p className="font-medium text-card-foreground">{value}</p>
    </div>
  );
}
