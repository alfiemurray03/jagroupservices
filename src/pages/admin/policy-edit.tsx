import { useEffect, useState, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminGuard from '@/components/admin/AdminGuard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, AlertCircle, CheckCircle } from 'lucide-react';

export default function AdminPolicyEditPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNew = id === 'new';

  const [form, setForm] = useState({
    title: '',
    slug: '',
    seoTitle: '',
    seoDescription: '',
    content: '',
    status: 'draft',
    version: '1.0',
  });
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!isNew && id) {
      fetch(`/api/admin/policies/${id}`, { credentials: 'include' })
        .then(r => r.json())
        .then(data => {
          setForm({
            title: data.title || '',
            slug: data.slug || '',
            seoTitle: data.seoTitle || '',
            seoDescription: data.seoDescription || '',
            content: data.content || '',
            status: data.status || 'draft',
            version: data.version || '1.0',
          });
          setLoading(false);
        })
        .catch(() => { setError('Failed to load policy.'); setLoading(false); });
    }
  }, [id, isNew]);

  const autoSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const handleTitleChange = (title: string) => {
    setForm(f => ({ ...f, title, slug: isNew ? autoSlug(title) : f.slug }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);

    const url = isNew ? '/api/admin/policies' : `/api/admin/policies/${id}`;
    const method = isNew ? 'POST' : 'PUT';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setSaving(false);

    if (res.ok) {
      setSuccess(isNew ? 'Policy created successfully.' : 'Policy updated successfully.');
      if (isNew && data.id) {
        navigate(`/admin/policies/${data.id}`, { replace: true });
      }
    } else {
      setError(data.error || 'Failed to save policy.');
    }
  };

  return (
    <AdminGuard>
      <Helmet>
        <title>{isNew ? 'New Policy' : 'Edit Policy'} — JA Group Admin</title>
        <meta name="description" content="Edit policy — JA Group Services Ltd admin." />
        <link rel="canonical" href="https://jagroupservices.co.uk/admin/policies" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <AdminLayout>
        <div className="p-6 lg:p-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Button variant="ghost" size="sm" onClick={() => navigate('/admin/policies')} className="gap-1.5 text-gray-500">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-[#0A1F44]">{isNew ? 'New Policy' : 'Edit Policy'}</h1>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-5 text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}
          {success && (
            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg px-4 py-3 mb-5 text-sm">
              <CheckCircle className="w-4 h-4 shrink-0" />
              {success}
            </div>
          )}

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => <div key={i} className="h-12 bg-gray-100 rounded-lg animate-pulse" />)}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-[#0A1F44]">Policy details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        required
                        value={form.title}
                        onChange={e => handleTitleChange(e.target.value)}
                        placeholder="Privacy Policy"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="slug">Slug *</Label>
                      <Input
                        id="slug"
                        required
                        value={form.slug}
                        onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                        placeholder="privacy-policy"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="status">Status</Label>
                      <Select value={form.status} onValueChange={v => setForm(f => ({ ...f, status: v }))}>
                        <SelectTrigger id="status">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="version">Version</Label>
                      <Input
                        id="version"
                        value={form.version}
                        onChange={e => setForm(f => ({ ...f, version: e.target.value }))}
                        placeholder="1.0"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-[#0A1F44]">Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    required
                    value={form.content}
                    onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                    placeholder="Policy content (Markdown or plain text)…"
                    className="min-h-[300px] font-mono text-sm"
                  />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-[#0A1F44]">SEO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="seoTitle">SEO title</Label>
                    <Input
                      id="seoTitle"
                      value={form.seoTitle}
                      onChange={e => setForm(f => ({ ...f, seoTitle: e.target.value }))}
                      placeholder="Privacy Policy — JA Group Services"
                      maxLength={60}
                    />
                    <p className="text-xs text-gray-400">{form.seoTitle.length}/60 characters</p>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="seoDescription">Meta description</Label>
                    <Textarea
                      id="seoDescription"
                      value={form.seoDescription}
                      onChange={e => setForm(f => ({ ...f, seoDescription: e.target.value }))}
                      placeholder="A brief description for search engines…"
                      maxLength={160}
                      className="min-h-[80px]"
                    />
                    <p className="text-xs text-gray-400">{form.seoDescription.length}/160 characters</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => navigate('/admin/policies')}>
                  Cancel
                </Button>
                <Button type="submit" disabled={saving} className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white gap-2">
                  {saving ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Saving…
                    </span>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      {isNew ? 'Create Policy' : 'Save Changes'}
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
