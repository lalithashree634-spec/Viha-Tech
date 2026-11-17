import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUp, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const navigate = useNavigate();
  const footerRef = useRef(null);
  const closingBandRef = useRef(null);
  const footContentRef = useRef(null);
  const watermarkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Closing band slide-in
      if (closingBandRef.current) {
        gsap.fromTo(
          closingBandRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: closingBandRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }

      // Columns stagger entrance
      if (footContentRef.current) {
        gsap.fromTo(
          footContentRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footContentRef.current,
              start: 'top 88%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }

      // Giant architectural watermark subtle parallax reveal
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { y: 40, opacity: 0.2 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: watermarkRef.current,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: 1.2
            }
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" ref={footerRef}>
      {/* Pre-footer Call to Action Band with High-End Image Media */}
      <section className="closing-band">
        <div className="closing-bg-layer" aria-hidden="true"></div>
        <div className="closing-overlay" aria-hidden="true"></div>
        <div className="wrap closing-inner" ref={closingBandRef}>
          <div className="closing-text">
            <h2>
              Let’s make technology<br />
              <em>one less thing to worry about.</em>
            </h2>
            <p className="closing-subtext">Direct engineering support, zero ticketing queues, transparent delivery.</p>
          </div>
          <button className="closing-btn" onClick={() => navigate('/contact')}>
            Get in touch ↗
          </button>
        </div>
      </section>

      {/* Main Footer Body */}
      <div className="wrap foot-content" ref={footContentRef}>
        <div className="foot-brand-col">
          <Link to="/" className="brand" onClick={scrollToTop}>
            <img src="/assets/viha-emblem.png" alt="VIHA emblem" className="brand-emblem" />
            <span className="brand-wordmark">
              <strong>VIHA</strong>
              <small className="brand-typing">TECHNOLOGIES</small>
            </span>
          </Link>

          <p className="foot-tagline">
            Technology support built around<br />
            <strong>the way your business works.</strong>
          </p>

          <div className="footer-status-pill">
            <span className="status-dot"></span>
            <span>Enterprise IT &amp; Cloud Support</span>
          </div>
        </div>

        <div className="foot-links-col">
          <h4 className="col-title">Capabilities</h4>
          <ul className="foot-nav-list">
            <li><Link to="/service/static-website-creation">Static Website Creation</Link></li>
            <li><Link to="/service/microsoft-365-setup-management">Microsoft 365 Setup</Link></li>
            <li><Link to="/service/azure-cloud-support">Azure Cloud Support</Link></li>
            <li><Link to="/service/microsoft-intune-configuration-management">Microsoft Intune</Link></li>
            <li><Link to="/service/microsoft-defender-defender-for-cloud">Microsoft Defender</Link></li>
            <li><Link to="/services" className="explore-more-link">View All 16 Capabilities ↗</Link></li>
          </ul>
        </div>

        <div className="foot-links-col">
          <h4 className="col-title">Navigation</h4>
          <ul className="foot-nav-list">
            <li><Link to="/">Home Overview</Link></li>
            <li><Link to="/services">All Services Directory</Link></li>
            <li><a href="#cleanup">IT Cleanup &amp; Assessment</a></li>
            <li><a href="#support-models">Support Engagements</a></li>
            <li><Link to="/contact">Engineering Dispatch</Link></li>
          </ul>
        </div>

        <div className="foot-action-col">
          <div className="action-card-inner">
            <h4 className="col-title">Direct Support</h4>
            <p>Speak to our certified engineering group directly about your requirements.</p>
            <a href="mailto:support@vihadh.in" className="foot-contact-link">
              <Mail size={15} /> support@vihadh.in
            </a>
            <button className="back-to-top-btn" onClick={scrollToTop}>
              <ArrowUp size={13} /> Return to Top
            </button>
          </div>
        </div>
      </div>

      <hr className="foot-divider wrap" />

      {/* Copyright Bar */}
      <div className="wrap foot-bottom">
        <span className="copyright">
          © {new Date().getFullYear()} VIHA Technologies. All rights reserved. Registered IT &amp; Cloud Consultancy.
        </span>
        <div className="foot-pillars">
          <span>Build</span> · <span>Connect</span> · <span>Manage</span> · <span>Protect</span> · <span>Support</span>
        </div>
      </div>

      {/* Giant Architectural Brand Signature at Final End */}
      <div className="footer-giant-signature" aria-hidden="true" ref={watermarkRef}>
        <span className="giant-wordmark">VIHA</span>
      </div>
    </footer>
  );
}
