import React from 'react';

export const LavenderVaseArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-warm-lavender via-soft-white to-muted-lavender/40 border border-muted-lavender/60 p-8 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-lg">
        <defs>
          <linearGradient id="vaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B1F52" />
            <stop offset="100%" stopColor="#6B418C" />
          </linearGradient>
        </defs>

        {/* Ambient Pedestal */}
        <ellipse cx="200" cy="450" rx="140" ry="25" fill="#E2D7ED" opacity="0.6" />

        {/* 3D Glass Lavender Vase */}
        <path d="M140 280 Q 100 360 140 430 L 260 430 Q 300 360 260 280 Z" fill="url(#vaseGrad)" opacity="0.85" stroke="#FAF9F6" strokeWidth="3" />
        <ellipse cx="200" cy="280" rx="60" ry="12" fill="#3B1F52" />

        {/* Lavender Flowers Sprouting */}
        <g stroke="#6B418C" strokeWidth="3">
          <path d="M180 280 Q 140 180 120 80" strokeLinecap="round" />
          <circle cx="120" cy="80" r="7" fill="#3B1F52" stroke="none" />
          <circle cx="110" cy="95" r="6" fill="#6B418C" stroke="none" />
          <circle cx="128" cy="110" r="6" fill="#B39DCB" stroke="none" />

          <path d="M200 280 Q 200 160 200 60" strokeLinecap="round" />
          <circle cx="200" cy="60" r="8" fill="#3B1F52" stroke="none" />
          <circle cx="190" cy="78" r="7" fill="#6B418C" stroke="none" />
          <circle cx="210" cy="95" r="6" fill="#E2D7ED" stroke="none" />

          <path d="M220 280 Q 260 190 280 100" strokeLinecap="round" />
          <circle cx="280" cy="100" r="7" fill="#3B1F52" stroke="none" />
          <circle cx="270" cy="118" r="6" fill="#6B418C" stroke="none" />
        </g>
      </svg>
    </div>
  );
};
