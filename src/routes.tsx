import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

import PublicContentPage from './pages/PublicContentPage';

// Admin pages
import AdminLoginPage from './pages/admin/login';
import AdminDashboardPage from './pages/admin/dashboard';
import AdminPoliciesPage from './pages/admin/policies';
import AdminPolicyEditPage from './pages/admin/policy-edit';
import AdminPagesPage from './pages/admin/pages';
import AdminNavigationPage from './pages/admin/navigation';
import AdminSeoPage from './pages/admin/seo';
import AdminSetupPage from './pages/admin/setup';

const isDevelopment = import.meta.env.MODE === 'development';
const NotFoundPage = isDevelopment
  ? lazy(() => import('../export-plugins/PageNotFound'))
  : lazy(() => import('./pages/_404'));

const publicRoute = (path: string, pageId: string): RouteObject => ({
  path,
  element: <PublicContentPage pageId={pageId} />,
});

export const routes: RouteObject[] = [
  publicRoute('/', 'home'),
  publicRoute('/about-us', 'about'),
  publicRoute('/about-our-divisions', 'brands'),
  publicRoute('/our-group-structure', 'structure'),
  publicRoute('/partner-with-us', 'partner'),
  publicRoute('/contactus', 'contact'),
  publicRoute('/contact-us', 'contact'),
  publicRoute('/trust-and-governance', 'trust'),
  publicRoute('/corporate', 'trust'),
  publicRoute('/help-and-support', 'support'),
  publicRoute('/service-status', 'status'),
  publicRoute('/announcements', 'announcements'),
  publicRoute('/former-services', 'former-services'),
  publicRoute('/terms-of-service', 'terms'),
  publicRoute('/privacy-policy', 'privacy'),
  publicRoute('/cookies-policy', 'cookies'),
  publicRoute('/complaints-policy', 'complaints'),
  publicRoute('/ip-statement', 'ip'),
  publicRoute('/accessibility-statement', 'accessibility'),
  publicRoute('/security-and-vulnerability-disclosure', 'security'),
  publicRoute('/affiliate-disclosure', 'affiliate'),
  publicRoute('/sitemap', 'sitemap'),

  // Admin routes (no RootLayout header/footer — handled by App.tsx)
  {
    path: '/admin/login',
    element: <AdminLoginPage />,
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboardPage />,
  },
  {
    path: '/admin/policies',
    element: <AdminPoliciesPage />,
  },
  {
    path: '/admin/policies/:id',
    element: <AdminPolicyEditPage />,
  },
  {
    path: '/admin/pages',
    element: <AdminPagesPage />,
  },
  {
    path: '/admin/navigation',
    element: <AdminNavigationPage />,
  },
  {
    path: '/admin/setup',
    element: <AdminSetupPage />,
  },
  {
    path: '/admin/seo',
    element: <AdminSeoPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const standaloneRoutes: RouteObject[] = [];

export type Path =
  | '/'
  | '/about-us'
  | '/about-our-divisions'
  | '/our-group-structure'
  | '/partner-with-us'
  | '/contactus'
  | '/trust-and-governance'
  | '/help-and-support'
  | '/service-status'
  | '/announcements'
  | '/former-services'
  | '/terms-of-service'
  | '/privacy-policy'
  | '/cookies-policy'
  | '/complaints-policy'
  | '/ip-statement'
  | '/accessibility-statement'
  | '/security-and-vulnerability-disclosure'
  | '/affiliate-disclosure'
  | '/sitemap'
  | '/admin/login'
  | '/admin/dashboard';

export type Params = Record<string, string | undefined>;
