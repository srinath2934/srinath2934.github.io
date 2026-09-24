import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, FileText } from 'lucide-react';
import { AgentFlowAnimation } from './AgentFlowAnimation';

export const Hero: React.FC = () => {
  return (
    <section style={{ paddingTop: '72px', paddingBottom: '64px', position: 'relative' }}>
      <div className="container">

        {/* Two-Column Hero: Text Left + Photo Right */}
        <div className="hero-layout" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap'
        }}>

          {/* Left: Text Content */}
          <div style={{ flex: '1 1 520px', minWidth: '300px' }}>

            {/* Top Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '22px' }}>
              <div className="badge badge-live">
                <span className="status-dot"></span>
                <span>Available for AI / ML Engineer Roles</span>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                · {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Primary Headline */}
            <h1 style={{
              fontSize: 'clamp(30px, 4.4vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '18px',
              color: 'var(--text-primary)'
            }}>
              AI / ML Engineer building <span style={{ color: 'var(--accent-hover)' }}>production-oriented</span> AI systems.
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              marginBottom: '28px'
            }}>
              {PERSONAL_INFO.subheading}
            </p>

            {/* Focused Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <a href="#work" className="btn btn-primary" style={{ padding: '11px 22px', fontSize: '14.5px' }}>
                <span>View Selected Work</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="/Srinath_S_Resume.pdf"
                download="Srinath_S_Resume.pdf"
                className="btn btn-secondary"
                style={{ padding: '11px 20px', fontSize: '14.5px' }}
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Right: Compact Professional Photo */}
          <div className="hero-photo-wrapper" style={{
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '180px',
              height: '220px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 6px 24px rgba(0,0,0,0.3)',
              position: 'relative'
            }}>
              <img
                src="/srinath-photo.jpg"
                alt="Srinath S — AI / ML Engineer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40px',
                background: 'linear-gradient(transparent, var(--bg-primary))',
                pointerEvents: 'none'
              }} />
            </div>

            {/* Name & Identity below photo */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em'
              }}>
                Srinath S
              </div>
              <div style={{
                fontSize: '12px',
                color: 'var(--text-muted)',
                marginTop: '2px'
              }}>
                B.Tech AI & Data Science · 2026
              </div>
            </div>
          </div>

        </div>

        {/* Recruiter Quick Fact Grid */}
        <div style={{
          marginTop: '52px',
          paddingTop: '26px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              FLAGSHIP SCALE
            </div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
              108,819 Tickets
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Semantic triage & ETA prediction
            </div>
          </div>

          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              AGENT RELIABILITY
            </div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
              14 / 14 Pytest Passing
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              LangGraph & MCP checkpointers
            </div>
          </div>

          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              RETRIEVAL LATENCY
            </div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
              &lt; 300 ms
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Semantic code indexing & citations
            </div>
          </div>

          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              RESEARCH PUBLICATION
            </div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
              IEEE ICIRCA 2026
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Semantic ticket intelligence paper
            </div>
          </div>
        </div>

        {/* Interactive Creative LangGraph Agent Flow Simulator */}
        <AgentFlowAnimation />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-photo-wrapper {
            margin: 0 auto;
          }
        }
        @media (min-width: 769px) {
          .hero-layout {
            flex-wrap: nowrap !important;
          }
        }
      `}</style>
    </section>
  );
};
