import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, servicesData } from '../data/servicesData';
import { Search, ArrowRight, Check, X } from 'lucide-react';
import ServiceIcon from './ServiceIcon';
import { ServiceGridSkeleton } from './SkeletonLoaders';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Capabilities.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Capabilities() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);
  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const tabsRef = useRef(null);

  const handleCategorySelect = (cat) => {
    if (cat === activeCategory) return;
    setIsFiltering(true);
    setActiveCategory(cat);
    setTimeout(() => setIsFiltering(false), 240);
  };

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    if (!isFiltering) {
      setIsFiltering(true);
      setTimeout(() => setIsFiltering(false), 220);
    }
  };

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory = activeCategory === "All Services" || service.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        service.title.toLowerCase().includes(q) ||
        service.lead.toLowerCase().includes(q) ||
        service.scope.some(s => s.toLowerCase().includes(q)) ||
        service.techStack.some(t => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCardClick = (service) => {
    navigate(`/service/${service.slug}`);
  };

  // Initial Section Header ScrollTrigger Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 88%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }

      if (tabsRef.current) {
        gsap.fromTo(
          tabsRef.current.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: tabsRef.current,
              start: 'top 90%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Batch ScrollTrigger for Service Cards (Every row animates smoothly top-to-bottom and bottom-to-top)
  useEffect(() => {
    if (isFiltering || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.service-card');
    if (!cards || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Create batch ScrollTriggers for every card row
      ScrollTrigger.batch(cards, {
        interval: 0.08,
        batchMax: 3,
        start: 'top 92%',
        end: 'bottom 5%',
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 35, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power2.out',
              overwrite: 'auto'
            }
          ),
        onLeave: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            y: -25,
            duration: 0.35,
            ease: 'power2.in',
            overwrite: 'auto'
          }),
        onEnterBack: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: -25, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power2.out',
              overwrite: 'auto'
            }
          ),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            y: 35,
            duration: 0.35,
            ease: 'power2.in',
            overwrite: 'auto'
          })
      });
    }, gridRef);

    // Refresh ScrollTrigger to ensure positions are calculated with Lenis smooth scroll
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 60);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [filteredServices, isFiltering]);

  return (
    <section className="capabilities wrap" id="capabilities" ref={sectionRef}>
      <div className="section-heading" ref={headingRef}>
        <div className="heading-top">
          <h2>
            What we <em>engineer.</em>
          </h2>
        </div>
        <p>
          Explore the full range of technical services. Every capability has its own dedicated page with scope and support options.
        </p>
      </div>

      {/* Filter Tabs and Search Bar */}
      <div className="filter-controls-bar">
        <div className="category-tabs" ref={tabsRef}>
          {categories.map((cat) => {
            const count = cat === "All Services" 
              ? servicesData.length 
              : servicesData.filter(s => s.category === cat).length;
            return (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat)}
              >
                <span>{cat}</span>
                <span className="tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="search-box">
          <Search size={15} className="search-icon" />
          <input
            type="text"
            placeholder="Search Azure, Intune, DNS, Email..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-btn" onClick={() => handleSearchChange("")} aria-label="Clear search">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Results Count Info */}
      <div className="results-info">
        <span>Showing <strong>{filteredServices.length}</strong> of {servicesData.length} technical capabilities</span>
      </div>

      {/* Grid of 16 Services or Skeleton */}
      {isFiltering ? (
        <ServiceGridSkeleton count={filteredServices.length || 6} />
      ) : filteredServices.length > 0 ? (
        <div className="services-grid" ref={gridRef}>
          {filteredServices.map((service) => {
            return (
              <article 
                key={service.id} 
                className="service-card"
                onClick={() => handleCardClick(service)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCardClick(service)}
                aria-label={`View details for ${service.title}`}
              >
                {/* Card Header with Icon Badge & Short Code */}
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <ServiceIcon serviceId={service.id} category={service.category} size={22} />
                  </div>
                  <span className="service-code-badge">{service.id}</span>
                </div>

                {/* Card Body */}
                <div className="service-card-body">
                  <span className="service-category-tag">{service.category}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-lead">{service.lead}</p>

                  <div className="service-scope-list">
                    {service.scope.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="scope-item">
                        <span className="check-bullet">
                          <Check size={11} strokeWidth={2.5} />
                        </span>
                        <span className="scope-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="service-card-footer">
                  <span className="explore-label">Explore Capability</span>
                  <span className="explore-arrow">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-search-state">
          <p>No capabilities found matching "{searchQuery}".</p>
          <button className="reset-search-btn" onClick={() => { setSearchQuery(""); setActiveCategory("All Services"); }}>
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
