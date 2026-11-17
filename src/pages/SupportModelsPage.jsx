import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SupportModels from '../components/SupportModels';
import MetricsStats from '../components/MetricsStats';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useGsapPageReveal } from '../hooks/useGsapAnimation';

export default function SupportModelsPage() {
  const navigate = useNavigate();
  const pageRef = useGsapPageReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectModel = (model) => {
    navigate(`/contact?service=${encodeURIComponent(model.title)}`);
  };

  return (
    <div className="support-models-page subpage-container" ref={pageRef}>
      <header className="subpage-hero-banner">
        <div
          className="subpage-bg-layer"
          style={{ backgroundImage: "url('/assets/service-hero-security.jpg')" }}
          aria-hidden="true"
        ></div>
        <div className="subpage-overlay" aria-hidden="true"></div>

        <div className="wrap subpage-hero-inner gsap-fade-in">
          <nav className="subpage-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">
              <ArrowLeft size={13} /> Home
            </Link>
            <ChevronRight size={13} className="sep" />
            <span>Engagement Models</span>
          </nav>
          <h1>
            Engagement Models Built for <em>Flexibility.</em>
          </h1>
          <p className="subpage-lead">
            Transparent, predictable IT partnership options. From immediate single-issue rescue to comprehensive, fully managed cloud operations.
          </p>
        </div>
      </header>

      <div className="subpage-body-wrap">
        <SupportModels onSelectModel={handleSelectModel} />
        <MetricsStats />
      </div>
    </div>
  );
}
