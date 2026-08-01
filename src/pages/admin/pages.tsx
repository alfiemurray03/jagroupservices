import { useState, FormEvent } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminGuard from '@/components/admin/AdminGuard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Save, AlertCircle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const MANAGED_PAGES = [
  { key: 'homepage', label: 'Homepage', slug: '/' },
  { key: 'about-us', label: 'About Us', slug: '/about-us' },
  { key: 'about-our-divisions', label: 'About Our Divisions', slug: '/about-our-divisions' },
  { key: 'our-group-structure', label: 'Our Group Structure', slug: '/our-group-structure' },
  { key: 'partner-with-us', label: 'Partner With Us', slug: '/partner-with-us' },
];

interface PageData {
  pageKey: string;
  title: string;
  slug: string;
  heroHeading: string;
  heroText: string;
  seoTitle: string;
  seoDescription: string;
  status: string;
}

function PageEditor({ pageKey, label, slug }: { pageKey: string; label: string; slug: string }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<PageData>({
    pageKey, title: label, slug, heroHeading: '', heroText: '', seoTitle: '', seoDescription: '', status: 'published',
  });
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const load = () => {
    if (loaded) return;
    fetch(`/api/admin/pages/${pageKey}`, { credentials: 'include' })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data) {
          setForm({
            pageKey,
            title: data.title || label,
            slug: data.slug || slug,
            heroHeading: data.heroHeading || '',
            heroText: data.heroText || '',
            seoTitle: data.seoTitle || '',
            seoDescription: data.seoDescription || '',
            status: data.status || 'published',
          });
        }
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  };

  const handleToggle = () => {
    if (!open) load();
    setOpen(v => !v);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);
    const res = await fetch(`/api/admin/pages/${pageKey}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setSaving(false);
    if (res.ok) setSuccess('Page updated.');
    else setError(data.error || 'Failed to save.');
  };

  return (
    <Card className="border-0 shadow-sm">
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors rounded-xl"
      >
        <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
          <Globe className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[#0A1F44] text-sm">{label}</p>
          <p className="text-xs text-gray-400">{slug}</p>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
      </button>

      {open && (
        <CardContent className="pt-0 pb-5 px-5">
          <div className="border-t border-gray-100 pt-5">
            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-4 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}
            {success && (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg px-4 py-3 mb-4 text-sm">
                <CheckCircle className="w-4 h-4 shrink-0" />
                {success}
              </div>
            )}
            {!loaded ? (
              <div className="space-y-3">
                {[1, 2].map(i => <div key={i} className="h-10 bg-gray-100 rounded animate-pulse" />)}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label>Hero heading</Label>
                  <Input
                    value={form.heroHeading}
                    onChange={e => setForm(f => ({ ...f, heroHeading: e.target.value }))}
                    placeholder="Main heading shown in the hero section"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Hero text</Label>
                  <Textarea
                    value={form.heroText}
                    onChange={e => setForm(f => ({ ...f, heroText: e.target.value }))}
                    placeholder="Subheading or introductory text"
                    className="min-h-[80px]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>SEO title</Label>
                    <Input
                      value={form.seoTitle}
                      onChange={e => setForm(f => ({ ...f, seoTitle: e.target.value }))}
                      placeholder="Page title for search engines"
                      maxLength={60}
                    />
                    <p className="text-xs text-gray-400">{form.seoTitle.length}/60</p>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Meta description</Label>
                    <Textarea
                      value={form.seoDescription}
                      onChange={e => setForm(f => ({ ...f, seoDescription: e.target.value }))}
                      placeholder="Description for search engines"
                      maxLength={160}
                      className="min-h-[60px]"
                    />
                    <p className="text-xs text-gray-400">{form.seoDescription.length}/160</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" disabled={saving} className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white gap-2">
                    {saving ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Saving…
                      </span>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
}

export default function AdminPagesPage() {
  return (
    <AdminGuard>
      <Helmet>
        <title>Page Manager — JA Group Admin</title>
        <meta name="description" content="Page manager for JA Group Services Ltd admin." />
        <link rel="canonical" href="https://jagroupservices.co.uk/admin/pages" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <AdminLayout>
        <div className="p-6 lg:p-8 max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0A1F44]">Page Manager</h1>
            <p className="text-gray-500 text-sm mt-0.5">Edit hero content and SEO settings for each page</p>
          </div>
          <div className="space-y-3">
            {MANAGED_PAGES.map(p => (
              <PageEditor key={p.key} pageKey={p.key} label={p.label} slug={p.slug} />
            ))}
          </div>
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
