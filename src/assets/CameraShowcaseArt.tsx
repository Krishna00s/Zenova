import React from 'react';

export const CameraShowcaseArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-warm-lavender via-soft-white to-muted-lavender/30 border border-muted-lavender/60 p-6 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
        <defs>
          <linearGradient id="camBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D1E40" />
            <stop offset="100%" stopColor="#120B1A" />
          </linearGradient>
          <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B418C" />
            <stop offset="50%" stopColor="#3B1F52" />
            <stop offset="100%" stopColor="#0B090E" />
          </linearGradient>
        </defs>

        {/* Shadow Pedestal */}
        <ellipse cx="350" cy="400" rx="260" ry="35" fill="#E2D7ED" opacity="0.6" />

        {/* Tripod Legs */}
        <path d="M220 400 L320 270 M350 400 L350 270 M480 400 L380 270" stroke="#3B1F52" strokeWidth="12" strokeLinecap="round" />

        {/* Camera Main Body */}
        <rect x="250" y="140" width="220" height="130" rx="16" fill="url(#camBody)" stroke="#6B418C" strokeWidth="3" />
        
        {/* Top Handle & Monitor */}
        <rect x="270" y="100" width="140" height="20" rx="4" fill="#3B1F52" />
        <rect x="180" y="110" width="80" height="60" rx="8" fill="#120B1A" stroke="#3B1F52" strokeWidth="2" />
        <rect x="188" y="118" width="64" height="44" rx="4" fill="#E2D7ED" opacity="0.4" />

        {/* 3D Camera Lens */}
        <circle cx="440" cy="205" r="55" fill="url(#lensGrad)" stroke="#E2D7ED" strokeWidth="4" />
        <circle cx="440" cy="205" r="35" fill="#3B1F52" />
        <circle cx="440" cy="205" r="20" fill="#6B418C" opacity="0.8" />
        <circle cx="430" cy="195" r="6" fill="#FAF9F6" opacity="0.6" />

        {/* Tape Reels / Matte Box */}
        <rect x="470" y="160" width="40" height="90" rx="6" fill="#2D1E40" />
      </svg>
    </div>
  );
};
