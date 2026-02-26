import { useState } from 'react';
import type { UploadedDoc } from '../types';

interface Props {
  documents: UploadedDoc[];
  onStart: () => void;
}

export default function StageUpload({ documents: initialDocs, onStart }: Props) {
  const [docs, setDocs] = useState<UploadedDoc[]>(initialDocs);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files).filter(f => f.name.endsWith('.pdf'));
    const newDocs: UploadedDoc[] = files.map(f => ({
      name: f.name,
      pages: Math.floor(Math.random() * 80) + 10,
      status: 'ready' as const,
    }));
    setDocs(prev => [...prev, ...newDocs]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newDocs: UploadedDoc[] = files.map(f => ({
      name: f.name,
      pages: Math.floor(Math.random() * 80) + 10,
      status: 'ready' as const,
    }));
    setDocs(prev => [...prev, ...newDocs]);
  };

  const removeDoc = (index: number) => {
    setDocs(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
          dragOver ? 'border-gold bg-gold/5' : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <div className="text-4xl mb-3">📄</div>
        <p className="text-gray-700 font-medium mb-1">拖拽 PDF 文件到这里</p>
        <p className="text-sm text-gray-400 mb-4">或</p>
        <label className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
          点击选择文件
          <input type="file" accept=".pdf" multiple onChange={handleFileSelect} className="hidden" />
        </label>
      </div>

      {docs.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">已上传文件</h3>
          <div className="space-y-2">
            {docs.map((doc, i) => (
              <div key={i} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📄</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                    <p className="text-xs text-gray-400">{doc.pages} 页</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    doc.status === 'parsed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {doc.status === 'parsed' ? '✓ 已解析' : '就绪'}
                  </span>
                  <button onClick={() => removeDoc(i)} className="text-gray-300 hover:text-red-400 text-sm">×</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onStart}
              className="px-6 py-2.5 bg-gold text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
            >
              开始处理 →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
