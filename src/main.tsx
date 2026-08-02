import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from '@dr.pogodin/react-helmet';

import App from './App';
import { AutoRefresh } from './components/AutoRefresh';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { SplashScreen } from './components/SplashScreen';
import './styles/globals.css';
import './styles/theme-fixes.css';
import './styles/logo-size-adjustments.css';
import './styles/homepage-title.css';
import './styles/desktop-density.css';
import './styles/email-addresses.css';
import './styles/print.css';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('SW registered:', registration);

      setInterval(() => {
        registration.update();
      }, 60000);

      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('New version available! Reloading...');
              window.location.reload();
            }
          });
        }
      });
    }).catch((error) => {
      console.log('SW registration failed:', error);
    });
  });
}

if (import.meta.env.MODE === 'development') {
  const meta = document.createElement('meta');
  meta.name = 'robots';
  meta.content = 'noindex, nofollow';
  document.head.appendChild(meta);
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Root element not found');
const root = ReactDOM.createRoot(rootElement);

function Root() {
  const [showSplash, setShowSplash] = useState(true);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isIOSStandalone = (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (isStandalone || isIOSStandalone) {
      setShowSplash(true);
    } else {
      setShowSplash(false);
      setAppReady(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setTimeout(() => setAppReady(true), 100);
  };

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        {appReady && (
          <>
            <AutoRefresh />
            <App />
            <PWAInstallPrompt />
          </>
        )}
      </QueryClientProvider>
    </React.StrictMode>
  );
}

root.render(
  <HelmetProvider>
    <Root />
  </HelmetProvider>,
);
