import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export interface CorporatePageCard {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: readonly string[];
  href?: string;
  linkLabel?: string;
  external?: boolean;
}

export interface CorporatePageSection {
  eyebrow: string;
  title: string;
  description?: string;
  cards: readonly CorporatePageCard[];
  columns?: 2 | 3;
}

export interface CorporatePageNotice {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: 'primary' | 'warning';
}

export interface CorporatePageAction {
  label: string;
  href: string;
  external?: boolean;
  variant?: 'default' | 'outline';
}

interface CorporateInformationPageProps {
  title: string;
  pageTitle: string;
  description: string;
  canonicalPath: string;
  badge: string;
  heroIcon: LucideIcon;
  introduction: string;
  notice?: CorporatePageNotice;
  sections: readonly CorporatePageSection[];
  closingTitle: string;
  closingDescription: string;
  actions: readonly CorporatePageAction[];
}

const site = 'https://jagroupservices.co.uk';

function isDirectHref(href: string, external?: boolean) {
  return external || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http');
}

function ActionButton({ action }: { action: CorporatePageAction }) {
  const className = 'min-h-11';
  const content = (
    <>
      {action.label}
      {action.external && <ExternalLink className="ml-2 h-4 w-4" />}
      {!action.external && !action.href.startsWith('mailto:') && !action.href.startsWith('tel:') && (
        <ArrowRight className="ml-2 h-4 w-4" />
      )}
    </>
  );

  if (isDirectHref(action.href, action.external)) {
    return (
      <Button asChild variant={action.variant ?? 'default'} className={className}>
        <a href={action.href} target={action.external ? '_blank' : undefined} rel={action.external ? 'noopener noreferrer' : undefined}>
          {content}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild variant={action.variant ?? 'default'} className={className}>
      <Link to={action.href}>{content}</Link>
    </Button>
  );
}

export default function CorporateInformationPage({
  title,
  pageTitle,
  description,
  canonicalPath,
  badge,
  heroIcon: HeroIcon,
  introduction,
  notice,
  sections,
  closingTitle,
  closingDescription,
  actions,
}: CorporateInformationPageProps) {
  const canonical = `${site}${canonicalPath}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#071a38] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-5xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <HeroIcon className="h-4 w-4" />
                {badge}
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-white/82 sm:text-lg">{introduction}</p>
            </motion.div>
          </div>
        </section>

        {notice && (
          <section className="border-b border-border bg-background py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`rounded-3xl border p-6 sm:p-7 ${
                  notice.tone === 'warning'
                    ? 'border-amber-500/30 bg-amber-500/10'
                    : 'border-primary/25 bg-primary/10'
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      notice.tone === 'warning' ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300' : 'bg-primary/15 text-primary'
                    }`}
                  >
                    <notice.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{notice.title}</h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{notice.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {sections.map((section, sectionIndex) => (
          <section
            key={section.title}
            className={`border-b border-border py-14 sm:py-16 lg:py-20 ${sectionIndex % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto mb-10 max-w-4xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{section.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{section.title}</h2>
                {section.description && (
                  <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{section.description}</p>
                )}
              </div>

              <div className={`grid gap-5 ${section.columns === 3 ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2'}`}>
                {section.cards.map((card, cardIndex) => {
                  const Icon = card.icon;
                  const body = (
                    <>
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground">{card.title}</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{card.description}</p>

                      {card.items && card.items.length > 0 && (
                        <ul className="mt-5 space-y-3">
                          {card.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {card.href && card.linkLabel && (
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          {card.linkLabel}
                          {card.external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                        </span>
                      )}
                    </>
                  );

                  const cardClassName =
                    'group block h-full rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-7';

                  return (
                    <motion.article
                      key={card.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.38, delay: cardIndex * 0.04 }}
                    >
                      {card.href ? (
                        isDirectHref(card.href, card.external) ? (
                          <a
                            href={card.href}
                            target={card.external ? '_blank' : undefined}
                            rel={card.external ? 'noopener noreferrer' : undefined}
                            className={cardClassName}
                          >
                            {body}
                          </a>
                        ) : (
                          <Link to={card.href} className={cardClassName}>
                            {body}
                          </Link>
                        )
                      ) : (
                        <div className={cardClassName}>{body}</div>
                      )}
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        <section className="bg-[#071a38] py-14 text-white sm:py-16">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{closingTitle}</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-white/78 sm:text-lg">{closingDescription}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {actions.map((action) => (
                <ActionButton key={`${action.href}-${action.label}`} action={action} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
