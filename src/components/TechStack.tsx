import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu } from 'lucide-react';

export const TechStack: React.FC = () => {
  return (
    <section id="stack" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Cpu size={14} />
            <span>ENGINEERING STACK</span>
          </div>
          <h2 className="section-title">
            Technologies & Systems
          </h2>
          <p className="section-subtitle">
            Grounded in systems engineering, production inference, and agent orchestration. No arbitrary star ratings—only technologies used in shipped systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <h3 style={{
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: 'var(--accent-hover)' }}>▪</span>
                <span>{cat.category}</span>
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontSize: '12.5px',
                      fontFamily: 'var(--font-mono)',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-card)',
                      color: 'var(--text-secondary)',
                      transition: 'border-color 0.2s ease'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
