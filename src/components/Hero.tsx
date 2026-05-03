import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { MousePointer2, Sparkles, Zap, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden py-20 pb-32">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 flex justify-center"
        >
          <div className="p-4 bg-black rounded-2xl shadow-2xl border border-white/10">
            <img 
              src="https://www.image2url.com/r2/default/images/1777789492779-ebcf5f7a-624f-4fe7-b206-d2360a28a681.png" 
              alt="Bangla Graphics Logo" 
              className="h-24 md:h-32 w-auto brightness-110 contrast-110"
            />
          </div>
        </motion.div>

        <motion.span 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[11px] font-black uppercase tracking-[0.3em] mb-8 shadow-lg shadow-orange-500/10"
        >
          <Sparkles size={14} className="animate-spin-slow" /> Premium Graphics A to Z
        </motion.span>
        
        <div className="overflow-hidden mb-8 px-4">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[12rem] font-display leading-[0.85] uppercase tracking-tighter bg-gradient-to-b from-zinc-900 to-orange-600 dark:from-white dark:to-orange-500 bg-clip-text text-transparent drop-shadow-2xl"
          >
            {t.title}
          </motion.h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto mb-16 space-y-6"
        >
          <p className="text-xl md:text-4xl font-extralight tracking-tight leading-tight text-zinc-900 dark:text-white">
            {t.subtitle}
          </p>
          <motion.div 
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="h-[2px] bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto w-32" 
          />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="https://www.facebook.com/profile.php?id=61560216376718"
            target="_blank"
            rel="no-referrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-orange-600 text-white font-black uppercase tracking-widest flex items-center gap-3 transition-shadow hover:shadow-2xl hover:shadow-orange-600/40 rounded-sm"
          >
            Explore Work <MousePointer2 size={20} />
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border-2 border-orange-600 text-orange-600 dark:text-orange-500 font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all rounded-sm"
            onClick={() => {
               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t.contact}
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-orange-600/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
