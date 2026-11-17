import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import TickerRibbon from '../components/TickerRibbon';
import WhatWeDo from '../components/WhatWeDo';
import Capabilities from '../components/Capabilities';
import MetricsStats from '../components/MetricsStats';
import SupportModels from '../components/SupportModels';
import InheritedITCleanup from '../components/InheritedITCleanup';
import ContactSection from '../components/ContactSection';
import { useGsapPageReveal } from '../hooks/useGsapAnimation';

export default function HomePage({ onSelectService }) {
  const navigate = useNavigate();
  const pageRef = useGsapPageReveal();

  const handleOpenContact = () => {
    navigate('/contact');
  };

  const handleSelectModel = (model) => {
    navigate(`/contact?service=${encodeURIComponent(model.title)}`);
  };

  const handlePlanCleanup = (cleanupTitle) => {
    navigate(`/contact?service=${encodeURIComponent(cleanupTitle)}`);
  };

  return (
    <div className="home-page" ref={pageRef}>
      <Hero onOpenContact={handleOpenContact} />
      <TickerRibbon />
      <WhatWeDo onOpenContact={handleOpenContact} />
      <Capabilities onSelectService={onSelectService} />
      <MetricsStats />
      <SupportModels onSelectModel={handleSelectModel} />
      <InheritedITCleanup onPlanCleanup={handlePlanCleanup} />
      <ContactSection />
    </div>
  );
}

