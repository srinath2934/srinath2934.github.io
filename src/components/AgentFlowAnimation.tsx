import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';

interface TraceStep {
  id: string;
  name: string;
  agent: string;
  latency: string;
  status: 'pending' | 'running' | 'completed';
  output: string;
}

const INITIAL_STEPS: TraceStep[] = [
  { id: '1', name: 'Research Node', agent: 'HubSpot MCP Client', latency: '42ms', status: 'pending', output: 'Ingested Deal #409: "Fintech Expansion ($85,000)" · 6 days inactive' },
  { id: '2', name: 'Deterministic Scoring', agent: 'Priority Algorithm', latency: '2ms', status: 'pending', output: 'Score: 95 pts (Contract Sent: +35, Value: +30, Inactivity: +30)' },
  { id: '3', name: 'Strategic Reasoning', agent: 'Claude 3.5 Sonnet', latency: '310ms', status: 'pending', output: 'Blocker: CFO custom SLA milestone approval · Strategy: Direct outreach' },
  { id: '4', name: 'Communication Drafter', agent: 'Anti-Invention Agent', latency: '240ms', status: 'pending', output: 'Follow-up email synthesized with zero-hallucination policy' },
  { id: '5', name: 'Human-in-the-Loop Gate', agent: 'Checkpointer Pause', latency: '0ms (HALT)', status: 'pending', output: 'interrupt_before=["approval"] · Awaiting human verification before CRM write' }
];

export const AgentFlowAnimation: React.FC = () => {
  const [steps, setSteps] = useState<TraceStep[]>(INITIAL_STEPS);
  const [isRunning, setIsRunning] = useState(false);
  const [currentIdx, setCurrentIdx] = useState<number>(-1);

  const startSimulation = () => {
    setIsRunning(true);
    setCurrentIdx(0);
    setSteps(INITIAL_STEPS.map((s, idx) => ({
      ...s,
      status: idx === 0 ? 'running' : 'pending'
    })));
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentIdx(-1);
    setSteps(INITIAL_STEPS);
  };

  useEffect(() => {
    if (!isRunning || currentIdx < 0) return;

    if (currentIdx >= steps.length) {
      setIsRunning(false);
      return;
    }

    const timer = setTimeout(() => {
      setSteps(prev => prev.map((step, idx) => {
        if (idx === currentIdx) {
          return { ...step, status: 'completed' };
        }
        if (idx === currentIdx + 1) {
          return { ...step, status: 'running' };
        }
        return step;
      }));
      setCurrentIdx(prev => prev + 1);
    }, currentIdx === 4 ? 1200 : 700);

    return () => clearTimeout(timer);
  }, [isRunning, currentIdx]);

  return (
    <div style={{
      marginTop: '48px',
      backgroundColor: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Banner */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        marginBottom: '20px',
        paddingBottom: '16px',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            backgroundColor: 'var(--accent-dim)',
            border: '1px solid var(--accent-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-hover)'
          }}>
            <Cpu size={15} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Live LangGraph Execution Trace Simulator
              </span>
              <span style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--accent-hover)',
                border: '1px solid var(--border-card)'
              }}>
                Interactive
              </span>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Simulates ClosePilot's real-time state machine checkpointer and Human-in-the-Loop interrupt
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {!isRunning && currentIdx === -1 && (
            <button
              onClick={startSimulation}
              className="btn btn-accent btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Play size={13} />
              <span>Simulate Agent Run</span>
            </button>
          )}

          {isRunning && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-hover)',
              padding: '6px 12px',
              backgroundColor: 'var(--accent-dim)',
              borderRadius: 'var(--radius-sm)'
            }}>
              <span className="status-dot"></span>
              <span>Executing Node {currentIdx + 1} / 5...</span>
            </div>
          )}

          {currentIdx >= steps.length && (
            <button
              onClick={resetSimulation}
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <RotateCcw size={13} />
              <span>Replay Simulation</span>
            </button>
          )}
        </div>
      </div>

      {/* Nodes Pipeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {steps.map((step, idx) => {
          const isPending = step.status === 'pending';
          const isRunningNode = step.status === 'running';
          const isCompleted = step.status === 'completed';
          const isHITL = idx === 4;

          return (
            <div
              key={step.id}
              style={{
                backgroundColor: isRunningNode ? 'var(--bg-elevated)' : isCompleted ? 'var(--bg-secondary)' : 'rgba(255,255,255,0.01)',
                border: isRunningNode ? '1px solid var(--accent-hover)' : isCompleted ? '1px solid var(--border-card)' : '1px dashed var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 16px',
                transition: 'all 0.3s ease',
                opacity: isPending ? 0.5 : 1
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: isCompleted ? 'var(--status-live)' : isRunningNode ? 'var(--accent-hover)' : 'var(--text-muted)'
                  }}>
                    NODE 0{step.id}
                  </span>

                  <span style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {step.name}
                  </span>

                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    ({step.agent})
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: isCompleted ? 'var(--text-secondary)' : isRunningNode ? 'var(--accent-hover)' : 'var(--text-muted)'
                  }}>
                    {isCompleted ? `✓ ${step.latency}` : isRunningNode ? 'computing...' : 'queued'}
                  </span>

                  {isCompleted && (
                    isHITL ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', color: '#F59E0B', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                        <ShieldAlert size={13} />
                        <span>INTERRUPT ACTIVE</span>
                      </span>
                    ) : (
                      <CheckCircle size={14} style={{ color: 'var(--status-live)' }} />
                    )
                  )}

                  {isRunningNode && (
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: '2px solid var(--accent-hover)',
                      borderTopColor: 'transparent',
                      animation: 'spin 0.8s linear infinite'
                    }} />
                  )}
                </div>
              </div>

              {/* Output Log Message */}
              <div style={{
                fontSize: '12.5px',
                fontFamily: 'var(--font-mono)',
                color: isCompleted ? (isHITL ? '#FBBF24' : 'var(--text-secondary)') : isRunningNode ? 'var(--accent-hover)' : 'var(--text-dim)',
                lineHeight: 1.4
              }}>
                {isCompleted || isRunningNode ? `➜ ${step.output}` : '· Waiting for prior node checkpoint state...'}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
