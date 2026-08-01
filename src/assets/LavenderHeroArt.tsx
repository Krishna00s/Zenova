import React from 'react';

export const LavenderHeroArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-warm-lavender via-soft-white to-muted-lavender/40 border border-muted-lavender/60 p-8 shadow-sm ${className}`}>
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
      >
        <defs>
          <linearGradient id="violetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B1F52" />
            <stop offset="100%" stopColor="#6B418C" />
          </linearGradient>
          <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2D7ED" />
            <stop offset="50%" stopColor="#B39DCB" />
            <stop offset="100%" stopColor="#3B1F52" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Glow Orbs */}
        <circle cx="650" cy="200" r="180" fill="url(#violetGrad)" opacity="0.12" filter="url(#softGlow)" />
        <circle cx="200" cy="350" r="140" fill="#E2D7ED" opacity="0.4" filter="url(#softGlow)" />

        {/* 3D Metallic Emblem Coins */}
        <g transform="translate(580, 220) rotate(-15)">
          <ellipse cx="0" cy="0" rx="110" ry="110" fill="url(#coinGrad)" />
          <ellipse cx="0" cy="0" rx="90" ry="90" fill="#FAF9F6" stroke="#3B1F52" strokeWidth="4" />
          <path d="M-25,-25 L25,25 M25,-25 L-25,25" stroke="#3B1F52" strokeWidth="12" strokeLinecap="round" />
        </g>

        <g transform="translate(420, 310) rotate(20)">
          <ellipse cx="0" cy="0" rx="65" ry="65" fill="url(#coinGrad)" />
          <ellipse cx="0" cy="0" rx="52" ry="52" fill="#F3EEF8" stroke="#3B1F52" strokeWidth="3" />
        </g>

        {/* Stylized Lavender Stems */}
        <g opacity="0.85">
          <path d="M100 480 Q 140 320 180 220" stroke="#6B418C" strokeWidth="3" fill="none" />
          <circle cx="180" cy="220" r="8" fill="#3B1F52" />
          <circle cx="170" cy="240" r="7" fill="#6B418C" />
          <circle cx="160" cy="260" r="6" fill="#B39DCB" />

          <path d="M220 480 Q 260 280 300 160" stroke="#6B418C" strokeWidth="3" fill="none" />
          <circle cx="300" cy="160" r="9" fill="#3B1F52" />
          <circle cx="290" cy="180" r="8" fill="#6B418C" />
          <circle cx="280" cy="200" r="7" fill="#E2D7ED" />

          <path d="M680 480 Q 710 340 730 250" stroke="#6B418C" strokeWidth="3" fill="none" />
          <circle cx="730" cy="250" r="8" fill="#3B1F52" />
          <circle cx="720" cy="270" r="7" fill="#6B418C" />
        </g>
      </svg>
    </div>
  );
};
