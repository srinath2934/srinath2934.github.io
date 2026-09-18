import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, FileText, Check, Copy, ArrowUpRight, Phone, MapPin } from 'lucide-react';

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
            <span>INITIATE CONTACT</span>
          </div>
          <h2 className="section-title">
            Let's build production AI systems together.
          </h2>
          <p className="section-subtitle">
            I am actively interviewing for AI Engineer, Machine Learning Engineer, Generative AI / RAG Engineer, and Data Science Engineer roles. Feel free to reach out directly via email or LinkedIn.
          </p>
        </div>

        {/* Contact Action Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          
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
                Quickest response for interview invitations and technical inquiries.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                <span>Send Email</span>
                <ArrowUpRight size={13} />
              </a>
              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm"
                aria-label="Copy email to clipboard"
              >
                {copied ? <Check size={14} style={{ color: '#10B981' }} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Professional Profiles Card */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-hover)', marginBottom: '12px' }}>
                <Linkedin size={18} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase' }}>Professional Profiles</span>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                LinkedIn & GitHub
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Connect on LinkedIn for professional networking, or inspect source code on GitHub.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ flex: 1 }}
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ flex: 1 }}
              >
                <Github size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Quick Info & Verification Card */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-hover)', marginBottom: '12px' }}>
                <FileText size={18} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase' }}>Location & Phone</span>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-primary)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={14} style={{ color: 'var(--accent-hover)' }} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} style={{ color: 'var(--accent-hover)' }} />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Targeting AI / ML Engineer opportunities. Open to onsite and remote work.
              </div>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20AI%20Engineer`}
              className="btn btn-accent btn-sm"
              style={{ marginTop: '16px' }}
            >
              <span>Request Interview</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
