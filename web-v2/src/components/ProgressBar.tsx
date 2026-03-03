interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  color?: 'gold' | 'blue' | 'green';
  showLabel?: boolean;
  height?: 'sm' | 'md';
}

const barColors = {
  gold: 'bg-gold',
  blue: 'bg-blue-400',
  green: 'bg-green-400',
};

export default function ProgressBar({ value, max = 100, color = 'gold', showLabel = true, height = 'sm' }: ProgressBarProps) {
  const pct = Math.min(Math.round((value / max) * 100), 100);
  const h = height === 'sm' ? 'h-1.5' : 'h-2.5';

  return (
    <div className="flex items-center gap-2">
      <div className={`flex-1 ${h} bg-white/5 rounded-full overflow-hidden`}>
        <div
          className={`${h} ${barColors[color]} rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-[11px] text-gray-500 tabular-nums w-8 text-right">{pct}%</span>
      )}
    </div>
  );
}
