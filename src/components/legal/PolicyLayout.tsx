import type { ReactNode } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { FileText, Mail, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PolicyLayoutProps {
  title: string;
  description: string;
  canonicalPath: string;
  effectiveDate: string;
  lastReviewed?: string;
  children: ReactNode;
}

interface PolicySectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

interface PolicyNoticeProps {
  title: string;
  children: ReactNode;
  tone?: 'standard' | 'important';
}

export function PolicyLayout({
  title,
  description,
  canonicalPath,
  effectiveDate,
  lastReviewed = effectiveDate,
  children,
}: PolicyLayoutProps) {
  const canonicalUrl = `https://jagroupservices.co.uk${canonicalPath}`;

  return (
    <>
      <Helmet>
        <title>{title} | JA Group Services Ltd</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${title} | JA Group Services Ltd`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#071a38] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
              <Scale className="h-4 w-4" />
              Corporate legal information
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">{description}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-white/75">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Effective: {effectiveDate}</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Last reviewed: {lastReviewed}</span>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
            <article className="min-w-0 rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8 lg:p-10">
              <div className="mb-10 flex items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-bold text-foreground">JA Group Services Ltd</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Registered in England and Wales under company number 16314179. Registered office: 167-169 Great Portland Street, 5th Floor, London, W1W 5PF.
                  </p>
                </div>
              </div>

              <div className="space-y-10">{children}</div>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h2 className="text-lg font-bold text-foreground">Need help?</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Contact JA Group Services Ltd and identify the relevant Sousa Murray service, account or order.
                </p>
                <a
                  href="mailto:contact@jagroupservices.co.uk"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  contact@jagroupservices.co.uk
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-muted/35 p-5">
                <h2 className="text-sm font-bold uppercase tracking-wide text-foreground">Related pages</h2>
                <nav className="mt-3 space-y-2 text-sm" aria-label="Related legal pages">
                  <Link to="/terms-of-service" className="block text-muted-foreground hover:text-primary">Terms of Service</Link>
                  <Link to="/privacy-policy" className="block text-muted-foreground hover:text-primary">Privacy Policy</Link>
                  <Link to="/complaints-policy" className="block text-muted-foreground hover:text-primary">Complaints &amp; Refunds Policy</Link>
                  <Link to="/cookies-policy" className="block text-muted-foreground hover:text-primary">Cookies Policy</Link>
                  <Link to="/privacy-centre" className="block text-muted-foreground hover:text-primary">Privacy Centre</Link>
                </nav>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

export function PolicySection({ number, title, children }: PolicySectionProps) {
  return (
    <section id={`section-${number}`} className="scroll-mt-28 border-b border-border pb-10 last:border-b-0 last:pb-0">
      <div className="mb-4 flex items-start gap-3">
        <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-primary/10 px-2 text-sm font-bold text-primary">{number}</span>
        <h2 className="pt-0.5 text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="space-y-4 text-[15px] leading-7 text-muted-foreground [&_a]:font-semibold [&_a]:text-primary [&_a]:hover:underline [&_h3]:pt-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-foreground [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}

export function PolicyNotice({ title, children, tone = 'standard' }: PolicyNoticeProps) {
  const classes = tone === 'important'
    ? 'border-amber-300/60 bg-amber-50 text-amber-950 dark:border-amber-400/30 dark:bg-amber-950/20 dark:text-amber-100'
    : 'border-primary/20 bg-primary/5 text-foreground';

  return (
    <div className={`rounded-2xl border p-5 ${classes}`}>
      <h3 className="font-bold">{title}</h3>
      <div className="mt-2 text-sm leading-6 opacity-90">{children}</div>
    </div>
  );
}
