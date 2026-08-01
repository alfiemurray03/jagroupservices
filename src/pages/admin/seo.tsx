import { useState, FormEvent } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminGuard from '@/components/admin/AdminGuard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { Save, AlertCircle, CheckCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

const PAGES = [
  { key: 'homepage', label: 'Homepage', path: '/' },
  { key: 'about-us', label: 'About Us', path: '/about-us' },
  { key: 'about-our-divisions', label: 'About Our Divisions', path: '/about-our-divisions' },
  { key: 'our-group-structure', label: 'Our Group Structure', path: '/our-group-structure' },
  { key: 'partner-with-us', label: 'Partner With Us', path: '/partner-with-us' },
  { key: 'contact-us', label: 'Contact Us', path: '/contactus' },
  { key: 'privacy-policy', label: 'Privacy Policy', path: '/privacy-policy' },
  { key: 'terms-of-service', label: 'Terms of Service', path: '/terms-of-service' },
  { key: 'cookies-policy', label: 'Cookies Policy', path: '/cookies-policy' },
  { key: 'complaints-policy', label: 'Complaints Policy', path: '/complaints-policy' },
  { key: 'announcements', label: 'Announcements', path: '/announcements' },
];

interface SeoData {
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  noIndex: boolean;
}

function SeoEditor({ pageKey, label, path }: { pageKey: string; label: string; path: string }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<SeoData>({ seoTitle: '', seoDescription: '', ogImage: '', noIndex: false });
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const load = () => {
    if (loaded) return;
    fetch('/api/admin/seo', { credentials: 'include' })
      .then(r => r.json())
      .then(data => {
        const entry = Array.isArray(data) ? data.find((s: any) => s.pageKey === pageKey) : null;
        if (entry) {
          setForm({
            seoTitle: entry.seoTitle || '',
            seoDescription: entry.seoDescription || '',
            ogImage: entry.ogImage || '',
            noIndex: entry.noIndex || false,
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
    const res = await fetch('/api/admin/seo', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ pageKey, ...form }),
    });
    const data = await res.json();
    setSaving(false);
    if (res.ok) setSuccess('SEO settings saved.');
    else setError(data.error || 'Failed to save.');
  };

  return (
    <Card className="border-0 shadow-sm">
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors rounded-xl"
      >
        <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
          <Search className="w-4 h-4 text-amber-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[#0A1F44] text-sm">{label}</p>
          <p className="text-xs text-gray-400">{path}</p>
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
                  <Label>SEO title</Label>
                  <Input
                    value={form.seoTitle}
                    onChange={e => setForm(f => ({ ...f, seoTitle: e.target.value }))}
                    placeholder={`${label} — JA Group Services`}
                    maxLength={60}
                  />
                  <p className="text-xs text-gray-400">{form.seoTitle.length}/60 characters</p>
                </div>
                <div className="space-y-1.5">
                  <Label>Meta description</Label>
                  <Textarea
                    value={form.seoDescription}
                    onChange={e => setForm(f => ({ ...f, seoDescription: e.target.value }))}
                    placeholder="Brief description for search engines…"
                    maxLength={160}
                    className="min-h-[80px]"
                  />
                  <p className="text-xs text-gray-400">{form.seoDescription.length}/160 characters</p>
                </div>
                <div className="space-y-1.5">
                  <Label>OG image URL</Label>
                  <Input
                    value={form.ogImage}
                    onChange={e => setForm(f => ({ ...f, ogImage: e.target.value }))}
                    placeholder="https://jagroupservices.co.uk/og-image.png"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Switch
                    id={`noindex-${pageKey}`}
                    checked={form.noIndex}
                    onCheckedChange={v => setForm(f => ({ ...f, noIndex: v }))}
                  />
                  <Label htmlFor={`noindex-${pageKey}`} className="text-sm text-gray-600">
                    No-index (hide from search engines)
                  </Label>
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

export default function AdminSeoPage() {
  return (
    <AdminGuard>
      <Helmet>
        <title>SEO Settings — JA Group Admin</title>
        <meta name="description" content="SEO settings manager for JA Group Services Ltd admin." />
        <link rel="canonical" href="https://jagroupservices.co.uk/admin/seo" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <AdminLayout>
        <div className="p-6 lg:p-8 max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0A1F44]">SEO Settings</h1>
            <p className="text-gray-500 text-sm mt-0.5">Edit page titles, meta descriptions, and indexing settings</p>
          </div>
          <div className="space-y-3">
            {PAGES.map(p => (
              <SeoEditor key={p.key} pageKey={p.key} label={p.label} path={p.path} />
            ))}
          </div>
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
