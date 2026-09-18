import React from 'react';
import { WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Briefcase size={14} />
            <span>BACKGROUND & TRACK RECORD</span>
          </div>
          <h2 className="section-title">
            Experience & Education
          </h2>
          <p className="section-subtitle">
            Hands-on machine-learning internship experience, formal artificial intelligence education, and verified industry credentials.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          {/* Left Column: Work Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <Briefcase size={18} style={{ color: 'var(--accent-hover)' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700 }}>Professional Experience</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h4>
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--accent-hover)', backgroundColor: 'var(--accent-dim)', padding: '2px 8px', borderRadius: '4px' }}>
                      {exp.period}
                    </span>
                  </div>

                  <div style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '14px' }}>
                    {exp.company} · {exp.location}
                  </div>

                  <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                    {exp.contributions.map((point, pIdx) => (
                      <li key={pIdx} style={{ fontSize: '13.5px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--accent-hover)', marginTop: '2px' }}>•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.techStack.map((tech, tIdx) => (
                      <span key={tIdx} style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div style={{ marginTop: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <GraduationCap size={18} style={{ color: 'var(--accent-hover)' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>Education</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="card" style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {edu.degree}
                      </h4>
                      <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        {edu.period}
                      </span>
                    </div>

                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                      {edu.institution}
                    </div>

                    {edu.affiliation && (
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                        {edu.affiliation} {edu.gpa ? `· GPA: ${edu.gpa}` : ''}
                      </div>
                    )}

                    {edu.details && (
                      <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {edu.details.map((d, dIdx) => (
                          <li key={dIdx} style={{ fontSize: '12.5px', color: 'var(--text-muted)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                            <span style={{ color: 'var(--accent-hover)' }}>▪</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <Award size={18} style={{ color: 'var(--accent-hover)' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700 }}>Verified Industry Certifications</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-card)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '16px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {cert.name}
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center' }}
                        aria-label={`${cert.name} link`}
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>

                  <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>
                    {cert.issuer} {cert.date ? `· ${cert.date}` : ''}
                  </div>

                  {cert.credentialId && (
                    <div style={{ fontSize: '11.5px', fontFamily: 'var(--font-mono)', color: 'var(--accent-hover)', marginTop: '4px' }}>
                      ID: {cert.credentialId} {cert.validUntil ? `(Valid through ${cert.validUntil})` : ''}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
