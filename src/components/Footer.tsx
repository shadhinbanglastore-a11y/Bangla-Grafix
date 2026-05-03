import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-24 px-6 border-t border-zinc-100 dark:border-white/5 bg-zinc-50 dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="space-y-6">
          <img 
            src="https://www.image2url.com/r2/default/images/1777789492779-ebcf5f7a-624f-4fe7-b206-d2360a28a681.png" 
            alt="Logo" 
            className="h-16 w-auto opacity-80 brightness-150"
          />
          <p className="text-lg opacity-60 max-w-sm">
            {t.owner}
          </p>
        </div>

        <div className="text-right flex flex-col items-end gap-4">
          <span className="text-xs uppercase tracking-[0.4em] opacity-40">Bangla Graphics Production</span>
          <p className="text-4xl font-display uppercase tracking-tighter">© 2026 BG-SAAD</p>
          <p className="text-[10px] opacity-30 uppercase tracking-[0.2em]">{t.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};
