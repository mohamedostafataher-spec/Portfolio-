import React, { useState } from 'react';
import { Lock, Key, ShieldCheck, X, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { useOwner } from '../context/OwnerContext';
import { useLanguage } from '../context/LanguageContext';

export const OwnerLoginModal: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal, login } = useOwner();
  const { isAr, t } = useLanguage();
  const [secret, setSecret] = useState('');
  const [error, setError] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(secret);
    if (!success) {
      setError(true);
    } else {
      setError(false);
      setSecret('');
    }
  };

  const handleQuickDemo = () => {
    login('2026');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="fixed inset-0" onClick={closeLoginModal} />

      <div className="relative w-full max-w-md bg-[#101014] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-left">
        {/* Close Button */}
        <button
          onClick={closeLoginModal}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/5 cursor-pointer transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-white">
              {isAr ? 'بوابة المالك — محمد مصطفى' : 'Owner Portal — Mohamed Mostafa'}
            </h3>
            <p className="text-xs text-zinc-400">
              {isAr
                ? 'إدارة المشاريع، إضافة أعمال جديدة، وتعديل المحتوى'
                : 'Project management, adding new case studies, and content editing'}
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 mb-5 leading-relaxed">
          {isAr
            ? 'هذه اللوحة مخصصة لمحمد مصطفى فقط. العملاء والزوار لا يمكنهم الوصول لأزرار الإضافة أو التعديل، لضمان مظهر احترافي ونقي للعميل.'
            : 'This portal is restricted to Mohamed Mostafa. Visiting clients only see the clean portfolio showcase without editing controls.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
              {isAr ? 'رمز المرور أو البريد الإلكتروني' : 'PIN Code or Email'}
            </label>
            <div className="relative">
              <input
                type="password"
                value={secret}
                onChange={(e) => {
                  setSecret(e.target.value);
                  if (error) setError(false);
                }}
                placeholder={isAr ? 'أدخل الرمز (مثال: 2026)' : 'Enter PIN (e.g. 2026)'}
                className={`w-full px-4 py-3 bg-zinc-900/90 border rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none transition-colors ${
                  error
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-white/10 focus:border-amber-400'
                }`}
                autoFocus
              />
              <Key className="w-4 h-4 text-zinc-500 absolute right-3.5 top-3.5" />
            </div>
            {error && (
              <div className="flex items-center gap-1.5 text-xs text-red-400 mt-2">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>
                  {isAr
                    ? 'الرمز غير صحيح. (الرمز الافتراضي: 2026)'
                    : 'Invalid code. Default PIN is 2026.'}
                </span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{isAr ? 'تأكيد ودخول لوحة المالك' : 'Unlock Owner Mode'}</span>
          </button>
        </form>

        {/* Quick Demo Assist */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-mono text-zinc-500">
            {isAr ? 'الرمز الافتراضي: 2026' : 'Default PIN: 2026'}
          </span>
          <button
            type="button"
            onClick={handleQuickDemo}
            className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 cursor-pointer"
          >
            {isAr ? 'دخول سريع تجريبي (2026)' : 'Quick Unlock (2026)'}
          </button>
        </div>
      </div>
    </div>
  );
};
