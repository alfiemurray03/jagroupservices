import { useEffect, useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminGuard from '@/components/admin/AdminGuard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, FileText, Edit, Trash2, Eye, EyeOff, AlertCircle } from 'lucide-react';

interface Policy {
  id: number;
  title: string;
  slug: string;
  status: string;
  version: string;
  lastUpdated: string;
}

export default function AdminPoliciesPage() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = () => {
    setLoading(true);
    fetch('/api/admin/policies', { credentials: 'include' })
      .then(r => r.json())
      .then(data => { setPolicies(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => { setError('Failed to load policies.'); setLoading(false); });
  };

  useEffect(load, []);

  const toggleStatus = async (policy: Policy) => {
    const newStatus = policy.status === 'published' ? 'draft' : 'published';
    await fetch(`/api/admin/policies/${policy.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ status: newStatus }),
    });
    load();
  };

  const deletePolicy = async (id: number) => {
    if (!confirm('Delete this policy? This cannot be undone.')) return;
    setDeleting(id);
    await fetch(`/api/admin/policies/${id}`, { method: 'DELETE', credentials: 'include' });
    setDeleting(null);
    load();
  };

  return (
    <AdminGuard>
      <Helmet>
        <title>Policy Manager — JA Group Admin</title>
        <meta name="description" content="Policy manager for JA Group Services Ltd admin." />
        <link rel="canonical" href="https://jagroupservices.co.uk/admin/policies" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <AdminLayout>
        <div className="p-6 lg:p-8 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-[#0A1F44]">Policy Manager</h1>
              <p className="text-gray-500 text-sm mt-0.5">Create and manage legal policies and documents</p>
            </div>
            <Link to="/admin/policies/new">
              <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white gap-2">
                <Plus className="w-4 h-4" />
                New Policy
              </Button>
            </Link>
          </div>

          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-5 text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-20 bg-gray-100 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : policies.length === 0 ? (
            <Card className="border-dashed border-2 border-gray-200 shadow-none">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <FileText className="w-10 h-10 text-gray-300 mb-3" />
                <p className="font-medium text-gray-500">No policies yet</p>
                <p className="text-sm text-gray-400 mt-1">Create your first policy to get started</p>
                <Link to="/admin/policies/new" className="mt-4">
                  <Button size="sm" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white gap-2">
                    <Plus className="w-3.5 h-3.5" />
                    New Policy
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {policies.map(policy => (
                <Card key={policy.id} className="border-0 shadow-sm">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-[#0A1F44] text-sm">{policy.title}</p>
                        <Badge
                          variant={policy.status === 'published' ? 'default' : 'secondary'}
                          className={policy.status === 'published' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100' : ''}
                        >
                          {policy.status}
                        </Badge>
                        <span className="text-xs text-gray-400">v{policy.version}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        /{policy.slug} · Updated {new Date(policy.lastUpdated).toLocaleDateString('en-GB')}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleStatus(policy)}
                        className="text-gray-500 hover:text-[#0A1F44] gap-1.5 text-xs"
                        title={policy.status === 'published' ? 'Unpublish' : 'Publish'}
                      >
                        {policy.status === 'published' ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span className="hidden sm:inline">{policy.status === 'published' ? 'Unpublish' : 'Publish'}</span>
                      </Button>
                      <Link to={`/admin/policies/${policy.id}`}>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#0A1F44] gap-1.5 text-xs">
                          <Edit className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Edit</span>
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deletePolicy(policy.id)}
                        disabled={deleting === policy.id}
                        className="text-red-400 hover:text-red-600 hover:bg-red-50 gap-1.5 text-xs"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Delete</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
