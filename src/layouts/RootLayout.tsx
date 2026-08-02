import { Component, lazy, Suspense, type ErrorInfo, type ReactElement, type ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AppBottomNav } from '@/components/AppBottomNav';
import { AppHeader } from '@/components/AppHeader';
import CentralCustomerServiceAssistant from '@/components/CentralCustomerServiceAssistant';
import FooterCorporateDisclosure from '@/components/FooterCorporateDisclosure';
import HeadOfficeLaunchGate from '@/components/HeadOfficeLaunchGate';
import ScrollToTop from '@/components/ScrollToTop';
import { useLanguage } from '@/components/LanguageProvider';
import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';
import { publicPageList, text } from '@/lib/public-site-content';

const CookieBanner = lazy(() =>
  import('@/components/CookieBanner').catch((error) => {
    console.warn('Failed to load CookieBanner:', error);
    return { default: () => null };
  }),
);

class CookieBannerErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('CookieBanner error boundary caught an error:', error, errorInfo);
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

export default function RootLayout({ children }: { children: ReactElement }) {
  const [isPWA, setIsPWA] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches;
    const iosStandalone = (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
    setIsPWA(standalone || iosStandalone);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const timer = window.setTimeout(() => window.scrollTo(0, 0), 50);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  const matchedPage = publicPageList.find((page) => page.path === location.pathname)
    || (location.pathname === '/contact-us' ? publicPageList.find((page) => page.id === 'contact') : undefined)
    || (location.pathname === '/corporate' ? publicPageList.find((page) => page.id === 'trust') : undefined);
  const pageTitle = matchedPage ? text(matchedPage.title, language) : 'JA Group Services Ltd';

  const sharedControls = (
    <>
      <CentralCustomerServiceAssistant />
      <CookieBannerErrorBoundary>
        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>
      </CookieBannerErrorBoundary>
    </>
  );

  if (isPWA) {
    return (
      <Website>
        <ScrollToTop />
        <HeadOfficeLaunchGate />
        <div className="min-h-screen bg-background text-foreground">
          <AppHeader title={pageTitle} />
          <main>{children}</main>
          <AppBottomNav />
        </div>
        {sharedControls}
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
      {sharedControls}
    </Website>
  );
}
