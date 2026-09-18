import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle, AlertTriangle, ArrowRight, Layers } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 7, 10, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--accent-hover)',
              marginBottom: '8px'
            }}>
              <Layers size={14} />
              <span>ENGINEERING CASE STUDY · PROJECT {project.number}</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '6px' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Action Links Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '24px',
          marginBottom: '28px',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <Github size={14} />
            <span>GitHub Repository</span>
            <ExternalLink size={12} />
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>Live Application</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>

        {/* 01 - Problem */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '10px', textTransform: 'uppercase' }}>
            01 — The Problem
          </h3>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            {caseStudy.problem}
          </p>
        </div>

        {/* 02 - Constraints */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '12px', textTransform: 'uppercase' }}>
            02 — Operating Constraints
          </h3>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {caseStudy.constraints.map((c, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-hover)', marginTop: '3px' }}>▪</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 03 - Architecture Diagram */}
        {caseStudy.architectureDiagram && (
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '12px', textTransform: 'uppercase' }}>
              03 — System Architecture & Pipeline
            </h3>
            <pre style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '18px',
              fontSize: '12.5px',
              lineHeight: 1.45,
              color: 'var(--text-primary)',
              overflowX: 'auto',
              fontFamily: 'var(--font-mono)'
            }}>
              {caseStudy.architectureDiagram.join('\n')}
            </pre>
          </div>
        )}

        {/* 04 - Technical Decisions */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '14px', textTransform: 'uppercase' }}>
            04 — Architectural Rationale (Why this stack?)
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {caseStudy.technicalDecisions.map((decision, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '14px 18px'
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {decision.choice}
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {decision.why}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 05 - Evaluation & Metrics */}
        {caseStudy.evaluation && caseStudy.evaluation.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '14px', textTransform: 'uppercase' }}>
              05 — Benchmark Evaluation
            </h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '13px',
                textAlign: 'left'
              }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <th style={{ padding: '10px 14px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>TASK</th>
                    <th style={{ padding: '10px 14px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>METRIC</th>
                    <th style={{ padding: '10px 14px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>RESULT</th>
                    <th style={{ padding: '10px 14px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>NOTES</th>
                  </tr>
                </thead>
                <tbody>
                  {caseStudy.evaluation.map((ev, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-card)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 600, color: 'var(--text-primary)' }}>{ev.task}</td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{ev.metric}</td>
                      <td style={{ padding: '12px 14px', color: 'var(--accent-hover)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{ev.score}</td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-muted)', fontSize: '12px' }}>{ev.notes || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 06 - Limitations & What Failed */}
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.05)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: 'var(--radius-sm)',
          padding: '20px',
          marginBottom: '28px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#F87171' }}>
            <AlertTriangle size={16} />
            <h3 style={{ fontSize: '14px', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase' }}>
              06 — Known Limitations & What Failed
            </h3>
          </div>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {caseStudy.failureModesAndLimitations.map((limit, idx) => (
              <li key={idx} style={{ fontSize: '13.5px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#F87171', marginTop: '2px' }}>•</span>
                <span>{limit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 07 - Next Iterations */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-card)',
          borderRadius: 'var(--radius-sm)',
          padding: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: 'var(--accent-hover)' }}>
            <CheckCircle size={16} />
            <h3 style={{ fontSize: '14px', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase' }}>
              07 — Engineering Iterations & Next Steps
            </h3>
          </div>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {caseStudy.nextIterations.map((next, idx) => (
              <li key={idx} style={{ fontSize: '13.5px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <ArrowRight size={13} style={{ color: 'var(--accent-hover)', marginTop: '3px', flexShrink: 0 }} />
                <span>{next}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};
