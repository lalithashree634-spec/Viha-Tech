import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, Cpu, Layers, ShieldCheck, Clock } from 'lucide-react';
import './ServiceModal.scss';

export default function ServiceModal({ service, onClose, onEnquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="service-modal-backdrop" onClick={onClose}>
      <div className="service-modal-content animate-fade-up" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close service details">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-meta">
            <span className="modal-id">{service.id}</span>
            <span className="modal-category">{service.kicker}</span>
          </div>
          <h2 className="modal-title">
            <span className="modal-symbol">{service.symbol}</span>
            {service.title}
          </h2>
          <p className="modal-lead">{service.lead}</p>
        </div>

        <div className="modal-body">
          <div className="modal-description-block">
            <h3>Overview &amp; Architecture</h3>
            <p>{service.description}</p>
          </div>

          <div className="modal-scope-block">
            <h3>
              <Layers size={17} /> Core Delivery Scope
            </h3>
            <div className="scope-list">
              {service.scope.map((item, idx) => (
                <div key={idx} className="scope-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-tech-block">
            <h3>
              <Cpu size={17} /> Technologies &amp; Standards
            </h3>
            <div className="tech-pills">
              {service.techStack.map((tech, idx) => (
                <span key={idx} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>

          <div className="modal-deliverables-block">
            <h3>
              <ShieldCheck size={17} /> Verified Deliverables
            </h3>
            <p>{service.deliverables}</p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-outline" onClick={onClose}>
            Back to catalogue
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => onEnquire(service)}
          >
            Enquire about {service.title} <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

