import React from 'react';
import { HOW_I_BUILD_STEPS } from '../data/portfolioData';
import { Compass } from 'lucide-react';

export const EngineeringPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Compass size={14} />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="section-title">
            How I Build Systems
          </h2>
          <p className="section-subtitle">
            A disciplined, systematic approach to designing reliable AI applications—from isolating the failure modes before deployment to maintaining deterministic auditability.
          </p>
        </div>

        {/* 8-Step Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {HOW_I_BUILD_STEPS.map((item) => (
            <div
              key={item.step}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-sm)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--accent-hover)',
                marginBottom: '12px'
              }}>
                {item.step}
              </div>

              <h3 style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '8px',
                color: 'var(--text-primary)'
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '13.5px',
                color: 'var(--text-secondary)',
                lineHeight: 1.55
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
