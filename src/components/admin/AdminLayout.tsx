import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAdminAuth } from './AdminAuthContext';
import {
  LayoutDashboard,
  FileText,
  Globe,
  Navigation,
  Search,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Shield,
  Megaphone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Announcements', href: '/admin/announcements', icon: Megaphone },
  { label: 'Policy Manager', href: '/admin/policies', icon: FileText },
  { label: 'Page Manager', href: '/admin/pages', icon: Globe },
  { label: 'Navigation', href: '/admin/navigation', icon: Navigation },
  { label: 'SEO Settings', href: '/admin/seo', icon: Search },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const Sidebar = () => (
    <aside className="flex h-full flex-col bg-[#0A1F44] text-white">
      <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2563EB]">
          <Shield className="h-4 w-4 text-white" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold leading-tight">JA Group Services</p>
          <p className="text-xs text-white/50">Corporate Admin Portal</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navItems.map(item => {
          const active = location.pathname === item.href || location.pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                active ? 'bg-[#2563EB] text-white' : 'text-white/70 hover:bg-white/10 hover:text-white',
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
              {active && <ChevronRight className="ml-auto h-3 w-3" />}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 px-3 py-4">
        <div className="mb-2 flex items-center gap-3 px-3 py-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/30">
            <span className="text-xs font-bold text-[#93C5FD]">{user?.name?.charAt(0).toUpperCase() ?? 'A'}</span>
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">{user?.name}</p>
            <p className="truncate text-xs text-white/50">{user?.email}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="w-full justify-start gap-2 text-white/70 hover:bg-white/10 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </Button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="hidden shrink-0 lg:flex lg:w-64 lg:flex-col"><Sidebar /></div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute bottom-0 left-0 top-0 z-50 w-64"><Sidebar /></div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="flex items-center gap-3 border-b border-white/10 bg-[#0A1F44] px-4 py-3 text-white lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="p-1" aria-label="Open admin menu">
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <span className="text-sm font-semibold">JA Group Corporate Admin</span>
        </div>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
