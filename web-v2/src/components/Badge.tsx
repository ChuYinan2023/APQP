interface BadgeProps {
  children: React.ReactNode;
  color?: 'gold' | 'blue' | 'green' | 'red' | 'amber' | 'gray' | 'purple';
  size?: 'sm' | 'md';
}

const colorMap = {
  gold: 'bg-gold/15 text-gold-light border-gold/20',
  blue: 'bg-blue-400/15 text-blue-300 border-blue-400/20',
  green: 'bg-green-400/15 text-green-300 border-green-400/20',
  red: 'bg-red-400/15 text-red-300 border-red-400/20',
  amber: 'bg-amber-400/15 text-amber-300 border-amber-400/20',
  gray: 'bg-gray-400/15 text-gray-400 border-gray-400/20',
  purple: 'bg-purple-400/15 text-purple-300 border-purple-400/20',
};

export default function Badge({ children, color = 'gray', size = 'sm' }: BadgeProps) {
  const sizeClass = size === 'sm' ? 'text-[11px] px-1.5 py-0.5' : 'text-xs px-2 py-0.5';
  return (
    <span className={`inline-flex items-center rounded border font-medium ${colorMap[color]} ${sizeClass}`}>
      {children}
    </span>
  );
}
