import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, Sun, Moon } from 'lucide-react';
import { categories, servicesData } from '../data/servicesData';
import { useTheme } from '../context/ThemeContext';
import './Navbar.scss';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or route change
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    setMegaOpen(false);
    setMenuOpen(false);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [location.pathname]);

  const handleServiceClick = (slug) => {
    setMegaOpen(false);
    setMenuOpen(false);
    navigate(`/service/${slug}`);
  };

  return (
    <header className={`editorial-navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap nav-inner">
        {/* Left: Brand Identity */}
        <Link to="/" className="nav-brand">
          <img src="/assets/viha-emblem.png" alt="VIHA Technologies" className="brand-emblem-img" />
          <div className="brand-typography">
            <span className="brand-name">VIHA</span>
            <span className="brand-tag">TECHNOLOGIES</span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="nav-menu">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Overview
          </Link>

          {/* What We Engineer - Fixed hover bridge + click toggle + Dedicated Pages */}
          <div 
            className={`nav-dropdown-trigger ${megaOpen ? 'is-open' : ''}`}
            ref={dropdownRef}
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button 
              type="button"
              className={`nav-link dropdown-toggle-btn ${megaOpen || location.pathname.startsWith('/service') ? 'active' : ''}`}
              onClick={() => setMegaOpen(prev => !prev)}
              aria-expanded={megaOpen}
            >
              What We Engineer <ChevronDown size={14} className={`chevron-icon ${megaOpen ? 'open' : ''}`} />
            </button>

            {megaOpen && (
              <div 
                className="mega-editorial-dropdown animate-fade-up"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <div className="dropdown-inner-box">
                  <div className="dropdown-header">
                    <span>EXPLORE ALL 16 TECHNICAL CAPABILITIES</span>
                    <Link to="/services" onClick={() => setMegaOpen(false)}>
                      View catalogue ↗
                    </Link>
                  </div>
                  <div className="dropdown-grid">
                    {categories.filter(c => c !== "All Services").map((cat) => {
                      const groupServices = servicesData.filter(s => s.category === cat);
                      return (
                        <div key={cat} className="dropdown-category-col">
                          <h5>{cat}</h5>
                          <div className="service-list">
                            {groupServices.map((srv) => (
                              <button 
                                key={srv.id} 
                                type="button"
                                className="dropdown-service-item"
                                onClick={() => handleServiceClick(srv.slug)}
                              >
                                <span>{srv.title}</span>
                                <ArrowUpRight size={12} className="link-arrow" />
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/what-we-do" className={`nav-link ${location.pathname === '/what-we-do' ? 'active' : ''}`}>
            What We Do
          </Link>

          <Link to="/support-models" className={`nav-link ${location.pathname === '/support-models' ? 'active' : ''}`}>
            Support Models
          </Link>

          <Link to="/cleanup" className={`nav-link ${location.pathname === '/cleanup' ? 'active' : ''}`}>
            IT Setup Reset
          </Link>
        </nav>

        {/* Right: Theme Toggle + Contact Pill + Hamburger Menu */}
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={isDark ? "Switch to White Theme" : "Switch to Dark Theme"}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={17} className="theme-icon sun" /> : <Moon size={17} className="theme-icon moon" />}
          </button>

          <Link to="/contact" className="contact-pill-btn">
            Contact
          </Link>

          <button 
            className="hamburger-icon-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="editorial-mobile-drawer animate-fade-up">
          <div className="mobile-drawer-top">
            <span className="mobile-theme-label">Theme Mode:</span>
            <button
              type="button"
              className="mobile-theme-toggle"
              onClick={toggleTheme}
            >
              {isDark ? <><Sun size={16} /> White Theme</> : <><Moon size={16} /> Dark Theme</>}
            </button>
          </div>
          <Link to="/" onClick={() => setMenuOpen(false)}>Overview</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>What We Engineer (16 Services)</Link>
          <Link to="/what-we-do" onClick={() => setMenuOpen(false)}>What We Do</Link>
          <Link to="/support-models" onClick={() => setMenuOpen(false)}>Support Models</Link>
          <Link to="/cleanup" onClick={() => setMenuOpen(false)}>IT Setup Reset</Link>
          <Link to="/contact" className="mobile-contact-cta" onClick={() => setMenuOpen(false)}>
            Contact VIHA ↗
          </Link>
        </div>
      )}
    </header>
  );
}
