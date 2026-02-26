const STEPS = [
  { label: '上传', short: '文档输入' },
  { label: '阶段1', short: '文档清点' },
  { label: '阶段2', short: 'L1特性' },
  { label: '阶段3', short: 'L2特性' },
  { label: '阶段4', short: 'QFD' },
];

interface Props {
  currentStage: number;
  completedStages: number[];
  onClickStage: (stage: number) => void;
}

export default function StepBar({ currentStage, completedStages, onClickStage }: Props) {
  return (
    <div className="flex items-center justify-center gap-0 py-4">
      {STEPS.map((step, i) => {
        const isCompleted = completedStages.includes(i);
        const isCurrent = i === currentStage;
        const isClickable = isCompleted || isCurrent;

        return (
          <div key={i} className="flex items-center">
            <button
              onClick={() => isClickable && onClickStage(i)}
              disabled={!isClickable}
              className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-all ${
                isClickable ? 'cursor-pointer hover:bg-gray-50' : 'cursor-default'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  isCurrent
                    ? 'bg-gold text-white ring-4 ring-gold/20'
                    : isCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {isCompleted && !isCurrent ? '✓' : i}
              </div>
              <div className="text-center">
                <div className={`text-xs font-medium ${isCurrent ? 'text-gold' : isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
                  {step.label}
                </div>
                <div className={`text-[10px] ${isCurrent ? 'text-gray-600' : isCompleted ? 'text-gray-500' : 'text-gray-300'}`}>
                  {step.short}
                </div>
              </div>
            </button>
            {i < STEPS.length - 1 && (
              <div className={`w-12 h-0.5 mx-1 ${completedStages.includes(i) ? 'bg-green-300' : 'bg-gray-200'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
