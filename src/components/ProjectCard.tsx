import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { translations, Language } from '../translations';
import { SafeImage } from './SafeImage';

import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  lang: Language;
  onClick?: () => void;
  onInquiry?: (project: Project) => void;
  onOpenLightbox?: (url: string, alt?: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, index, lang, onClick, onInquiry, onOpenLightbox }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });
  const t = translations[lang].portfolio;
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.1, 
        ease: [0.215, 0.61, 0.355, 1] 
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="group bg-[#0a0a0a] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/40 border border-white/5 hover:border-primary/30 transition-all duration-500 will-change-transform flex flex-col h-full perspective-1000"
    >
      <div 
        onClick={onClick}
        className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-primary/5 cursor-pointer"
      >
        <motion.div
          animate={{ 
            x: isHovered ? mousePos.x * 20 : 0,
            y: isHovered ? mousePos.y * 20 : 0,
            scale: isHovered ? 1.15 : 1
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.5 }}
          className="w-full h-full will-change-transform"
        >
          <SafeImage 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Glass Overlay on Hover */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 pointer-events-none">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox?.(project.image, project.name);
            }}
            className="p-4 bg-primary text-black rounded-full shadow-2xl pointer-events-auto hover:scale-110 transition-transform"
          >
            <ZoomIn className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute top-6 left-6">
          <motion.span 
            animate={{ y: isHovered ? -5 : 0 }}
            className="px-4 py-1.5 bg-primary/20 backdrop-blur-xl text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-full border border-primary/20 block"
          >
            {project.category}
          </motion.span>
        </div>
      </div>
      
      <div className="p-5 sm:p-8 flex flex-col flex-1 relative">
        <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <motion.h3 
          animate={{ x: isHovered ? 5 : 0 }}
          className="text-xl sm:text-3xl font-serif font-bold mb-3 sm:mb-4 text-white group-hover:text-primary transition-colors duration-300 tracking-tight"
        >
          {project.name}
        </motion.h3>
        <p className="text-white/50 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8 font-light flex-1 line-clamp-3 group-hover:text-white/70 transition-colors duration-300">
          {project.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-auto">
          <button 
            onClick={onClick}
            className="flex items-center justify-center sm:justify-start gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-all group/btn py-2 sm:py-0"
          >
            {project.moreText || t.more} 
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
          </button>
          
          {onInquiry && (
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onInquiry(project);
              }}
              className="w-full sm:w-auto px-8 py-4 sm:py-3 bg-primary text-black font-bold rounded-xl sm:rounded-2xl text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-primary/10 hover:shadow-primary/30"
            >
              {lang === 'ru' ? 'Подать заявку' : lang === 'en' ? 'Submit Application' : 'So\'rov yuborish'}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
});
