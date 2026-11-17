import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useGsapPageReveal } from '../hooks/useGsapAnimation';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';
  const pageRef = useGsapPageReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="contact-page subpage-container" ref={pageRef}>
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
            <span>Direct Engineering Contact</span>
          </nav>
          <h1>
            Connect Directly with an <em>IT Engineer.</em>
          </h1>
          <p className="subpage-lead">
            Direct engineer access without sales barriers or ticketing queues. Outline your challenges and receive immediate architecture scoping.
          </p>
        </div>
      </header>

      <div className="subpage-body-wrap">
        <ContactSection
          selectedService={serviceParam}
          prefillMessage={
            serviceParam
              ? `I am interested in ${serviceParam}. Please share delivery timelines and engagement options.`
              : ''
          }
        />
      </div>
    </div>
  );
}
