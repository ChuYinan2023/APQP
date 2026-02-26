import type { Stage2Data } from '../types';
import StatusBar from './StatusBar';

interface Props {
  data: Stage2Data;
  status: 'processing' | 'awaiting' | 'completed';
  progress: number;
  onConfirm: () => void;
}

export default function Stage2({ data, status, progress, onConfirm }: Props) {
  const statusMessage = status === 'processing'
    ? '阶段2 处理中'
    : status === 'completed'
    ? `阶段2 完成 · 提取了 ${data.characteristics.length} 条L1工程特性`
    : `提取完成 · ${data.characteristics.length} 条特性，请确认`;

  return (
    <div>
      <StatusBar
        status={status}
        progress={progress}
        message={statusMessage}
        detail={status === 'processing' ? '正在从工作底稿提取系统级工程特性...' : undefined}
      />

      {/* Table */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-gold rounded-full inline-block" />
          L1 工程特性清单 (预览)
        </h3>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 font-medium text-gray-600 w-12">ID</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">分类</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">特性名称</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">目标值/要求</th>
                <th className="text-center px-3 py-2 font-medium text-gray-600 w-12">类别</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">来源</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">备注</th>
              </tr>
            </thead>
            <tbody>
              {data.characteristics.map((row) => (
                <tr
                  key={row.id}
                  className={`border-t border-gray-100 ${
                    row.hasConflict ? 'bg-amber-50' : row.classification === 'C' ? 'bg-red-50/40' : ''
                  }`}
                >
                  <td className="px-3 py-2.5 text-gray-500">{row.id}</td>
                  <td className="px-3 py-2.5 text-gray-600">{row.category}</td>
                  <td className="px-3 py-2.5 font-medium text-gray-900">{row.name}</td>
                  <td className="px-3 py-2.5 text-gray-700 font-mono text-xs">{row.targetValue}</td>
                  <td className="px-3 py-2.5 text-center">
                    <span className={`text-xs font-bold ${row.classification === 'C' ? 'text-red-600' : 'text-gray-500'}`}>
                      {row.classification}
                      {row.classification === 'C' && ' 🔴'}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-gray-500 text-xs">{row.source} {row.section}</td>
                  <td className="px-3 py-2.5 text-xs text-amber-600 max-w-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="flex items-center gap-4 mb-6 text-sm">
        {data.conflictCount > 0 && (
          <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">
            ⚠️ {data.conflictCount} 项冲突
          </span>
        )}
        {data.gapCount > 0 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
            📎 {data.gapCount} 项缺口
          </span>
        )}
        <button className="text-xs text-gold hover:text-amber-600 underline">查看缺口与冲突详情</button>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
          📥 下载完整 Excel
        </button>
        <button
          onClick={onConfirm}
          className="px-6 py-2.5 bg-gold text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
        >
          确认完成，进入阶段3 →
        </button>
      </div>
    </div>
  );
}
