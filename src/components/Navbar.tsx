import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, FileText, Menu, X, Terminal, Phone, MessageCircle } from 'lucide-react';

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
        <nav style={{ display: 'none', alignItems: 'center', gap: '24px' }} className="desktop-nav">
          <a href="#work" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Selected Work</a>
          <a href="#audit" style={{ fontSize: '14px', color: 'var(--accent-hover)' }}>Craft Audit</a>
          <a href="#stack" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Stack</a>
          <a href="#philosophy" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>How I Build</a>
          <a href="#experience" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Experience</a>
          <a href="#contact" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Contact</a>
        </nav>

        {/* Action Links & Trust Signals */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Direct Phone Link (Recruiter Trust Signal) */}
          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
            className="nav-phone-badge"
            title="Direct Phone Line"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 10px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-secondary)'
            }}
          >
            <Phone size={12} style={{ color: 'var(--accent-hover)' }} />
            <span>{PERSONAL_INFO.phone}</span>
          </a>

          {/* WhatsApp Direct Link (High Conversion Indian Trust Signal) */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Chat"
            className="nav-whatsapp-btn"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 11px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10B981',
              fontSize: '12.5px',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
          >
            <MessageCircle size={13} />
            <span>WhatsApp</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{
              width: '32px',
              height: '32px',
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
            <Github size={15} />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={{
              width: '32px',
              height: '32px',
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
            <Linkedin size={15} />
          </a>

          <a
            href="/Srinath_S_Resume.pdf"
            download="Srinath_S_Resume.pdf"
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
          <a href="#audit" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', color: 'var(--accent-hover)' }}>Craft & Anti-Slop Audit</a>
          <a href="#stack" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px' }}>Engineering Stack</a>
          <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px' }}>How I Build</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px' }}>Experience</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px' }}>Contact</a>

          <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px',
                borderRadius: '6px',
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#10B981',
                fontWeight: 600,
                fontSize: '14px'
              }}
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp ({PERSONAL_INFO.phone})</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px',
                borderRadius: '6px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontSize: '14px'
              }}
            >
              <Phone size={15} style={{ color: 'var(--accent-hover)' }} />
              <span>Call Direct: {PERSONAL_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .nav-phone-badge {
            display: inline-flex !important;
          }
          .nav-whatsapp-btn {
            display: inline-flex !important;
          }
          #nav-resume-btn {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (min-width: 760px) and (max-width: 959px) {
          .nav-whatsapp-btn {
            display: inline-flex !important;
          }
          #nav-resume-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};
