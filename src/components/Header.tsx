import React from 'react';
import { Menu } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/constants/translations';
import { Button } from './ui/Button';
import { LanguageSwitch } from './ui/LanguageSwitch';
import { Logo } from './shared/Logo';

export function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-8">
            <LanguageSwitch />
            <a href="#features" className="text-gray-600 hover:text-primary-600">{t.nav.features}</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600">{t.nav.pricing}</a>
            <a href="#support" className="text-gray-600 hover:text-primary-600">{t.nav.support}</a>
            <Button variant="secondary">{t.nav.signIn}</Button>
            <Button>{t.nav.tryFree}</Button>
          </nav>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}