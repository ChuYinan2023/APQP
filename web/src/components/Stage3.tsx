import type { Stage3Data } from '../types';
import StatusBar from './StatusBar';

interface Props {
  data: Stage3Data;
  status: 'processing' | 'awaiting' | 'completed';
  progress: number;
  onConfirm: () => void;
}

export default function Stage3({ data, status, progress, onConfirm }: Props) {
  const statusMessage = status === 'processing'
    ? '阶段3 处理中'
    : status === 'completed'
    ? `阶段3 完成 · ${data.characteristics.length} 条L2零部件特性`
    : `提取完成 · ${data.characteristics.length} 条零部件特性，请确认`;

  return (
    <div>
      <StatusBar
        status={status}
        progress={progress}
        message={statusMessage}
        detail={status === 'processing' ? '正在从L1工程特性向下分解到零部件级...' : undefined}
      />

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-gold rounded-full inline-block" />
          L2 零部件特性清单 (预览)
        </h3>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 font-medium text-gray-600 w-16">ID</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">零件/组件</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">零件特性</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">目标值</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">对应L1</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">来源</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">备注</th>
              </tr>
            </thead>
            <tbody>
              {data.characteristics.map((row) => (
                <tr key={row.id} className={`border-t border-gray-100 ${row.note ? 'bg-amber-50/50' : ''}`}>
                  <td className="px-3 py-2.5 text-gray-500 font-mono text-xs">{row.id}</td>
                  <td className="px-3 py-2.5 text-gray-700">{row.partName}</td>
                  <td className="px-3 py-2.5 font-medium text-gray-900">{row.characteristic}</td>
                  <td className="px-3 py-2.5 text-gray-700 font-mono text-xs">{row.targetValue}</td>
                  <td className="px-3 py-2.5">
                    <div className="flex gap-1 flex-wrap">
                      {row.linkedL1.map(id => (
                        <span key={id} className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded">L1-{id}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-gray-500 text-xs">{row.source}</td>
                  <td className="px-3 py-2.5 text-xs text-amber-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6 text-sm">
        {data.gapCount > 0 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
            📎 {data.gapCount} 项缺口
          </span>
        )}
        <button className="text-xs text-gold hover:text-amber-600 underline">查看缺口详情</button>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
          📥 下载完整 Excel
        </button>
        <button
          onClick={onConfirm}
          className="px-6 py-2.5 bg-gold text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
        >
          确认完成，进入阶段4 →
        </button>
      </div>
    </div>
  );
}
