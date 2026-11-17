import React, { useState, useEffect, useRef } from 'react';
import { servicesData } from '../data/servicesData';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactSection.scss';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection({ selectedService, prefillMessage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    otherService: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { x: -35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftColRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }

      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { x: 35, opacity: 0, scale: 0.98 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightColRef.current,
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

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (prefillMessage) {
      setFormData(prev => ({ ...prev, message: prefillMessage }));
    }
  }, [prefillMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const generatedTicket = `REQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedTicket);
      setSubmitted(true);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#1D4ED8', '#60A5FA', '#0F172A']
        });
      } catch (err) {}
    }, 600);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      otherService: '',
      message: ''
    });
  };

  return (
    <section className="contact-section wrap" id="contact" ref={sectionRef}>
      <div className="contact-layout">
        {/* Left Column: Direct Engineer Access */}
        <div className="contact-info-col" ref={leftColRef}>
          <div className="contact-header">
            <h2>
              Speak directly with<br />
              <em>an IT engineer.</em>
            </h2>
            <p>
              No scripted sales reps or ticketing queues. Tell us what is broken, what you are planning, or what you want reviewed.
            </p>
          </div>

          <div className="direct-channels">
            <div className="channel-item">
              <div className="channel-icon-wrap">
                <Mail size={18} />
              </div>
              <div className="channel-meta">
                <span className="channel-label">Direct Inbox</span>
                <a href="mailto:support@vihadh.in" className="channel-val">support@vihadh.in</a>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-icon-wrap">
                <Phone size={18} />
              </div>
              <div className="channel-meta">
                <span className="channel-label">Direct Phone</span>
                <a href="tel:+919876543210" className="channel-val">+91 98765 43210</a>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-icon-wrap">
                <MessageSquare size={18} />
              </div>
              <div className="channel-meta">
                <span className="channel-label">Instant WhatsApp</span>
                <a 
                  href="https://wa.me/919876543210?text=Hi%20VIHA%2C%20I%20would%20like%20to%20discuss%20IT%20services" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="channel-val"
                >
                  Chat with an Engineer ↗
                </a>
              </div>
            </div>
          </div>

          <div className="sla-commitment-box">
            <div className="sla-icon">
              <ShieldCheck size={20} />
            </div>
            <div className="sla-text">
              <strong>15-Minute Critical SLA</strong>
              <span>Immediate acknowledgment for urgent incidents &amp; operational roadblocks.</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Functioning Request Form */}
        <div className="contact-form-card" ref={rightColRef}>
          {submitted ? (
            <div className="form-success-state">
              <div className="success-icon-wrap">
                <CheckCircle2 size={44} />
              </div>
              <h3>Message Dispatched Successfully</h3>
              <p>
                Reference Token: <strong>{ticketId}</strong>. A systems engineer has received your parameters and will respond within 15 minutes.
              </p>
              <button className="reset-btn" onClick={resetForm}>
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-head">
                <h3>Submit an IT Request</h3>
                <span>Direct engineer dispatch form</span>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="label-text">
                    Your Name <small>*</small>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="label-text">
                    Business Email <small>*</small>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="phone" className="label-text">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="label-text">
                    Area of Interest <small>*</small>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a technical capability...</option>
                    {servicesData.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="IT Cleanup Assessment">Inherited IT Cleanup / Assessment</option>
                    <option value="Emergency Support">Emergency / Incident Support</option>
                    <option value="General Inquiry">Other / Multi-Layer Scope</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="label-text">
                  Project Details or Current IT Situation <small>*</small>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your current setup, challenges, timeline or the specific problem you need resolved..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className={`submit-btn ${loading ? 'loading' : ''}`} disabled={loading}>
                {loading ? (
                  <span>Dispatching Request...</span>
                ) : (
                  <>
                    <span>Submit to Engineering</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
