import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onOpenContact }) {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const leadRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Subtle scale-in of the background photo
      if (bgRef.current) {
        tl.fromTo(
          bgRef.current,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.4, ease: 'power2.out' },
          0
        );
      }

      // Staggered reveal of hero title
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.95 },
          0.15
        );
      }

      // Fade & slide-in of lead paragraph
      if (leadRef.current) {
        tl.fromTo(
          leadRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85 },
          0.35
        );
      }

      // Smooth bounce-in of action buttons
      if (actionsRef.current) {
        tl.fromTo(
          actionsRef.current.children,
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.12, ease: 'back.out(1.6)' },
          0.5
        );
      }

      // Subtle Parallax on scroll
      if (bgRef.current && heroRef.current) {
        gsap.to(bgRef.current, {
          y: 70,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToCapabilities = (e) => {
    e.preventDefault();
    const el = document.getElementById('capabilities');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="editorial-hero" id="overview" ref={heroRef}>
      <div className="hero-bg-layer" ref={bgRef} aria-hidden="true"></div>

      <div className="wrap hero-layout">
        <div className="hero-editorial-center">
          <h1 className="hero-title" ref={titleRef}>
            Your IT.<br />
            <span className="hero-gradient-text">Handled end to end.</span>
          </h1>

          <p className="hero-lead" ref={leadRef}>
            Websites, business email, cloud infrastructure, endpoint management and cybersecurity — practical technology support from one accountable partner.
          </p>

          <div className="hero-actions" ref={actionsRef}>
            <button className="btn-hero-primary" onClick={onOpenContact}>
              Talk to VIHA <ArrowUpRight size={16} />
            </button>
            <a href="#capabilities" className="btn-hero-secondary" onClick={scrollToCapabilities}>
              Explore our services <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
