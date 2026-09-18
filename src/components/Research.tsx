import React from 'react';
import { BookOpen, Github, Award } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <section id="research" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <BookOpen size={14} />
            <span>RESEARCH & PUBLICATIONS</span>
          </div>
          <h2 className="section-title">
            Peer-Reviewed Research
          </h2>
          <p className="section-subtitle">
            Academic research grounded in practical system implementations, empirical evaluation, and reproducibility.
          </p>
        </div>

        {/* Paper Card */}
        <div className="card" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
            <div className="badge badge-live">
              <Award size={13} />
              <span>IEEE ICIRCA 2026 Conference</span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <a
                href="https://github.com/srinath2934/An-End-to-End-Semantic-AI-System-for-Automated-Support-Ticket-Handling"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Github size={14} />
                <span>Code & Artifacts</span>
              </a>
            </div>
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>
            An End-to-End Semantic AI System for Automated Support Ticket Handling
          </h3>

          <div style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
            Authors: Srinath S (Co-author) · 2026 8th International Conference on Inventive Research in Computing Applications (ICIRCA 2026)
          </div>

          <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
            Investigates automated multi-task incident triage on 108,819 real-world enterprise support tickets. Combines dense Sentence-BERT embeddings (all-MiniLM-L6-v2), serialized multi-head classifiers for queue routing and priority prediction, continuous regression for resolution-time estimation (MAE: 7.73h), and FAISS similarity indexing for automated historical resolution retrieval.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '13px'
          }}>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Dataset: </span>
              <strong style={{ color: 'var(--text-primary)' }}>108,819 Tickets</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Priority Acc: </span>
              <strong style={{ color: 'var(--accent-hover)' }}>81%</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Action Acc: </span>
              <strong style={{ color: 'var(--accent-hover)' }}>80%</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>ETA MAE: </span>
              <strong style={{ color: 'var(--accent-hover)' }}>7.73 hours</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Index: </span>
              <strong style={{ color: 'var(--text-primary)' }}>FAISS (384-D)</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
