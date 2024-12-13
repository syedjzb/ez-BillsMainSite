import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  className 
}: FeatureCardProps) {
  return (
    <div className={cn(
      'p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100',
      className
    )}>
      <Icon className="h-12 w-12 text-primary-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}