import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const QuickFloatingAction: React.FC = () => {
  const { isAr } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phone = '201110095403';
    const message = isAr
      ? 'مرحباً أستاذ محمد، اطلعت على موقعك وأعمالك وأود مناقشة مشروع إعلاني / استراتيجية تسويق.'
      : 'Hi Mohamed, I saw your portfolio and would like to discuss an advertising campaign / marketing strategy.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      aria-label="Quick Actions"
      className={`fixed bottom-5 z-40 flex flex-col items-center gap-2.5 ${
        isAr ? 'left-5 sm:left-6' : 'right-5 sm:right-6'
      }`}
    >
      {/* Scroll to Top (Only visible when user scrolled down) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 shadow-lg backdrop-blur-md flex items-center justify-center transition-all transform hover:scale-105 cursor-pointer"
          title={isAr ? 'للأعلى' : 'Scroll to top'}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Discrete, High-Converting WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="group relative w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        title={isAr ? 'تواصل فوري عبر واتساب' : 'Chat on WhatsApp'}
        aria-label="WhatsApp Direct"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        
        {/* Subtle pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        {/* Hover Tooltip (Desktop only) */}
        <span
          className={`hidden sm:group-hover:block absolute top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold shadow-xl border border-white/10 pointer-events-none transition-all ${
            isAr ? 'left-14' : 'right-14'
          }`}
        >
          {isAr ? 'محادثة مباشرة واتساب' : 'Quick WhatsApp Chat'}
        </span>
      </button>
    </div>
  );
};
