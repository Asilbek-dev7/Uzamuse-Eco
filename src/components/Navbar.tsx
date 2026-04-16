import React, { memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Phone, ShoppingCart, LogOut, User as UserIcon, Home, Info, Image } from 'lucide-react';
import { translations, Language } from '../translations';
import { SITE_CONFIG } from '../config';
import { SafeImage } from './SafeImage';
import { User } from '../hooks/useAuth';

export const Navbar = memo(({ onOpenContact, onOpenPdf, lang, setLang, isScrolled, isMenuOpen, setIsMenuOpen, user, onSignOut }: { 
  onOpenContact: () => void; 
  onOpenPdf: (url: string, title: string) => void; 
  lang: Language; 
  setLang: (l: Language) => void;
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (o: boolean) => void;
  user: User | null;
  onSignOut: () => void;
}) => {
  const t = translations[lang].nav;

  const navItems = [
    { name: t.home, href: '#home', icon: Home },
    { name: t.portfolio, onClick: () => onOpenPdf('https://online.fliphtml5.com/Teacher6023/catolog-A4-DeTB/#p=13', t.portfolio), icon: Image },
    { name: t.market, onClick: () => onOpenPdf('https://drive.google.com/file/d/1FShnf1ObcegIo0Rfce8dnPZnfiwhD1UI/view?usp=sharing', t.market), icon: ShoppingCart },
    { name: t.contact, onClick: onOpenContact, icon: Phone }
  ];

  const fullNavItems = [
    { name: t.home, href: '#home', icon: Home },
    { name: t.about, href: '#about', icon: Info },
    { name: t.portfolio, onClick: () => onOpenPdf('https://online.fliphtml5.com/Teacher6023/catolog-A4-DeTB/#p=13', t.portfolio), icon: Image },
    { name: t.market, onClick: () => onOpenPdf('https://drive.google.com/file/d/1FShnf1ObcegIo0Rfce8dnPZnfiwhD1UI/view?usp=sharing', t.market), icon: ShoppingCart },
    { name: t.contact, onClick: onOpenContact, icon: Phone }
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'uz', label: 'UZ' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-[padding,background-color] ${isScrolled ? 'py-2 bg-surface/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-4 md:py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <motion.a 
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 sm:gap-4 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg overflow-hidden shrink-0 transition-transform duration-500 group-hover:scale-110 p-1">
              <SafeImage 
                src={SITE_CONFIG.logo} 
                alt="UZAMUSE ECO" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white">UZAMUSE</span>
                <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-primary">ECO</span>
              </div>
              <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.4em] font-bold opacity-40 text-white group-hover:opacity-60 transition-opacity">EXTREME CONSTRUCTION OVERDRIVE</span>
            </div>
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                item.onClick ? (
                  <button 
                    key={item.name}
                    onClick={item.onClick}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-primary transition-all relative group py-2"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
                  </button>
                ) : (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-primary transition-all relative group py-2"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
                  </a>
                )
              ))}
            </div>
            
            <div className="h-4 w-px bg-white/10" />
            
            <div className="flex gap-4">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-[10px] font-bold transition-all hover:scale-110 ${lang === l.code ? 'text-white' : 'text-white/20 hover:text-white/40'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex gap-3 mr-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-[10px] font-bold transition-all ${lang === l.code ? 'text-white' : 'text-white/20'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button 
              className="flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl hover:bg-primary/20 transition-all group"
              onClick={() => setIsMenuOpen(true)}
            >
              <div className="flex flex-col gap-1 items-end">
                <span className="w-5 h-0.5 bg-primary rounded-full group-hover:w-6 transition-all" />
                <span className="w-3 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all" />
                <span className="w-5 h-0.5 bg-primary rounded-full group-hover:w-6 transition-all" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-surface z-[100] flex flex-col overflow-y-auto safe-top safe-bottom"
          >
            {/* Header in Menu */}
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1">
                  <SafeImage src={SITE_CONFIG.logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-serif font-bold text-lg tracking-tight text-white">UZAMUSE ECO</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Main Navigation Grid */}
            <div className="flex-1 px-6 py-10">
              <div className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
                {fullNavItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    {item.onClick ? (
                      <button 
                        onClick={() => { item.onClick!(); setIsMenuOpen(false); }}
                        className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-5 hover:bg-white/10 hover:border-white/20 transition-all group text-left"
                      >
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all shrink-0">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xl font-serif text-white tracking-tight">{item.name}</span>
                          <span className="text-[9px] uppercase tracking-widest text-white/20">
                            {lang === 'ru' ? 'Открыть раздел' : lang === 'en' ? 'Open section' : 'Bo\'limni ochish'}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 ml-auto text-white/10 group-hover:text-white transition-all" />
                      </button>
                    ) : (
                      <a 
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-5 hover:bg-white/10 hover:border-white/20 transition-all group text-left"
                      >
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all shrink-0">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xl font-serif text-white tracking-tight">{item.name}</span>
                          <span className="text-[9px] uppercase tracking-widest text-white/20">
                            {lang === 'ru' ? 'Перейти' : lang === 'en' ? 'Go to' : 'O\'tish'}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 ml-auto text-white/10 group-hover:text-white transition-all" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer Section */}
            <div className="p-8 mt-auto space-y-8 bg-black/40 backdrop-blur-2xl border-t border-white/5">
              {user && (
                <div className="max-w-lg mx-auto flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/20">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-white/10 flex items-center justify-center">
                        <UserIcon className="w-6 h-6 text-white/60" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-bold text-white uppercase tracking-widest">{user.displayName}</span>
                    <span className="block text-[10px] text-white/40 uppercase tracking-widest truncate max-w-[150px]">{user.email}</span>
                  </div>
                  <button 
                    onClick={onSignOut}
                    className="p-3 bg-white/5 hover:bg-red-500/10 rounded-xl transition-all text-white/40 hover:text-red-500 border border-white/5"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              )}

              <div className="max-w-lg mx-auto flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col gap-3">
                    <a 
                      href="tel:+998977049933"
                      className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl text-base flex items-center justify-center gap-4 hover:bg-white/10 transition-all"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      +998 97 704 99 33
                    </a>
                    <a 
                      href="tel:+998992008508"
                      className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl text-base flex items-center justify-center gap-4 hover:bg-white/10 transition-all"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      +998 99 200 85 08
                    </a>
                  </div>
                  <button 
                    onClick={() => { onOpenContact(); setIsMenuOpen(false); }}
                    className="w-full py-4 bg-primary text-black font-bold rounded-2xl text-base shadow-2xl shadow-primary/20 flex items-center justify-center active:scale-95 transition-transform"
                  >
                    {translations[lang].nav.orderCall}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>


  );
});
