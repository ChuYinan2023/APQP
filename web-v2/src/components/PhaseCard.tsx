import type { PhaseState } from '../types';
import Badge from './Badge';

interface Props {
  phase: PhaseState;
  onConfirm: () => void;
}

const statusIcon = {
  locked: '🔒',
  pending: '⏳',
  active: '🔄',
  done: '✅',
};

const statusColor = {
  locked: 'border-white/5',
  pending: 'border-white/5',
  active: 'border-blue-400/30',
  done: 'border-green-400/20',
};

export default function PhaseCard({ phase, onConfirm }: Props) {
  if (!phase.visible) return null;

  const isActive = phase.status === 'active';
  const isDone = phase.status === 'done';

  return (
    <div
      className={`
        animate-fade-in-up rounded-xl border bg-navy-card p-5 transition-all duration-300
        ${statusColor[phase.status]}
        ${isActive ? 'animate-pulse-gold' : ''}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-lg">{statusIcon[phase.status]}</span>
          <h3 className="text-base font-semibold text-gray-100">
            Phase {phase.id} · {phase.label}
          </h3>
        </div>
        <Badge color={isDone ? 'green' : isActive ? 'blue' : 'gray'}>
          {isDone ? '完成' : isActive ? '处理中' : '等待'}
        </Badge>
      </div>

      {/* Status message */}
      {phase.statusMessage && (
        <div className={`text-sm mb-4 ${phase.statusMessage.includes('✅') || phase.statusMessage.includes('🎯') ? 'text-gold-light' : 'text-gray-400'}`}>
          {phase.statusMessage}
        </div>
      )}

      {/* Metrics grid */}
      {phase.metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mb-4">
          {phase.metrics.map((m, i) => (
            <div
              key={i}
              className="animate-fade-in-up bg-white/[0.03] rounded-lg px-3 py-2 border border-white/5"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-sm">{m.icon}</span>
                <span className="text-lg font-semibold text-gray-100 tabular-nums">{m.value}</span>
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* File table (Phase A) */}
      {phase.files.length > 0 && (
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2 font-medium">文件清单</div>
          <div className="rounded-lg border border-white/5 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.02] text-gray-500 text-[11px]">
                  <th className="text-left px-3 py-1.5 font-medium">文件名</th>
                  <th className="text-right px-3 py-1.5 font-medium w-16">页数</th>
                  <th className="text-right px-3 py-1.5 font-medium w-20">大小</th>
                </tr>
              </thead>
              <tbody>
                {phase.files.map((f, i) => (
                  <tr
                    key={i}
                    className="animate-fade-in-up border-t border-white/[0.03]"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <td className="px-3 py-1.5 text-gray-300 truncate max-w-[280px]">
                      <span className="text-xs mr-1.5">
                        {f.type === 'xlsx' ? '📊' : f.type === 'pdf' ? '📕' : f.type === 'pptx' ? '📙' : '📘'}
                      </span>
                      {f.name}
                    </td>
                    <td className="px-3 py-1.5 text-right text-gray-500 tabular-nums">{f.pages}</td>
                    <td className="px-3 py-1.5 text-right text-gray-500">{f.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Embedded files (Phase A) */}
      {phase.embeddedFiles.length > 0 && (
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2 font-medium">
            嵌入文件 <span className="text-gray-600">({phase.embeddedFiles.length} 个)</span>
          </div>
          <div className="space-y-1">
            {phase.embeddedFiles.map((f, i) => (
              <div
                key={i}
                className="animate-fade-in-up flex items-center gap-2 text-sm text-gray-400 pl-2"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-gray-600" style={{ marginLeft: `${(f.layer - 1) * 16}px` }}>
                  {f.layer === 1 ? '├─' : f.layer === 2 ? '│ ├─' : '│ │ ├─'}
                </span>
                <span className="text-xs">{f.name}</span>
                <span className="text-[10px] text-gray-600">← {f.source}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Customer templates (Phase A) */}
      {phase.customerTemplates.length > 0 && (
        <div className="mb-4">
          <div className="text-xs text-gold mb-2 font-medium">🎯 客户模板</div>
          <div className="flex flex-wrap gap-1.5">
            {phase.customerTemplates.map((t, i) => (
              <Badge key={i} color="gold" size="md">{t}</Badge>
            ))}
          </div>
        </div>
      )}

      {/* Missing items (Phase B - B1) */}
      {phase.missingItems.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-gray-500 font-medium">B1 · 缺失项</span>
            <span className="text-sm font-semibold text-amber-400 tabular-nums">{phase.missingCount}</span>
          </div>
          <div className="space-y-1">
            {phase.missingItems.map((item, i) => (
              <div
                key={item.id}
                className="animate-fade-in-up flex items-center gap-2 text-sm bg-white/[0.02] rounded px-3 py-1.5 border border-white/5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className={`text-xs ${item.priority === 'high' ? 'text-red-400' : item.priority === 'medium' ? 'text-amber-400' : 'text-gray-500'}`}>
                  ●
                </span>
                <span className="text-gray-300 flex-1">{item.name}</span>
                <Badge color={item.priority === 'high' ? 'red' : item.priority === 'medium' ? 'amber' : 'gray'} size="sm">
                  {item.priority === 'high' ? '高' : item.priority === 'medium' ? '中' : '低'}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Characteristics (Phase B - B2) */}
      {phase.characteristics.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-gray-500 font-medium">B2 · 特殊特性</span>
            <div className="flex gap-2">
              <span className="text-sm font-semibold text-red-400 tabular-nums">{phase.ccCount} CC</span>
              <span className="text-gray-600">+</span>
              <span className="text-sm font-semibold text-amber-400 tabular-nums">{phase.scCount} SC</span>
              <span className="text-gray-600">=</span>
              <span className="text-sm font-semibold text-gray-200 tabular-nums">{phase.ccCount + phase.scCount}</span>
            </div>
          </div>
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {phase.characteristics.map((c, i) => (
              <div
                key={c.id}
                className="animate-fade-in-up flex items-center gap-2 text-sm bg-white/[0.02] rounded px-3 py-1.5 border border-white/5"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <Badge color={c.type === 'CC' ? 'red' : 'amber'} size="sm">{c.type}</Badge>
                <span className="text-gray-300 flex-1 truncate">{c.name}</span>
                <span className="text-[10px] text-gray-600">{c.spec}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exceptions (Phase B - B3) */}
      {phase.exceptions.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-gray-500 font-medium">B3 · 例外清单</span>
            <div className="flex gap-2 text-sm tabular-nums">
              <span className="text-green-400">{phase.approvedCount}✅</span>
              <span className="text-red-400">{phase.rejectedCount}❌</span>
              <span className="text-blue-400">{phase.pendingCount}🔵</span>
            </div>
          </div>
          {/* Stacked bar */}
          <div className="flex h-2 rounded-full overflow-hidden mb-2">
            {phase.approvedCount > 0 && (
              <div className="bg-green-400 transition-all duration-700" style={{ width: `${(phase.approvedCount / (phase.approvedCount + phase.rejectedCount + phase.pendingCount)) * 100}%` }} />
            )}
            {phase.rejectedCount > 0 && (
              <div className="bg-red-400 transition-all duration-700" style={{ width: `${(phase.rejectedCount / (phase.approvedCount + phase.rejectedCount + phase.pendingCount)) * 100}%` }} />
            )}
            {phase.pendingCount > 0 && (
              <div className="bg-blue-400 transition-all duration-700" style={{ width: `${(phase.pendingCount / (phase.approvedCount + phase.rejectedCount + phase.pendingCount)) * 100}%` }} />
            )}
          </div>
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {phase.exceptions.map((item, i) => (
              <div
                key={item.id}
                className="animate-fade-in-up flex items-center gap-2 text-sm bg-white/[0.02] rounded px-3 py-1.5 border border-white/5"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-sm">
                  {item.status === 'approved' ? '✅' : item.status === 'rejected' ? '❌' : '🔵'}
                </span>
                <span className="text-gray-300 flex-1">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Artifact slots (Phase C) */}
      {phase.artifactSlots.length > 0 && (
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2 font-medium">产出物生成</div>
          <div className="grid grid-cols-3 gap-2">
            {phase.artifactSlots.map((a, i) => (
              <div
                key={a.id}
                className={`
                  animate-fade-in-up rounded-lg border px-3 py-2 text-center transition-all duration-500
                  ${a.status === 'pending' ? 'bg-white/[0.02] border-white/5 text-gray-600' : ''}
                  ${a.status === 'generating' ? 'bg-blue-400/10 border-blue-400/30 text-blue-300 animate-pulse' : ''}
                  ${a.status === 'ready' ? 'bg-green-400/10 border-green-400/20 text-green-300' : ''}
                `}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="text-lg mb-0.5">
                  {a.status === 'ready' ? '✅' : a.status === 'generating' ? '⚙️' : '⬜'}
                </div>
                <div className="text-[10px] truncate">{a.id.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Consistency checks (Phase C) */}
      {phase.consistencyChecks.length > 0 && (
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2 font-medium">一致性检查</div>
          <div className="space-y-1">
            {phase.consistencyChecks.map((c, i) => (
              <div
                key={c.id}
                className="animate-fade-in-up flex items-center gap-2 text-sm"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span>{c.passed ? '✅' : '⚠️'}</span>
                <span className={c.passed ? 'text-gray-300' : 'text-amber-400'}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Confirm button */}
      {phase.showConfirm && (
        <div className="animate-fade-in-up pt-2">
          <button
            onClick={onConfirm}
            className="w-full py-2.5 rounded-lg bg-gold text-navy-deep font-semibold text-sm hover:bg-gold-light transition-colors"
          >
            确认并继续 →
          </button>
        </div>
      )}
    </div>
  );
}
