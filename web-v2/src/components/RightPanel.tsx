import type { Artifact } from '../types';
import ArtifactCard from './ArtifactCard';
import ProgressBar from './ProgressBar';

interface Props {
  artifacts: Artifact[];
  collapsed: boolean;
  onToggle: () => void;
}

export default function RightPanel({ artifacts, collapsed, onToggle }: Props) {
  const readyCount = artifacts.filter(a => a.status === 'ready').length;
  const total = artifacts.length;

  return (
    <div
      className={`
        border-l border-border bg-navy flex flex-col transition-all duration-300 overflow-hidden
        ${collapsed ? 'w-0 border-l-0' : 'w-80'}
      `}
    >
      {!collapsed && (
        <>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="text-sm">📁</span>
              <span className="text-sm font-medium text-gray-300">产出物</span>
              {total > 0 && (
                <span className="text-[11px] text-gray-500">{readyCount}/{total}</span>
              )}
            </div>
            <button
              onClick={onToggle}
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
            >
              ▸
            </button>
          </div>

          {/* Artifact list */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
            {artifacts.length === 0 ? (
              <div className="text-center py-12 text-gray-600 text-sm">
                <p className="text-2xl mb-2">📋</p>
                <p>等待生成产出物...</p>
              </div>
            ) : (
              artifacts.map((artifact, i) => (
                <ArtifactCard key={artifact.id} artifact={artifact} index={i} />
              ))
            )}
          </div>

          {/* Bottom progress */}
          {total > 0 && (
            <div className="px-4 py-3 border-t border-border">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] text-gray-500">完成进度</span>
                <span className="text-[11px] text-gold tabular-nums">{readyCount}/{total}</span>
              </div>
              <ProgressBar value={readyCount} max={total} color="gold" showLabel={false} height="sm" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
