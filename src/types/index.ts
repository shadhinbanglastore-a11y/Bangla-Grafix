export type Language = 'en' | 'bn';

export interface Translation {
  title: string;
  subtitle: string;
  loading: string;
  advancePayment: string;
  owner: string;
  disclaimer: string;
  warning: string;
  contactNote: string;
  services: string;
  contact: string;
  portfolio: string;
  whatsapp: string;
  phone: string;
  bkash: string;
  facebook: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    title: 'Bangla Graphics',
    subtitle: 'From A to Z Graphic Design Solutions',
    loading: 'Something big is coming...',
    advancePayment: '30% advance payment is required before starting any project.',
    owner: 'Owner of Bangla Graphics is SAaD Mohammad Obaidullah',
    disclaimer: 'We provide professional and high-quality design services for our valued clients.',
    warning: 'Feel free to message us on WhatsApp or Facebook for a quick response.',
    contactNote: 'Professional and welcoming communication is our priority.',
    services: 'Our Services',
    contact: 'Contact',
    portfolio: 'Portfolio',
    whatsapp: 'WhatsApp',
    phone: 'Phone',
    bkash: 'bKash',
    facebook: 'Facebook Page'
  },
  bn: {
    title: 'বাংলা গ্রাফিক্স',
    subtitle: 'এ থেকে জেড গ্রাফিক ডিজাইন সমাধান',
    loading: 'বড় কিছু আসছে...',
    advancePayment: 'যেকোন প্রজেক্ট শুরু করার আগে ৩০% অগ্রিম পেমেন্ট প্রয়োজন।',
    owner: 'বাংলা গ্রাফিক্স এর মালিক হলেন SAaD Mohammad Obaidullah',
    disclaimer: 'আমরা আমাদের সম্মানিত গ্রাহকদের জন্য পেশাদার এবং মানসম্মত ডিজাইন সেবা প্রদান করি।',
    warning: 'হোয়াটসঅ্যাপ বা ফেসবুকে আমাদের মেসেজ করুন, আমরা শীঘ্রই উত্তর দেব।',
    contactNote: 'পেশাদার এবং বন্ধুত্বপূর্ণ যোগাযোগ আমাদের প্রথম লক্ষ্য।',
    services: 'আমাদের সেবাসমূহ',
    contact: 'যোগাযোগ',
    portfolio: 'পোর্টফোলিও',
    whatsapp: 'হোয়াটসঅ্যাপ',
    phone: 'ফোন',
    bkash: 'বিকাশ',
    facebook: 'ফেসবুক পেজ'
  }
};
