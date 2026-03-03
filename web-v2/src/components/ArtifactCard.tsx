import type { Artifact } from '../types';
import Badge from './Badge';

const fileTypeColors: Record<string, string> = {
  xlsx: 'text-green-400',
  md: 'text-gray-400',
  pdf: 'text-red-400',
  docx: 'text-blue-400',
};

const fileTypeIcons: Record<string, string> = {
  xlsx: '📊',
  md: '📝',
  pdf: '📕',
  docx: '📘',
};

const categoryLabels: Record<string, { label: string; color: 'gold' | 'blue' | 'green' | 'red' | 'amber' | 'gray' | 'purple' }> = {
  cost: { label: '成本', color: 'gold' },
  plan: { label: '计划', color: 'blue' },
  team: { label: '团队', color: 'purple' },
  quality: { label: '质量', color: 'amber' },
  spec: { label: '规格', color: 'green' },
  report: { label: '报告', color: 'gray' },
};

interface Props {
  artifact: Artifact;
  index: number;
}

export default function ArtifactCard({ artifact, index }: Props) {
  const cat = categoryLabels[artifact.category];
  const isGenerating = artifact.status === 'generating';
  const isReady = artifact.status === 'ready';
  const isPending = artifact.status === 'pending';

  return (
    <div
      className={`
        animate-fade-in-right rounded-lg border p-3 transition-all duration-300
        ${isPending ? 'bg-white/[0.02] border-white/5 opacity-40' : ''}
        ${isGenerating ? 'bg-navy-card border-blue-400/30 animate-pulse' : ''}
        ${isReady ? 'bg-navy-card border-border-light hover:border-gold/30 hover:bg-navy-light/50 cursor-pointer' : ''}
      `}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start gap-2.5">
        <span className={`text-lg ${fileTypeColors[artifact.fileType] ?? 'text-gray-400'}`}>
          {fileTypeIcons[artifact.fileType] ?? '📄'}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-sm font-medium text-gray-200 truncate">{artifact.name}</span>
            {isReady && <span className="text-green-400 text-xs">✓</span>}
          </div>
          <div className="flex items-center gap-1.5">
            <Badge color={cat.color} size="sm">{cat.label}</Badge>
            {artifact.keyStats && (
              <span className="text-[11px] text-gray-500">{artifact.keyStats}</span>
            )}
          </div>
        </div>
        {isReady && (
          <button className="text-gray-500 hover:text-gold transition-colors text-sm mt-0.5">
            ↓
          </button>
        )}
        {isGenerating && (
          <span className="text-blue-400 text-xs animate-pulse">生成中</span>
        )}
      </div>
    </div>
  );
}
