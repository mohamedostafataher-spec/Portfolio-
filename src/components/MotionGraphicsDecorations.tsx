import React from 'react';
import { Music2 } from 'lucide-react';

export const MotionGraphicsDecorations: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Subtle, luxurious ambient light gradient - zero clutter */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-[160px] rounded-full" />
      <div className="absolute bottom-1/3 -right-40 w-[600px] h-[450px] bg-amber-500/5 blur-[180px] rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
    </div>
  );
};

export const AudioMotionVisualizer: React.FC<{ isPlaying?: boolean; bars?: number }> = ({
  isPlaying = true,
  bars = 5,
}) => {
  return (
    <div className="inline-flex items-end gap-1 h-5 px-2 py-0.5 rounded bg-black/70 border border-white/10 backdrop-blur-md">
      <Music2 className="w-3 h-3 text-amber-400 mr-0.5" />
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={`w-0.5 rounded-full bg-gradient-to-t from-amber-500 to-amber-300 transition-all ${
            isPlaying ? 'animate-pulse' : 'h-1'
          }`}
          style={{
            height: isPlaying ? `${Math.sin(i * 1.5 + 1) * 7 + 10}px` : '4px',
            animationDuration: `${0.45 + (i % 3) * 0.2}s`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};
