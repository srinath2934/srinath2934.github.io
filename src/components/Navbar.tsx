import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.2s ease',
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontWeight: 700,
            fontSize: '16px',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)'
          }}>
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          <a href="#work" className="nav-link">Work</a>
          <a href="#stack" className="nav-link">Stack</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#research" className="nav-link">Research</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Action: Resume & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="/Srinath_S_Resume.pdf"
            download="Srinath_S_Resume.pdf"
            className="btn btn-secondary btn-sm"
            id="nav-resume-btn"
            style={{ display: 'none' }}
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-card)'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 40
        }}>
          <a href="#work" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 500 }}>Work</a>
          <a href="#stack" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 500 }}>Stack</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 500 }}>Experience</a>
          <a href="#research" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 500 }}>Research</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 500 }}>Contact</a>

          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href="/Srinath_S_Resume.pdf"
              download="Srinath_S_Resume.pdf"
              className="btn btn-primary btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <FileText size={14} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          font-size: 14px;
          color: var(--text-secondary);
          transition: color 0.15s ease;
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-resume-btn {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
