import { useRef, useEffect, useState } from 'react';
import type { PhaseState, PhaseId } from '../types';
import PhaseCard from './PhaseCard';

interface Props {
  phases: Record<PhaseId, PhaseState>;
  onConfirm: (phaseId: PhaseId) => void;
  projectName: string | null;
}

export default function CenterPanel({ phases, onConfirm, projectName }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [showNewContent, setShowNewContent] = useState(false);
  const prevContentRef = useRef(0);

  // Content change detection for auto-scroll
  const contentHash = Object.values(phases).reduce((sum, p) => {
    return sum + p.metrics.length + p.files.length + p.embeddedFiles.length +
      p.customerTemplates.length + p.missingItems.length + p.characteristics.length +
      p.exceptions.length + p.artifactSlots.length + p.consistencyChecks.length +
      (p.statusMessage ? 1 : 0) + (p.showConfirm ? 1 : 0);
  }, 0);

  useEffect(() => {
    if (contentHash !== prevContentRef.current) {
      prevContentRef.current = contentHash;
      if (autoScroll && scrollRef.current) {
        scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
      } else if (!autoScroll) {
        setShowNewContent(true);
      }
    }
  }, [contentHash, autoScroll]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const atBottom = scrollHeight - scrollTop - clientHeight < 60;
    setAutoScroll(atBottom);
    if (atBottom) setShowNewContent(false);
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    setAutoScroll(true);
    setShowNewContent(false);
  };

  const phaseOrder: PhaseId[] = ['A', 'B', 'C'];
  const visiblePhases = phaseOrder.filter(id => phases[id].visible);

  return (
    <div className="flex-1 flex flex-col min-w-0 relative">
      {/* Sticky header */}
      <div className="flex items-center gap-3 px-6 py-3 border-b border-border bg-navy-deep/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          {phaseOrder.map(id => {
            const p = phases[id];
            return (
              <div key={id} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${
                  p.status === 'done' ? 'bg-green-400' :
                  p.status === 'active' ? 'bg-blue-400 animate-pulse' :
                  'bg-gray-700'
                }`} />
                <span className={`text-xs ${
                  p.status === 'done' ? 'text-green-400' :
                  p.status === 'active' ? 'text-blue-300' :
                  'text-gray-600'
                }`}>
                  {id}
                </span>
                {id !== 'C' && <span className="text-gray-700 mx-1">→</span>}
              </div>
            );
          })}
        </div>
        {projectName && (
          <span className="text-xs text-gray-500 ml-auto">{projectName}</span>
        )}
      </div>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-6 py-4 space-y-4"
      >
        {visiblePhases.length === 0 ? (
          <div className="text-center py-24 text-gray-600">
            <p className="text-4xl mb-3">◆</p>
            <p className="text-lg text-gray-400 mb-1">APQP 报价工具</p>
            <p className="text-sm">选择左侧项目开始分析</p>
          </div>
        ) : (
          visiblePhases.map(id => (
            <PhaseCard
              key={id}
              phase={phases[id]}
              onConfirm={() => onConfirm(id)}
            />
          ))
        )}
      </div>

      {/* New content indicator */}
      {showNewContent && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gold text-navy-deep text-xs font-medium shadow-lg hover:bg-gold-light transition-colors animate-fade-in-up"
        >
          ↓ 新内容
        </button>
      )}
    </div>
  );
}
