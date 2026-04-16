import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ShoppingCart, ZoomIn } from 'lucide-react';
import { translations, Language } from '../translations';
import { SITE_CONFIG } from '../config';
import { SafeImage } from './SafeImage';
import { Product } from '../types';

export const CatalogModal = memo(({ isOpen, onClose, lang, onOrder, onOpenLightbox }: { 
  isOpen: boolean; 
  onClose: () => void; 
  lang: Language;
  onOrder: (product: Product) => void;
  onOpenLightbox?: (url: string, alt?: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const products = SITE_CONFIG.products;
  
  const categories = ['All', ...Array.from(new Set(products.map((p: Product) => p.category)))];

  const filteredProducts = products.filter((p: Product) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#0A0A0A] w-full max-w-7xl h-full sm:h-[90vh] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-primary/5 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 md:p-10 border-b border-primary/5 flex flex-col gap-6 safe-top">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1 shadow-lg">
                    <SafeImage 
                      src={SITE_CONFIG.logo} 
                      alt="UZAMUSE ECO - EXTREME CONSTRUCTION OVERDRIVE logo" 
                      title="UZAMUSE ECO - Professional Extreme Construction Services"
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white uppercase">
                      {lang === 'ru' ? 'Наш Каталог' : lang === 'en' ? 'Our Catalog' : 'Bizning Katalog'}
                    </h3>
                    <p className="text-white/40 font-light text-[10px] uppercase tracking-widest">
                      {lang === 'ru' ? 'Каталог оборудования' : lang === 'en' ? 'Equipment Catalog' : 'Uskunalar Katalogi'}
                    </p>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-primary/5 rounded-full transition-colors">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={lang === 'ru' ? 'Поиск оборудования...' : lang === 'en' ? 'Search equipment...' : 'Uskunalarni qidirish...'}
                    className="w-full pl-12 pr-6 py-3.5 bg-primary/5 border border-primary/10 rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none text-white text-sm"
                  />
                </div>
                
                {/* Category Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                  {categories.map((cat: any) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border ${
                        selectedCategory === cat 
                        ? 'bg-primary border-primary text-black shadow-lg shadow-primary/10' 
                        : 'bg-primary/5 border-primary/10 text-white/40 hover:text-white hover:bg-primary/10'
                      }`}
                    >
                      {cat === 'All' ? translations[lang].categories.all : (translations[lang].categories[cat as keyof typeof translations[typeof lang]['categories']] || cat)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10 safe-bottom">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product: Product, i: number) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-[#111] rounded-[2rem] overflow-hidden border border-primary/5 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(132,204,22,0.05)] transition-all duration-500 flex flex-col h-full relative"
                    >
                      <div className="aspect-square overflow-hidden relative bg-primary/5">
                        <SafeImage 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 bg-primary/10 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-widest rounded-full border border-primary/20 shadow-xl">
                            {translations[lang].categories[product.category as keyof typeof translations[typeof lang]['categories']] || product.category}
                          </span>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 gap-4">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenLightbox?.(product.image, product.name);
                            }}
                            className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all border border-white/20"
                          >
                            <ZoomIn className="w-5 h-5" />
                          </button>
                          <div className="px-6 py-2 bg-primary/90 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-2xl border border-primary/50">
                            {lang === 'ru' ? 'Подробнее' : lang === 'en' ? 'View Details' : 'Batafsil'}
                          </div>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1 relative z-10">
                        <h3 className="text-base font-serif font-bold text-white mb-2 group-hover:text-white/80 transition-colors line-clamp-2 min-h-[3rem]">
                          {product.name}
                        </h3>
                        <div className="mt-auto pt-4 flex justify-between items-center border-t border-primary/5">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Price</span>
                            <span className="text-white font-bold text-base tracking-tight">{product.price}</span>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(132,204,22,0.1)' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => onOrder(product)}
                            className="w-12 h-12 bg-primary/5 rounded-2xl text-white hover:text-white transition-all flex items-center justify-center shadow-lg border border-primary/10 hover:border-primary/50"
                          >
                            <ShoppingCart className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <Search className="w-16 h-16 text-white/10 mb-6" />
                  <h4 className="text-xl text-white/60 font-serif mb-2">
                    {lang === 'ru' ? 'Ничего не найдено' : lang === 'en' ? 'Nothing found' : 'Hech narsa topilmadi'}
                  </h4>
                  <p className="text-white/20 text-sm">
                    {lang === 'ru' ? 'Попробуйте изменить запрос' : lang === 'en' ? 'Try changing your query' : 'So\'rovni o\'zgartirib ko\'ring'}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});
