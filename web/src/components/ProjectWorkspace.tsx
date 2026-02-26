import { useState } from 'react';
import type { Project } from '../types';
import { mockChatMessages } from '../data/mock';
import StepBar from './StepBar';
import StatusBar from './StatusBar';
import StageUpload from './StageUpload';
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import Stage4 from './Stage4';
import Chat from './Chat';

interface Props {
  project: Project;
  onBack: () => void;
}

export default function ProjectWorkspace({ project, onBack }: Props) {
  const [viewStage, setViewStage] = useState(project.currentStage);
  const [currentStage, setCurrentStage] = useState(project.currentStage);
  const [stageStatus, setStageStatus] = useState(project.stageStatus);
  const [progress, setProgress] = useState(project.progress);

  const completedStages = Array.from({ length: currentStage }, (_, i) => i);

  const simulateProcessing = (nextStage: number) => {
    setCurrentStage(nextStage);
    setViewStage(nextStage);
    setStageStatus('processing');
    setProgress(0);

    // Simulate progress
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setStageStatus('awaiting');
      }
      setProgress(Math.min(Math.round(p), 100));
    }, 500);
  };

  const handleConfirmStage = (nextStage: number) => {
    if (nextStage <= 4) {
      simulateProcessing(nextStage);
    }
  };

  const handleComplete = () => {
    setStageStatus('completed');
  };

  const renderStage = () => {
    const isCurrentView = viewStage === currentStage;
    const effectiveStatus = isCurrentView ? stageStatus : 'completed';
    const effectiveProgress = isCurrentView ? progress : 100;

    switch (viewStage) {
      case 0:
        return (
          <div>
            <StatusBar status="idle" progress={0} message="" />
            <StageUpload
              documents={project.documents}
              onStart={() => simulateProcessing(1)}
            />
          </div>
        );
      case 1:
        if (!project.stage1) return <EmptyStage />;
        return (
          <Stage1
            data={project.stage1}
            status={effectiveStatus === 'idle' ? 'awaiting' : effectiveStatus as 'processing' | 'awaiting' | 'completed'}
            progress={effectiveProgress}
            onConfirm={() => handleConfirmStage(2)}
          />
        );
      case 2:
        if (!project.stage2) return <EmptyStage />;
        return (
          <Stage2
            data={project.stage2}
            status={effectiveStatus === 'idle' ? 'awaiting' : effectiveStatus as 'processing' | 'awaiting' | 'completed'}
            progress={effectiveProgress}
            onConfirm={() => handleConfirmStage(3)}
          />
        );
      case 3:
        if (!project.stage3) return <EmptyStage />;
        return (
          <Stage3
            data={project.stage3}
            status={effectiveStatus === 'idle' ? 'awaiting' : effectiveStatus as 'processing' | 'awaiting' | 'completed'}
            progress={effectiveProgress}
            onConfirm={() => handleConfirmStage(4)}
          />
        );
      case 4:
        if (!project.stage4) return <EmptyStage />;
        return (
          <Stage4
            data={project.stage4}
            status={effectiveStatus === 'idle' ? 'awaiting' : effectiveStatus as 'processing' | 'awaiting' | 'completed'}
            progress={effectiveProgress}
            onComplete={handleComplete}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-gray-400 hover:text-gray-600 text-sm">
              ← 返回
            </button>
            <div className="w-px h-5 bg-gray-200" />
            <h1 className="text-lg font-semibold text-gray-900">{project.name}</h1>
            <span className="text-xs text-gray-400">{project.oem} · {project.component}</span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <StepBar
            currentStage={viewStage}
            completedStages={completedStages}
            onClickStage={setViewStage}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-6">
        {renderStage()}
      </div>

      {/* Chat */}
      <Chat messages={mockChatMessages} />
    </div>
  );
}

function EmptyStage() {
  return (
    <div className="text-center py-16 text-gray-400">
      <p className="text-4xl mb-3">📋</p>
      <p>此阶段尚未开始处理</p>
    </div>
  );
}
