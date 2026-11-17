import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import WhatWeDo from '../components/WhatWeDo';
import MetricsStats from '../components/MetricsStats';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useGsapPageReveal } from '../hooks/useGsapAnimation';

export default function WhatWeDoPage() {
  const navigate = useNavigate();
  const pageRef = useGsapPageReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="what-we-do-page subpage-container" ref={pageRef}>
      <header className="subpage-hero-banner">
        <div
          className="subpage-bg-layer"
          style={{ backgroundImage: "url('/assets/service-hero-cloud.jpg')" }}
          aria-hidden="true"
        ></div>
        <div className="subpage-overlay" aria-hidden="true"></div>

        <div className="wrap subpage-hero-inner gsap-fade-in">
          <nav className="subpage-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">
              <ArrowLeft size={13} /> Home
            </Link>
            <ChevronRight size={13} className="sep" />
            <span>Strategic IT Delivery</span>
          </nav>
          <h1>
            How We Deliver <em>Strategic IT.</em>
          </h1>
          <p className="subpage-lead">
            A direct engineering model built to eliminate ticketing friction, stabilize enterprise operations, and build resilient infrastructure.
          </p>
        </div>
      </header>

      <div className="subpage-body-wrap">
        <WhatWeDo onOpenContact={() => navigate('/contact')} />
        <MetricsStats />
      </div>
    </div>
  );
}
