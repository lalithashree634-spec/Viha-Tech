import React, { useState, useRef, useEffect } from 'react';
import { cleanupChecklist } from '../data/servicesData';
import { CheckSquare, Square, ArrowUpRight, ShieldCheck, RefreshCw } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './InheritedITCleanup.scss';

gsap.registerPlugin(ScrollTrigger);

export default function InheritedITCleanup({ onPlanCleanup }) {
  const [checkedItems, setCheckedItems] = useState([0, 1, 3]);

  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const copyRef = useRef(null);
  const checklistRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left diagnostic visual box entrance
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { x: -40, opacity: 0, scale: 0.96 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: visualRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }

      // Right copy entrance
      if (copyRef.current) {
        gsap.fromTo(
          copyRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: copyRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }

      // Checklist items cascade
      if (checklistRef.current) {
        gsap.fromTo(
          checklistRef.current.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: checklistRef.current,
              start: 'top 88%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleCheck = (idx) => {
    if (checkedItems.includes(idx)) {
      setCheckedItems(checkedItems.filter(i => i !== idx));
    } else {
      setCheckedItems([...checkedItems, idx]);
    }
  };

  return (
    <section className="cleanup-section wrap" id="cleanup" ref={sectionRef}>
      <div className="cleanup-container">
        {/* Left Interactive Visual / Circuit Box */}
        <div className="cleanup-visual" ref={visualRef}>
          <div className="circuit-grid"></div>
          <div className="cleanup-badge-box">
            <div className="reset-circle">
              <RefreshCw size={26} className="spin-icon" />
            </div>
            <div className="cleanup-mark">
              IT <span>/</span> RESET
            </div>
            <small className="cleanup-subtitle">ASSESS · CLEAN UP · STABILISE</small>
          </div>

          <div className="cleanup-metric-box">
            <div className="metric-header">
              <span>CLEANUP READINESS</span>
              <strong>{Math.round((checkedItems.length / cleanupChecklist.length) * 100)}%</strong>
            </div>
            <div className="metric-bar">
              <div 
                className="metric-fill" 
                style={{ width: `${(checkedItems.length / cleanupChecklist.length) * 100}%` }}
              ></div>
            </div>
            <span className="metric-note">
              {checkedItems.length} of {cleanupChecklist.length} assessment scope areas selected
            </span>
          </div>
        </div>

        {/* Right Copy & Scope Checklist */}
        <div className="cleanup-copy">
          <div ref={copyRef}>
            <h2>
              Inherited IT?<br />
              <em>Let’s get it in order.</em>
            </h2>
            <p className="lead">
              Old accounts, inconsistent policies, unknown DNS records or undocumented systems? We can review your setup, identify security vulnerabilities and leave you with a clearer, stabilized environment.
            </p>
          </div>

          <div className="cleanup-checklist" ref={checklistRef}>
            {cleanupChecklist.map((item, idx) => {
              const isSelected = checkedItems.includes(idx);
              return (
                <div 
                  key={idx} 
                  className={`check-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleCheck(idx)}
                >
                  <span className="check-box-icon">
                    {isSelected ? <CheckSquare size={17} /> : <Square size={17} />}
                  </span>
                  <span className="check-text">{item}</span>
                </div>
              );
            })}
          </div>

          <div className="cleanup-actions">
            <button className="btn-primary" onClick={onPlanCleanup}>
              Plan an IT cleanup <ArrowUpRight size={16} />
            </button>
            <span className="cleanup-time-estimate">Typical scope: 1-2 business days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
