import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, LogIn, User } from 'lucide-react';
import { Language, translations } from '../translations';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => void;
  onContinueAsGuest: () => void;
  lang: Language;
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  onSignIn, 
  onContinueAsGuest,
  lang 
}) => {
  const t = translations[lang].auth;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-[#111] border border-primary/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-primary/5 rounded-full transition-colors text-white/40 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LogIn className="w-8 h-8 text-primary" />
              </div>

              <h2 className="text-2xl font-serif text-white mb-4">{t.title}</h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                {t.desc}
              </p>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onSignIn}
                  className="w-full py-4 bg-primary text-black font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all"
                >
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                  {t.googleBtn}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onContinueAsGuest}
                  className="w-full py-4 bg-primary/5 border border-primary/10 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-primary/10 transition-all"
                >
                  <User className="w-5 h-5 text-white/80" />
                  {t.guestBtn}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
