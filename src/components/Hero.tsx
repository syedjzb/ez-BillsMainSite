import React from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/constants/translations';
import { Button } from './ui/Button';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const Arrow = language === 'ur' ? ArrowLeft : ArrowRight;

  return (
    <div className="pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="text-lg">
              {t.hero.startTrial}
              <Arrow className="mx-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" className="text-lg">
              {t.hero.howItWorks}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 text-gray-600">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-500 mx-2" />
              <span>{t.hero.noCard}</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-500 mx-2" />
              <span>{t.hero.freeTrial}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}