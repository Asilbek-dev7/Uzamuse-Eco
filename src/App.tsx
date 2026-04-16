import React, { useState, useEffect, useRef, lazy, Suspense, useCallback } from 'react';
import { motion, useScroll, useSpring, MotionConfig, useMotionValueEvent } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { translations, Language } from './translations';
import { SITE_CONFIG } from './config';
import { syncSeo } from './seo';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Preloader } from './components/Preloader';
import { Marquee } from './components/Marquee';
import { ProjectCard } from './components/ProjectCard';
import { SafeImage } from './components/SafeImage';
import { TextReveal } from './components/TextReveal';
import { AuthModal } from './components/AuthModal';
import { useAuth } from './hooks/useAuth';

// Lazy loaded components
const CatalogModal = lazy(() => import('./components/CatalogModal').then(m => ({ default: m.CatalogModal })));
const ContactModal = lazy(() => import('./components/ContactModal').then(m => ({ default: m.ContactModal })));
const PdfModal = lazy(() => import('./components/PdfModal').then(m => ({ default: m.PdfModal })));

const Stats = lazy(() => import('./components/Stats').then(m => ({ default: m.Stats })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const CableCarSection = lazy(() => import('./components/CableCarSection').then(m => ({ default: m.CableCarSection })));
const VideoShowcase = lazy(() => import('./components/VideoShowcase').then(m => ({ default: m.VideoShowcase })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const Lightbox = lazy(() => import('./components/Lightbox').then(m => ({ default: m.Lightbox })));

const SEO_COPY = {
  ru: {
    eyebrow: 'SEO CONTENT',
    title: 'Аттракционы, zipline и канатные дороги в Узбекистане',
    intro:
      "UZAMUSE ECO занимается проектированием, производством и монтажом современных аттракционов в Узбекистане. Мы создаем zipline, веревочные парки, канатные дороги, смотровые конструкции и комплексные entertainment project решения для городов, туристических зон и частных инвесторов.",
    body:
      "Если пользователи ищут в Google слова attraksion, Uzbekistan, project, loyiha, канатная дорога или zipline, сайт должен четко показывать, что компания закрывает полный цикл работ: от концепции и инженерии до установки, запуска и сервисного обслуживания.",
    servicesTitle: 'Основные направления',
    services: [
      'Проектирование аттракционов и туристических объектов',
      'Zipline, rope park и высотные маршруты',
      'Канатные дороги и панорамные транспортные решения',
      'Монтаж, запуск и техническое сопровождение',
    ],
  },
  en: {
    eyebrow: 'SEO CONTENT',
    title: 'Attraction, zipline and cable car projects in Uzbekistan',
    intro:
      'UZAMUSE ECO designs, manufactures and installs modern attractions in Uzbekistan. We build zipline systems, rope parks, cable cars, observation structures and full-cycle entertainment project solutions for cities, tourism zones and private investors.',
    body:
      'When people search Google for attraction, Uzbekistan, project, cable car, zipline or amusement park project, the website should clearly communicate that the company handles the full process from concept and engineering to installation, launch and service support.',
    servicesTitle: 'Core services',
    services: [
      'Attraction and tourism infrastructure design',
      'Zipline, rope park and high-altitude experiences',
      'Cable car systems and panoramic mobility solutions',
      'Installation, launch and maintenance support',
    ],
  },
  uz: {
    eyebrow: 'SEO CONTENT',
    title: "O'zbekistonda attraksion, zipline va kanat yo'li loyihalari",
    intro:
      "UZAMUSE ECO O'zbekistonda zamonaviy attraksionlar, zipline, arqonli park, kanat yo'li, kuzatuv maydonlari va turistik loyiha yechimlarini loyihalash, ishlab chiqarish hamda o'rnatish bilan shug'ullanadi.",
    body:
      "Agar foydalanuvchi Google'da attraksion, uzbekiston, project, loyiha, kanat yo'li yoki zipline deb qidorsa, sayt kompaniya to'liq sikl xizmat ko'rsatishini aniq ko'rsatishi kerak: konsepsiya, muhandislik, ishlab chiqarish, montaj, ishga tushirish va servis.",
    servicesTitle: 'Asosiy xizmatlar',
    services: [
      "Attraksion va turistik obyektlarni loyihalash",
      "Zipline, arqonli park va balandlik trassalari",
      "Kanat yo'li tizimlari va panoramali transport yechimlari",
      "Montaj, ishga tushirish va texnik xizmat",
    ],
  },
} as const;

const ProgressBar = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[100] will-change-transform shadow-[0_0_10px_rgba(132,204,22,0.5)]"
      style={{ scaleX }}
    />
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('uz');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [pdfModal, setPdfModal] = useState({ isOpen: false, url: '', title: '' });
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState({ isOpen: false, url: '', alt: '' });
  const [authModal, setAuthModal] = useState({ isOpen: false, url: '', title: '' });
  const { user, signInWithGoogle, signOut } = useAuth();
  const containerRef = useRef(null);
  const t = translations[lang];
  const seoCopy = SEO_COPY[lang];

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.01 && !isScrolled) setIsScrolled(true);
    if (latest <= 0.01 && isScrolled) setIsScrolled(false);
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Preload critical assets once
    const criticalAssets = [
      SITE_CONFIG.logo,
      SITE_CONFIG.hero.background
    ];
    
    criticalAssets.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    syncSeo(lang);
  }, [lang]);

  const handleOpenPdf = useCallback((url: string, title: string) => {
    // Extract ID and use preview format for better embedding
    let cleanUrl = url;
    const driveIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveIdMatch && driveIdMatch[1]) {
      cleanUrl = `https://drive.google.com/file/d/${driveIdMatch[1]}/preview`;
    }
    setPdfModal({ isOpen: true, url: cleanUrl, title });
  }, []);

  const handleAuthSignIn = useCallback(async () => {
    await signInWithGoogle();
    setPdfModal({ isOpen: true, url: authModal.url, title: authModal.title });
    setAuthModal({ ...authModal, isOpen: false });
  }, [signInWithGoogle, authModal]);

  const handleContinueAsGuest = useCallback(() => {
    setPdfModal({ isOpen: true, url: authModal.url, title: authModal.title });
    setAuthModal({ ...authModal, isOpen: false });
  }, [authModal]);

  const handleOrder = useCallback((product: any) => {
    setCatalogModalOpen(false);
    window.open('https://t.me/ExtremeConstruction', '_blank');
  }, []);

  const handleProjectInquiry = useCallback((project: any) => {
    window.open('https://t.me/ExtremeConstruction', '_blank');
  }, []);

  const handleOpenLightbox = useCallback((url: string, alt?: string) => {
    setLightbox({ isOpen: true, url, alt: alt || '' });
  }, []);

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <Preloader />
      
      <Suspense fallback={null}>
        <ContactModal 
          isOpen={contactModalOpen} 
          onClose={() => setContactModalOpen(false)} 
          lang={lang} 
        />
        <CatalogModal 
          isOpen={catalogModalOpen} 
          onClose={() => setCatalogModalOpen(false)} 
          lang={lang} 
          onOrder={handleOrder}
          onOpenLightbox={handleOpenLightbox}
        />
        <PdfModal 
          isOpen={pdfModal.isOpen} 
          onClose={() => setPdfModal({ ...pdfModal, isOpen: false })} 
          pdfUrl={pdfModal.url}
          title={pdfModal.title}
        />
        <Lightbox 
          isOpen={lightbox.isOpen} 
          onClose={() => setLightbox({ ...lightbox, isOpen: false })} 
          imageSrc={lightbox.url}
          alt={lightbox.alt}
        />
        <AuthModal 
          isOpen={authModal.isOpen} 
          onClose={() => setAuthModal({ ...authModal, isOpen: false })} 
          onSignIn={handleAuthSignIn}
          onContinueAsGuest={handleContinueAsGuest}
          lang={lang}
        />
      </Suspense>

      <Navbar 
        onOpenContact={() => setContactModalOpen(true)} 
        onOpenPdf={handleOpenPdf}
        lang={lang} 
        setLang={setLang} 
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        user={user}
        onSignOut={signOut}
      />

      <main ref={containerRef} className="font-sans bg-[#050505] selection:bg-white/20 selection:text-white relative overflow-x-hidden">
        {!isMobile && <ProgressBar scrollYProgress={scrollYProgress} />}
        
        <Hero 
          lang={lang} 
          isMobile={isMobile}
          onOpenMeeting={() => setContactModalOpen(true)} 
          onOpenLightbox={handleOpenLightbox}
          scrollYProgress={scrollYProgress}
        />
        
        <Marquee lang={lang} />

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 md:px-6 py-14 md:py-20"
        >
          <div className="max-w-6xl mx-auto rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-12">
            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-primary/80 mb-5">
              {seoCopy.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-4xl mb-6">
              {seoCopy.title}
            </h2>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-start">
              <div className="space-y-5 text-white/72 text-base md:text-lg leading-8">
                <p>{seoCopy.intro}</p>
                <p>{seoCopy.body}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-6 md:p-7">
                <h3 className="text-white text-lg md:text-xl font-medium mb-4">
                  {seoCopy.servicesTitle}
                </h3>
                <ul className="space-y-3 text-white/70">
                  {seoCopy.services.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Suspense fallback={<div className="h-96" />}>
            <CableCarSection lang={lang} />
          </Suspense>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Suspense fallback={<div className="h-96" />}>
            <VideoShowcase />
          </Suspense>
        </motion.div>
        
        <motion.section 
          id="portfolio" 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pt-10 md:pt-20 pb-20 md:pb-32 px-4 md:px-6 max-w-7xl mx-auto relative"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <h2 className="text-5xl sm:text-7xl md:text-9xl font-serif leading-[1.05] tracking-tighter text-white text-gradient">
                <TextReveal text={t.portfolio.title} />
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            {t.projects.map((project, i) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={i} 
                lang={lang} 
                onClick={() => handleOpenPdf("https://online.fliphtml5.com/Teacher6023/catolog-A4-DeTB/#p=13", t.nav.portfolio)}
                onInquiry={handleProjectInquiry}
                onOpenLightbox={handleOpenLightbox}
              />
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Suspense fallback={<div className="h-40" />}>
            <Stats lang={lang} />
          </Suspense>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Suspense fallback={<div className="h-96" />}>
            <WhyChooseUs onOpenContact={() => setContactModalOpen(true)} lang={lang} />
          </Suspense>
        </motion.div>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-24 md:py-40 bg-[#0A0A0A] relative overflow-hidden"
        >
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl sm:text-8xl md:text-[10rem] font-sans font-bold mb-12 md:mb-20 tracking-tighter text-white leading-[0.95] text-gradient">
                {t.cta.title} <br />
                <span className="italic text-white">{t.cta.titleAccent}</span>
              </h2>
              <p className="text-2xl md:text-4xl text-white/50 mb-16 md:mb-24 leading-relaxed font-light max-w-4xl mx-auto px-4">
                {t.cta.desc}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 px-4">
                <div className="flex flex-col gap-4 w-full sm:w-auto">
                  <motion.a 
                    href="tel:+998977049933"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-10 md:px-12 py-4 md:py-5 bg-primary text-black font-bold rounded-2xl shadow-2xl shadow-primary/20 flex items-center justify-center text-lg uppercase tracking-widest"
                  >
                    {t.cta.button}
                  </motion.a>
                </div>
                <motion.a 
                  href="tel:+998977049933"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all shadow-xl flex items-center justify-center text-lg uppercase tracking-widest"
                >
                  {t.nav.contact}
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {!isMobile && (
            <>
              <motion.div 
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] border border-white/5 rounded-full pointer-events-none"
              />
              <motion.div 
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] border border-white/5 rounded-full pointer-events-none"
              />
            </>
          )}
        </motion.section>

        <Suspense fallback={<div className="h-64 bg-[#050505]" />}>
          <Footer 
            lang={lang} 
            onOpenPdf={(url, title) => setPdfModal({ isOpen: true, url, title })}
          />
        </Suspense>
      </main>
    </MotionConfig>
  );
}
