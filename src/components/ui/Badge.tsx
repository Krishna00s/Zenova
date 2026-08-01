import React from 'react';
import { cn } from '../../lib/cn';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lavender' | 'violet' | 'slate' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'lavender',
  className,
}) => {
  const variantStyles = {
    lavender: 'bg-warm-lavender text-deep-violet border-muted-lavender',
    violet: 'bg-deep-violet text-soft-white border-transparent',
    slate: 'bg-soft-white text-neutral-slate border-neutral-slate/20',
    outline: 'bg-transparent text-near-black border-near-black/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border tracking-wide uppercase font-mono',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
