import { Helmet } from '@dr.pogodin/react-helmet';
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
  Eye,
  Save,
  Star,
} from 'lucide-react';
import { type FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AdminGuard from '@/components/admin/AdminGuard';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

const initialForm = {
  title: '',
  slug: '',
  summary: '',
  content: '',
  category: 'Corporate',
  authorName: 'JA Group Services Ltd',
  status: 'draft',
  isFeatured: false,
  seoTitle: '',
  seoDescription: '',
  publishedAt: '',
};

export default function AdminAnnouncementEditPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNew = id === 'new';
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (isNew || !id) return;

    fetch(`/api/admin/announcements/${id}`, { credentials: 'include' })
      .then(async (response) => {
        if (!response.ok) throw new Error('Failed to load announcement.');
        return response.json();
      })
      .then((data) => {
        setForm({
          title: data.title || '',
          slug: data.slug || '',
          summary: data.summary || '',
          content: data.content || '',
          category: data.category || 'Corporate',
          authorName: data.authorName || 'JA Group Services Ltd',
          status: data.status || 'draft',
          isFeatured: Boolean(data.isFeatured),
          seoTitle: data.seoTitle || '',
          seoDescription: data.seoDescription || '',
          publishedAt: data.publishedAt ? toDateTimeLocal(data.publishedAt) : '',
        });
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load announcement.');
        setLoading(false);
      });
  }, [id, isNew]);

  const autoSlug = (title: string) => title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const handleTitleChange = (title: string) => {
    setForm((current) => ({
      ...current,
      title,
      slug: isNew ? autoSlug(title) : current.slug,
      seoTitle: isNew && !current.seoTitle ? `${title} | JA Group Services Ltd` : current.seoTitle,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);

    const endpoint = isNew ? '/api/admin/announcements' : `/api/admin/announcements/${id}`;
    const method = isNew ? 'POST' : 'PUT';
    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        ...form,
        publishedAt: form.publishedAt ? new Date(form.publishedAt).toISOString() : null,
      }),
    });
    const data = await response.json();
    setSaving(false);

    if (!response.ok) {
      setError(data.error || 'Failed to save announcement.');
      return;
    }

    setSuccess(isNew ? 'Announcement created successfully.' : 'Announcement updated successfully.');
    if (isNew && data.id) navigate(`/admin/announcements/${data.id}`, { replace: true });
  };

  return (
    <AdminGuard>
      <Helmet>
        <title>{isNew ? 'New Announcement' : 'Edit Announcement'} — JA Group Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <AdminLayout>
        <div className="mx-auto max-w-4xl p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => navigate('/admin/announcements')} className="gap-1.5 text-gray-500">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-[#0A1F44]">{isNew ? 'New Announcement' : 'Edit Announcement'}</h1>
                <p className="mt-0.5 text-sm text-gray-500">Write in Markdown and publish to the corporate newsroom</p>
              </div>
            </div>
            {!isNew && form.status === 'published' && (
              <Button asChild variant="outline" className="gap-2">
                <a href={`/announcements/${form.slug}`} target="_blank" rel="noopener noreferrer">
                  <Eye className="h-4 w-4" />
                  View published page
                </a>
              </Button>
            )}
          </div>

          {error && (
            <div className="mb-5 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}
          {success && (
            <div className="mb-5 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              <CheckCircle className="h-4 w-4 shrink-0" />
              {success}
            </div>
          )}

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => <div key={item} className="h-14 animate-pulse rounded-lg bg-gray-100" />)}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-[#0A1F44]">Publication details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="title">Title *</Label>
                    <Input id="title" required value={form.title} onChange={(event) => handleTitleChange(event.target.value)} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="slug">URL slug *</Label>
                    <Input id="slug" required value={form.slug} onChange={(event) => setForm((current) => ({ ...current, slug: autoSlug(event.target.value) }))} />
                    <p className="text-xs text-gray-400">/announcements/{form.slug || 'announcement-title'}</p>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="summary">Summary *</Label>
                    <Textarea
                      id="summary"
                      required
                      value={form.summary}
                      onChange={(event) => setForm((current) => ({ ...current, summary: event.target.value }))}
                      className="min-h-[110px]"
                      maxLength={500}
                    />
                    <p className="text-xs text-gray-400">{form.summary.length}/500 characters</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="category">Category</Label>
                      <Input id="category" value={form.category} onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="authorName">Author</Label>
                      <Input id="authorName" value={form.authorName} onChange={(event) => setForm((current) => ({ ...current, authorName: event.target.value }))} />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="status">Status</Label>
                      <Select value={form.status} onValueChange={(value) => setForm((current) => ({ ...current, status: value }))}>
                        <SelectTrigger id="status"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="publishedAt">Publication date and time</Label>
                      <Input
                        id="publishedAt"
                        type="datetime-local"
                        value={form.publishedAt}
                        onChange={(event) => setForm((current) => ({ ...current, publishedAt: event.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                    <div className="flex items-start gap-3">
                      <Star className={`mt-0.5 h-5 w-5 ${form.isFeatured ? 'fill-amber-400 text-amber-500' : 'text-gray-400'}`} />
                      <div>
                        <Label htmlFor="featured" className="font-semibold">Featured announcement</Label>
                        <p className="mt-1 text-xs text-gray-500">Display prominently at the top of the newsroom.</p>
                      </div>
                    </div>
                    <Switch id="featured" checked={form.isFeatured} onCheckedChange={(isFeatured) => setForm((current) => ({ ...current, isFeatured }))} />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-[#0A1F44]">Announcement content</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    required
                    value={form.content}
                    onChange={(event) => setForm((current) => ({ ...current, content: event.target.value }))}
                    placeholder={'## Heading\n\nWrite the announcement in Markdown…'}
                    className="min-h-[420px] font-mono text-sm"
                  />
                  <p className="mt-2 text-xs text-gray-400">Supports Markdown headings, links, lists, tables and emphasis. Raw HTML is not rendered.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-[#0A1F44]">Search and sharing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="seoTitle">SEO title</Label>
                    <Input
                      id="seoTitle"
                      value={form.seoTitle}
                      onChange={(event) => setForm((current) => ({ ...current, seoTitle: event.target.value }))}
                      maxLength={70}
                    />
                    <p className="text-xs text-gray-400">{form.seoTitle.length}/70 characters</p>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="seoDescription">Meta description</Label>
                    <Textarea
                      id="seoDescription"
                      value={form.seoDescription}
                      onChange={(event) => setForm((current) => ({ ...current, seoDescription: event.target.value }))}
                      maxLength={180}
                      className="min-h-[90px]"
                    />
                    <p className="text-xs text-gray-400">{form.seoDescription.length}/180 characters</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => navigate('/admin/announcements')}>Cancel</Button>
                <Button type="submit" disabled={saving} className="gap-2 bg-[#2563EB] text-white hover:bg-[#1d4ed8]">
                  {saving ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Saving…
                    </span>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      {isNew ? 'Create Announcement' : 'Save Changes'}
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}

function toDateTimeLocal(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60_000).toISOString().slice(0, 16);
}
