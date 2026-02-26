import { useState } from 'react';
import type { Stage1Data } from '../types';
import StatusBar from './StatusBar';

interface Props {
  data: Stage1Data;
  status: 'processing' | 'awaiting' | 'completed';
  progress: number;
  onConfirm: () => void;
}

export default function Stage1({ data, status, progress, onConfirm }: Props) {
  const [conflicts, setConflicts] = useState(data.conflicts);
  const [missingDocs, setMissingDocs] = useState(data.missingDocs);

  const totalDecisions = conflicts.length + missingDocs.length;
  const resolvedDecisions = conflicts.filter(c => c.decision !== null).length + missingDocs.filter(m => m.decision !== null).length;
  const allResolved = resolvedDecisions === totalDecisions;

  const statusMessage = status === 'processing'
    ? '阶段1 处理中'
    : status === 'completed'
    ? '阶段1 完成'
    : `等待您的确认 · ${resolvedDecisions}/${totalDecisions} 项已完成`;

  const statusDetail = status === 'processing'
    ? '正在解析文档并检查跨文档冲突...'
    : undefined;

  return (
    <div>
      <StatusBar status={status} progress={progress} message={statusMessage} detail={statusDetail} />

      {/* Document list */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-gold rounded-full inline-block" />
          文档清单
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 font-medium text-gray-600">文档名</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">类型</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">层级</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">语言</th>
                <th className="text-center px-3 py-2 font-medium text-gray-600">页数</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">说明</th>
              </tr>
            </thead>
            <tbody>
              {data.documents.map((doc, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="px-3 py-2.5 font-medium text-gray-900">{doc.name}</td>
                  <td className="px-3 py-2.5 text-gray-600">{doc.type}</td>
                  <td className="px-3 py-2.5 text-gray-600">{doc.level}</td>
                  <td className="px-3 py-2.5 text-gray-600">{doc.language}</td>
                  <td className="px-3 py-2.5 text-center text-gray-600">{doc.pages}</td>
                  <td className="px-3 py-2.5 text-gray-500 text-xs max-w-xs">{doc.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conflicts */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-amber-400 rounded-full inline-block" />
          冲突项 ({conflicts.length}项需确认)
        </h3>
        <div className="space-y-3">
          {conflicts.map((c) => (
            <div key={c.id} className={`border rounded-lg p-4 transition-colors ${c.decision ? 'border-green-200 bg-green-50/30' : 'border-amber-200 bg-amber-50/30'}`}>
              <p className="text-sm font-medium text-gray-800 mb-2">{c.id}. {c.parameter}</p>
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 mb-3">
                <div className="bg-white rounded px-3 py-2 border border-gray-100">
                  <span className="text-gray-400">{c.docA}:</span> <span className="font-medium text-gray-800">{c.valueA}</span>
                </div>
                <div className="bg-white rounded px-3 py-2 border border-gray-100">
                  <span className="text-gray-400">{c.docB}:</span> <span className="font-medium text-gray-800">{c.valueB}</span>
                </div>
              </div>
              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name={`conflict-${c.id}`}
                    checked={c.decision === 'a'}
                    onChange={() => setConflicts(prev => prev.map(x => x.id === c.id ? { ...x, decision: 'a' } : x))}
                    className="accent-gold"
                  />
                  <span>以 {c.docA} 为准</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name={`conflict-${c.id}`}
                    checked={c.decision === 'b'}
                    onChange={() => setConflicts(prev => prev.map(x => x.id === c.id ? { ...x, decision: 'b' } : x))}
                    className="accent-gold"
                  />
                  <span>以 {c.docB} 为准</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-gray-400">
                  <input
                    type="radio"
                    name={`conflict-${c.id}`}
                    checked={c.decision === 'tbd'}
                    onChange={() => setConflicts(prev => prev.map(x => x.id === c.id ? { ...x, decision: 'tbd' } : x))}
                    className="accent-gray-400"
                  />
                  <span>待确认</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Missing docs */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-red-400 rounded-full inline-block" />
          缺失文档 ({missingDocs.length}份)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 font-medium text-gray-600">文档</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">引用位置</th>
                <th className="text-center px-3 py-2 font-medium text-gray-600">影响</th>
                <th className="text-center px-3 py-2 font-medium text-gray-600">处理方式</th>
              </tr>
            </thead>
            <tbody>
              {missingDocs.map((doc) => (
                <tr key={doc.id} className={`border-t border-gray-100 ${doc.decision ? 'bg-green-50/30' : ''}`}>
                  <td className="px-3 py-2.5 font-medium text-gray-900 max-w-xs">{doc.name}</td>
                  <td className="px-3 py-2.5 text-gray-500 text-xs">{doc.referencedIn}</td>
                  <td className="px-3 py-2.5 text-center">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      doc.impact === 'high' ? 'bg-red-100 text-red-700' :
                      doc.impact === 'medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {doc.impact === 'high' ? '高' : doc.impact === 'medium' ? '中' : '低'}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    <select
                      value={doc.decision || ''}
                      onChange={(e) => setMissingDocs(prev => prev.map(m =>
                        m.id === doc.id ? { ...m, decision: e.target.value as 'supplement' | 'skip' } : m
                      ))}
                      className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="">请选择</option>
                      <option value="supplement">后续补充</option>
                      <option value="skip">跳过</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3">
          <label className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
            📎 上传补充文档
            <input type="file" accept=".pdf" multiple className="hidden" />
          </label>
        </div>
      </div>

      {/* Confirm */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          所有决策项: {totalDecisions}项中已确认 {resolvedDecisions}项
        </p>
        <button
          onClick={onConfirm}
          disabled={!allResolved}
          className={`px-6 py-2.5 font-medium rounded-lg transition-colors ${
            allResolved
              ? 'bg-gold text-white hover:bg-amber-600'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          确认完成，进入阶段2 →
        </button>
      </div>
    </div>
  );
}
