import React from 'react';
import { cn } from '../../lib/cn';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: 'primary' | 'secondary' | 'accent' | 'dark';
  spacing?: 'compact' | 'normal' | 'generous';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  tone = 'primary',
  spacing = 'normal',
  children,
  className,
  ...props
}) => {
  const toneClasses = {
    primary: 'bg-soft-white text-near-black',
    secondary: 'bg-warm-lavender text-near-black',
    accent: 'bg-deep-violet text-soft-white',
    dark: 'bg-near-black text-soft-white',
  };

  const spacingClasses = {
    compact: 'py-12 md:py-16',
    normal: 'py-20 md:py-28',
    generous: 'py-28 md:py-40',
  };

  return (
    <section
      className={cn('relative w-full transition-colors duration-500', toneClasses[tone], spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
};
