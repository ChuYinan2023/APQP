interface Props {
  status: 'idle' | 'processing' | 'awaiting' | 'completed' | 'error';
  progress: number;
  message: string;
  detail?: string;
}

export default function StatusBar({ status, progress, message, detail }: Props) {
  if (status === 'idle') return null;

  const config = {
    processing: { bg: 'bg-blue-50', border: 'border-blue-200', icon: '🔄', barColor: 'bg-blue-500' },
    awaiting: { bg: 'bg-amber-50', border: 'border-amber-200', icon: '⏳', barColor: 'bg-amber-500' },
    completed: { bg: 'bg-green-50', border: 'border-green-200', icon: '✅', barColor: 'bg-green-500' },
    error: { bg: 'bg-red-50', border: 'border-red-200', icon: '❌', barColor: 'bg-red-500' },
    idle: { bg: '', border: '', icon: '', barColor: '' },
  }[status];

  return (
    <div className={`${config.bg} border ${config.border} rounded-lg px-4 py-3 mb-6`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-gray-800">
          {config.icon} {message}
        </span>
        {status === 'processing' && <span className="text-xs text-gray-500">{progress}%</span>}
      </div>
      {detail && <p className="text-xs text-gray-500">{detail}</p>}
      {status === 'processing' && (
        <div className="w-full h-1.5 bg-white/50 rounded-full mt-2 overflow-hidden">
          <div
            className={`h-full ${config.barColor} rounded-full transition-all duration-500`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {status === 'error' && (
        <div className="flex gap-2 mt-2">
          <button className="text-xs px-3 py-1 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">重试</button>
          <button className="text-xs px-3 py-1 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">跳过</button>
        </div>
      )}
    </div>
  );
}
