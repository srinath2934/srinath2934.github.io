import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, FileText, Menu, X, Terminal } from 'lucide-react';

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
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-hover)'
          }}>
            <Terminal size={15} />
          </div>
          <span style={{ fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em' }}>
            {PERSONAL_INFO.name}
          </span>
          <span style={{
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            marginLeft: '4px',
            padding: '2px 6px',
            borderRadius: '4px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-card)'
          }}>
            AI/ML
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          <a href="#work" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Selected Work</a>
          <a href="#stack" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Engineering Stack</a>
          <a href="#philosophy" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>How I Build</a>
          <a href="#experience" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Experience</a>
          <a href="#research" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Research</a>
          <a href="#contact" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Contact</a>
        </nav>

        {/* Action Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-secondary)',
              transition: 'all 0.2s ease'
            }}
          >
            <Github size={16} />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={{
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-secondary)',
              transition: 'all 0.2s ease'
            }}
          >
            <Linkedin size={16} />
          </a>

          <a
            href="#contact"
            className="btn btn-secondary btn-sm"
            style={{ display: 'none' }}
            id="nav-resume-btn"
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
              color: 'var(--text-primary)'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
          backgroundColor: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 40
        }}>
          <a href="#work" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px' }}>Selected Work</a>
          <a href="#stack" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px' }}>Engineering Stack</a>
          <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px' }}>How I Build</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px' }}>Experience</a>
          <a href="#research" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px' }}>Research</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px' }}>Contact & Resume</a>
        </div>
      )}

      <style>{`
        @media (min-width: 840px) {
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
