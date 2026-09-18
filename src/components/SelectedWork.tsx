import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { Github, ExternalLink, ArrowUpRight, BookOpen, Layers } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <section id="work" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Layers size={14} />
            <span>SELECTED ENGINEERING WORK</span>
          </div>
          <h2 className="section-title">
            Production-grade systems, not tutorial toys.
          </h2>
          <p className="section-subtitle">
            Every project demonstrates architectural justification, measurable benchmarks, real operating constraints, and production-tested error handling.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="card"
              style={{
                position: 'relative',
                border: project.isCenterpiece ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid var(--border-card)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              {/* Card Header & Badge */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--accent-hover)'
                  }}>
                    {project.number}
                  </span>
                  {project.badge && (
                    <span className="badge">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Direct Action Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github size={13} />
                    <span>Source</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={12} />
                    </a>
                  )}

                  {project.caseStudy && (
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="btn btn-accent btn-sm"
                    >
                      <BookOpen size={13} />
                      <span>Case Study</span>
                      <ArrowUpRight size={13} />
                    </button>
                  )}
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '8px',
                color: 'var(--text-primary)'
              }}>
                {project.title}
              </h3>

              <p style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '20px',
                maxWidth: '850px'
              }}>
                {project.shortDescription}
              </p>

              {/* Metrics Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '12px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px',
                marginBottom: '20px'
              }}>
                {project.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-hover)'
                    }}>
                      {metric.value}
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                      {metric.label}
                    </div>
                    {metric.detail && (
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        {metric.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-card-hover)',
                      border: '1px solid var(--border-card)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />

      </div>
    </section>
  );
};
