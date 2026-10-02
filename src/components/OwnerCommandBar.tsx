import React from 'react';
import { Crown, Plus, Sliders, Eye, EyeOff, LogOut, Sparkles } from 'lucide-react';
import { useOwner } from '../context/OwnerContext';
import { useLanguage } from '../context/LanguageContext';

interface OwnerCommandBarProps {
  onOpenAddModal: () => void;
  onOpenDashboard: () => void;
}

export const OwnerCommandBar: React.FC<OwnerCommandBarProps> = ({
  onOpenAddModal,
  onOpenDashboard,
}) => {
  const { isOwnerAuthenticated, isClientPreview, toggleClientPreview, logout } = useOwner();
  const { isAr } = useLanguage();

  if (!isOwnerAuthenticated) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl animate-fade-in-up">
      <div className="bg-[#121218]/95 backdrop-blur-xl border border-amber-500/40 rounded-2xl p-2.5 sm:p-3 shadow-2xl shadow-black/80 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
        {/* Status Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30">
          <Crown className="w-4 h-4 text-amber-400" />
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-amber-300 font-mono leading-none">
              {isAr ? 'وضع المالك: محمد مصطفى' : 'OWNER MODE: MOHAMED'}
            </span>
            <span className="text-[9px] text-zinc-400">
              {isClientPreview
                ? isAr
                  ? 'معاينة كعميل (الأزرار مخفية)'
                  : 'Client Preview Active'
                : isAr
                ? 'التحكم والتعديل متاح'
                : 'Editing Enabled'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {!isClientPreview && (
            <>
              <button
                onClick={onOpenAddModal}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer shadow-md"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{isAr ? 'إضافة مشروع' : 'Add Project'}</span>
              </button>

              <button
                onClick={onOpenDashboard}
                className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-white/10 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">{isAr ? 'لوحة CMS' : 'CMS'}</span>
              </button>
            </>
          )}

          {/* Client Preview Toggle */}
          <button
            onClick={toggleClientPreview}
            title={
              isClientPreview
                ? 'Back to Editing Mode'
                : 'Preview website as a visiting client sees it'
            }
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer border ${
              isClientPreview
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                : 'bg-zinc-800 text-zinc-300 border-white/10 hover:bg-zinc-700'
            }`}
          >
            {isClientPreview ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isAr ? 'إنهاء المعاينة' : 'Exit Preview'}</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-zinc-400" />
                <span className="hidden xs:inline">{isAr ? 'معاينة كعميل' : 'Preview Client'}</span>
              </>
            )}
          </button>

          {/* Logout button */}
          <button
            onClick={logout}
            title="Lock and switch back to Client View"
            className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-colors cursor-pointer"
            aria-label="Logout"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
