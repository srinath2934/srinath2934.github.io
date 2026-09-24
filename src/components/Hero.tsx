import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Github, FileText, Bot, Search, Terminal, MessageCircle, Phone } from 'lucide-react';
import { AgentFlowAnimation } from './AgentFlowAnimation';

export const Hero: React.FC = () => {
  return (
    <section style={{ paddingTop: '80px', paddingBottom: '70px', position: 'relative' }}>
      <div className="container">
        
        {/* Top Status Pill & Direct Reachability */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
          <div className="badge badge-live">
            <span className="status-dot"></span>
            <span>Available for AI / ML Engineer Roles</span>
          </div>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            · {PERSONAL_INFO.location}
          </span>
          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
            style={{
              fontSize: '13px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-secondary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            · <Phone size={12} style={{ color: 'var(--accent-hover)' }} />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
        </div>

        {/* Primary Recruiter-First Headline */}
        <div style={{ maxWidth: '880px', marginBottom: '24px' }}>
          <h1 style={{
            fontSize: 'clamp(34px, 5.5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.12,
            marginBottom: '18px',
            color: 'var(--text-primary)'
          }}>
            AI / ML Engineer building <span style={{ color: 'var(--accent-hover)' }}>production-oriented</span> AI systems.
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '740px'
          }}>
            {PERSONAL_INFO.subheading}
          </p>
        </div>

        {/* Supporting Capability Badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '36px'
        }}>
          {[
            { label: 'Stateful LangGraph Workflows', icon: <Bot size={13} /> },
            { label: 'Model Context Protocol (MCP)', icon: <Terminal size={13} /> },
            { label: 'RAG & Vector Retrieval', icon: <Search size={13} /> },
            { label: 'FastAPI & PyTorch Deployment', icon: <Terminal size={13} /> },
            { label: 'Deterministic Guardrails', icon: <Terminal size={13} /> }
          ].map((tag, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '6px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)'
              }}
            >
              <span style={{ color: 'var(--accent-hover)' }}>{tag.icon}</span>
              <span>{tag.label}</span>
            </div>
          ))}
        </div>

        {/* Direct Action Funnel */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <a href="#work" className="btn btn-primary" style={{ padding: '12px 22px', fontSize: '15px' }}>
            <span>View Selected Work</span>
            <ArrowRight size={16} />
          </a>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{
              padding: '12px 18px',
              fontSize: '15px',
              color: '#10B981',
              borderColor: 'rgba(16, 185, 129, 0.35)',
              backgroundColor: 'rgba(16, 185, 129, 0.08)'
            }}
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="/Srinath_S_Resume.pdf"
            download="Srinath_S_Resume.pdf"
            className="btn btn-secondary"
            style={{ padding: '12px 18px', fontSize: '15px' }}
          >
            <FileText size={16} />
            <span>Download Resume</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: '12px 18px', fontSize: '15px' }}
          >
            <Github size={16} />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Recruiter Quick Fact Grid */}
        <div style={{
          marginTop: '64px',
          paddingTop: '32px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          <div>
            <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>
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
            <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>
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
            <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>
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
            <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>
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
        @media (min-width: 640px) {
          .hero-loc {
            display: inline !important;
          }
        }
      `}</style>
    </section>
  );
};
