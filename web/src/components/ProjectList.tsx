import { useState } from 'react';
import type { Project } from '../types';

const STAGE_LABELS = ['上传', '文档清点', 'L1特性', 'L2特性', 'QFD'];

interface Props {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onCreateProject: (name: string, oem: string, component: string) => void;
}

export default function ProjectList({ projects, onSelectProject, onCreateProject }: Props) {
  const [showNew, setShowNew] = useState(false);
  const [name, setName] = useState('');
  const [oem, setOem] = useState('Volkswagen');
  const [component, setComponent] = useState('');

  const handleCreate = () => {
    if (!name.trim() || !component.trim()) return;
    onCreateProject(name.trim(), oem, component.trim());
    setName('');
    setComponent('');
    setShowNew(false);
  };

  const statusBadge = (p: Project) => {
    if (p.currentStage === 4 && p.stageStatus === 'completed') {
      return <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">已完成</span>;
    }
    if (p.stageStatus === 'awaiting') {
      return <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">等待确认</span>;
    }
    if (p.stageStatus === 'processing') {
      return <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">处理中</span>;
    }
    return <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">待开始</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">APQP 文档处理系统</h1>
            <p className="text-sm text-gray-500 mt-1">AI 驱动的工程特性提取与质量屋构建</p>
          </div>
          <button
            onClick={() => setShowNew(true)}
            className="px-4 py-2 bg-gold text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors"
          >
            + 新项目
          </button>
        </div>

        {showNew && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">新建项目</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">项目名称</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="例: VW 燃油供给系统"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">OEM</label>
                  <select
                    value={oem}
                    onChange={(e) => setOem(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  >
                    <option>Volkswagen</option>
                    <option>BMW</option>
                    <option>Audi</option>
                    <option>Mercedes-Benz</option>
                    <option>Porsche</option>
                    <option>其他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">零部件类型</label>
                  <input
                    value={component}
                    onChange={(e) => setComponent(e.target.value)}
                    placeholder="例: 燃油泵模块"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button onClick={() => setShowNew(false)} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">取消</button>
                <button onClick={handleCreate} className="px-4 py-2 bg-gold text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors">创建并上传文档</button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onSelectProject(p)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{p.name}</h3>
                    {statusBadge(p)}
                  </div>
                  <p className="text-sm text-gray-500">
                    {p.oem} · {p.component} · {p.documentCount}份文档
                  </p>
                  {p.stageStatus === 'processing' && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>{STAGE_LABELS[p.currentStage]} 进行中</span>
                        <span>{p.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gold rounded-full transition-all" style={{ width: `${p.progress}%` }} />
                      </div>
                    </div>
                  )}
                  {p.stageStatus !== 'processing' && (
                    <p className="text-xs text-gray-400 mt-2">
                      {STAGE_LABELS[p.currentStage]}
                      {p.stageStatus === 'completed' && p.currentStage === 4 ? ' · 全部完成' : ''}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <span className="text-xs text-gray-400">{p.lastUpdated}</span>
                  <span className="text-gray-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
