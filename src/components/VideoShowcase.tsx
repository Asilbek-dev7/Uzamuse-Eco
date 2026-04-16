import React, { memo, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

import { SITE_CONFIG } from '../config';

const videos = [
  { id: "LGfkFcpJwOc", vertical: true },
  { id: "UCKTtwJq92w", vertical: false },
  { id: "n6Pzpijby10", vertical: false }
];

interface VideoItemProps {
  id: string;
  index: number;
  vertical?: boolean;
}

const VideoItem: React.FC<VideoItemProps> = memo(({ id, index, vertical }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.1, margin: "200px" });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
      className={`relative ${vertical ? 'aspect-[9/16] md:row-span-2' : 'aspect-video'} rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 bg-surface-light group shadow-2xl will-change-transform`}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-20">
          <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      
      {isInView && (
        <>
          {/* Transparent overlay to block clicks and interaction */}
          <div className="absolute inset-0 z-20 cursor-default" />
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&disablekb=1&modestbranding=1`}
            className={`w-full h-full border-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onLoad={() => setIsLoaded(true)}
          />
        </>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 border border-white/5 rounded-[2rem] md:rounded-[3rem] pointer-events-none group-hover:border-primary/30 transition-colors duration-700 z-10" />
    </motion.div>
  );
});

export const VideoShowcase = memo(() => {
  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start">
          <div className="md:col-span-1">
            <VideoItem id={videos[0].id} index={0} vertical={videos[0].vertical} />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 gap-6 md:gap-12">
            <VideoItem id={videos[1].id} index={1} vertical={videos[1].vertical} />
            <VideoItem id={videos[2].id} index={2} vertical={videos[2].vertical} />
          </div>
        </div>
      </div>
    </section>
  );
});
