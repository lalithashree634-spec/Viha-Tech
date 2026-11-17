import React, { useRef, useEffect } from 'react';
import { ShieldCheck, Clock, Zap, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MetricsStats.scss';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Zap,
    target: 99.9,
    suffix: "%",
    isDecimal: true,
    value: "99.9%",
    label: "Availability Focus",
    desc: "Robust DNS, hostings & server architecture"
  },
  {
    icon: Clock,
    isSpecial: true,
    value: "< 15m",
    label: "Rapid Incident Response",
    desc: "Direct communication with engineers"
  },
  {
    icon: ShieldCheck,
    target: 16,
    suffix: "+",
    value: "16+",
    label: "Engineered Services",
    desc: "From static landing pages to multi-cloud"
  },
  {
    icon: CheckCircle,
    target: 100,
    suffix: "%",
    value: "100%",
    label: "Accountable Delivery",
    desc: "Single point of contact for every layer"
  }
];

export default function MetricsStats() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.children;

        // Cards fade-in and slide-up with bidirectional re-trigger
        gsap.fromTo(
          cards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );

        // Counter count-up animations that replay every time user enters from top or bottom
        const valueEls = gridRef.current.querySelectorAll('.metric-value');
        stats.forEach((s, idx) => {
          const el = valueEls[idx];
          if (!el || s.isSpecial) return;

          const obj = { val: 0 };
          const countTween = gsap.to(obj, {
            val: s.target,
            duration: 1.6,
            ease: 'power2.out',
            paused: true,
            onUpdate: () => {
              if (s.isDecimal) {
                el.textContent = obj.val.toFixed(1) + s.suffix;
              } else {
                el.textContent = Math.floor(obj.val) + s.suffix;
              }
            }
          });

          ScrollTrigger.create({
            trigger: gridRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            onEnter: () => {
              obj.val = 0;
              countTween.restart();
            },
            onEnterBack: () => {
              obj.val = 0;
              countTween.restart();
            },
            onLeaveBack: () => {
              obj.val = 0;
              if (s.isDecimal) el.textContent = '0.0' + s.suffix;
              else el.textContent = '0' + s.suffix;
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="metrics-band wrap" ref={sectionRef}>
      <div className="metrics-grid" ref={gridRef}>
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="metric-card">
              <div className="metric-icon-wrap">
                <Icon size={20} />
              </div>
              <div className="metric-value">{s.value}</div>
              <div className="metric-label">{s.label}</div>
              <p className="metric-desc">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
