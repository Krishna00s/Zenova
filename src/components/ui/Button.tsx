import React from 'react';
import { cn } from '../../lib/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'editorial';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-deep-violet/30 active:scale-[0.98]';

  const variantStyles = {
    primary: 'bg-deep-violet text-soft-white hover:bg-near-black shadow-sm hover:shadow-md',
    secondary: 'bg-warm-lavender text-deep-violet hover:bg-muted-lavender',
    outline: 'border border-deep-violet/20 text-deep-violet hover:bg-deep-violet/5',
    ghost: 'text-near-black hover:bg-warm-lavender/60',
    editorial: 'text-deep-violet hover:text-near-black font-editorial italic underline underline-offset-4 decoration-1 decoration-deep-violet/40 hover:decoration-near-black',
  };

  const sizeStyles = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
