import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Send, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { translations, Language } from '../translations';
import { SITE_CONFIG } from '../config';
import { SafeImage } from './SafeImage';

export const Footer = React.memo(({ lang, onOpenPdf }: { lang: Language; onOpenPdf: (url: string, title: string) => void }) => {
  const t = translations[lang].footer;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/uzamuse_eco?igsh=MXR3b3R3b3R3b3R3" },
    { icon: <Send className="w-5 h-5" />, href: "https://t.me/ExtremeConstruction" }
  ];

  return (
    <footer className="bg-surface text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary rounded-full blur-[180px] opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-accent rounded-full blur-[150px] opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-20">
          <div className="space-y-10">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden transition-transform duration-500 group-hover:scale-110 p-1">
                <SafeImage 
                  src={SITE_CONFIG.logo} 
                  alt="UZAMUSE ECO" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-serif font-bold tracking-tight text-gradient">Uzamuse <span className="text-primary">Eco</span></span>
                <span className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-40 text-white">Extreme Construction</span>
              </div>
            </div>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed font-light max-w-xs">
              {t.desc}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition-all hover:bg-primary hover:text-black hover:border-primary shadow-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-white/20">{t.navTitle}</h4>
            <ul className="space-y-5 text-white/50 text-sm sm:text-base font-light">
              <li><a href="#home" className="hover:text-primary transition-colors flex items-center gap-3 group"><span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all" />{translations[lang].nav.home}</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors flex items-center gap-3 group"><span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all" />{translations[lang].nav.about}</a></li>
              <li><button onClick={() => onOpenPdf('https://online.fliphtml5.com/Teacher6023/catolog-A4-DeTB/#p=13', translations[lang].nav.portfolio)} className="hover:text-primary transition-colors flex items-center gap-3 group text-left"><span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all" />{translations[lang].nav.portfolio}</button></li>
              <li><a href="#contact" className="hover:text-primary transition-colors flex items-center gap-3 group"><span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all" />{translations[lang].nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-white/20">{t.advantagesTitle}</h4>
            <ul className="space-y-5 text-white/50 text-sm sm:text-base font-light">
              {t.advantages.map((adv: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-white/20">{t.contactTitle}</h4>
            <ul className="space-y-8 text-white/50 text-sm sm:text-base font-light">
              <li className="flex gap-4 group">
                <MapPin className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors leading-relaxed">{t.address}</span>
              </li>
              <li className="flex gap-4 group">
                <Phone className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col gap-3">
                  <a href="tel:+998977049933" className="hover:text-white transition-colors font-medium">+998 97 704 99 33</a>
                  <a href="tel:+998992008508" className="hover:text-white transition-colors font-medium">+998 99 200 85 08</a>
                </div>
              </li>
            </ul>
            
            {/* Google Maps Embed */}
            <div className="mt-10 rounded-3xl overflow-hidden border border-white/10 h-48 w-full bg-white/5 relative group shadow-2xl">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(t.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
                className="opacity-40 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl" />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.6em] font-bold text-center md:text-left">
            © {currentYear} UZAMUSE ECO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[10px] text-white/20 hover:text-white transition-colors uppercase tracking-[0.5em] font-bold">Privacy</a>
            <a href="#" className="text-[10px] text-white/20 hover:text-white transition-colors uppercase tracking-[0.5em] font-bold">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
});
