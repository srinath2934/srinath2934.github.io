import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, CheckCircle2, XCircle, ArrowUpRight, MessageCircle, Phone } from 'lucide-react';

export const AntiSlopAudit: React.FC = () => {

  const AUDIT_ITEMS = [
    {
      rule: "The Competitor Swap Test",
      slopFail: "Copy is so generic that replacing the name with a competitor's still makes complete sense ('Delivering seamless AI solutions...').",
      srinathPass: "100% specific to Srinath: 108,819-ticket triage backend, 7-node LangGraph sales copilot with 14/14 Pytests, IEEE ICIRCA 2026 publication, and Oracle cert 100662362OCI23AIFCA.",
      verdict: "PASSED"
    },
    {
      rule: "The 'AI Purple Problem'",
      slopFail: "Electric indigo-purple gradients, floating 3D spheres, blurred neon orbs from default Cursor/Bolt templates.",
      srinathPass: "Restrained Linear-inspired slate (#0B0D10), subtle zinc borders, and a real interactive LangGraph state execution trace debugger instead of marketing fluff.",
      verdict: "PASSED"
    },
    {
      rule: "No Concrete Numbers",
      slopFail: "Vague claims like 'improved efficiency drastically' and 'high model accuracy' without reproducible benchmarks.",
      srinathPass: "Exact, auditable metrics: 108,819 records, 384-D SBERT embeddings, 81% priority accuracy, 7.73h ETA MAE, <300ms vector latency, 90% CatBoost test accuracy.",
      verdict: "PASSED"
    },
    {
      rule: "Buzzword Density",
      slopFail: "Overloaded with 'seamless', 'cutting-edge', 'innovative', 'synergy', 'leverage', and 'delve into'.",
      srinathPass: "Zero buzzwords. Replaced with system mechanics: Pydantic schema validation, FAISS vector indexing, stateful checkpointers, and HITL interrupts.",
      verdict: "PASSED"
    },
    {
      rule: "Direct Reachability & Header Phone",
      slopFail: "Anonymous contact forms that go nowhere; phone numbers hidden; no direct WhatsApp link.",
      srinathPass: `Direct phone (+91 7603967977) visible in the top header and hero; one-click WhatsApp chat (${PERSONAL_INFO.phone}) for instant recruiter connection.`,
      verdict: "PASSED"
    },
    {
      rule: "Stock Photos & Fake Testimonials",
      slopFail: "Licensed stock photos of corporate teams laughing in boardrooms; text quotes with Unsplash avatars.",
      srinathPass: "Zero stock photos. Verified GitHub commits, live hosted demos on Render/Streamlit, and peer-reviewed IEEE research paper co-authorship.",
      verdict: "PASSED"
    },
    {
      rule: "Transparent Engineering Trade-offs",
      slopFail: "Presents AI as magic without admitting failure modes, context limits, or hallucination vectors.",
      srinathPass: "Every project features an interactive Case Study disclosing constraints, architectural trade-offs, failure modes, and next iterations.",
      verdict: "PASSED"
    }
  ];

  return (
    <section id="audit" style={{ paddingTop: '80px', paddingBottom: '85px', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '820px' }}>
          <div className="section-label" style={{ color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.3)', backgroundColor: 'rgba(16, 185, 129, 0.08)' }}>
            <ShieldCheck size={14} />
            <span>CREDIBILITY & CRAFT BENCHMARK</span>
          </div>
          <h2 className="section-title">
            The 60-Second Credibility Audit: Verified Engineer vs. AI Slop
          </h2>
          <p className="section-subtitle">
            In 2026, most websites and portfolios are generated in an afternoon with AI tools—sharing the same neon purple gradients, stock photos, and buzzwords like "seamless" and "cutting-edge". None of it builds trust. Here is how this portfolio passes the 10-point credibility test.
          </p>
        </div>

        {/* Audit Scorecard Banner */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '20px 24px',
          marginBottom: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10B981'
            }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Audited Against the GrowthGuys 10-Point Anti-Slop Standard
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Score: <strong>7 / 7 Core Tests Passed</strong> · 0 Stock Avatars · 0 Buzzwords · 100% Verifiable Code
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#10B981',
                fontSize: '13px'
              }}
            >
              <MessageCircle size={14} />
              <span>Verify on WhatsApp</span>
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '13px' }}
            >
              <Phone size={13} style={{ color: 'var(--accent-hover)' }} />
              <span>Call Direct</span>
            </a>
          </div>
        </div>

        {/* Comparison Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '18px' }}>
          {AUDIT_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {item.rule}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    color: '#10B981',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    fontWeight: 600
                  }}>
                    {item.verdict}
                  </span>
                </div>

                {/* AI Slop Fail Box */}
                <div style={{
                  padding: '10px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(239, 68, 68, 0.06)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  fontSize: '12.5px',
                  color: '#F87171',
                  marginBottom: '10px',
                  lineHeight: 1.45,
                  display: 'flex',
                  gap: '8px'
                }}>
                  <XCircle size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#FCA5A5' }}>AI Slop Default: </strong>
                    {item.slopFail}
                  </div>
                </div>

                {/* Srinath Engineering Pass Box */}
                <div style={{
                  padding: '10px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(16, 185, 129, 0.06)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  fontSize: '12.5px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.45,
                  display: 'flex',
                  gap: '8px'
                }}>
                  <CheckCircle2 size={15} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#10B981' }}>How Srinath Built It: </strong>
                    {item.srinathPass}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div style={{
          marginTop: '36px',
          padding: '20px 24px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
              Want to inspect the code or test the live endpoints yourself?
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              All 3 flagship projects are open-source on GitHub with reproducible setups, test suites, and live demos.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="#work" className="btn btn-primary btn-sm">
              <span>View Case Studies</span>
              <ArrowUpRight size={13} />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <span>GitHub Repos</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
