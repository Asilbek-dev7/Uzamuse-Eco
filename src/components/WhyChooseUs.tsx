import React, { memo } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { translations, Language } from '../translations';
import { SITE_CONFIG } from '../config';
import { SafeImage } from './SafeImage';
import { TextReveal } from './TextReveal';

export const WhyChooseUs = memo(({ onOpenContact, lang }: { onOpenContact: () => void; lang: Language }) => {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-28 md:py-40 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[180px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20 md:gap-40 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="grid grid-cols-2 gap-6 sm:gap-10 will-change-transform"
        >
          <div className="space-y-6 sm:space-y-10">
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.5rem] md:rounded-[3.5rem] aspect-[3/4] overflow-hidden shadow-2xl shadow-black/50 relative group border border-white/5"
            >
              <SafeImage
                src={SITE_CONFIG.about.img1}
                alt="Magic City"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.5rem] md:rounded-[3.5rem] aspect-square overflow-hidden shadow-2xl shadow-black/50 relative group border border-white/5"
            >
              <SafeImage
                src={SITE_CONFIG.about.img2}
                alt="Anhor Park"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>

          <div className="space-y-6 sm:space-y-10 pt-16 md:pt-32">
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.5rem] md:rounded-[3.5rem] aspect-square overflow-hidden shadow-2xl shadow-black/50 relative group border border-white/5"
            >
              <SafeImage
                src={SITE_CONFIG.about.img3}
                alt="Zipline"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.5rem] md:rounded-[3.5rem] aspect-[3/4] overflow-hidden shadow-2xl shadow-black/50 relative group border border-white/5"
            >
              <SafeImage
                src={SITE_CONFIG.about.img4}
                alt="Musical Fountain"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="will-change-transform text-center lg:text-left"
        >
          <span className="text-[12px] uppercase tracking-[0.6em] text-primary font-bold mb-10 block">
            {t.tagline}
          </span>
          <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-[1.05] tracking-tighter text-white text-gradient">
            <TextReveal text={t.title} />
          </h2>
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed mb-14 font-light max-w-2xl mx-auto lg:mx-0">
            {t.desc}
          </p>
          
          <div className="space-y-10 md:space-y-12 mb-20 text-left">
            {t.reasons.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.6, duration: 0.8 }}
                className="flex items-start gap-8 md:gap-10 group"
              >
                <div className="mt-1">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-2xl shadow-black/50 group-hover:scale-110 group-hover:rotate-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors duration-500 tracking-tight">{item.title}</h4>
                  <p className="text-base md:text-lg text-white/30 font-light group-hover:text-white/60 transition-colors duration-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a 
              href="tel:+998977049933"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-primary text-black font-bold rounded-2xl transition-all shadow-[0_20px_50px_rgba(132,204,22,0.3)] flex items-center justify-center text-base hover:shadow-primary/50 uppercase tracking-widest"
            >
              {t.button}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
