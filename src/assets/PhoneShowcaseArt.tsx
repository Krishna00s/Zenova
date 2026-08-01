import React from 'react';

export const PhoneShowcaseArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-warm-lavender via-soft-white to-muted-lavender/30 border border-muted-lavender/60 p-6 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
        <defs>
          <linearGradient id="phoneBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#44225A" />
            <stop offset="100%" stopColor="#1C0A28" />
          </linearGradient>
        </defs>

        {/* Soft Base Glow */}
        <ellipse cx="350" cy="390" rx="220" ry="30" fill="#E2D7ED" opacity="0.6" />

        {/* 3D Smartphone Body */}
        <rect x="260" y="50" width="180" height="340" rx="28" fill="url(#phoneBody)" stroke="#E2D7ED" strokeWidth="4" />
        
        {/* Screen Glass */}
        <rect x="270" y="65" width="160" height="310" rx="20" fill="#FAF9F6" />

        {/* Dynamic Island / Notch */}
        <rect x="320" y="75" width="60" height="12" rx="6" fill="#1C0A28" />

        {/* Social App UI Screen Elements */}
        <rect x="285" y="105" width="130" height="120" rx="12" fill="#F3EEF8" />
        <circle cx="350" cy="165" r="30" fill="#3B1F52" opacity="0.8" />

        <rect x="285" y="240" width="130" height="12" rx="4" fill="#3B1F52" />
        <rect x="285" y="260" width="90" height="8" rx="3" fill="#5C5862" opacity="0.4" />
        <rect x="285" y="275" width="110" height="8" rx="3" fill="#5C5862" opacity="0.3" />

        <rect x="285" y="295" width="130" height="35" rx="10" fill="#3B1F52" />
        <rect x="325" y="308" width="50" height="8" rx="3" fill="#FAF9F6" />
      </svg>
    </div>
  );
};
