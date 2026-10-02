import React from 'react';
import { Crown, Plus, Sliders, Eye, EyeOff, LogOut, Shield } from 'lucide-react';
import { useOwner } from '../context/OwnerContext';
import { useLanguage } from '../context/LanguageContext';

interface TopAdminBarProps {
  onOpenAddModal: () => void;
  onOpenDashboard: () => void;
}

export const TopAdminBar: React.FC<TopAdminBarProps> = ({
  onOpenAddModal,
  onOpenDashboard,
}) => {
  const { isOwnerAuthenticated, isClientPreview, toggleClientPreview, logout } = useOwner();
  const { isAr } = useLanguage();

  if (!isOwnerAuthenticated) return null;

  return (
    <div className="sticky top-0 z-50 w-full bg-[#0d0d12]/95 backdrop-blur-md border-b border-amber-500/30 text-xs px-3 sm:px-6 py-2 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Identity Badge */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono font-bold text-[11px]">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden xs:inline">{isAr ? 'وضع المالك: محمد مصطفى' : 'Owner: Mohamed Mostafa'}</span>
            <span className="xs:hidden">Owner</span>
          </span>

          <span className="hidden md:inline text-[11px] text-zinc-400">
            {isClientPreview
              ? isAr
                ? '• معاينة كعميل (أزرار التعديل مخفية)'
                : '• Previewing as Client'
              : isAr
              ? '• وضع التحرير مفعل'
              : '• Edit Controls Active'}
          </span>
        </div>

        {/* Quick Admin Actions */}
        <div className="flex items-center gap-1.5">
          {!isClientPreview && (
            <>
              <button
                onClick={onOpenAddModal}
                className="px-2.5 sm:px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-sm"
                title={isAr ? 'إضافة مشروع جديد' : 'Add Project'}
              >
                <Plus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isAr ? 'مشروع جديد' : 'New Project'}</span>
              </button>

              <button
                onClick={onOpenDashboard}
                className="px-2.5 sm:px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-white/10 transition-colors flex items-center gap-1 cursor-pointer"
                title={isAr ? 'لوحة إدارة المشاريع' : 'CMS Dashboard'}
              >
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">CMS</span>
              </button>
            </>
          )}

          {/* Toggle Client Preview */}
          <button
            onClick={toggleClientPreview}
            className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1 cursor-pointer ${
              isClientPreview
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-zinc-800 text-zinc-300 border-white/10 hover:text-white'
            }`}
            title={
              isClientPreview
                ? isAr
                  ? 'العودة لوضع التحرير'
                  : 'Return to Edit Mode'
                : isAr
                ? 'معاينة الموقع كعميل'
                : 'Preview as Client'
            }
          >
            {isClientPreview ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">{isAr ? 'إنهاء المعاينة' : 'Exit Preview'}</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-zinc-400" />
                <span className="hidden sm:inline">{isAr ? 'معاينة كعميل' : 'Client View'}</span>
              </>
            )}
          </button>

          {/* Logout */}
          <button
            onClick={logout}
            className="p-1 sm:px-2 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs transition-colors flex items-center gap-1 cursor-pointer"
            title={isAr ? 'تسجيل الخروج من وضع المالك' : 'Logout Owner'}
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isAr ? 'خروج' : 'Logout'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
