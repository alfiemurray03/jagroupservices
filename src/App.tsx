import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AiroErrorBoundary from '../export-plugins/AiroErrorBoundary';
import RootLayout from './layouts/RootLayout';
import { routes, standaloneRoutes } from './routes';
import Spinner from './components/Spinner';
import { LanguageProvider } from './components/LanguageProvider';
import { AdminAuthProvider } from './components/admin/AdminAuthContext';

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
    children: publicRoutes,
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
  // Standalone routes (no layout)
  ...standaloneRoutes.map(route => ({
    ...route,
    element: import.meta.env.MODE === 'development' ? (
      <AiroErrorBoundary>
        <Suspense fallback={<SpinnerFallback />}>
          {route.element}
        </Suspense>
      </AiroErrorBoundary>
    ) : (
      <Suspense fallback={<SpinnerFallback />}>
        {route.element}
      </Suspense>
    ),
  })),
]);

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
