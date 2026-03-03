import type { Project } from '../types';

interface Props {
  projects: Project[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  collapsed: boolean;
  onToggle: () => void;
}

export default function LeftPanel({ projects, selectedId, onSelect, collapsed, onToggle }: Props) {
  return (
    <div
      className={`
        border-r border-border bg-navy flex flex-col transition-all duration-300 overflow-hidden
        ${collapsed ? 'w-0 border-r-0' : 'w-60'}
      `}
    >
      {!collapsed && (
        <>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="text-gold text-sm font-bold">◆</span>
              <span className="text-sm font-semibold text-gray-200">APQP Quotation</span>
            </div>
            <button
              onClick={onToggle}
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
            >
              ◂
            </button>
          </div>

          {/* Directory path */}
          <div className="px-4 py-2 border-b border-border">
            <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <span>📂</span>
              <span className="truncate">~/Spec/FBFS/</span>
            </div>
          </div>

          {/* Project list */}
          <div className="flex-1 overflow-y-auto py-1">
            <div className="px-3 py-1.5">
              <span className="text-[10px] uppercase tracking-wider text-gray-600 font-medium">项目列表</span>
            </div>
            {projects.map(project => (
              <button
                key={project.id}
                onClick={() => project.isDemo && onSelect(project.id)}
                className={`
                  w-full text-left px-3 py-2.5 transition-all duration-200
                  ${project.id === selectedId
                    ? 'bg-gold/10 border-l-2 border-gold'
                    : 'border-l-2 border-transparent hover:bg-white/[0.03]'
                  }
                  ${!project.isDemo ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs">{project.id === selectedId ? '▾' : '▸'}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-200 truncate">{project.name}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] text-gray-500">{project.oem}</span>
                      <span className="text-[11px] text-gray-600">·</span>
                      <span className="text-[11px] text-gray-500">{project.fileCount} 文件</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* New project button */}
          <div className="px-3 py-3 border-t border-border">
            <button className="w-full py-2 rounded-md border border-dashed border-white/10 text-gray-500 text-sm hover:border-gold/30 hover:text-gold-light transition-all">
              + 新项目
            </button>
          </div>
        </>
      )}
    </div>
  );
}
