import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, CreditCard, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 px-6 bg-zinc-50 dark:bg-[#080808] transition-colors overflow-hidden" id="contact">
      {/* Decorative accent for brightness */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-orange-600/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-600 font-mono text-sm uppercase tracking-widest mb-6 block font-bold">02 / Get in Touch</span>
              <h2 className="text-5xl md:text-8xl font-display uppercase leading-[0.9] mb-8 drop-shadow-sm text-zinc-900 dark:text-zinc-100">
                Let's create <br /> <span className="text-orange-600">something big</span>.
              </h2>
            </motion.div>
            
            <div className="mt-12 p-8 border-l-4 border-orange-600 bg-orange-600/5 rounded-r-2xl">
              <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-light text-zinc-900 dark:text-zinc-100 italic">
                {t.contactNote}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <p className="text-[11px] uppercase tracking-[0.4em] opacity-40 font-bold mb-2 text-zinc-900 dark:text-zinc-100">Connect with us</p>
            
            <motion.a 
              href="https://wa.me/8801717927508"
              target="_blank"
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex items-center gap-6 p-8 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl shadow-black/5 dark:shadow-orange-950/20 border border-zinc-100 dark:border-white/5 transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <MessageCircle size={160} />
              </div>
              <div className="p-4 bg-green-500 rounded-xl text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <MessageCircle size={36} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold opacity-40 tracking-widest mb-1 text-zinc-900 dark:text-zinc-100">{t.whatsapp}</p>
                <p className="text-2xl md:text-4xl font-display tracking-tight text-zinc-900 dark:text-zinc-100">01717927508</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://www.facebook.com/profile.php?id=61560216376718"
              target="_blank"
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex items-center gap-6 p-8 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl shadow-black/5 dark:shadow-blue-950/20 border border-zinc-100 dark:border-white/5 transition-all group overflow-hidden relative"
            >
              <div className="p-4 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
                <Facebook size={36} />
              </div>
              <div className="text-zinc-900 dark:text-zinc-100">
                <p className="text-[10px] uppercase font-bold opacity-40 tracking-widest mb-1">{t.facebook}</p>
                <p className="text-xl md:text-3xl font-bold tracking-tight">Graphics Bangla Official</p>
              </div>
            </motion.a>

            <motion.div 
               whileHover={{ y: -8, scale: 1.02 }}
               className="flex items-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-[#E2136E] to-[#C11051] text-white shadow-2xl shadow-[#E2136E]/40 border border-white/20 transition-all group overflow-hidden relative"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <CreditCard size={140} />
              </div>
              <div className="p-4 bg-white/20 backdrop-blur-md rounded-xl group-hover:scale-110 transition-transform flex items-center justify-center">
                <CreditCard size={36} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold opacity-80 tracking-widest mb-1">{t.bkash} (Merchant/Personal)</p>
                <p className="text-2xl md:text-4xl font-display tracking-tight">017179727508</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-[10px] font-bold bg-white/20 px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">30% Advance Required</span>
                </div>
              </div>
            </motion.div>

            {/* Direct Phone */}
            <motion.a 
              href="tel:0177029524"
              whileHover={{ scale: 1.01 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-white/5 border border-zinc-100 dark:border-white/5 hover:border-orange-500/30 transition-all group shadow-sm"
            >
              <div className="p-3 bg-zinc-100 dark:bg-white/10 rounded-lg text-zinc-600 dark:text-zinc-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold opacity-40 text-zinc-900 dark:text-zinc-100">{t.phone}</p>
                <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">0177029524</p>
              </div>
            </motion.a>

            <div className="mt-8 p-6 border-l-2 border-orange-500/30 bg-orange-500/5 rounded-r-2xl">
              <p className="text-sm md:text-base opacity-70 leading-relaxed font-light italic text-zinc-900 dark:text-zinc-100">
                {t.contactNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
