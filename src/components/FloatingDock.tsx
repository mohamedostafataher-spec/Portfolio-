import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Mail,
  FileText,
  Languages,
  ArrowUp,
  Lock,
  Crown,
  Share2,
  Check,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useOwner } from '../context/OwnerContext';

interface FloatingDockProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  onOpenResume,
  onOpenContact,
}) => {
  const { lang, toggleLanguage, isAr, t } = useLanguage();
  const { isOwnerAuthenticated, isOwnerMode, openLoginModal } = useOwner();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phone = '201110095403'; // Egyptian mobile format
    const message = isAr
      ? 'مرحباً أستاذ محمد، اطلعت على موقعك وأعمالك وأود مناقشة مشروع إعلاني / استراتيجية تسويق معكم.'
      : "Hi Mohamed, I saw your portfolio and would like to discuss an advertising campaign / marketing strategy.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Mohamed Mostafa | Digital Marketing & AI Content Creator',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // ignore
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Quick Actions Dock"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none"
    >
      {/* Floating Action Pill */}
      <div className="pointer-events-auto flex items-center gap-1.5 p-1.5 rounded-full bg-[#121218]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 hover:border-amber-500/40 transition-all duration-300">
        {/* WhatsApp Direct */}
        <button
          onClick={handleWhatsApp}
          className="p-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all cursor-pointer group relative"
          title={isAr ? 'تواصل عبر واتساب مباشرة' : 'Chat on WhatsApp'}
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="sr-only">WhatsApp</span>
        </button>

        {/* Email Direct */}
        <a
          href="mailto:mohamedostafataher@gmail.com?subject=Project%20Inquiry%20-%20Mohamed%20Mostafa"
          className="p-2.5 rounded-full bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/5 transition-all cursor-pointer group relative"
          title={isAr ? 'إرسال بريد إلكتروني' : 'Send Email'}
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
          <span className="sr-only">Email</span>
        </a>

        {/* CV / Resume */}
        <button
          onClick={onOpenResume}
          className="px-3 py-2 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
          title={isAr ? 'استعراض وتحميل السيرة الذاتية' : 'View / Download CV'}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{isAr ? 'CV' : 'CV'}</span>
        </button>

        {/* Language Toggle AR / EN */}
        <button
          onClick={toggleLanguage}
          className="px-2.5 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold border border-white/10 transition-all cursor-pointer flex items-center gap-1"
          title={isAr ? 'Switch to English' : 'التحويل للعربية'}
        >
          <Languages className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono">{lang === 'en' ? 'AR' : 'EN'}</span>
        </button>

        {/* Share Link */}
        <button
          onClick={handleShare}
          className="p-2.5 rounded-full bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 border border-white/5 transition-all cursor-pointer"
          title={copied ? (isAr ? 'تم نسخ الرابط!' : 'Link copied!') : (isAr ? 'مشاركة الموقع' : 'Share Portfolio')}
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
        </button>

        {/* Discrete Owner Mode Access (Shows Crown if unlocked, or Lock icon for Mohamed to login) */}
        <button
          onClick={openLoginModal}
          className={`p-2.5 rounded-full transition-all cursor-pointer border ${
            isOwnerAuthenticated
              ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 hover:bg-amber-500/30'
              : 'bg-zinc-900/60 text-zinc-500 hover:text-zinc-300 border-white/5'
          }`}
          title={
            isOwnerAuthenticated
              ? isAr
                ? 'وضع المالك مفعل'
                : 'Owner Mode Active'
              : isAr
              ? 'دخول المالك'
              : 'Owner Access'
          }
        >
          {isOwnerAuthenticated ? (
            <Crown className="w-4 h-4 text-amber-400" />
          ) : (
            <Lock className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/5 transition-all cursor-pointer animate-fade-in"
            title={isAr ? 'للأعلى' : 'Scroll to Top'}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </aside>
  );
};
