/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { IntroLoader } from './components/IntroLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useLanguage } from './contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

const SoundManager = () => {
  useEffect(() => {
    const handleInitialMusic = () => {
      // User provided welcome music
      const welcome = new Audio('https://www.image2url.com/r2/default/audio/1777792155298-3c8060b1-c527-4848-af53-cdf535d3b4f4.mp3');
      welcome.volume = 0.4;
      welcome.play().catch(() => {});
      
      window.removeEventListener('click', handleInitialMusic);
    };
    window.addEventListener('click', handleInitialMusic);
    return () => window.removeEventListener('click', handleInitialMusic);
  }, []);
  return null;
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <LanguageProvider>
        <SoundManager />
        <IntroLoader onComplete={() => setLoading(false)} />
        
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="selection:bg-orange-600 selection:text-white"
          >
            {/* Custom scroll progress bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-orange-600 origin-left z-50"
              style={{ scaleX }}
            />

            <MarqueeBanner />
            <Navbar />
            
            <main className="relative">
              {/* Background Moving Circles */}
              <div className="fixed inset-0 pointer-events-none -zero-10 overflow-hidden">
                <motion.div
                  animate={{ 
                    x: [100, -100, 100],
                    y: [50, 150, 50],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-orange-600/8 rounded-full blur-[120px]"
                />
                <motion.div
                  animate={{ 
                    x: [-100, 100, -100],
                    y: [150, 50, 150],
                  }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-orange-600/8 rounded-full blur-[120px]"
                />
              </div>

              <Hero />
              
              {/* Image Grid Section for "Exceptional Graphics" look */}
              <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[600px]">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-zinc-900 overflow-hidden relative group rounded-sm shadow-2xl"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                      alt="Graphic Design"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-12 flex flex-col justify-end">
                      <h3 className="text-4xl font-display uppercase">Brand Strategy</h3>
                      <p className="opacity-60 uppercase text-xs tracking-widest mt-2">A to Z Precision</p>
                    </div>
                  </motion.div>
                  <div className="grid grid-cols-1 gap-4">
                     <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-zinc-800 overflow-hidden relative group rounded-sm shadow-2xl"
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" 
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                          alt="Layout"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                          <h3 className="text-2xl font-display uppercase tracking-widest">Digital Arts</h3>
                        </div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-orange-600 overflow-hidden relative group rounded-sm shadow-lg"
                      >
                         <img 
                          src="https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1000" 
                          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" 
                          alt="Motion"
                        />
                         <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
                          <h3 className="text-3xl font-display uppercase text-white">Visual Impact</h3>
                          <p className="text-white/80 text-xs uppercase tracking-[0.3em] mt-4">Professional Grade</p>
                        </div>
                      </motion.div>
                  </div>
                </div>
              </section>

              <Services />
              
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </LanguageProvider>

    </ThemeProvider>
  );
}
