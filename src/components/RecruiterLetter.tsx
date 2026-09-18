import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

export const RecruiterLetter: React.FC = () => {
  return (
    <section id="engineering-note" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(24px, 4vw, 44px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Accent Glow Edge */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            backgroundColor: 'var(--accent-primary)'
          }} />

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '4px',
              backgroundColor: 'var(--accent-dim)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-hover)'
            }}>
              <Terminal size={14} />
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-hover)'
            }}>
              ENGINEERING PERSPECTIVE · A NOTE TO TECHNICAL RECRUITERS & HIRING MANAGERS
            </span>
          </div>

          <h3 style={{
            fontSize: 'clamp(20px, 3vw, 26px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
            marginBottom: '20px',
            color: 'var(--text-primary)'
          }}>
            Why I Focus on Context & System Pipelines — Not Just Model Weights
          </h3>

          {/* Letter Body */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            fontSize: '15.5px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '920px'
          }}>
            <p>
              What I find fascinating about AI engineering is <strong style={{ color: 'var(--text-primary)' }}>context</strong>. Humans make decisions based on context — if a critical piece of information is missing, we make the wrong call. AI systems work the exact same way. A foundation model may possess a detailed system prompt, conversational history, and vector-database retrieval, but if the <em style={{ color: 'var(--text-primary)' }}>right, calibrated context</em> fails to reach the model, the final output will still degrade or hallucinate.
            </p>

            <p>
              That fundamental challenge is what drove my focus toward the engineering pipeline behind the model:
            </p>

            {/* Pipeline Step Visualizer */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 18px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--text-primary)',
              margin: '8px 0'
            }}>
              <span>Extract</span>
              <ArrowRight size={13} style={{ color: 'var(--accent-hover)' }} />
              <span>Transform</span>
              <ArrowRight size={13} style={{ color: 'var(--accent-hover)' }} />
              <span>Index</span>
              <ArrowRight size={13} style={{ color: 'var(--accent-hover)' }} />
              <span style={{ color: 'var(--accent-hover)', fontWeight: 600 }}>Retrieve Calibrated Context</span>
              <ArrowRight size={13} style={{ color: 'var(--accent-hover)' }} />
              <span>Model Inference</span>
              <ArrowRight size={13} style={{ color: 'var(--accent-hover)' }} />
              <span style={{ color: '#10B981', fontWeight: 600 }}>Evaluate & Verify</span>
            </div>

            <p>
              What makes this work challenging and exciting is that production systems are living targets. Data distributions drift, schemas evolve, prompts need versioning, and an architecture that works today can degrade tomorrow. This is why I build systems with deterministic safeguards, automated test suites (like ClosePilot's 14/14 Pytest matrix), and structured audit logging.
            </p>

            <p>
              The AI can process the information, but <strong style={{ color: 'var(--text-primary)' }}>engineers still own the architectural decisions and the ultimate responsibility for building systems that are safe, auditable, and reliable.</strong> That is the type of engineer I am.
            </p>
          </div>

          {/* Signature */}
          <div style={{
            marginTop: '28px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)' }}>
                Srinath S
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                AI / ML Engineer · 2026 B.Tech Artificial Intelligence & Data Science
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                padding: '4px 10px',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-card)',
                color: 'var(--accent-hover)'
              }}>
                #StandoutEngineering
              </span>
              <span style={{
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                padding: '4px 10px',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-card)',
                color: 'var(--text-muted)'
              }}>
                #ContextEngineering
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
