import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, servicesData } from '../data/servicesData';
import { ArrowRight, Check, Search } from 'lucide-react';
import ServiceIcon from '../components/ServiceIcon';
import { ServiceGridSkeleton } from '../components/SkeletonLoaders';
import { useGsapPageReveal } from '../hooks/useGsapAnimation';
import './CapabilitiesPage.scss';

export default function CapabilitiesPage() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);
  const pageRef = useGsapPageReveal([isFiltering]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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

  const uniqueCategories = categories.filter(c => c !== "All Services");

  const filteredCategories = activeCategory === "All Services" 
    ? uniqueCategories 
    : [activeCategory];

  return (
    <div className="capabilities-directory-page" ref={pageRef}>
      {/* Page Hero matching services.php with rich visual banner */}
      <section className="directory-hero wrap gsap-fade-in">
        <div 
          className="directory-hero-backdrop" 
          style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}
          aria-hidden="true"
        ></div>
        <div className="directory-hero-overlay" aria-hidden="true"></div>

        <div className="directory-hero-content">
          <h1>
            What we <em>engineer.</em>
          </h1>
          <p className="lead">
            Explore our complete service catalogue. Each service is presented with its delivery areas so you can see exactly what we can help with.
          </p>

          {/* Filter Controls */}
          <div className="directory-filter-bar">
            <div className="filter-pills">
              <button 
                className={`pill-btn ${activeCategory === "All Services" ? 'active' : ''}`}
                onClick={() => handleCategorySelect("All Services")}
              >
                All Capabilities ({servicesData.length})
              </button>
              {uniqueCategories.map(cat => (
                <button 
                  key={cat}
                  className={`pill-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="directory-search">
              <Search size={15} />
              <input 
                type="text" 
                placeholder="Search services, tools, scope..." 
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Directory Groups or Shimmer Skeleton */}
      {isFiltering ? (
        <section className="wrap directory-groups">
          <ServiceGridSkeleton count={4} />
        </section>
      ) : (
        <section className="wrap directory-groups">
        {filteredCategories.map((cat, groupIdx) => {
          const groupServices = servicesData.filter(s => {
            const matchesCat = s.category === cat;
            const q = searchQuery.toLowerCase().trim();
            const matchesQuery = !q || 
              s.title.toLowerCase().includes(q) ||
              s.lead.toLowerCase().includes(q) ||
              s.scope.some(item => item.toLowerCase().includes(q));
            return matchesCat && matchesQuery;
          });

          if (groupServices.length === 0) return null;

          return (
            <div key={cat} className="directory-group gsap-fade-in">
              <div className="directory-head">
                <div>
                  <h2>{cat}</h2>
                </div>
                <span className="group-count">{groupServices.length} SERVICES</span>
              </div>

              <div className="directory-grid">
                {groupServices.map((service) => (
                  <article key={service.id} className="directory-card gsap-card">
                    <div className="directory-card-top">
                      <div className="directory-icon-badge">
                        <ServiceIcon type={service.iconType} size={20} />
                      </div>
                      <span className="directory-code-pill">{service.shortCode || service.id}</span>
                    </div>

                    <Link to={`/service/${service.slug}`} className="directory-title-link">
                      <small className="directory-kicker">{service.kicker}</small>
                      <h3 className="directory-title">{service.title}</h3>
                    </Link>

                    <p className="card-desc">{service.lead}</p>

                    <div className="subservice-grid">
                      {service.scope.map((item, idx) => (
                        <div key={idx} className="subservice-item">
                          <span className="check-dot">
                            <Check size={11} strokeWidth={2.8} />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={`/service/${service.slug}`} className="directory-detail-link">
                      <span>Explore Capability Details</span>
                      <ArrowRight size={14} className="detail-arrow" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
        </section>
      )}
    </div>
  );
}
