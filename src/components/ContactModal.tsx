import React, { memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Send, MapPin, Mail, ArrowRight, CheckCircle2, Instagram, Facebook } from 'lucide-react';
import { translations, Language } from '../translations';
import { SITE_CONFIG } from '../config';
import { SafeImage } from './SafeImage';

export const ContactModal = memo(({ isOpen, onClose, lang }: { 
  isOpen: boolean; 
  onClose: () => void; 
  lang: Language;
}) => {
  const t = translations[lang];
  const cm = t.contactModal;
  const f = t.footer;

  const advantages = [
    lang === 'ru' ? 'Официальная гарантия на все оборудование' : lang === 'en' ? 'Official warranty on all equipment' : 'Barcha uskunalarga rasmiy kafolat',
    lang === 'ru' ? 'Сертифицированное производство' : lang === 'en' ? 'Certified production' : 'Sertifikatlangan ishlab chiqarish',
    lang === 'ru' ? 'Техническая поддержка 24/7' : lang === 'en' ? 'Technical support 24/7' : '24/7 texnik yordam'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative bg-[#050505] w-full h-full overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="fixed top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-md border border-white/10 group"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
            </button>

            {/* Hero Image Section */}
            <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
              <SafeImage 
                src={SITE_CONFIG.hero.background} 
                alt="Contact Hero" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6 text-center">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4"
                >
                  {lang === 'ru' ? 'КОНТАКТЫ' : 'CONTACTS'}
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-5xl font-serif font-bold text-white max-w-3xl leading-tight"
                >
                  {lang === 'ru' ? 'Свяжитесь с нами для консультации по вашему проекту' : 'Contact us for a consultation on your project'}
                </motion.h2>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
                {/* Left Column: Action */}
                <div className="space-y-8 sm:space-y-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 uppercase tracking-tight text-gradient">
                      {lang === 'ru' ? 'Связаться с нами' : lang === 'en' ? 'Contact Us' : 'Biz bilan bog\'lanish'}
                    </h3>
                    <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base">
                      {cm.subtitle}
                    </p>
                  </motion.div>

                  {/* Call and TG Buttons */}
                  <div className="space-y-4">
                    <motion.a
                      href="tel:+998977049933"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between p-4 sm:p-5 bg-primary/10 border border-primary/20 rounded-2xl text-primary font-bold transition-all group hover:bg-primary/20"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest opacity-60 mb-1">{lang === 'ru' ? 'Позвонить нам' : 'Call Us'}</span>
                          <div className="flex flex-col gap-1">
                            <span className="text-base sm:text-lg">+998 97 704 99 33</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </motion.a>

                    <motion.a
                      href={SITE_CONFIG.social.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between p-4 sm:p-5 bg-accent/10 border border-accent/20 rounded-2xl text-accent font-bold transition-all group hover:bg-accent/20"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                          <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest opacity-60 mb-1">{lang === 'ru' ? 'Написать в Telegram' : 'Write on Telegram'}</span>
                          <span className="text-base sm:text-lg">@ExtremeConstruction</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </motion.a>
                  </div>

                  {/* Advantages */}
                  <div className="pt-8 sm:pt-10 border-t border-white/5">
                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-6">{lang === 'ru' ? 'Наши преимущества' : 'Our Advantages'}</h4>
                    <ul className="space-y-4">
                      {advantages.map((adv, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-4 text-white/70 font-light text-sm sm:text-base"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span>{adv}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Info */}
                <div className="space-y-10 sm:space-y-12">
                  {/* Map Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-6">{lang === 'ru' ? 'Как нас найти:' : 'How to find us:'}</h4>
                    <div className="rounded-3xl overflow-hidden border border-white/10 h-56 sm:h-64 w-full bg-white/5 relative group mb-4 shadow-2xl">
                      <iframe
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(f.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                        allowFullScreen
                        loading="lazy"
                        title="Office Location"
                        className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                    <p className="text-white/60 font-light flex items-start gap-3 text-sm sm:text-base">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                      {f.address}
                    </p>
                  </motion.div>

                  {/* Logo & Desc */}
                  <div className="pt-8 sm:pt-10 border-t border-white/5">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1 shadow-lg">
                        <SafeImage src={SITE_CONFIG.logo} alt="Logo" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight leading-tight">Uzamuse Eco</span>
                        <span className="text-[7px] sm:text-[8px] text-primary font-bold tracking-widest uppercase">Extreme Construction</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-white/40 leading-relaxed font-light">
                      {lang === 'ru' ? 'Ведущий производитель аттракционов и детских площадок в Узбекистане. Полный цикл: от проектирования до установки.' : 'Leading manufacturer of attractions and playgrounds in Uzbekistan. Full cycle: from design to installation.'}
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div className="grid grid-cols-2 gap-8 pt-8 sm:pt-10 border-t border-white/5">
                    <div>
                      <h5 className="text-[9px] font-bold text-white uppercase tracking-widest mb-4">{f.navTitle}</h5>
                      <ul className="space-y-2 text-xs sm:text-sm text-white/40 font-light">
                        <li><a href="#home" onClick={onClose} className="hover:text-primary transition-colors">{t.nav.home}</a></li>
                        <li><a href="#about" onClick={onClose} className="hover:text-primary transition-colors">{t.nav.about}</a></li>
                        <li><a href="#portfolio" onClick={onClose} className="hover:text-primary transition-colors">{t.nav.portfolio}</a></li>
                        <li><a href="#contact" onClick={onClose} className="hover:text-primary transition-colors">{t.nav.contact}</a></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[9px] font-bold text-white uppercase tracking-widest mb-4">{lang === 'ru' ? 'КОНТАКТЫ' : 'CONTACTS'}</h5>
                      <ul className="space-y-3 text-xs sm:text-sm text-white/40 font-light">
                        <li className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary shrink-0" />
                            <a href="tel:+998977049933" className="hover:text-primary transition-colors">+998 97 704 99 33</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Part of Modal */}
              <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
                <div className="flex gap-6">
                  <a href="#" className="text-[9px] text-white/20 hover:text-white transition-colors uppercase tracking-widest">{f.privacy}</a>
                  <a href="#" className="text-[9px] text-white/20 hover:text-white transition-colors uppercase tracking-widest">{f.terms}</a>
                </div>
                <p className="text-[9px] text-white/20 uppercase tracking-widest text-center md:text-right">
                  © 2025 UZAMUSE - {lang === 'ru' ? 'Все права защищены' : 'All rights reserved'}.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});

