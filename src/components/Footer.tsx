import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/constants/translations';
import { Logo } from './shared/Logo';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Logo textClassName="text-white" />
            <p className="text-sm mt-4">{t.footer.tagline}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.footer.product.title}</h3>
            <ul className="space-y-2">
              {t.footer.product.items.map((item, index) => (
                <li key={index}><a href="#" className="hover:text-accent-400">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.footer.support.title}</h3>
            <ul className="space-y-2">
              {t.footer.support.items.map((item, index) => (
                <li key={index}><a href="#" className="hover:text-accent-400">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.footer.company.title}</h3>
            <ul className="space-y-2">
              {t.footer.company.items.map((item, index) => (
                <li key={index}><a href="#" className="hover:text-accent-400">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              {t.footer.copyright}
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent-400"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent-400"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent-400"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}