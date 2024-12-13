import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  className?: string;
}

export function TestimonialCard({ 
  name, 
  role, 
  content, 
  image,
  className 
}: TestimonialCardProps) {
  return (
    <div className={cn(
      'bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow',
      className
    )}>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-6">{content}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="mx-4">
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}