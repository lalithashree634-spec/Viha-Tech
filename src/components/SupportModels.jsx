import React, { useRef, useEffect } from 'react';
import { supportModels } from '../data/servicesData';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SupportModels.scss';

gsap.registerPlugin(ScrollTrigger);

export default function SupportModels({ onSelectModel }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 45, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="support-model-section" id="support-models" ref={sectionRef}>
      <div className="wrap">
        <div className="section-heading" ref={headingRef}>
          <div className="heading-top">
            <h2>
              Help when you need it.<br />
              <em>How you need it.</em>
            </h2>
          </div>
          <p>
            Get the right level of support without having to coordinate multiple third-party providers. Choose from ad-hoc rescue to dedicated enterprise partnership.
          </p>
        </div>

        <div className="support-grid" ref={gridRef}>
          {supportModels.map((model) => (
            <article key={model.number} className="support-card">
              <div className="card-top-indicator">
                <span className="support-number">{model.number}</span>
                <small className="support-tag">{model.tag}</small>
              </div>

              <h3 className="model-title">{model.title}</h3>
              <p className="model-desc">{model.desc}</p>

              <div className="model-ideal">
                <strong>Ideal for:</strong>
                <span>{model.idealFor}</span>
              </div>

              <button 
                className="btn btn-outline model-btn"
                onClick={() => onSelectModel(model)}
              >
                {model.actionText} <ArrowUpRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
