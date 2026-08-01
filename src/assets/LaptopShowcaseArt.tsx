import React from 'react';

export const LaptopShowcaseArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-warm-lavender via-soft-white to-muted-lavender/30 border border-muted-lavender/60 p-6 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
        <defs>
          <linearGradient id="laptopBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E1B24" />
            <stop offset="100%" stopColor="#0B090E" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B1F52" />
            <stop offset="50%" stopColor="#1A0D26" />
            <stop offset="100%" stopColor="#09040D" />
          </linearGradient>
        </defs>

        {/* Ambient Pedestal Glow */}
        <ellipse cx="350" cy="390" rx="280" ry="40" fill="#E2D7ED" opacity="0.6" />

        {/* 3D Laptop Screen Frame */}
        <rect x="120" y="40" width="460" height="290" rx="16" fill="url(#laptopBody)" stroke="#3B1F52" strokeWidth="4" />
        
        {/* Screen Display */}
        <rect x="135" y="55" width="430" height="260" rx="8" fill="url(#screenGrad)" />
        
        {/* Mock Dashboard Elements */}
        <rect x="155" y="75" width="120" height="16" rx="4" fill="#E2D7ED" opacity="0.8" />
        <rect x="155" y="105" width="180" height="8" rx="3" fill="#FAF9F6" opacity="0.4" />
        <rect x="155" y="125" width="140" height="8" rx="3" fill="#FAF9F6" opacity="0.3" />
        
        {/* UI Mockup Card on Screen */}
        <rect x="320" y="90" width="220" height="195" rx="12" fill="#FAF9F6" opacity="0.15" stroke="#E2D7ED" strokeWidth="1" />
        <circle cx="360" cy="130" r="16" fill="#3B1F52" />
        <rect x="390" y="122" width="120" height="8" rx="3" fill="#FAF9F6" opacity="0.9" />
        <rect x="390" y="136" width="80" height="6" rx="2" fill="#E2D7ED" opacity="0.6" />
        
        <rect x="340" y="170" width="180" height="35" rx="8" fill="#3B1F52" opacity="0.8" />
        <rect x="340" y="215" width="180" height="45" rx="8" fill="#E2D7ED" opacity="0.2" />

        {/* 3D Laptop Base */}
        <path d="M70 340 L630 340 L590 365 L110 365 Z" fill="url(#laptopBody)" stroke="#3B1F52" strokeWidth="2" />
        <rect x="300" y="340" width="100" height="6" rx="3" fill="#3B1F52" opacity="0.6" />
      </svg>
    </div>
  );
};
