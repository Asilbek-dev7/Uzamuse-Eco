import React, { memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Download } from 'lucide-react';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export const PdfModal: React.FC<PdfModalProps> = memo(({ isOpen, onClose, pdfUrl, title }) => {
  // Convert Google Drive view link to preview link if necessary
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    
    // Handle Google Drive links
    if (url.includes('drive.google.com')) {
      // Extract file ID using regex
      const driveIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (driveIdMatch && driveIdMatch[1]) {
        return `https://drive.google.com/file/d/${driveIdMatch[1]}/preview`;
      }
      
      // Handle alternative formats like /view or ?id=
      return url.replace('/view', '/preview').split('?')[0];
    }
    
    return url;
  };

  const embedUrl = getEmbedUrl(pdfUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 sm:p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#0A0A0A] w-full max-w-6xl h-full sm:h-[90vh] sm:rounded-3xl overflow-hidden shadow-2xl border border-primary/20 flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-primary/10 flex items-center justify-between bg-black/50 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary-dark rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">{title}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href={pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-primary/10 rounded-full transition-colors text-white/60 hover:text-white"
                  title="Open in new tab"
                >
                  <Download className="w-5 h-5" />
                </a>
                <button 
                  onClick={onClose} 
                  className="p-2 hover:bg-primary/10 rounded-full transition-colors text-white/60 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* PDF Content */}
            <div className="flex-1 bg-primary/5 relative">
              <iframe
                src={embedUrl}
                className="w-full h-full border-none"
                allow="autoplay"
                title={title}
              />
              
              {/* Loading indicator (optional, but nice) */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});
