import type { Stage4Data } from '../types';
import StatusBar from './StatusBar';

interface Props {
  data: Stage4Data;
  status: 'processing' | 'awaiting' | 'completed';
  progress: number;
  onComplete: () => void;
}

export default function Stage4({ data, status, progress, onComplete }: Props) {
  const statusMessage = status === 'processing'
    ? '阶段4 处理中'
    : status === 'completed'
    ? '阶段4 完成 · QFD 质量屋矩阵已生成'
    : 'QFD 矩阵生成完成，请确认';

  const getStrength = (l1Id: string, l2Id: string): string => {
    const cell = data.matrix.find(c => c.l1Id === l1Id && c.l2Id === l2Id);
    return cell?.strength || '';
  };

  const strengthColor = (s: string) => {
    if (s === '◎') return 'text-red-600 font-bold';
    if (s === '○') return 'text-blue-600';
    if (s === '△') return 'text-gray-500';
    return '';
  };

  // Group L2 by part
  const partGroups: { part: string; ids: string[]; names: string[] }[] = [];
  data.l2Ids.forEach((id, i) => {
    const part = data.l2Parts[i];
    const existing = partGroups.find(g => g.part === part);
    if (existing) {
      existing.ids.push(id);
      existing.names.push(data.l2Names[i]);
    } else {
      partGroups.push({ part, ids: [id], names: [data.l2Names[i]] });
    }
  });

  return (
    <div>
      <StatusBar
        status={status}
        progress={progress}
        message={statusMessage}
        detail={status === 'processing' ? '正在构建 L1×L2 关联矩阵...' : undefined}
      />

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-gold rounded-full inline-block" />
          QFD 质量屋矩阵 (预览)
        </h3>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="text-xs">
            <thead>
              {/* Part name row */}
              <tr className="bg-blue-50">
                <th colSpan={2} className="px-2 py-1.5 text-left font-medium text-blue-800 border-r border-blue-200"></th>
                {partGroups.map((g) => (
                  <th
                    key={g.part}
                    colSpan={g.ids.length}
                    className="px-2 py-1.5 text-center font-medium text-blue-800 border-r border-blue-200"
                  >
                    {g.part}
                  </th>
                ))}
              </tr>
              {/* L2 ID row */}
              <tr className="bg-gray-100">
                <th className="px-2 py-1.5 text-left font-medium text-gray-600 w-12">L1</th>
                <th className="px-2 py-1.5 text-left font-medium text-gray-600 border-r border-gray-300 min-w-[120px]">特性名称</th>
                {data.l2Ids.map((id, i) => (
                  <th key={id} className="px-2 py-1.5 text-center font-medium text-gray-600 min-w-[60px]">
                    <div>{id}</div>
                    <div className="font-normal text-gray-400">{data.l2Names[i]}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.l1Ids.map((l1Id) => (
                <tr key={l1Id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-2 py-2 text-gray-500 bg-gray-50 font-mono">L1-{l1Id}</td>
                  <td className="px-2 py-2 text-gray-700 border-r border-gray-200 font-medium">
                    {/* Show a simplified name based on L1 ID */}
                    {['供油量(FSI)', '供油量(MPI)', '供油量(TDI)', '信号输出', '启动电流', '额定功率', '温度范围', '耐振动', '外部泄漏', '内部回流', '噪声', '设计寿命'][parseInt(l1Id) - 1] || l1Id}
                  </td>
                  {data.l2Ids.map((l2Id) => {
                    const s = getStrength(l1Id, l2Id);
                    return (
                      <td key={l2Id} className={`px-2 py-2 text-center ${strengthColor(s)}`}>
                        {s}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 flex gap-4 text-xs text-gray-500">
          <span>◎ = 强关联(9)</span>
          <span>○ = 中关联(3)</span>
          <span>△ = 弱关联(1)</span>
        </div>
      </div>

      {/* Audit results */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-green-500 rounded-full inline-block" />
          审查结果
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className={data.emptyL1.length === 0 ? 'text-green-600' : 'text-red-600'}>
              {data.emptyL1.length === 0 ? '✓' : '⚠️'}
            </span>
            <span className="text-gray-700">
              空行L1 (无L2关联): {data.emptyL1.length === 0 ? '无' : data.emptyL1.join(', ')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={data.emptyL2.length === 0 ? 'text-green-600' : 'text-red-600'}>
              {data.emptyL2.length === 0 ? '✓' : '⚠️'}
            </span>
            <span className="text-gray-700">
              空列L2 (无L1关联): {data.emptyL2.length === 0 ? '无' : data.emptyL2.join(', ')}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600">ℹ️</span>
            <span className="text-gray-700">
              关键设计件: {data.criticalParts.join(', ')}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
            📥 下载 QFD Excel
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
            📦 下载全部产出物 .zip
          </button>
        </div>
        <button
          onClick={onComplete}
          className="px-6 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
        >
          ✅ 项目完成
        </button>
      </div>
    </div>
  );
}
