import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  ArrowUpRight,
  Copy,
  Check,
  Phone,
  Linkedin,
  Sparkles,
  MessageCircle,
  MapPin,
  Clock,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  initialServiceOrProject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceOrProject,
}) => {
  const { isAr } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState(
    initialServiceOrProject || 'Performance Marketing / Media Buying'
  );
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceOrProject) {
      setFormService(initialServiceOrProject);
    }
  }, [initialServiceOrProject]);

  const myEmail = 'mohamedostafataher@gmail.com';
  const whatsappNumber = '201110095403';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleWhatsAppDirect = () => {
    const text = isAr
      ? `مرحباً أستاذ محمد، أنا ${formName || 'عميل محتمل'}${formPhone ? ` (${formPhone})` : ''}. أود التواصل معك لمناقشة مشروع: ${formService}.\n${formMessage ? `تفاصيل: ${formMessage}` : ''}`
      : `Hi Mohamed, I'm ${formName || 'a potential client'}${formPhone ? ` (${formPhone})` : ''}. I'd like to discuss a project regarding: ${formService}.\n${formMessage ? `Details: ${formMessage}` : ''}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Project Inquiry: ${formService} - ${formName}`);
    const body = encodeURIComponent(
      `Hi Mohamed,\n\nMy name is ${formName} (${formEmail}).\nPhone/WhatsApp: ${formPhone || 'Not provided'}\n\nI'm reaching out regarding: ${formService}\n\nProject details:\n${formMessage}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
  };

  const serviceOptions = [
    { en: 'Digital Marketing & Strategy', ar: 'استراتيجيات التسويق الرقمي' },
    { en: 'AI Commercials & Generative Video', ar: 'إعلانات الذكاء الاصطناعي' },
    { en: 'Creative Video Editing & Reels', ar: 'مونتاج الريلز والفيديوهات' },
    { en: 'Creative Direction & Scripts', ar: 'الإشراف الإبداعي والسكربتات' },
    { en: 'General Inquiry / Consultation', ar: 'استشارة تسويقية عامة' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-28 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            {isAr ? 'تواصل معي • CONTACT' : 'CONTACT'}
          </span>
          <div className="h-px bg-amber-500/20 w-12 sm:w-16" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] sm:text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2">
                Digital marketing · creative content · AI product stories
              </span>
              <h2 className="font-display text-2xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight px-0.5">
                {isAr ? (
                  <>
                    فلنتحدث عن{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                      مشروعك الإعلاني القادم.
                    </span>
                  </>
                ) : (
                  <>
                    Let’s talk about{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                      the next brief.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-zinc-300 text-xs sm:text-base mt-4 leading-relaxed">
                {isAr
                  ? 'متاح للمشاريع المستقلة والاستشارات التسويقية والتعاون مع الوكالات والعلامات التجارية.'
                  : 'Available for freelance projects, marketing consulting, and brand collaborations.'}
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Instagram Card from PDF Page 21 */}
              <a
                href="https://www.instagram.com/mohamedostafa5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-amber-500/10 hover:border-pink-500/40 border border-white/10 text-white flex items-center justify-between transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-amber-500 text-white flex items-center justify-center font-bold shadow-lg">
                    <Linkedin className="w-5 h-5 hidden" />
                    <span className="text-sm font-bold">IG</span>
                  </div>
                  <div className="text-left rtl:text-right">
                    <div className="text-xs text-zinc-400">Instagram Official</div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-300">
                      @mohamedostafa5
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* WhatsApp Fast Channel */}
              <button
                onClick={handleWhatsAppDirect}
                className="w-full p-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-between transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-black flex items-center justify-center font-bold">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-left rtl:text-right">
                    <div className="text-xs text-zinc-400">WhatsApp</div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-300">
                      +20 111 009 5403
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left rtl:text-right">
                    <div className="text-xs text-zinc-400">Email</div>
                    <a
                      href={`mailto:${myEmail}`}
                      className="text-xs sm:text-sm font-semibold text-zinc-200 hover:text-amber-400 transition-colors break-all"
                    >
                      {myEmail}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn & Instagram Channels */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-amber-500/30 flex items-center justify-between text-zinc-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <Linkedin className="w-4 h-4 text-amber-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-amber-500/30 flex items-center justify-between text-zinc-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Instagram</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                </a>
              </div>

              {/* Location & Response Time */}
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 flex items-center gap-2 text-zinc-400">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{isAr ? 'القاهرة & عن بُعد' : 'Cairo & Remote'}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 flex items-center gap-2 text-zinc-400">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isAr ? 'رد خلال 24 ساعة' : 'Sub-24h reply'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl shadow-2xl">
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {isAr ? 'إرسال تفاصيل المشروع' : 'Send Project Brief'}
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                {isAr
                  ? 'املأ النموذج وسأتواصل معك مباشرة لمناقشة التفاصيل وخطة التنفيذ.'
                  : 'Fill out this quick brief and I will get back to you with insights and next steps.'}
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Service Selector Pills */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    {isAr ? 'الخدمة المطلوبة:' : 'Interested Service:'}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((opt, idx) => {
                      const label = isAr ? opt.ar : opt.en;
                      const isSelected = formService === label || formService === opt.en;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormService(label)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-500 text-black font-bold border-amber-500'
                              : 'bg-zinc-800/80 text-zinc-300 border-white/5 hover:border-amber-500/30'
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      {isAr ? 'الاسم أو الشركة *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder={isAr ? 'مثال: أحمد رجب' : 'e.g. Sarah Jenkins'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-800/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-800/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      {isAr ? 'رقم الهاتف / واتساب' : 'Mobile / WhatsApp'}
                    </label>
                    <input
                      type="tel"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="+20 1..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-800/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    {isAr ? 'تفاصيل الفكرة أو المشروع' : 'Project Details & Goals'}
                  </label>
                  <textarea
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder={
                      isAr
                        ? 'أخبرني عن المنتج، الجمهور المستهدف، الموعد التقريبي، أو أي أفكار أولية...'
                        : 'Tell me about the brand, target audience, timeline, or key vision...'
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer transform hover:scale-[1.01]"
                  >
                    <span>{isAr ? 'ابدأ مشروعك الإعلاني →' : 'Start a Project →'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isAr ? 'واتساب مباشر' : 'Quick WhatsApp'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
