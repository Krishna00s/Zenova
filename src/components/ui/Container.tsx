import React from 'react';
import { cn } from '../../lib/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large' | 'full';
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  size = 'large',
  children,
  className,
  ...props
}) => {
  const sizeClasses = {
    small: 'max-w-4xl',
    medium: 'max-w-5xl',
    large: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn('mx-auto px-6 sm:px-8 lg:px-12 w-full', sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};
