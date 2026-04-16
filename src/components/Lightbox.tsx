import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt?: string;
}

export const Lightbox = memo(({ isOpen, onClose, imageSrc, alt }: LightboxProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.5, 1));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) handleZoomIn();
    else handleZoomOut();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl select-none"
          onWheel={handleWheel}
        >
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleZoomIn}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white transition-all"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button 
                onClick={handleZoomOut}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white transition-all"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button 
                onClick={handleReset}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white transition-all"
                title="Reset"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={imageSrc} 
                download 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white transition-all"
                title="Download"
              >
                <Download className="w-5 h-5" />
              </a>
              <button 
                onClick={onClose}
                className="p-3 bg-primary text-black rounded-xl hover:scale-110 transition-all shadow-xl shadow-primary/20"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <motion.div
            drag={scale > 1}
            dragConstraints={{ left: -500 * scale, right: 500 * scale, top: -500 * scale, bottom: 500 * scale }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            animate={{ scale, x: position.x, y: position.y }}
            className="relative cursor-grab active:cursor-grabbing max-w-[90vw] max-h-[80vh] flex items-center justify-center"
          >
            <img
              src={imageSrc}
              alt={alt || "Zoomed view"}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl pointer-events-none"
              draggable={false}
            />
          </motion.div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white/40 text-[10px] uppercase tracking-widest font-bold">
            Use mouse wheel or buttons to zoom • Drag to pan
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
