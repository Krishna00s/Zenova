import React from 'react';

interface ZenovaLogoIconProps {
  className?: string;
  size?: number;
}

export const ZenovaLogoIcon: React.FC<ZenovaLogoIconProps> = ({ className = 'w-7 h-7', size }) => {
  const style = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  return (
    <svg
      viewBox="0 0 100 100"
      className={`shrink-0 ${className}`}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dark Purple Circle (100% Transparent background outside circle) */}
      <circle cx="50" cy="50" r="48" fill="#3B1F52" />
      <circle cx="50" cy="50" r="45" stroke="#522C70" strokeWidth="2.5" />

      {/* Crisp White Interlocking Z Monogram */}
      <g fill="#FAFAFA">
        <path d="M 26 26 L 74 26 L 42 58 L 56 58 L 74 40 L 74 26 Z" />
        <path d="M 74 74 L 26 74 L 58 42 L 44 42 L 26 60 L 26 74 Z" />
      </g>
    </svg>
  );
};

export default ZenovaLogoIcon;
