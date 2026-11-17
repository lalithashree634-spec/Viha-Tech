import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingQuickAction from './components/FloatingQuickAction';
import GlobalPreloader from './components/GlobalPreloader';
import HomePage from './pages/HomePage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import SupportModelsPage from './pages/SupportModelsPage';
import CleanupPage from './pages/CleanupPage';
import ContactPage from './pages/ContactPage';
import { ThemeProvider } from './context/ThemeContext';
import { useLenis, getLenis } from './hooks/useLenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/main.scss';

function AppContent() {
  const location = useLocation();
  const navType = useNavigationType();

  // Initialize Buttery Smooth Inertia Scrolling with Lenis
  useLenis();

  const [initialDone, setInitialDone] = useState(false);
  const [transitionKey, setTransitionKey] = useState(0);
  const [showTransitionLoader, setShowTransitionLoader] = useState(false);

  const prevPathRef = useRef(location.pathname);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevPathRef.current = location.pathname;
      return;
    }

    if (prevPathRef.current !== location.pathname) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }

      // Refresh ScrollTrigger calculations on navigation
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      // Only forward navigation (PUSH) triggers the unique loader; Back navigation (POP) does NOT!
      const isExplicitBack = location.state?.isBack;
      if (navType === 'PUSH' && !isExplicitBack) {
        setTransitionKey((prev) => prev + 1);
        setShowTransitionLoader(true);
      } else {
        setShowTransitionLoader(false);
      }

      prevPathRef.current = location.pathname;
    }
  }, [location.pathname, location.state, navType]);

  return (
    <>
      {/* 1. Initial Site Boot Unique Preloader */}
      {!initialDone && (
        <GlobalPreloader
          key="initial-boot-loader"
          isPageTransition={false}
          onFinish={() => setInitialDone(true)}
        />
      )}

      {/* 2. Next-Page Forward Navigation Loader (only on PUSH, never on back) */}
      {initialDone && showTransitionLoader && (
        <GlobalPreloader
          key={`nav-forward-${transitionKey}`}
          isPageTransition={true}
          onFinish={() => setShowTransitionLoader(false)}
        />
      )}

      <div className="app-container">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<CapabilitiesPage />} />
            <Route path="/service/:slug" element={<ServiceDetailPage />} />
            <Route path="/what-we-do" element={<WhatWeDoPage />} />
            <Route path="/support-models" element={<SupportModelsPage />} />
            <Route path="/cleanup" element={<CleanupPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingQuickAction />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
