import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/home-with-aptenvo';

import AboutUsPage from './pages/about-us-with-aptenvo';
import MeetTheTeamPage from './pages/meet-the-team';
import JackNicolauSousaDaSilvaPage from './pages/team/jack-nicolau-sousa-da-silva';
import AlfieThomasHolywoodMurrayPage from './pages/team/alfie-thomas-holywood-murray';
import AboutOurDivisionsPage from './pages/brands';
import OurGroupStructurePage from './pages/group-structure-with-aptenvo';
import ServicesPage from './pages/services';
import CustomerSupportPage from './pages/customer-support';
import AccessibilityStatementPage from './pages/accessibility-statement';
import SecurityPage from './pages/security';
import PrivacyCentrePage from './pages/privacy-centre';
import GovernancePage from './pages/governance';
import SafeguardingPage from './pages/safeguarding';
import CookiesPolicyPage from './pages/cookies-policy';
import ContactUsPage from './pages/contact-us';
import ComplaintsPolicyPage from './pages/complaints-policy';
import PrivacyPolicyPage from './pages/privacy-policy';
import TermsOfServicePage from './pages/terms-of-service';
import AnnouncementsPage from './pages/announcements';
import SitemapPage from './pages/sitemap';
import PartnerWithUsPage from './pages/partner-with-us';
import JAGroupServicesIDPage from './pages/ja-group-services-id';

// Admin pages
import AdminLoginPage from './pages/admin/login';
import AdminDashboardPage from './pages/admin/dashboard';
import AdminPoliciesPage from './pages/admin/policies';
import AdminPolicyEditPage from './pages/admin/policy-edit';
import AdminPagesPage from './pages/admin/pages';
import AdminNavigationPage from './pages/admin/navigation';
import AdminSeoPage from './pages/admin/seo';

import AdminSetupPage from './pages/admin/setup';

// Lazy load components for code splitting
const isDevelopment = import.meta.env.MODE === 'development';
const NotFoundPage = isDevelopment ? lazy(() => import('../export-plugins/PageNotFound')) : lazy(() => import('./pages/_404'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/id',
    element: <JAGroupServicesIDPage />,
  },
  {
    path: '/about-us',
    element: <AboutUsPage />,
  },
  {
    path: '/meet-the-team',
    element: <MeetTheTeamPage />,
  },
  {
    path: '/team/jack-nicolau-sousa-da-silva',
    element: <JackNicolauSousaDaSilvaPage />,
  },
  {
    path: '/team/alfie-thomas-holywood-murray',
    element: <AlfieThomasHolywoodMurrayPage />,
  },
  {
    path: '/about-our-divisions',
    element: <AboutOurDivisionsPage />,
  },
  {
    path: '/our-group-structure',
    element: <OurGroupStructurePage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/customer-support',
    element: <CustomerSupportPage />,
  },
  {
    path: '/accessibility-statement',
    element: <AccessibilityStatementPage />,
  },
  {
    path: '/security',
    element: <SecurityPage />,
  },
  {
    path: '/privacy-centre',
    element: <PrivacyCentrePage />,
  },
  {
    path: '/governance',
    element: <GovernancePage />,
  },
  {
    path: '/safeguarding',
    element: <SafeguardingPage />,
  },
  {
    path: '/partner-with-us',
    element: <PartnerWithUsPage />,
  },
  {
    path: '/cookies-policy',
    element: <CookiesPolicyPage />,
  },
  {
    path: '/contactus',
    element: <ContactUsPage />,
  },
  {
    path: '/complaints-policy',
    element: <ComplaintsPolicyPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/terms-of-service',
    element: <TermsOfServicePage />,
  },
  {
    path: '/announcements',
    element: <AnnouncementsPage />,
  },
  {
    path: '/sitemap',
    element: <SitemapPage />,
  },
  // Admin routes (no RootLayout header/footer — handled by AdminLayout)
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

// Standalone routes (no header/footer)
export const standaloneRoutes: RouteObject[] = [];

// Types for type-safe navigation
export type Path = '/' | '/id' | '/about-us' | '/meet-the-team' | '/team/jack-nicolau-sousa-da-silva' | '/team/alfie-thomas-holywood-murray' | '/about-our-divisions' | '/our-group-structure' | '/services' | '/customer-support' | '/accessibility-statement' | '/security' | '/privacy-centre' | '/governance' | '/safeguarding' | '/partner-with-us' | '/cookies-policy' | '/contactus' | '/complaints-policy' | '/privacy-policy' | '/terms-of-service' | '/announcements' | '/sitemap' | '/admin/login' | '/admin/dashboard';

export type Params = Record<string, string | undefined>;
