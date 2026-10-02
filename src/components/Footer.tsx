import React from 'react';
import { ArrowUp, Sparkles, Heart, Lock, Crown } from 'lucide-react';
import { useOwner } from '../context/OwnerContext';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { isOwnerAuthenticated, isOwnerMode, openLoginModal } = useOwner();
  const { isAr } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#060608] border-t border-white/5 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <span className="font-display font-bold text-white text-base flex items-center gap-2">
            {isAr ? 'محمد مصطفى' : 'Mohamed Mostafa'}
            {isOwnerMode && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                OWNER
              </span>
            )}
          </span>
          <span className="text-zinc-500 font-mono text-[11px]">
            {isAr
              ? 'أخصائي تسويق رقمي & صانع محتوى بالذكاء الاصطناعي'
              : 'Digital Marketing Specialist & AI Content Creator'}
          </span>
          <span className="text-zinc-600 text-[10px] mt-1">
            Digital Marketing &bull; AI Content &bull; Video Editing &bull; Creative Strategy
          </span>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400 font-medium text-xs">
          <a href="#home" className="hover:text-amber-400 transition-colors">
            {isAr ? 'الرئيسية' : 'Home'}
          </a>
          <a href="#about" className="hover:text-amber-400 transition-colors">
            {isAr ? 'عني' : 'About'}
          </a>
          <a href="#services" className="hover:text-amber-400 transition-colors">
            {isAr ? 'الخدمات' : 'Services'}
          </a>
          <a href="#work" className="hover:text-amber-400 transition-colors">
            {isAr ? 'الأعمال' : 'Work'}
          </a>
          <a href="#skills" className="hover:text-amber-400 transition-colors">
            {isAr ? 'المهارات' : 'Skills'}
          </a>
          <a href="#process" className="hover:text-amber-400 transition-colors">
            {isAr ? 'المنهجية' : 'Process'}
          </a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">
            {isAr ? 'تواصل معي' : 'Contact'}
          </a>
        </div>

        {/* Back to top, copyright & Owner Portal Trigger */}
        <div className="flex items-center gap-3">
          {/* Discrete Owner Portal Login */}
          <button
            onClick={openLoginModal}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors cursor-pointer border ${
              isOwnerAuthenticated
                ? 'text-amber-400 bg-amber-500/10 border-amber-500/30 hover:bg-amber-500/20'
                : 'text-zinc-600 hover:text-zinc-400 border-white/5 hover:border-white/10'
            }`}
            title="Owner Portal (Mohamed Mostafa)"
          >
            {isOwnerAuthenticated ? (
              <>
                <Crown className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'بوابة المالك' : 'Owner'}</span>
              </>
            ) : (
              <>
                <Lock className="w-3 h-3 text-zinc-500" />
                <span>{isAr ? 'دخول المالك' : 'Admin'}</span>
              </>
            )}
          </button>

          <span className="text-zinc-600 hidden sm:inline">
            &copy; {new Date().getFullYear()} Mohamed Mostafa
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-amber-400/50 text-zinc-400 hover:text-white transition-all cursor-pointer shadow-lg"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Verified Google Drive Folders Row */}
        <div className="w-full pt-8 mt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <span className="text-zinc-500 uppercase tracking-widest text-[10px]">
            {isAr ? 'روابط مجلدات Google Drive الرسمية:' : 'VERIFIED GOOGLE DRIVE FOLDERS:'}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Master Drive
            </a>
            <span className="text-zinc-700">&bull;</span>
            <a
              href="https://drive.google.com/drive/folders/10e2orh2oRMlZ3jGFm5nyZukMMVKtj25A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              QAIM Folder
            </a>
            <span className="text-zinc-700">&bull;</span>
            <a
              href="https://drive.google.com/drive/folders/1zYaljKNwH5XvD5V_Irsfcas-FZ1MsHrq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              TAKAA Folder
            </a>
            <span className="text-zinc-700">&bull;</span>
            <a
              href="https://drive.google.com/drive/folders/1fyGsWAhwiEdt_qkshdB9eCzsX1ldZ4Sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              V7 Folder
            </a>
            <span className="text-zinc-700">&bull;</span>
            <a
              href="https://drive.google.com/drive/folders/19xsfCc4ThGEilh9GoEQSaQgo5TARk00C"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Baba Gah Folder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
