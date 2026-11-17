import React, { useRef, useEffect } from 'react';
import { ArrowRight, Code, Share2, Layers, ShieldCheck, LifeBuoy } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhatWeDo.scss';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: "01",
    title: "Build",
    desc: "Websites, domains, hosting and business platforms.",
    icon: Code
  },
  {
    num: "02",
    title: "Connect",
    desc: "Microsoft 365, Google Workspace, email and collaboration.",
    icon: Share2
  },
  {
    num: "03",
    title: "Manage",
    desc: "Intune, endpoints, devices, servers and cloud services.",
    icon: Layers
  },
  {
    num: "04",
    title: "Protect",
    desc: "Defender, SIEM, EDR, identity and cloud security.",
    icon: ShieldCheck
  },
  {
    num: "05",
    title: "Support",
    desc: "One-time fixes, projects and ongoing IT operations.",
    icon: LifeBuoy
  }
];

export default function WhatWeDo({ onOpenContact }) {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const pointsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro left column slide & fade
      if (introRef.current) {
        gsap.fromTo(
          introRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }

      // 5 pillar cards stagger cascade
      if (pointsRef.current) {
        gsap.fromTo(
          pointsRef.current.children,
          { x: 35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: pointsRef.current,
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
    <section className="what-section wrap" id="what-we-do" ref={sectionRef}>
      <div className="what-glass">
        <div className="what-intro" ref={introRef}>
          <h2>
            One point of contact.<br />
            <em>Every layer covered.</em>
          </h2>
          <p>
            We build, configure, secure and support the technology that keeps your business moving. Bring us one issue or your entire IT environment.
          </p>
          <button className="text-link-btn" onClick={onOpenContact}>
            Tell us what you need <ArrowRight size={16} />
          </button>
        </div>

        <div className="what-points" ref={pointsRef}>
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.num} className="what-point-card">
                <div className="card-top">
                  <span className="point-number">{p.num}</span>
                  <div className="point-icon-wrapper">
                    <Icon size={18} />
                  </div>
                </div>
                <div className="point-content">
                  <strong>{p.title}</strong>
                  <small>{p.desc}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
