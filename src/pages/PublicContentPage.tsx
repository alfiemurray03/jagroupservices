import { Helmet } from '@dr.pogodin/react-helmet';
import { ExternalLink, FileText, Printer, ShieldCheck } from 'lucide-react';
import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { publicPages, text, uiText, type LocalisedText } from '@/lib/public-site-content';

interface PublicContentPageProps {
  pageId: string;
}

const WEBSITE = 'https://jagroupservices.co.uk';

export default function PublicContentPage({ pageId }: PublicContentPageProps) {
  const { language } = useLanguage();
  const page = publicPages[pageId];

  if (!page) {
    return null;
  }

  const title = text(page.title, language);
  const summary = text(page.summary, language);
  const description = text(page.description, language);
  const canonical = `${WEBSITE}${page.path === '/' ? '/' : page.path}`;

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{title} — JA Group Services Ltd</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${title} — JA Group Services Ltd`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="public-document min-h-screen bg-background text-foreground">
        <section className="print-hero relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-14 sm:py-18 lg:py-22">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute -bottom-44 left-1/3 h-80 w-80 rounded-full bg-cyan-300/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-200 sm:text-sm">
                {text(page.eyebrow, language)}
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                {summary}
              </p>

              {(page.status || page.effectiveDate || page.printable) && (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  {page.status && (
                    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                      {text(page.status, language)}
                    </div>
                  )}
                  {page.effectiveDate && (
                    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/85 backdrop-blur-sm">
                      <span className="font-semibold">{text(uiText.lastReviewed, language)}:</span>{' '}
                      {page.effectiveDate}
                    </div>
                  )}
                  {page.printable && (
                    <Button
                      type="button"
                      onClick={() => window.print()}
                      className="print-control min-h-11 bg-white font-bold text-[#0A1F44] hover:bg-blue-50"
                    >
                      <Printer className="mr-2 h-4 w-4" />
                      {text(uiText.printPdf, language)}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {page.legalDocument && (
          <section className="border-b border-amber-300/30 bg-amber-50 py-4 text-amber-950 dark:border-amber-500/20 dark:bg-amber-950/30 dark:text-amber-100">
            <div className="mx-auto flex max-w-6xl items-start gap-3 px-4 sm:px-6 lg:px-8">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-sm leading-relaxed">{text(uiText.authoritativeNotice, language)}</p>
            </div>
          </section>
        )}

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {page.sections.map((section, sectionIndex) => (
                <article
                  key={`${page.id}-${sectionIndex}`}
                  className="print-section rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm sm:p-7"
                >
                  <div className="mb-5 flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
                      {text(section.heading, language)}
                    </h2>
                  </div>

                  {section.paragraphs && (
                    <div className="space-y-4 text-[15px] leading-7 text-muted-foreground sm:text-base">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{linkify(text(paragraph, language))}</p>
                      ))}
                    </div>
                  )}

                  {section.bullets && (
                    <ul className="mt-4 space-y-3 text-[15px] leading-7 text-muted-foreground sm:text-base">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{linkify(text(bullet, language))}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.links && (
                    <div className="print-control mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      {section.links.map((item, linkIndex) => {
                        const label = text(item.label, language);
                        const external = item.external || /^(https?:|mailto:|tel:)/.test(item.href);
                        const classes =
                          'inline-flex min-h-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10';

                        return external ? (
                          <a
                            key={linkIndex}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={classes}
                          >
                            {label}
                            {item.href.startsWith('http') && <ExternalLink className="ml-2 h-4 w-4" />}
                          </a>
                        ) : (
                          <Link key={linkIndex} to={item.href} className={classes}>
                            {label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </article>
              ))}
            </div>

            {page.printable && (
              <div className="print-control mt-8 flex justify-center">
                <Button type="button" onClick={() => window.print()} size="lg" className="font-bold">
                  <Printer className="mr-2 h-4 w-4" />
                  {text(uiText.printPdf, language)}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

function linkify(value: string): ReactNode {
  const pattern = /(https?:\/\/[^\s]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|\b020\s3834\s2790\b)/gi;
  const parts = value.split(pattern);

  return parts.map((part, index) => {
    if (!part) return null;

    if (/^https?:\/\//i.test(part)) {
      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
          {part}
        </a>
      );
    }

    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(part)) {
      return (
        <a key={index} href={`mailto:${part}`} className="font-semibold text-primary hover:underline">
          {part}
        </a>
      );
    }

    if (/^020\s3834\s2790$/.test(part)) {
      return (
        <a key={index} href="tel:02038342790" className="font-semibold text-primary hover:underline">
          {part}
        </a>
      );
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
}

export function localised(value: LocalisedText, language: keyof LocalisedText): string {
  return value[language] || value.en;
}
