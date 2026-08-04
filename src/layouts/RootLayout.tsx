import { Component, lazy, ReactElement, ReactNode, Suspense, type ErrorInfo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AppBottomNav } from '@/components/AppBottomNav';
import { AppHeader } from '@/components/AppHeader';
import CentralCustomerServiceAssistant from '@/components/CentralCustomerServiceAssistant';
import FooterCorporateDisclosure from '@/components/FooterCorporateDisclosure';
import HeadOfficeLaunchGate from '@/components/HeadOfficeLaunchGate';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';

// Lazy load CookieBanner - if blocked by ad blockers, the app continues without it
const CookieBanner = lazy(() =>
  import('@/components/CookieBanner').catch((error) => {
    console.warn('Failed to load CookieBanner:', error);
    return {
      default: () => null,
    };
  })
);

class CookieBannerErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: unknown): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('CookieBanner error boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isPWA, setIsPWA] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isIOSStandalone = (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
    setIsPWA(isStandalone || isIOSStandalone);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timer);
  }, [location]);

  const getPageTitle = () => {
    const titles: Record<string, string> = {
      '/': 'Home',
      '/id': 'JA Group Services ID',
      '/about-us': 'About Us',
      '/meet-the-team': 'Meet the Team',
      '/about-our-divisions': 'Brands and Divisions',
      '/our-group-structure': 'Our Group Structure',
      '/services': 'Our Services',
      '/customer-support': 'Customer Support',
      '/accessibility-statement': 'Accessibility',
      '/security': 'Security',
      '/privacy-centre': 'Privacy Centre',
      '/governance': 'Governance',
      '/safeguarding': 'Safeguarding',
      '/partner-with-us': 'Partner With Us',
      '/contactus': 'Contact Us',
      '/announcements': 'Announcements',
    };

    return titles[location.pathname] || 'JA Group Services';
  };

  if (isPWA) {
    return (
      <Website>
        <ScrollToTop />
        <HeadOfficeLaunchGate />
        <div className="min-h-screen bg-gray-50">
          <AppHeader title={getPageTitle()} />
          <main className="pb-8">{children}</main>
          <AppBottomNav />
        </div>
        <CentralCustomerServiceAssistant />
        <CookieBannerErrorBoundary>
          <Suspense fallback={null}>
            <CookieBanner />
          </Suspense>
        </CookieBannerErrorBoundary>
      </Website>
    );
  }

  return (
    <Website>
      <ScrollToTop />
      <HeadOfficeLaunchGate />
      <Header />
      {children}
      <Footer />
      <FooterCorporateDisclosure />
      <CentralCustomerServiceAssistant />
      <CookieBannerErrorBoundary>
        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>
      </CookieBannerErrorBoundary>
    </Website>
  );
}
