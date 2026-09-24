import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, FileText, Check, Copy, ArrowUpRight, Phone, MapPin, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" style={{ paddingTop: '80px', paddingBottom: '90px', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '680px' }}>
          <div className="section-label">
            <Mail size={14} />
            <span>DIRECT CONTACT & HIRING</span>
          </div>
          <h2 className="section-title">
            Let's build production AI systems together.
          </h2>
          <p className="section-subtitle">
            I am actively interviewing for AI Engineer, Machine Learning Engineer, and Generative AI / RAG roles in Bengaluru or remote. No intermediaries or opaque forms—contact me directly.
          </p>
        </div>

        {/* Contact Action Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          
          {/* WhatsApp Direct Chat Card (Highest Conversion for Indian Recruiters) */}
          <div className="card" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            backgroundColor: 'rgba(16, 185, 129, 0.04)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', marginBottom: '12px' }}>
                <MessageCircle size={18} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase', fontWeight: 600 }}>
                  WhatsApp Direct (Fastest)
                </span>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                {PERSONAL_INFO.phone}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.5 }}>
                Direct chat for recruiters and engineering leads. Typically replies within an hour.
              </div>
            </div>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{
                backgroundColor: '#10B981',
                color: '#FFFFFF',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <MessageCircle size={15} />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Email Action Card */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-hover)', marginBottom: '12px' }}>
                <Mail size={18} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase' }}>Direct Email</span>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px', wordBreak: 'break-all' }}>
                {PERSONAL_INFO.email}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Best for interview schedules, technical specs, and detailed job descriptions.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20AI%20Engineer`} className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                <span>Send Email</span>
                <ArrowUpRight size={13} />
              </a>
              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm"
                aria-label="Copy email to clipboard"
              >
                {copied ? <Check size={14} style={{ color: '#10B981' }} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Phone & Location Card */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-hover)', marginBottom: '12px' }}>
                <Phone size={18} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase' }}>Direct Call & Location</span>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} style={{ color: 'var(--accent-hover)' }} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} style={{ color: 'var(--accent-hover)' }} />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Graduating B.Tech AI & Data Science (May 2026). Available immediately for full-time roles.
              </div>
            </div>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="btn btn-secondary btn-sm"
              style={{ marginTop: '16px' }}
            >
              <Phone size={13} style={{ color: 'var(--accent-hover)' }} />
              <span>Call +91 7603967977</span>
            </a>
          </div>

          {/* Profiles & Verified Resume Card */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-hover)', marginBottom: '12px' }}>
                <FileText size={18} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase' }}>Profiles & Resume</span>
              </div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Verified Engineering Dossier
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Inspect source repositories on GitHub, connect on LinkedIn, or download the clean ATS resume.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                >
                  <Linkedin size={13} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={11} />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                >
                  <Github size={13} />
                  <span>GitHub</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>

              <a
                href="/Srinath_S_Resume.pdf"
                download="Srinath_S_Resume.pdf"
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: 'center' }}
              >
                <FileText size={13} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
