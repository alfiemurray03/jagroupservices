import { Helmet } from '@dr.pogodin/react-helmet';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  FileText,
  Megaphone,
  Search,
  Tag,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getFallbackAnnouncementSummaries } from '@/data/public-announcements';

interface AnnouncementSummary {
  id: number;
  title: string;
  slug: string;
  summary: string;
  category: string;
  authorName: string;
  isFeatured: boolean;
  publishedAt: string | null;
  updatedAt: string;
}

const pageUrl = 'https://jagroupservices.co.uk/announcements';

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<AnnouncementSummary[]>(() => getFallbackAnnouncementSummaries());
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch('/api/announcements', {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })
      .then(async (response) => {
        if (!response.ok) throw new Error('Unable to load announcements.');
        return response.json() as Promise<AnnouncementSummary[]>;
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setAnnouncements(data);
        setLoading(false);
      })
      .catch((fetchError) => {
        if (fetchError instanceof DOMException && fetchError.name === 'AbortError') return;
        console.warn('Editable announcements service unavailable; using approved published content.', fetchError);
        setAnnouncements(getFallbackAnnouncementSummaries());
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(announcements.map((item) => item.category))).sort()],
    [announcements],
  );

  const filtered = useMemo(() => {
    const normalisedQuery = query.trim().toLowerCase();
    return announcements.filter((item) => {
      const categoryMatches = category === 'All' || item.category === category;
      const queryMatches = !normalisedQuery || `${item.title} ${item.summary} ${item.category}`.toLowerCase().includes(normalisedQuery);
      return categoryMatches && queryMatches;
    });
  }, [announcements, category, query]);

  const featured = filtered.find((item) => item.isFeatured) ?? filtered[0];
  const remaining = featured ? filtered.filter((item) => item.id !== featured.id) : filtered;

  return (
    <>
      <Helmet>
        <title>Company Announcements and News | JA Group Services Ltd</title>
        <meta
          name="description"
          content="Official corporate announcements, brand updates, governance notices and service developments from JA Group Services Ltd."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Company Announcements and News | JA Group Services Ltd" />
        <meta
          property="og:description"
          content="The official publication point for JA Group Services Ltd corporate and Sousa Murray updates."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#071a38] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                <Megaphone className="h-4 w-4" />
                Corporate newsroom
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Announcements</h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                The official publication point for company news, governance notices, Sousa Murray brand updates, service developments and information relevant to customers, suppliers, partners, investors and shareholders.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-card py-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Official Company publications</p>
                <p className="text-sm text-muted-foreground">Published and maintained by JA Group Services Ltd.</p>
              </div>
            </div>
            <Link to="/contactus" className="text-sm font-semibold text-primary hover:underline">Contact the Company</Link>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5 lg:grid-cols-[1fr_auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search announcements"
                  className="pl-10"
                  aria-label="Search announcements"
                />
              </div>
              <div className="flex flex-wrap gap-2" aria-label="Announcement categories">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                      category === item
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {loading && announcements.length === 0 && <LoadingState />}

            {!loading && filtered.length === 0 && (
              <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center sm:p-14">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <h2 className="mt-4 text-2xl font-bold text-foreground">No matching announcements</h2>
                <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
                  No published announcements match the current search or category. Clear the filters or return later for new Company updates.
                </p>
                {(query || category !== 'All') && (
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6"
                    onClick={() => { setQuery(''); setCategory('All'); }}
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            )}

            {featured && (
              <>
                <motion.article
                  className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="flex min-h-64 items-center justify-center bg-gradient-to-br from-[#0A1F44] to-[#1A3FA8] p-8 text-white">
                      <div className="text-center">
                        <Megaphone className="mx-auto h-14 w-14 text-blue-200" />
                        <span className="mt-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                          {featured.isFeatured ? 'Featured announcement' : 'Latest announcement'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 lg:p-10">
                      <AnnouncementMeta announcement={featured} />
                      <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">{featured.title}</h2>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{featured.summary}</p>
                      <Button asChild className="mt-7">
                        <Link to={`/announcements/${featured.slug}`}>
                          Read announcement
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>

                {remaining.length > 0 && (
                  <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {remaining.map((announcement, index) => (
                      <motion.article
                        key={announcement.id}
                        className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.04 }}
                      >
                        <AnnouncementMeta announcement={announcement} compact />
                        <h2 className="mt-4 text-xl font-bold leading-snug text-foreground">{announcement.title}</h2>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{announcement.summary}</p>
                        <Link
                          to={`/announcements/${announcement.slug}`}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                        >
                          Read announcement <ArrowRight className="h-4 w-4" />
                        </Link>
                      </motion.article>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

function AnnouncementMeta({ announcement, compact = false }: { announcement: AnnouncementSummary; compact?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${compact ? 'text-xs' : 'text-sm'} text-muted-foreground`}>
      <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
        <Tag className="h-3.5 w-3.5" />
        {announcement.category}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5" />
        {formatDate(announcement.publishedAt ?? announcement.updatedAt)}
      </span>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="space-y-5" aria-label="Loading announcements">
      <div className="h-72 animate-pulse rounded-3xl bg-muted" />
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((item) => <div key={item} className="h-52 animate-pulse rounded-2xl bg-muted" />)}
      </div>
    </div>
  );
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Date unavailable';
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}
