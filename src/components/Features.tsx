import React from 'react';
import { Receipt, PieChart, CreditCard, Users, Clock, Shield } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/constants/translations';

const featureIcons = {
  smartInvoicing: Receipt,
  expenseTracking: PieChart,
  paymentProcessing: CreditCard,
  multiUser: Users,
  timeTracking: Clock,
  security: Shield,
};

export function Features() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(t.features.items).map(([key, feature]) => {
            const Icon = featureIcons[key as keyof typeof featureIcons];
            return (
              <div key={key} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <Icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}