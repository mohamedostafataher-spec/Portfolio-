import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sliders, Languages, Crown, Lock, MessageCircle } from 'lucide-react';
import { useOwner } from '../context/OwnerContext';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenDashboard: () => void;
  onOpenPdfDeck?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onOpenResume,
  onOpenDashboard,
  onOpenPdfDeck,
}) => {
  const { isOwnerMode, isOwnerAuthenticated, openLoginModal } = useOwner();
  const { lang, toggleLanguage, isAr } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { nameEn: 'Cover', nameAr: 'الرئيسية', href: '#home' },
    { nameEn: '6 Skills', nameAr: 'المهارات', href: '#skills-portfolio' },
    { nameEn: 'Projects', nameAr: 'المشاريع', href: '#projects-breakdown' },
    { nameEn: 'Drive Vault', nameAr: 'أرشيف الدرايف', href: '#drive-vault' },
    { nameEn: 'Case Studies', nameAr: 'دراسات الحالة', href: '#work' },
    { nameEn: 'Content Lab', nameAr: 'مختبر المحتوى', href: '#creative-hub' },
    { nameEn: 'Workflow', nameAr: 'حلقة العمل', href: '#process' },
    { nameEn: 'Contact', nameAr: 'تواصل', href: '#contact' },
  ];

  const handleWhatsApp = () => {
    const phone = '201110095403';
    const message = isAr
      ? 'مرحباً أستاذ محمد، اطلعت على موقعك وأود مناقشة مشروع إعلاني / استراتيجية تسويق.'
      : 'Hi Mohamed, I saw your portfolio and would like to discuss a project.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 sm:py-3 bg-[#09090b]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#home"
          id="brand-logo"
          className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center font-display font-black text-base sm:text-lg text-amber-400 group-hover:border-amber-400/60 transition-colors shadow-inner">
            MM
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
              {isAr ? 'محمد مصطفى' : 'Mohamed Mostafa'}
              {isOwnerMode && (
                <Crown className="w-3.5 h-3.5 text-amber-400" title="Owner Mode Active" />
              )}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-zinc-400 tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {isAr ? 'تسويق رقمي & ذكاء اصطناعي' : 'Digital Marketing & AI'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/70 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.nameEn}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {isAr ? link.nameAr : link.nameEn}
            </a>
          ))}
          {onOpenPdfDeck && (
            <button
              onClick={onOpenPdfDeck}
              className="px-3 py-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full transition-all flex items-center gap-1.5 cursor-pointer font-mono"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? 'كتيب الـ PDF (25 صفحة)' : '25-Page PDF'}</span>
            </button>
          )}

          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 rounded-full transition-all flex items-center gap-1 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
        </nav>

        {/* Right CTA Area */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 sm:px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-amber-400 border border-white/10 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
            title={isAr ? 'Switch to English' : 'التحويل للعربية'}
          >
            <Languages className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono text-[11px]">{lang === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          {/* CMS Button for Owner */}
          {isOwnerMode && (
            <button
              onClick={onOpenDashboard}
              title="Open Portfolio CMS"
              className="p-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs flex items-center gap-1 cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline text-[11px] font-mono font-bold">CMS</span>
            </button>
          )}

          {/* Primary Let's Work Together CTA */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shadow-md shadow-amber-500/20 cursor-pointer transform hover:scale-[1.02]"
          >
            <span>{isAr ? 'لنعمل معاً' : 'Let’s Work Together'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean, Accessible, Non-blocking) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b]/98 border-b border-white/10 px-5 py-6 space-y-4 backdrop-blur-2xl animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.nameEn}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-300 hover:text-amber-400 py-1.5 border-b border-white/5 transition-colors"
              >
                {isAr ? link.nameAr : link.nameEn}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-left rtl:text-right text-sm font-semibold text-amber-400 hover:text-amber-300 py-2 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{isAr ? 'استعراض وتحميل السيرة الذاتية (CV)' : 'Download / View CV'}</span>
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <button
                onClick={handleWhatsApp}
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'واتساب مباشر' : 'WhatsApp'}</span>
              </button>

              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 px-4 rounded-xl bg-zinc-900 border border-white/10 text-xs font-bold text-zinc-300 flex items-center gap-1.5"
              >
                <Languages className="w-4 h-4 text-amber-400" />
                <span>{lang === 'en' ? 'عربي' : 'English'}</span>
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg"
            >
              <span>{isAr ? 'لنعمل معاً' : 'Let’s Work Together'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
