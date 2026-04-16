import React, { useRef, memo } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Zap, CheckCircle2, Globe } from 'lucide-react';
import { translations, Language } from '../translations';

export const Stats = memo(({ lang }: { lang: Language }) => {
  const t = translations[lang].stats;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />, label: t.years, value: "7+" },
    { icon: <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />, label: t.projects, value: "25+" },
    { icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />, label: t.coverage, value: "100%" }
  ];

  return (
    <section ref={ref} className="py-24 sm:py-36 bg-surface text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-20 md:gap-32">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex flex-col items-center text-center group will-change-transform"
            >
              <div className="mb-10 p-8 sm:p-10 bg-white/5 rounded-[2.5rem] border border-white/10 group-hover:border-primary/40 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3 shadow-2xl shadow-black/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {s.icon}
                </div>
              </div>
              <span className="text-6xl sm:text-7xl md:text-9xl font-serif font-bold mb-6 text-white group-hover:text-primary transition-colors duration-500 tracking-tighter text-gradient group-hover:text-primary-gradient leading-none">
                {s.value}
              </span>
              <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.5em] font-bold text-white/20 group-hover:text-white transition-all duration-500 group-hover:tracking-[0.6em]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
