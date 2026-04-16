import React, { memo } from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import { translations, Language } from '../translations';
import { SITE_CONFIG } from '../config';
import { SafeImage } from './SafeImage';
import { TextReveal } from './TextReveal';

export const CableCarSection = memo(({ lang }: { lang: Language }) => {
  const t = translations[lang].cableCar;
  if (!t) return null;

  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="order-2 lg:order-1 will-change-transform"
          >
            <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-[1.1] tracking-tighter text-white text-gradient">
              <TextReveal text={t.title} />
            </h2>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 font-light max-w-xl">
              {t.desc}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {t.features.map((feature: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.6, duration: 0.8 }}
                  className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-primary/40 transition-all duration-500 group shadow-2xl shadow-black/50"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-500 tracking-tight">{feature.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] group">
              <SafeImage 
                src={SITE_CONFIG.about.main} 
                alt="Modern Cable Car" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Floating UI Overlay */}
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                    <span className="text-[11px] font-bold text-white uppercase tracking-[0.3em]">System Status: Optimal</span>
                  </div>
                  <span className="text-[11px] font-mono text-primary font-bold">v2.4.0_ECO</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ['0%', '100%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="h-full bg-primary shadow-[0_0_10px_rgba(132,204,22,0.8)]"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
});
