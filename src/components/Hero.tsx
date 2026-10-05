import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Sparkles,
  MessageCircle,
  Instagram,
  FolderGit2,
  Mail,
  BookOpen,
  Award,
  TrendingUp,
  Camera,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useAvatar } from '../context/AvatarContext';
import { useOwner } from '../context/OwnerContext';

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
  onOpenResume: () => void;
  onOpenFeaturedProject?: () => void;
  onOpenPdfDeck?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  onExploreWork,
  onOpenResume,
  onOpenPdfDeck,
}) => {
  const { isAr } = useLanguage();
  const { avatarUrl, updateAvatar, resetAvatar } = useAvatar();
  const { isOwnerMode } = useOwner();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const rolesEn = [
    'Digital Marketer',
    'Performance Media Buyer',
    'Creative Director',
    'Commercial Video Producer',
    'Growth & Funnel Strategist',
  ];

  const rolesAr = [
    'مسوق رقمي ومخطط حملات',
    'ميديا باير وإعلانات أداء',
    'مخرج إبداعي ومبتكر أفكار',
    'صانع فيديو وإعلانات تجارية',
    'مخطط نمو وتصميم مسارات الشراء',
  ];

  const roles = isAr ? rolesAr : rolesEn;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(timer);
  }, [roles.length]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const ok = await updateAvatar(file);
      if (ok) {
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
      e.target.value = '';
    }
  };

  const handleWhatsApp = () => {
    const phone = '201110095403';
    const message = isAr
      ? 'مرحباً أستاذ محمد، اطلعت على موقعك وأود مناقشة مشروع إعلاني / حملة تسويقية.'
      : 'Hi Mohamed, I saw your portfolio and would like to discuss a marketing campaign.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-32 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Hidden File Input for owner only */}
      {isOwnerMode && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      )}

      {/* Success Notification */}
      {uploadSuccess && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-black px-5 py-2.5 rounded-full font-bold shadow-2xl flex items-center gap-2 text-xs sm:text-sm animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{isAr ? 'تم تحديث صورتك بنجاح!' : 'Photo updated successfully!'}</span>
        </div>
      )}

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] md:w-[850px] h-[300px] sm:h-[450px] bg-gradient-to-b from-orange-500/15 via-amber-500/10 to-transparent blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* MOBILE TOP PORTRAIT: Preserves the exact photo with glowing frame */}
        <div className="flex lg:hidden flex-col items-center mb-6">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-500/30 to-orange-500/20 blur-md animate-pulse" />
            <div className="relative w-44 h-56 rounded-2xl overflow-hidden border-2 border-amber-500/60 p-1 bg-zinc-950 shadow-2xl">
              <img
                src={avatarUrl}
                alt="Mohamed Taher"
                className="w-full h-full object-cover object-top rounded-xl"
              />
              {/* Owner-only upload button */}
              {isOwnerMode && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-opacity">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-4 rounded-full bg-amber-500 text-black shadow-2xl cursor-pointer transform active:scale-90 transition-transform flex flex-col items-center gap-1"
                    title={isAr ? 'تحديث الصورة' : 'Update Photo'}
                  >
                    <Camera className="w-6 h-6" />
                    <span className="text-[9px] font-bold uppercase">{isAr ? 'تغيير' : 'Change'}</span>
                  </button>
                  <button
                    onClick={resetAvatar}
                    className="p-4 rounded-full bg-zinc-900/90 text-white border border-white/20 shadow-2xl cursor-pointer transform active:scale-90 transition-transform flex flex-col items-center gap-1"
                    title={isAr ? 'استعادة الأصلية' : 'Restore Original'}
                  >
                    <RefreshCw className="w-6 h-6" />
                    <span className="text-[9px] font-bold uppercase">{isAr ? 'الأصلية' : 'Reset'}</span>
                  </button>
                </div>
              )}
            </div>
            
            <div className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-black/90 border border-amber-500/50 text-[10px] font-mono font-bold text-amber-300 whitespace-nowrap shadow-md">
              DEPI Certified
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* TEXT & CTA COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right">
            
            {/* "Hello, It's Me" Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-mono font-bold mb-3 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? 'مرحباً، أنا' : "Hello, It's Me"}</span>
            </motion.div>

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-2"
            >
              {isAr ? 'محمد طاهر' : 'Mohamed Taher'}
            </motion.h1>

            {/* SUBTITLE: FULL OFFICIAL NAME */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xs sm:text-sm font-mono text-zinc-400 font-medium mb-3"
            >
              {isAr ? 'محمد مصطفى طاهر سالم' : 'Mohamed Mostafa Taher Salem'}
            </motion.p>

            {/* TYPEWRITER ROLE */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 flex-wrap"
            >
              <span className="text-zinc-400 font-mono text-lg sm:text-2xl">
                {isAr ? 'أنا' : "I'm a"}
              </span>
              <div className="relative inline-block min-w-[220px] sm:min-w-[300px] h-[34px] sm:h-[40px] overflow-hidden text-left rtl:text-right">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="inline-block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent font-black tracking-tight"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* MARKETING HOOK PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-zinc-300 text-sm sm:text-base max-w-xl leading-relaxed mb-6 font-normal"
            >
              {isAr
                ? 'أربط بين السرد الإعلاني الإبداعي وهندسة الأرقام والتسويق بالأداء. أصنع حملات متكاملة، إعلانات فيديو قصيرة، ومسارات شراء عالية العائد (ROAS) لنمو العلامات التجارية في السوق المصري والخليج.'
                : 'Bridging creative storytelling with performance marketing. I architect full-funnel ad campaigns, viral video commercials, and strategic brand positioning that scale revenues across the MENA region.'}
            </motion.p>

            {/* 4 ORANGE CIRCULAR SOCIAL ICONS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 mb-7"
            >
              <button
                onClick={handleWhatsApp}
                title="WhatsApp Direct"
                className="w-11 h-11 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 transition-all flex items-center justify-center cursor-pointer shadow-md transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
              </button>

              <a
                href="https://instagram.com/mohamedostafa5"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-11 h-11 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 transition-all flex items-center justify-center shadow-md transform hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Drive Master Vault"
                className="w-11 h-11 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 transition-all flex items-center justify-center shadow-md transform hover:scale-105"
              >
                <FolderGit2 className="w-5 h-5" />
              </a>

              <a
                href="mailto:mohamedostafataher@gmail.com"
                title="Email Mohamed"
                className="w-11 h-11 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 transition-all flex items-center justify-center shadow-md transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              {/* PRIMARY: My Portfolio */}
              <button
                onClick={onOpenPdfDeck || onExploreWork}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-sm sm:text-base transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105"
              >
                <BookOpen className="w-4 h-4 text-black" />
                <span>{isAr ? 'البورتفوليو والكتيب (My Portfolio)' : 'My Portfolio'}</span>
              </button>

              {/* SECONDARY: Download CV */}
              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-amber-400 hover:text-white font-bold text-sm sm:text-base border border-amber-500/30 hover:border-amber-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'السيرة الذاتية (CV)' : 'Download CV'}</span>
              </button>

              {/* TERTIARY: Work */}
              <button
                onClick={onExploreWork}
                className="px-5 py-3 rounded-full bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{isAr ? 'أحدث المشاريع' : 'Latest Projects'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </motion.div>

          </div>

          {/* DESKTOP RIGHT COLUMN: LARGE BRANDED PORTRAIT */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Outer Amber Glowing Rim */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/25 via-orange-500/15 to-transparent blur-2xl animate-pulse" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-300 opacity-80 blur-sm" />

              {/* Portrait Frame */}
              <div className="relative w-72 xl:w-80 aspect-[3/4] rounded-3xl overflow-hidden border-4 border-[#18181b] bg-[#121215] shadow-2xl p-1.5">
                <img
                  src={avatarUrl}
                  alt="Mohamed Mostafa Taher Salem"
                  className="w-full h-full object-cover object-top rounded-2xl"
                />
                
                {/* Owner-only upload button (Desktop) */}
                {isOwnerMode && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 shadow-xl"
                    >
                      <Camera className="w-5 h-5" />
                      <span>{isAr ? 'تغيير الصورة الشخصية' : 'Change Profile Photo'}</span>
                    </button>
                    <button
                      onClick={resetAvatar}
                      className="px-6 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold text-sm flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 border border-white/10 shadow-xl"
                    >
                      <RefreshCw className="w-5 h-5" />
                      <span>{isAr ? 'استعادة الصورة الأصلية' : 'Restore Original Photo'}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Floating Top Badge: DEPI Certified */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-3 -left-4 px-3.5 py-2 rounded-2xl bg-zinc-900/95 border border-amber-500/40 backdrop-blur-md shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left rtl:text-right">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">Accredited</span>
                  <span className="text-xs font-bold text-white block">DEPI Certified</span>
                </div>
              </motion.div>

              {/* Floating Bottom Badge: 5M+ Views */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-3 -right-4 px-3.5 py-2 rounded-2xl bg-zinc-900/95 border border-emerald-500/40 backdrop-blur-md shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-left rtl:text-right">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">Impact</span>
                  <span className="text-xs font-bold text-emerald-400 block">5M+ Views & ROAS</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

      </div>

      {/* Down Scroll Anchor */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="p-2 rounded-full text-zinc-500 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
