import { useEffect, useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminGuard from '@/components/admin/AdminGuard';
import { useAdminAuth } from '@/components/admin/AdminAuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Globe, Navigation, Search, ArrowRight, Clock } from 'lucide-react';

interface Stats {
  policies: number;
  pages: number;
  navLinks: number;
  seoSettings: number;
}

const quickLinks = [
  { label: 'Policy Manager', desc: 'Create and manage legal policies', href: '/admin/policies', icon: FileText, color: 'bg-blue-50 text-blue-600' },
  { label: 'Page Manager', desc: 'Edit page content and hero sections', href: '/admin/pages', icon: Globe, color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Navigation', desc: 'Manage header and footer links', href: '/admin/navigation', icon: Navigation, color: 'bg-violet-50 text-violet-600' },
  { label: 'SEO Settings', desc: 'Edit page titles and descriptions', href: '/admin/seo', icon: Search, color: 'bg-amber-50 text-amber-600' },
];

export default function AdminDashboardPage() {
  const { user } = useAdminAuth();
  const [stats, setStats] = useState<Stats>({ policies: 0, pages: 0, navLinks: 0, seoSettings: 0 });

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/policies', { credentials: 'include' }).then(r => r.json()).catch(() => []),
      fetch('/api/admin/pages', { credentials: 'include' }).then(r => r.json()).catch(() => []),
      fetch('/api/admin/nav', { credentials: 'include' }).then(r => r.json()).catch(() => []),
      fetch('/api/admin/seo', { credentials: 'include' }).then(r => r.json()).catch(() => []),
    ]).then(([policies, pages, nav, seo]) => {
      setStats({
        policies: Array.isArray(policies) ? policies.length : 0,
        pages: Array.isArray(pages) ? pages.length : 0,
        navLinks: Array.isArray(nav) ? nav.length : 0,
        seoSettings: Array.isArray(seo) ? seo.length : 0,
      });
    });
  }, []);

  const now = new Date();
  const greeting = now.getHours() < 12 ? 'Good morning' : now.getHours() < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <AdminGuard>
      <Helmet>
        <title>Dashboard — JA Group Admin</title>
        <meta name="description" content="Admin dashboard for JA Group Services Ltd." />
        <link rel="canonical" href="https://jagroupservices.co.uk/admin/dashboard" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <AdminLayout>
        <div className="p-6 lg:p-8 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#0A1F44]">
              {greeting}, {user?.name?.split(' ')[0] ?? 'Admin'}
            </h1>
            <p className="text-gray-500 text-sm mt-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Policies', value: stats.policies, icon: FileText },
              { label: 'Pages', value: stats.pages, icon: Globe },
              { label: 'Nav Links', value: stats.navLinks, icon: Navigation },
              { label: 'SEO Configs', value: stats.seoSettings, icon: Search },
            ].map(stat => (
              <Card key={stat.label} className="border-0 shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <stat.icon className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-3xl font-bold text-[#0A1F44]">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-base font-semibold text-[#0A1F44] mb-4">Quick access</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map(item => (
                <Link key={item.href} to={item.href}>
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[#0A1F44] text-sm">{item.label}</p>
                        <p className="text-gray-500 text-xs mt-0.5 truncate">{item.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#2563EB] transition-colors shrink-0" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Site link */}
          <div className="mt-8 p-4 bg-[#0A1F44]/5 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#0A1F44]">View live site</p>
              <p className="text-xs text-gray-500">jagroupservices.co.uk</p>
            </div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#2563EB] hover:underline font-medium flex items-center gap-1"
            >
              Open <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
