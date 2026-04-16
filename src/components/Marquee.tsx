import React, { memo } from 'react';
import { translations, Language } from '../translations';

export const Marquee = memo(({ lang }: { lang: Language }) => {
  const partners = translations[lang].about.partners;
  
  return (
    <div className="py-10 bg-surface border-y border-white/5 overflow-hidden flex whitespace-nowrap relative">
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-surface to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-surface to-transparent z-10" />
      
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            gap: 8rem;
            animation: marquee 80s linear infinite;
            will-change: transform;
          }
        `}
      </style>
      <div className="marquee-track px-12" style={{ transform: 'translateZ(0)' }}>
        {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
          <span key={i} className="text-5xl md:text-9xl font-serif font-bold text-white/[0.03] hover:text-primary/10 transition-all duration-1000 uppercase tracking-tighter italic shrink-0 cursor-default select-none">
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
});
