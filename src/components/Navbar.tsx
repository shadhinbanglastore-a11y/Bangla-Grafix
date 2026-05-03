import React from 'react';
import { motion } from 'motion/react';
import { Moon, Sun, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const playClick = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    audio.volume = 0.1;
    audio.play().catch(() => {});
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 glass-card">
      <div className="flex items-center gap-3">
        <img 
          src="https://www.image2url.com/r2/default/images/1777789492779-ebcf5f7a-624f-4fe7-b206-d2360a28a681.png" 
          alt="Bangla Graphics Logo" 
          className="h-12 md:h-14 w-auto brightness-110"
        />
        <span className="font-display text-2xl tracking-tighter uppercase hidden md:block">
          Bangla Graphics
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            setLanguage(language === 'en' ? 'bn' : 'en');
            playClick();
          }}
          className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2"
          aria-label="Toggle Language"
        >
          <Languages size={20} />
          <span className="text-xs font-bold uppercase">{language === 'en' ? 'BN' : 'EN'}</span>
        </button>

        <button
          onClick={() => {
            toggleTheme();
            playClick();
          }}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <a 
          href="https://saad-star123.github.io/gfx/" 
          target="_blank" 
          rel="no-referrer"
          className="text-xs font-bold uppercase tracking-widest px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-sm transition-all"
        >
          {t.portfolio}
        </a>
      </div>
    </nav>
  );
};
