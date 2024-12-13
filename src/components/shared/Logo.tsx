import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  textClassName?: string;
}

export function Logo({ className, textClassName }: LogoProps) {
  return (
    <div className={cn('flex items-center', className)}>
      <img 
        src="/logo.svg" 
        alt="EZ-Bills Logo" 
        className="h-8 w-auto"
      />
      <span className={cn('mx-2 text-2xl font-bold text-primary-600', textClassName)}>
        EZ-Bills
      </span>
    </div>
  );
}