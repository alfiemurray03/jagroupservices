import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AiroErrorBoundary from '../export-plugins/AiroErrorBoundary';
import RootLayout from './layouts/RootLayout';
import { routes, standaloneRoutes } from './routes';
import Spinner from './components/Spinner';
import { LanguageProvider } from './components/LanguageProvider';
import { AdminAuthProvider } from './components/admin/AdminAuthContext';
import JAGroupServicesIDSignInPage from './pages/ja-group-services-id-sign-in';
import JAGroupServicesIDDashboardPage from './pages/ja-group-services-id-dashboard';

const SpinnerFallback = () => (
  <div className="flex justify-center py-8 h-screen items-center">
    <Spinner />
  </div>
);

// Admin routes — no RootLayout header/footer, wrapped in AdminAuthProvider
const adminPaths = ['/admin/login', '/admin/dashboard', '/admin/policies', '/admin/pages', '/admin/navigation', '/admin/seo'];
const adminRoutes = routes.filter(r => typeof r.path === 'string' && adminPaths.some(p => r.path === p || (r.path as string).startsWith('/admin/')));
const publicRoutes = routes.filter(r => !adminRoutes.includes(r));

const AdminOutlet = () => (
  <AdminAuthProvider>
    <Suspense fallback={<SpinnerFallback />}>
      <Outlet />
    </Suspense>
  </AdminAuthProvider>
);

const AdminOutletDev = () => (
  <AiroErrorBoundary>
    <AdminAuthProvider>
      <Suspense fallback={<SpinnerFallback />}>
        <Outlet />
      </Suspense>
    </AdminAuthProvider>
  </AiroErrorBoundary>
);

const wrapStandalone = (element: React.ReactNode) => (
  import.meta.env.MODE === 'development' ? (
    <AiroErrorBoundary>
      <Suspense fallback={<SpinnerFallback />}>{element}</Suspense>
    </AiroErrorBoundary>
  ) : (
    <Suspense fallback={<SpinnerFallback />}>{element}</Suspense>
  )
);

// Create router with layout wrapper
const router = createBrowserRouter([
  {
    path: '/',
    element: import.meta.env.MODE === 'development' ? (
      <AiroErrorBoundary>
        <Suspense fallback={<SpinnerFallback />}>
          <RootLayout>
            <Outlet />
          </RootLayout>
        </Suspense>
      </AiroErrorBoundary>
    ) : (
      <Suspense fallback={<SpinnerFallback />}>
        <RootLayout>
          <Outlet />
        </RootLayout>
      </Suspense>
    ),
    children: [
      { path: '/id/sign-in', element: <JAGroupServicesIDSignInPage /> },
      ...publicRoutes,
    ],
  },
  // Admin routes — no RootLayout
  {
    path: '/admin',
    element: import.meta.env.MODE === 'development' ? <AdminOutletDev /> : <AdminOutlet />,
    children: adminRoutes.map(r => ({
      ...r,
      // Strip the /admin prefix for child matching
      path: (r.path as string).replace(/^\/admin\/?/, '') || undefined,
    })),
  },
  {
    path: '/id/dashboard',
    element: wrapStandalone(<JAGroupServicesIDDashboardPage />),
  },
  // Standalone routes (no layout)
  ...standaloneRoutes.map(route => ({
    ...route,
    element: wrapStandalone(route.element),
  })),
]);

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
