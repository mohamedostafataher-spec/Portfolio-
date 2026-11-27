import React, { useState } from 'react';
import { Menu, X, FileText, Sliders, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useOwner } from '../context/OwnerContext';

interface PortfolioHeaderProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenDashboard: () => void;
}

export const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({
  onOpenContact,
  onOpenResume,
  onOpenDashboard,
}) => {
  const { isAr, toggleLanguage, lang } = useLanguage();
  const { isOwnerMode } = useOwner();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { nameEn: 'Work', nameAr: 'المشاريع', href: '#work' },
    { nameEn: 'About', nameAr: 'عن محمد', href: '#about' },
    { nameEn: 'Services', nameAr: 'الخدمات', href: '#services' },
    { nameEn: 'Apps', nameAr: 'تطبيقاتي', href: '#apps' },
    { nameEn: 'Live', nameAr: 'مشاريع شغالة', href: '#live-projects' },
    { nameEn: 'Contact', nameAr: 'تواصل', href: '#contact' },
  ];

  return (
    <header className="py-4 lg:py-6 border-b border-white/10 bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center lg:mb-6">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-bold text-zinc-300 flex items-center gap-1.5"
          >
            <Languages className="w-4 h-4 text-amber-400" />
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          {isOwnerMode && (
            <button
              onClick={onOpenDashboard}
              className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs flex items-center gap-1"
            >
              <Sliders className="w-4 h-4" />
              <span className="hidden sm:inline">CMS</span>
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 lg:hidden text-zinc-200" aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className="hidden lg:flex justify-center gap-8 text-base font-bold text-zinc-300">
          {navLinks.map((link) => (
            <a key={link.nameEn} href={link.href} className="hover:text-amber-400 transition-colors">
              {isAr ? link.nameAr : link.nameEn}
            </a>
          ))}
          <button onClick={onOpenResume} className="text-amber-400 hover:text-amber-300 transition-colors">
            CV
          </button>
        </nav>
        
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
             {navLinks.map((link) => (
              <a key={link.nameEn} href={link.href} onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-semibold text-zinc-200 hover:text-amber-400">
                {isAr ? link.nameAr : link.nameEn}
              </a>
            ))}
            <button onClick={() => { setMobileMenuOpen(false); onOpenResume(); }} className="py-2 text-lg text-left font-semibold text-amber-400">CV</button>
            <button onClick={() => { setMobileMenuOpen(false); onOpenContact(); }} className="mt-2 py-3 text-lg bg-amber-500 rounded-xl text-black font-bold">
              {isAr ? 'تواصل' : 'Contact'}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
