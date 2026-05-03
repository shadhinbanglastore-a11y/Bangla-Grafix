import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const MarqueeBanner: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="marquee-container sticky top-0 z-40 bg-orange-600">
      <div className="marquee-content">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 font-bold text-sm tracking-widest uppercase">
            {t.advancePayment}
          </span>
        ))}
      </div>
      <div className="marquee-content" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 font-bold text-sm tracking-widest uppercase">
            {t.advancePayment}
          </span>
        ))}
      </div>
    </div>
  );
};
