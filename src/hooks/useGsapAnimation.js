import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapPageReveal(deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero / Header elements entrance
      const fadeEls = containerRef.current.querySelectorAll('.gsap-fade-in');
      if (fadeEls.length > 0) {
        gsap.fromTo(
          fadeEls,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
          }
        );
      }

      // 2. Directory / Service cards stagger entrance
      const cardEls = containerRef.current.querySelectorAll('.gsap-card, .directory-card, .service-visual-card');
      if (cardEls.length > 0) {
        gsap.fromTo(
          cardEls,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardEls[0],
              start: 'top 88%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }

      // 3. Technical detail sections scroll reveal
      const detailSections = containerRef.current.querySelectorAll('.detail-section, .deliverables-grid, .aftercare-panel');
      detailSections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, deps);

  return containerRef;
}
