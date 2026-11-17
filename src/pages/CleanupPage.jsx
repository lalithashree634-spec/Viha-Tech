import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InheritedITCleanup from '../components/InheritedITCleanup';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useGsapPageReveal } from '../hooks/useGsapAnimation';

export default function CleanupPage() {
  const navigate = useNavigate();
  const pageRef = useGsapPageReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePlanCleanup = (cleanupTitle) => {
    navigate(`/contact?service=${encodeURIComponent(cleanupTitle)}`);
  };

  return (
    <div className="cleanup-page subpage-container" ref={pageRef}>
      <header className="subpage-hero-banner">
        <div
          className="subpage-bg-layer"
          style={{ backgroundImage: "url('/assets/service-hero-datacenter.jpg')" }}
          aria-hidden="true"
        ></div>
        <div className="subpage-overlay" aria-hidden="true"></div>

        <div className="wrap subpage-hero-inner gsap-fade-in">
          <nav className="subpage-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">
              <ArrowLeft size={13} /> Home
            </Link>
            <ChevronRight size={13} className="sep" />
            <span>Inherited IT Reset</span>
          </nav>
          <h1>
            Inherited IT <em>Environment Reset.</em>
          </h1>
          <p className="subpage-lead">
            Take complete control of an IT setup you didn’t build. We diagnose unmanaged risk, map hidden dependencies, and restore clean operational control.
          </p>
        </div>
      </header>

      <div className="subpage-body-wrap">
        <InheritedITCleanup onPlanCleanup={handlePlanCleanup} />
      </div>
    </div>
  );
}
