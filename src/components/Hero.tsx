import React, { useState, useEffect, memo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { translations, Language } from '../translations';
import { SITE_CONFIG } from '../config';
import { SafeImage } from './SafeImage';
import { TextReveal } from './TextReveal';

export const Hero = memo(({ lang, isMobile, onOpenMeeting, onOpenLightbox, scrollYProgress }: { lang: Language; isMobile: boolean; onOpenMeeting: () => void; onOpenLightbox?: (url: string, alt?: string) => void; scrollYProgress: any }) => {
  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const t = translations[lang].hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  const nodes = [
    { id: 'climb', label: '', pos: "20%" },
    { id: 'rope', label: '', pos: "38%" },
    { id: 'catalog', label: '', pos: "60%" },
    { id: 'swing', label: '', pos: "82%" },
    { id: 'zip', label: '', pos: "95%" },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface pt-16 sm:pt-20 lg:pt-12">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1 }} 
        className="absolute inset-0 z-0 will-change-transform"
      >
        <SafeImage 
          src={SITE_CONFIG.hero.background} 
          alt="Construction site" 
          className="w-full h-full object-cover opacity-30 scale-110"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center justify-center text-center py-12 sm:py-20 lg:py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-white"
        >
          <motion.div 
            variants={itemVariants}
            className="h-[2px] bg-primary mb-8 sm:mb-12 mx-auto w-[60px] sm:w-[100px] shadow-[0_0_20px_rgba(132,204,22,0.5)]"
          />
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-[0.25em] text-primary mb-8 sm:mb-12 leading-[1.1] animate-float text-primary-gradient"
          >
            {t.tagline}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-white/70 mb-12 sm:mb-20 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0"
          >
            {t.desc}
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0"
          >
            <motion.button 
                onClick={onOpenMeeting}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-primary text-black font-bold rounded-2xl flex items-center justify-center gap-4 group shadow-[0_20px_40px_rgba(132,204,22,0.2)] transition-all duration-300 text-base"
              >
                {t.projects}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.a 
                  href="tel:+998977049933"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center transition-all duration-300 text-base hover:bg-white/10"
                >
                  {t.about}
                </motion.a>
              </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/20 z-20 will-change-opacity"
      >
        <span className="text-[10px] uppercase tracking-[0.6em] font-bold">{t.scrollDown}</span>
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-20 bg-gradient-to-b from-primary/40 to-transparent" 
        />
      </motion.div>
    </section>
  );
});
