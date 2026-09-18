import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Code } from 'lucide-react';

export const CurrentlyBuilding: React.FC = () => {
  return (
    <section style={{ paddingTop: '20px', paddingBottom: '70px' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-md)',
            padding: '24px 28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', maxWidth: '780px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              backgroundColor: 'var(--accent-dim)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-hover)',
              flexShrink: 0
            }}>
              <Code size={18} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="status-dot"></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: 'var(--accent-hover)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  ACTIVE FOCUS · CURRENTLY BUILDING
                </span>
              </div>

              <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 500 }}>
                {PERSONAL_INFO.currentlyBuilding}
              </div>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <span>Follow on GitHub</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
};
