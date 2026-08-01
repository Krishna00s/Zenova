import React from 'react';

export const MegaphoneShowcaseArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-warm-lavender via-soft-white to-muted-lavender/30 border border-muted-lavender/60 p-6 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
        <defs>
          <linearGradient id="megaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2D7ED" />
            <stop offset="50%" stopColor="#B39DCB" />
            <stop offset="100%" stopColor="#3B1F52" />
          </linearGradient>
        </defs>

        {/* Ambient Pedestal */}
        <ellipse cx="350" cy="390" rx="240" ry="35" fill="#E2D7ED" opacity="0.6" />

        {/* 3D Megaphone Cone */}
        <path d="M220 220 L480 130 L480 310 L220 260 Z" fill="url(#megaGrad)" stroke="#3B1F52" strokeWidth="4" />
        <ellipse cx="480" cy="220" rx="35" ry="90" fill="#FAF9F6" stroke="#3B1F52" strokeWidth="4" />
        
        {/* Megaphone Handle & Back */}
        <rect x="180" y="210" width="45" height="60" rx="10" fill="#3B1F52" />
        <path d="M200 270 L180 340 L215 340 L230 270 Z" fill="#2D1E40" />

        {/* Floating Social Icons Badges (Instagram, TikTok, YouTube) */}
        <g transform="translate(540, 110)">
          <circle cx="0" cy="0" rx="32" ry="32" fill="#FAF9F6" stroke="#3B1F52" strokeWidth="3" />
          <rect x="-14" y="-14" width="28" height="28" rx="8" stroke="#3B1F52" strokeWidth="3" fill="none" />
          <circle cx="0" cy="0" r="7" stroke="#3B1F52" strokeWidth="3" fill="none" />
        </g>

        <g transform="translate(560, 240)">
          <circle cx="0" cy="0" rx="28" ry="28" fill="#3B1F52" />
          <polygon points="-8,-12 14,0 -8,12" fill="#FAF9F6" />
        </g>

        <g transform="translate(510, 340)">
          <circle cx="0" cy="0" rx="26" ry="26" fill="#F3EEF8" stroke="#3B1F52" strokeWidth="2" />
          <path d="M-6,-6 L6,6 M6,-6 L-6,6" stroke="#3B1F52" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};
