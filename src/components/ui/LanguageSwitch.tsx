import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from './Button';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <Button
        variant="secondary"
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'bg-gray-100' : ''}
      >
        English
      </Button>
      <Button
        variant="secondary"
        onClick={() => setLanguage('ur')}
        className={language === 'ur' ? 'bg-gray-100' : ''}
      >
        اردو
      </Button>
    </div>
  );
}