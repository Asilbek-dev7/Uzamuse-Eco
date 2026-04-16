import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setIsVisible(false), 200);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) { // Stay at 90% until window loads
            clearInterval(timer);
            return 90;
          }
          return prev + 1;
        });
      }, 30);

      // Safety timeout: hide preloader after 5 seconds regardless of load event
      const safetyTimeout = setTimeout(handleLoad, 5000);

      window.addEventListener('load', handleLoad);
      return () => {
        clearInterval(timer);
        clearTimeout(safetyTimeout);
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center"
        >
          <div className="relative w-72 h-[1px] bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_20px_rgba(132,204,22,0.5)]"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-primary/40">
              Loading Experience
            </span>
            <span className="text-6xl font-serif font-bold text-white tracking-tighter">
              {progress}%
            </span>
          </motion.div>

          <div className="absolute bottom-16 left-16">
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(132,204,22,0.8)]" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.5em] text-white/20 font-bold">
                System Initializing
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
