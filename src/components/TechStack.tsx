import React from 'react';
import { Cpu } from 'lucide-react';

// Devicon CDN base
const DI = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

// Simple Icons CDN (white icons for dark bg)
const SI = (slug: string) =>
  `https://cdn.simpleicons.org/${slug}/white`;

interface TechItem {
  name: string;
  icon: string;
  accent?: string; // optional brand color for hover glow
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Machine Learning & Data Science',
    items: [
      { name: 'PyTorch', icon: DI('pytorch'), accent: '#EE4C2C' },
      { name: 'scikit-learn', icon: SI('scikitlearn'), accent: '#F7931E' },
      { name: 'CatBoost', icon: SI('catboost'), accent: '#FFCC00' },
      { name: 'pandas', icon: DI('pandas'), accent: '#150458' },
      { name: 'NumPy', icon: DI('numpy'), accent: '#4DABCF' },
      { name: 'SHAP', icon: SI('python'), accent: '#7B61FF' },
      { name: 'PostgreSQL', icon: DI('postgresql'), accent: '#336791' },
      { name: 'SQLite', icon: DI('sqlite'), accent: '#003B57' },
    ]
  },
  {
    title: 'Deep Learning & NLP',
    items: [
      { name: 'SBERT', icon: SI('huggingface'), accent: '#FFD21E' },
      { name: 'OpenCV', icon: DI('opencv'), accent: '#5C3EE8' },
      { name: 'YOLOv9', icon: SI('yolo'), accent: '#00FFFF' },
      { name: 'NLTK', icon: SI('python'), accent: '#3776AB' },
      { name: 'Tokenization', icon: SI('databricks'), accent: '#FF3621' },
      { name: 'Embeddings', icon: SI('vectorworks'), accent: '#60A5FA' },
    ]
  },
  {
    title: 'LLMs, RAG & Retrieval',
    items: [
      { name: 'Claude', icon: SI('anthropic'), accent: '#D4A574' },
      { name: 'OpenAI', icon: SI('openai'), accent: '#FFFFFF' },
      { name: 'Groq', icon: SI('groq'), accent: '#F55036' },
      { name: 'LangChain', icon: SI('langchain'), accent: '#1C3C3C' },
      { name: 'FAISS', icon: SI('meta'), accent: '#0668E1' },
      { name: 'ChromaDB', icon: SI('chroma'), accent: '#FFD54F' },
    ]
  },
  {
    title: 'Agentic AI & Orchestration',
    items: [
      { name: 'LangGraph', icon: SI('langchain'), accent: '#1C3C3C' },
      { name: 'MCP', icon: SI('anthropic'), accent: '#D4A574' },
      { name: 'CrewAI', icon: SI('robotframework'), accent: '#00B0F0' },
      { name: 'Pydantic', icon: SI('pydantic'), accent: '#E92063' },
      { name: 'LangSmith', icon: SI('langchain'), accent: '#1C3C3C' },
    ]
  },
  {
    title: 'Languages & Frameworks',
    items: [
      { name: 'Python', icon: DI('python'), accent: '#3776AB' },
      { name: 'FastAPI', icon: DI('fastapi'), accent: '#009688' },
      { name: 'React', icon: DI('react'), accent: '#61DAFB' },
      { name: 'TypeScript', icon: DI('typescript'), accent: '#3178C6' },
      { name: 'Streamlit', icon: DI('streamlit'), accent: '#FF4B4B' },
    ]
  },
  {
    title: 'Deployment & DevOps',
    items: [
      { name: 'Docker', icon: DI('docker'), accent: '#2496ED' },
      { name: 'AWS', icon: DI('amazonwebservices', 'original-wordmark'), accent: '#FF9900' },
      { name: 'Git', icon: DI('git'), accent: '#F05032' },
      { name: 'GitHub', icon: DI('github'), accent: '#FFFFFF' },
      { name: 'Linux', icon: DI('linux'), accent: '#FCC624' },
      { name: 'Pytest', icon: DI('pytest'), accent: '#0A9EDC' },
    ]
  },
];

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
            Tools used in shipped projects — not self-assessments. Every logo here maps to code in a live repository.
          </p>
        </div>

        {/* Categories */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '36px'
        }}>
          {TECH_CATEGORIES.map((cat, cIdx) => (
            <div key={cIdx}>
              {/* Category Title */}
              <h3 style={{
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  width: '16px',
                  height: '2px',
                  backgroundColor: 'var(--border-hover)',
                  display: 'inline-block'
                }} />
                {cat.title}
              </h3>

              {/* Tech Icon Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                gap: '12px'
              }}>
                {cat.items.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="tech-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '18px 12px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-card)',
                      transition: 'all 0.25s ease',
                      cursor: 'default',
                      '--tech-accent': tech.accent || 'var(--accent-hover)'
                    } as React.CSSProperties}
                  >
                    {/* Logo */}
                    <div style={{
                      width: '38px',
                      height: '38px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        loading="lazy"
                        style={{
                          width: '34px',
                          height: '34px',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                        }}
                        onError={(e) => {
                          // Fallback: hide broken image, show initial
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback initial circle (hidden by default) */}
                      <div
                        style={{
                          display: 'none',
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          backgroundColor: tech.accent || 'var(--accent-dim)',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '15px',
                          fontWeight: 700,
                          color: '#fff'
                        }}
                      >
                        {tech.name.charAt(0)}
                      </div>
                    </div>

                    {/* Name */}
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      textAlign: 'center',
                      lineHeight: 1.2,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '100%'
                    }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .tech-card:hover {
          border-color: var(--border-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }
        .tech-card:hover img {
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }
      `}</style>
    </section>
  );
};
