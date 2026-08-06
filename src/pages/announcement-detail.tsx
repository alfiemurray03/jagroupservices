import { Helmet } from '@dr.pogodin/react-helmet';
import {
  AlertCircle,
  ArrowLeft,
  Building2,
  CalendarDays,
  Megaphone,
  Tag,
  UserRound,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { getFallbackAnnouncement, type PublicAnnouncement } from '@/data/public-announcements';

type Announcement = PublicAnnouncement | {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  authorName: string;
  status: string;
  isFeatured: boolean;
  seoTitle: string | null;
  seoDescription: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export default function AnnouncementDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const approvedFallback = slug ? getFallbackAnnouncement(slug) ?? null : null;
  const [announcement, setAnnouncement] = useState<Announcement | null>(approvedFallback);
  const [loading, setLoading] = useState(!approvedFallback);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    const fallback = getFallbackAnnouncement(slug) ?? null;
    if (fallback) {
      setAnnouncement(fallback);
      setNotFound(false);
      setLoading(false);
    } else {
      setLoading(true);
    }

    const controller = new AbortController();
    fetch(`/api/announcements/${encodeURIComponent(slug)}`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })
      .then(async (response) => {
        if (response.status === 404) {
          if (!fallback) setNotFound(true);
          setLoading(false);
          return null;
        }
        if (!response.ok) throw new Error('Unable to load announcement.');
        return response.json() as Promise<Announcement>;
      })
      .then((data) => {
        if (data) {
          setAnnouncement(data);
          setNotFound(false);
        }
        setLoading(false);
      })
      .catch((fetchError) => {
        if (fetchError instanceof DOMException && fetchError.name === 'AbortError') return;
        console.warn('Editable announcement service unavailable; using approved published content.', fetchError);
        if (fallback) {
          setAnnouncement(fallback);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
        setLoading(false);
      });

    return () => controller.abort();
  }, [slug]);

  if (loading) return <AnnouncementLoading />;
  if (notFound || !announcement) {
    return <AnnouncementUnavailable title="Announcement not found" description="The requested announcement may have been removed, unpublished or entered incorrectly." />;
  }

  const canonicalUrl = `https://jagroupservices.co.uk/announcements/${announcement.slug}`;
  const publishedDate = announcement.publishedAt ?? announcement.createdAt;

  return (
    <>
      <Helmet>
        <title>{announcement.seoTitle || `${announcement.title} | JA Group Services Ltd`}</title>
        <meta name="description" content={announcement.seoDescription || announcement.summary} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={announcement.seoTitle || announcement.title} />
        <meta property="og:description" content={announcement.seoDescription || announcement.summary} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:modified_time" content={announcement.updatedAt} />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#071a38] py-14 text-white sm:py-18 lg:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link to="/announcements" className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              All announcements
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-1.5 font-semibold text-blue-200">
                <Tag className="h-4 w-4" />
                {announcement.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {formatDate(publishedDate)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <UserRound className="h-4 w-4" />
                {announcement.authorName}
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{announcement.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">{announcement.summary}</p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
            <article className="min-w-0 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{announcement.content}</ReactMarkdown>
              </div>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Megaphone className="h-5 w-5 text-primary" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-foreground">Official announcement</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  This publication forms part of the official corporate newsroom maintained by JA Group Services Ltd.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-muted/35 p-5">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h2 className="font-bold text-foreground">Corporate enquiries</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Suppliers, partners, investors, shareholders and other stakeholders may contact the Company for clarification.
                    </p>
                    <Link to="/contactus" className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline">Contact JA Group Services Ltd</Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

function AnnouncementLoading() {
  return (
    <main className="min-h-screen bg-background px-4 py-20">
      <div className="mx-auto max-w-5xl space-y-5">
        <div className="h-8 w-40 animate-pulse rounded bg-muted" />
        <div className="h-20 animate-pulse rounded-2xl bg-muted" />
        <div className="h-96 animate-pulse rounded-3xl bg-muted" />
      </div>
    </main>
  );
}

function AnnouncementUnavailable({ title, description }: { title: string; description: string }) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-20">
      <div className="w-full max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
        <AlertCircle className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-5 text-3xl font-bold text-foreground">{title}</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
        <Button asChild className="mt-7">
          <Link to="/announcements">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to announcements
          </Link>
        </Button>
      </div>
    </main>
  );
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Date unavailable';
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}
