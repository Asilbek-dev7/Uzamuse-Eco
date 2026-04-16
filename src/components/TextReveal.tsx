import React, { memo } from 'react';
import { motion } from 'motion/react';

export const TextReveal = memo(({ text, className = "" }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <div className={`flex flex-wrap justify-center lg:justify-start gap-x-[0.25em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-[0.1em]">
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 1.2, 
              delay: i * 0.04, 
              ease: [0.215, 0.61, 0.355, 1] 
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
});
