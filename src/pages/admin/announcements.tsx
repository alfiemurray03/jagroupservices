import { Helmet } from '@dr.pogodin/react-helmet';
import {
  AlertCircle,
  Edit,
  Eye,
  EyeOff,
  Megaphone,
  Plus,
  Star,
  Trash2,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AdminGuard from '@/components/admin/AdminGuard';
import AdminLayout from '@/components/admin/AdminLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Announcement {
  id: number;
  title: string;
  slug: string;
  summary: string;
  category: string;
  status: string;
  isFeatured: boolean;
  publishedAt: string | null;
  updatedAt: string;
}

export default function AdminAnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = () => {
    setLoading(true);
    setError('');
    fetch('/api/admin/announcements', { credentials: 'include' })
      .then(async (response) => {
        if (!response.ok) throw new Error('Failed to load announcements.');
        return response.json() as Promise<Announcement[]>;
      })
      .then((data) => {
        setAnnouncements(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load announcements.');
        setLoading(false);
      });
  };

  useEffect(load, []);

  const toggleStatus = async (announcement: Announcement) => {
    await fetch(`/api/admin/announcements/${announcement.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ status: announcement.status === 'published' ? 'draft' : 'published' }),
    });
    load();
  };

  const deleteAnnouncement = async (announcement: Announcement) => {
    if (!window.confirm(`Delete “${announcement.title}”? This cannot be undone.`)) return;
    setDeleting(announcement.id);
    await fetch(`/api/admin/announcements/${announcement.id}`, {
      method: 'DELETE',
      credentials: 'include',
    });
    setDeleting(null);
    load();
  };

  return (
    <AdminGuard>
      <Helmet>
        <title>Announcement Manager — JA Group Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <AdminLayout>
        <div className="mx-auto max-w-6xl p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#0A1F44]">Announcement Manager</h1>
              <p className="mt-0.5 text-sm text-gray-500">Draft, publish and maintain the corporate newsroom</p>
            </div>
            <Link to="/admin/announcements/new">
              <Button className="gap-2 bg-[#2563EB] text-white hover:bg-[#1d4ed8]">
                <Plus className="h-4 w-4" />
                New Announcement
              </Button>
            </Link>
          </div>

          {error && (
            <div className="mb-5 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((item) => <div key={item} className="h-24 animate-pulse rounded-xl bg-gray-100" />)}
            </div>
          ) : announcements.length === 0 ? (
            <Card className="border-2 border-dashed border-gray-200 shadow-none">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <Megaphone className="mb-3 h-11 w-11 text-gray-300" />
                <p className="font-medium text-gray-600">No announcements yet</p>
                <p className="mt-1 text-sm text-gray-400">Create a draft or publish the first newsroom update.</p>
                <Link to="/admin/announcements/new" className="mt-5">
                  <Button size="sm" className="gap-2 bg-[#2563EB] text-white hover:bg-[#1d4ed8]">
                    <Plus className="h-3.5 w-3.5" />
                    New Announcement
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="border-0 shadow-sm">
                  <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      {announcement.isFeatured ? <Star className="h-4 w-4 fill-amber-400 text-amber-500" /> : <Megaphone className="h-4 w-4 text-[#2563EB]" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-[#0A1F44]">{announcement.title}</p>
                        <Badge
                          variant={announcement.status === 'published' ? 'default' : 'secondary'}
                          className={announcement.status === 'published' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100' : ''}
                        >
                          {announcement.status}
                        </Badge>
                        <Badge variant="outline">{announcement.category}</Badge>
                        {announcement.isFeatured && <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Featured</Badge>}
                      </div>
                      <p className="mt-1 line-clamp-1 text-xs text-gray-500">{announcement.summary}</p>
                      <p className="mt-1 text-xs text-gray-400">
                        /announcements/{announcement.slug} · {formatDate(announcement.publishedAt ?? announcement.updatedAt)}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-2">
                      {announcement.status === 'published' && (
                        <Button asChild variant="ghost" size="sm" className="gap-1.5 text-xs text-gray-500">
                          <a href={`/announcements/${announcement.slug}`} target="_blank" rel="noopener noreferrer">
                            <Eye className="h-3.5 w-3.5" />
                            View
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleStatus(announcement)}
                        className="gap-1.5 text-xs text-gray-500"
                      >
                        {announcement.status === 'published' ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                        {announcement.status === 'published' ? 'Unpublish' : 'Publish'}
                      </Button>
                      <Link to={`/admin/announcements/${announcement.id}`}>
                        <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-gray-500">
                          <Edit className="h-3.5 w-3.5" />
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteAnnouncement(announcement)}
                        disabled={deleting === announcement.id}
                        className="gap-1.5 text-xs text-red-500 hover:bg-red-50 hover:text-red-700"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Delete
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

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Date unavailable';
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
}
