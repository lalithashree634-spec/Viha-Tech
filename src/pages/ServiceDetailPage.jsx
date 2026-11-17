import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileSearch,
  Workflow,
  ShieldCheck,
  ChevronRight,
  ArrowDown,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Layers,
  Cpu,
  Sparkles
} from 'lucide-react';
import ServiceIcon from '../components/ServiceIcon';
import { ServiceDetailSkeleton } from '../components/SkeletonLoaders';
import { useGsapPageReveal } from '../hooks/useGsapAnimation';
import './ServiceDetailPage.scss';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const pageRef = useGsapPageReveal([slug, loading]);

  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <div className="service-detail-page">
        <ServiceDetailSkeleton />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="service-not-found wrap">
        <h2>Capability Not Found</h2>
        <p>The technical service you requested does not exist in our catalog.</p>
        <Link to="/services" state={{ isBack: true }} className="back-btn">
          <ArrowLeft size={16} /> Return to Service Catalog
        </Link>
      </div>
    );
  }

  const handleDiscussService = () => {
    navigate(`/contact?service=${encodeURIComponent(service.title)}`);
  };

  const scrollToScope = () => {
    const el = document.getElementById('technical-scope');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getHeroBg = (cat) => {
    const c = (cat || '').toLowerCase();
    if (c.includes('security') || c.includes('threat') || c.includes('network') || c.includes('perimeter')) {
      return '/assets/service-hero-security.jpg';
    }
    if (c.includes('cloud') || c.includes('microsoft') || c.includes('productivity') || c.includes('email') || c.includes('identity')) {
      return '/assets/service-hero-cloud.jpg';
    }
    return '/assets/service-hero-datacenter.jpg';
  };

  const siblingServices = servicesData
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="service-detail-page" ref={pageRef}>
      {/* 1. Cinematic Enterprise Header Hero */}
      <section className="service-detail-hero">
        <div
          className="service-hero-bg-layer"
          style={{ backgroundImage: `url(${getHeroBg(service.category)})` }}
          aria-hidden="true"
        ></div>
        <div className="service-hero-overlay" aria-hidden="true"></div>

        <div className="wrap hero-inner-container gsap-fade-in">
          {/* Breadcrumb Bar */}
          <nav className="detail-breadcrumb-bar" aria-label="Breadcrumb">
            <Link to="/services" state={{ isBack: true }} className="breadcrumb-back-link">
              <ArrowLeft size={14} /> Catalog
            </Link>
            <ChevronRight size={13} className="bc-sep" />
            <span className="bc-category">{service.category}</span>
            <ChevronRight size={13} className="bc-sep" />
            <span className="bc-code">{service.shortCode || service.id}</span>
          </nav>

          {/* Hero Grid: Title & Spec Control Console */}
          <div className="hero-main-grid">
            {/* Left: Editorial Headline & Actions */}
            <div className="hero-copy-column">
              <div className="service-domain-pill">
                <span className="domain-icon">
                  <ServiceIcon serviceId={service.id} category={service.category} size={15} />
                </span>
                <span className="domain-name">{service.category}</span>
                <span className="domain-sep">·</span>
                <span className="domain-code">{service.shortCode || service.id}</span>
              </div>

              <h1 className="service-main-title">
                {service.title}
                <span className="title-dot">.</span>
              </h1>

              <p className="service-main-lead">{service.lead}</p>

              <div className="hero-action-buttons">
                <button className="primary-dispatch-btn" onClick={handleDiscussService}>
                  <span>Discuss This Capability</span>
                  <ArrowRight size={16} />
                </button>
                <button className="ghost-scope-btn" onClick={scrollToScope}>
                  <span>Explore Architecture &amp; Scope</span>
                  <ArrowDown size={14} />
                </button>
              </div>
            </div>

            {/* Right: Technical Control Console Card */}
            <div className="hero-console-card">
              <div className="console-card-header">
                <div className="console-icon-wrap">
                  <ServiceIcon serviceId={service.id} category={service.category} size={24} />
                </div>
                <div className="console-meta">
                  <span className="console-code">{service.id}</span>
                  <span className="console-live-status">
                    <span className="pulse-indicator"></span> Production Ready
                  </span>
                </div>
              </div>

              <div className="console-spec-list">
                <div className="spec-item">
                  <span className="spec-label">Domain</span>
                  <span className="spec-val">{service.category}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Engagement</span>
                  <span className="spec-val">Ad-Hoc / Project / Ongoing</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Accountability</span>
                  <span className="spec-val">Direct Systems Engineer</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">SLA Commitment</span>
                  <span className="spec-val">15-Minute Critical Response</span>
                </div>
              </div>

              {service.techStack && service.techStack.length > 0 && (
                <div className="console-stack-bar">
                  <span className="stack-heading">Primary Tooling &amp; Stack</span>
                  <div className="stack-chips-group">
                    {service.techStack.map((tech, i) => (
                      <span key={i} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three-Phase Execution Pipeline */}
      <section className="wrap delivery-pipeline-strip gsap-fade-in" aria-label="3-Stage Engineering Pipeline">
        {/* Phase 1: Audit & Discover */}
        <div className="pipeline-card phase-audit gsap-card">
          <div className="pcard-header">
            <div className="pcard-icon">
              <FileSearch size={20} />
            </div>
            <span className="pcard-step-badge">STAGE 01</span>
          </div>
          <div className="pcard-body">
            <span className="pcard-tag">AUDIT &amp; REQUIREMENTS</span>
            <h3 className="pcard-title">Environment Analysis</h3>
            <p className="pcard-desc">
              Audit the existing infrastructure, security posture, business workflows, and technical dependencies.
            </p>
          </div>
        </div>

        {/* Phase 2: Active Engineering */}
        <div className="pipeline-card phase-engineer gsap-card">
          <div className="pcard-header">
            <div className="pcard-icon">
              <Workflow size={20} />
            </div>
            <span className="pcard-step-badge">STAGE 02</span>
          </div>
          <div className="pcard-body">
            <span className="pcard-tag active-tag">TARGETED CONFIGURATION</span>
            <h3 className="pcard-title">Controlled Engineering</h3>
            <p className="pcard-desc">
              Implement planned configurations, security controls, cloud resources, and policy enforcement in sequence.
            </p>
          </div>
        </div>

        {/* Phase 3: Validate & Care */}
        <div className="pipeline-card phase-verify gsap-card">
          <div className="pcard-header">
            <div className="pcard-icon">
              <ShieldCheck size={20} />
            </div>
            <span className="pcard-step-badge">STAGE 03</span>
          </div>
          <div className="pcard-body">
            <span className="pcard-tag verified-tag">VERIFIED &amp; SUPPORTED</span>
            <h3 className="pcard-title">Validation &amp; Aftercare</h3>
            <p className="pcard-desc">
              Execute comprehensive health checks, deliver architectural handover documentation, and provide ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Deep Technical Architecture & Scope (2-Column Main Layout) */}
      <section className="wrap service-content-layout" id="technical-scope">
        {/* Left Column: Scope, Sequence, Deliverables & Aftercare */}
        <div className="technical-main-column gsap-card">
          {/* Executive Overview */}
          <div className="section-bento-card overview-card">
            <span className="bento-kicker">EXECUTIVE OVERVIEW</span>
            <h2 className="bento-headline">{service.overviewHeadline}</h2>
            <p className="bento-body">{service.overviewBody}</p>
          </div>

          {/* Scope of Engineering */}
          <div className="section-bento-card">
            <div className="bento-header-row">
              <span className="bento-kicker">TECHNICAL SCOPE</span>
              <h3>What We Deliver &amp; Configure</h3>
            </div>
            <div className="scope-items-grid">
              {service.scope.map((item, idx) => (
                <div key={idx} className="scope-box">
                  <div className="scope-check-wrap">
                    <Check size={13} strokeWidth={2.8} />
                  </div>
                  <span className="scope-copy">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phased Implementation Timeline */}
          <div className="section-bento-card">
            <div className="bento-header-row">
              <span className="bento-kicker">EXECUTION SEQUENCE</span>
              <h3>Phased Engineering Process</h3>
            </div>
            <div className="sequence-steps-grid">
              {service.deliverySteps.map((stepItem, idx) => (
                <div key={idx} className="sequence-step-card">
                  <span className="sequence-num">{stepItem.step}</span>
                  <div className="sequence-info">
                    <h4>{stepItem.title}</h4>
                    <p>{stepItem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tangible Deliverables */}
          <div className="section-bento-card">
            <div className="bento-header-row">
              <span className="bento-kicker">ACCOUNTABLE OUTCOMES</span>
              <h3>Tangible Deliverables</h3>
            </div>
            <div className="deliverables-container">
              {service.deliverablesList.map((deliv, idx) => (
                <div key={idx} className="deliverable-chip">
                  <span className="deliv-badge-dot"></span>
                  <span className="deliv-text">{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Continued Operational Hygiene (Aftercare) */}
          <div className="section-bento-card aftercare-card">
            <span className="bento-kicker">AFTER DELIVERY / CONTINUED CARE</span>
            <h3>Support Does Not Stop at Handover.</h3>
            <p className="aftercare-desc">
              Following project completion, we maintain operational hygiene, configuration stability, and support:
            </p>
            <div className="aftercare-points-list">
              {service.aftercarePoints.map((point, idx) => (
                <div key={idx} className="aftercare-point-item">
                  <div className="aftercare-check-icon">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Action & Dispatch Sidebar */}
        <aside className="technical-sidebar-column gsap-card">
          <div className="sidebar-sticky-panel">
            <span className="sidebar-kicker">HOW TO ENGAGE</span>
            <h3 className="sidebar-title">Direct Engineer Contact</h3>
            <p className="sidebar-copy">
              No sales intermediaries or ticket backlogs. Review your environment parameters directly with a systems architect.
            </p>

            <button className="sidebar-action-btn" onClick={handleDiscussService}>
              <span>Discuss {service.title}</span>
              <ArrowRight size={16} />
            </button>

            <div className="sidebar-divider"></div>

            <div className="sidebar-channels">
              <div className="channel-row">
                <div className="ch-icon">
                  <Phone size={15} />
                </div>
                <div className="ch-info">
                  <small>Direct Line</small>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>

              <div className="channel-row">
                <div className="ch-icon">
                  <Mail size={15} />
                </div>
                <div className="ch-info">
                  <small>Direct Inbox</small>
                  <a href="mailto:support@vihadh.in">support@vihadh.in</a>
                </div>
              </div>

              <div className="channel-row">
                <div className="ch-icon">
                  <MessageSquare size={15} />
                </div>
                <div className="ch-info">
                  <small>Instant Message</small>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20VIHA%2C%20I%20would%20like%20to%20discuss%20IT%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with an Engineer ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="sidebar-divider"></div>

            <div className="sidebar-sla-box">
              <div className="sla-badge-row">
                <Clock size={16} className="sla-clock-icon" />
                <strong>15-Minute SLA</strong>
              </div>
              <span>Guaranteed critical incident acknowledgment and scoping timeline confirmation.</span>
            </div>
          </div>
        </aside>
      </section>

      {/* 4. Sibling Capabilities Discovery Strip */}
      {siblingServices.length > 0 && (
        <section className="wrap sibling-services-section gsap-fade-in">
          <div className="sibling-header">
            <span className="sibling-kicker">RELATED CAPABILITIES</span>
            <h3>More in {service.category}</h3>
          </div>
          <div className="sibling-grid">
            {siblingServices.map((sibling) => (
              <Link key={sibling.id} to={`/service/${sibling.slug}`} className="sibling-card gsap-card">
                <div className="sibling-top">
                  <span className="sibling-code">{sibling.shortCode || sibling.id}</span>
                  <ArrowRight size={15} className="sibling-arrow" />
                </div>
                <h4 className="sibling-title">{sibling.title}</h4>
                <p className="sibling-desc">{sibling.lead}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
