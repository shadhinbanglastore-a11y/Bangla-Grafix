import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  Layers, 
  PenTool, 
  Monitor, 
  Smartphone, 
  Printer, 
  Share2, 
  Camera 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const services = [
  { icon: Palette, title_en: "Logo Design", title_bn: "লোগো ডিজাইন", desc_en: "Custom brand identity from conceptual sketches to final vector craft.", desc_bn: "কনসেপচুয়াল স্কেচ থেকে ফাইনাল ভেক্টর ক্রাফট পর্যন্ত কাস্টম ব্র্যান্ড আইডেন্টিটি।" },
  { icon: Layers, title_en: "Social Media Kits", title_bn: "সোশ্যাল মিডিয়া কিটস", desc_en: "Viral post templates, banners, and profile graphics for all platforms.", desc_bn: "সব প্ল্যাটফর্মের জন্য ভাইরাল পোস্ট টেম্পলেট, ব্যানার এবং প্রোফাইল গ্রাফিক্স।" },
  { icon: Printer, title_en: "Print Materials", title_bn: "প্রিন্ট ম্যাটেরিয়ালস", desc_en: "Business cards, flyers, brochures, and billboard designs at high-res.", desc_bn: "হাই-রেজোলিউশনে বিজনেস কার্ড, ফ্লায়ার, ব্রোশিওর এবং বিলবোর্ড ডিজাইন।" },
  { icon: Monitor, title_en: "UI/UX Design", title_bn: "ইউআই/ইউএক্স ডিজাইন", desc_en: "Modern, user-centric web and mobile app interfaces with high contrast.", desc_bn: "হাই কন্ট্রাস্ট সহ আধুনিক, ইউজার-সেন্ট্রিক ওয়েব এবং মোবাইল অ্যাপ ইন্টারফেস।" },
  { icon: Share2, title_en: "Ad Creative", title_bn: "অ্যাড ক্রিয়েটিভ", desc_en: "High-conversion digital ad banners and commercial design assets.", desc_bn: "হাই-কনভার্সন ডিজিটাল অ্যাড ব্যানার এবং কমার্শিয়াল ডিজাইন অ্যাসেট।" },
  { icon: Camera, title_en: "Photo Editing", title_bn: "ফটো এডিটিং", desc_en: "Professional retouching, background removal, and color correction.", desc_bn: "প্রফেশনাল রিটাচিং, ব্যাকগ্রাউন্ড রিমুভ্যাল এবং কালার কারেকশন।" }
];

export const Services: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="services">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-orange-600 font-mono text-sm uppercase tracking-widest mb-4 block font-black">01 / Our Craft</span>
          <h2 className="text-6xl md:text-[8rem] font-display uppercase leading-[0.8] tracking-tighter">
            {t.services}
          </h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-md text-xl opacity-60 font-light leading-relaxed border-l-2 border-orange-600 pl-6"
        >
          We cover graphics design from A to Z, detailing every pixel with precision and professional craftsmanship.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black/5 dark:border-white/10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-16 border-r border-b border-black/5 dark:border-white/10 hover:bg-orange-600 group transition-colors cursor-pointer relative"
          >
            <div className="mb-10 p-5 w-fit bg-current/5 group-hover:bg-white/20 rounded-sm">
              <s.icon size={40} className="group-hover:text-white transition-colors" />
            </div>
            
            <h3 className="text-3xl font-display mb-4 group-hover:text-white tracking-tight uppercase">
              {language === 'en' ? s.title_en : s.title_bn}
            </h3>
            <p className="opacity-60 group-hover:text-white/80 font-light leading-relaxed text-lg">
              {language === 'en' ? s.desc_en : s.desc_bn}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
