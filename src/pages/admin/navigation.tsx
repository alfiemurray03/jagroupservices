import { useEffect, useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminGuard from '@/components/admin/AdminGuard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Save, AlertCircle, CheckCircle, GripVertical } from 'lucide-react';

interface NavLink {
  id?: number;
  location: string;
  label: string;
  href: string;
  isExternal: boolean;
  sortOrder: number;
  isActive: boolean;
}

function NavSection({ location, title }: { location: string; title: string }) {
  const [links, setLinks] = useState<NavLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetch('/api/admin/nav', { credentials: 'include' })
      .then(r => r.json())
      .then(data => {
        const filtered = Array.isArray(data) ? data.filter((l: NavLink) => l.location === location) : [];
        setLinks(filtered.length > 0 ? filtered : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [location]);

  const addLink = () => {
    setLinks(prev => [...prev, {
      location,
      label: '',
      href: '',
      isExternal: false,
      sortOrder: prev.length,
      isActive: true,
    }]);
  };

  const updateLink = (index: number, field: keyof NavLink, value: string | boolean | number) => {
    setLinks(prev => prev.map((l, i) => i === index ? { ...l, [field]: value } : l));
  };

  const removeLink = (index: number) => {
    setLinks(prev => prev.filter((_, i) => i !== index));
  };

  const save = async () => {
    setError('');
    setSuccess('');
    setSaving(true);
    const res = await fetch('/api/admin/nav', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        action: 'replace',
        links: links.map((l, i) => ({ ...l, sortOrder: i })),
      }),
    });
    const data = await res.json();
    setSaving(false);
    if (res.ok) setSuccess('Navigation saved.');
    else setError(data.error || 'Failed to save.');
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base text-[#0A1F44]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}
        {success && (
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg px-4 py-3 text-sm">
            <CheckCircle className="w-4 h-4 shrink-0" />
            {success}
          </div>
        )}

        {loading ? (
          <div className="space-y-2">
            {[1, 2].map(i => <div key={i} className="h-12 bg-gray-100 rounded animate-pulse" />)}
          </div>
        ) : (
          <>
            {links.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-4">No links yet. Add one below.</p>
            )}
            {links.map((link, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <GripVertical className="w-4 h-4 text-gray-300 mt-2.5 shrink-0" />
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs">Label</Label>
                    <Input
                      value={link.label}
                      onChange={e => updateLink(i, 'label', e.target.value)}
                      placeholder="Home"
                      className="h-8 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">URL / href</Label>
                    <Input
                      value={link.href}
                      onChange={e => updateLink(i, 'href', e.target.value)}
                      placeholder="/about-us"
                      className="h-8 text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-3 sm:col-span-2">
                    <div className="flex items-center gap-2">
                      <Switch
                        id={`ext-${location}-${i}`}
                        checked={link.isExternal}
                        onCheckedChange={v => updateLink(i, 'isExternal', v)}
                      />
                      <Label htmlFor={`ext-${location}-${i}`} className="text-xs text-gray-500">External link</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch
                        id={`active-${location}-${i}`}
                        checked={link.isActive}
                        onCheckedChange={v => updateLink(i, 'isActive', v)}
                      />
                      <Label htmlFor={`active-${location}-${i}`} className="text-xs text-gray-500">Active</Label>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeLink(i)}
                  className="text-red-400 hover:text-red-600 hover:bg-red-50 mt-1 shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            ))}

            <div className="flex items-center justify-between pt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addLink}
                className="gap-1.5 text-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Add link
              </Button>
              <Button
                type="button"
                size="sm"
                onClick={save}
                disabled={saving}
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white gap-1.5 text-xs"
              >
                {saving ? (
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Saving…
                  </span>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    Save {title}
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default function AdminNavigationPage() {
  return (
    <AdminGuard>
      <Helmet>
        <title>Navigation Manager — JA Group Admin</title>
        <meta name="description" content="Navigation manager for JA Group Services Ltd admin." />
        <link rel="canonical" href="https://jagroupservices.co.uk/admin/navigation" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <AdminLayout>
        <div className="p-6 lg:p-8 max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0A1F44]">Navigation Manager</h1>
            <p className="text-gray-500 text-sm mt-0.5">Manage header and footer navigation links</p>
          </div>
          <div className="space-y-6">
            <NavSection location="header" title="Header navigation" />
            <NavSection location="footer" title="Footer links" />
          </div>
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
