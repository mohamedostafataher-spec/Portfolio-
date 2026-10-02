import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Trophy,
  CheckCircle2,
  Calendar,
  Sparkles,
  Award,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const EducationExperience: React.FC = () => {
  const { isAr } = useLanguage();

  const achievements = [
    {
      en: 'Built a growing portfolio of AI-powered advertising concepts.',
      ar: 'بناء بورتفوليو متنامٍ من المفاهيم الإعلانية المتطورة بالذكاء الاصطناعي.',
    },
    {
      en: 'Developed cinematic commercial concepts for major brands (Spiro Spathis, Baba Geh, Talabat, Buffalo Burger, Qaim).',
      ar: 'تطوير مفاهيم إعلانات تجارية سينمائية لكبرى العلامات والمشاريع (سبيرو سباتس، بابا جه، طلبات، بافلو برجر، قَيَم).',
    },
    {
      en: 'Applied digital marketing frameworks (SCQA, Hook → Body → CTA) to creative content.',
      ar: 'تطبيق أطر التسويق الرقمي العملية (SCQA، خطافات الانتباه، والدعوة للإجراء) على صناعة المحتوى.',
    },
    {
      en: 'Developed AI-assisted video production workflows that compress turnarounds to 48 hours.',
      ar: 'ابتكار مسارات عمل لإنتاج الفيديو بالذكاء الاصطناعي تختصر زمن التنفيذ إلى 48 ساعة.',
    },
    {
      en: 'Continuously learning and expanding digital marketing and creative production skills.',
      ar: 'التطوير المستمر واكتساب مهارات متقدمة في التسويق الرقمي والإنتاج الإبداعي الحديث.',
    },
  ];

  return (
    <div className="space-y-0">
      {/* 10 — EDUCATION */}
      <section id="education" className="py-20 relative bg-[#09090b] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              {isAr ? '10 — التعليم والتدريب' : '10 — EDUCATION'}
            </span>
            <div className="h-px bg-amber-500/20 w-16" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {isAr ? 'التعليم والتدريب الأكاديمي' : 'Education & Training'}
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2">
                {isAr
                  ? 'الأساس الأكاديمي والبرامج التدريبية المعتمدة في التسويق الرقمي والوسائط الإبداعية.'
                  : 'Academic foundation and professional specialized training in digital marketing and creative media.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* University */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/20 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                    2020 — 2024
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/80 block mb-1">
                  {isAr ? 'التعليم الجامعي' : 'University Degree'}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                  {isAr ? 'كلية التجارة وإدارة الأعمال' : 'Faculty of Commerce & Business'}
                </h3>
                <p className="text-sm font-medium text-amber-300 mb-3">
                  {isAr ? 'بكالوريوس نظم المعلومات الإدارية (MIS)' : 'Bachelor of Management Information Systems (MIS)'}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {isAr
                    ? 'دراسة العمليات التجارية، التحليل الرقمي للبيانات، إدارة النظم، والتخطيط الاستراتيجي للأعمال.'
                    : 'Business systems analysis, data management, digital business processes, and strategic marketing foundations.'}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-zinc-500 font-mono">
                {isAr ? 'أساس أكاديمي وتحليلي قوي' : 'Analytical & Business Foundation'}
              </div>
            </div>

            {/* Specialized Training */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/20 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    2024 — 2026
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/80 block mb-1">
                  {isAr ? 'التدريب العملي والاحترافي' : 'Professional Training'}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                  {isAr ? 'تدريب التسويق الرقمي وهندسة الـ AI' : 'Digital Marketing & AI Creation Training'}
                </h3>
                <p className="text-sm font-medium text-amber-300 mb-3">
                  {isAr ? 'برامج وشهادات Google و HubSpot المتخصصة' : 'Google & HubSpot Professional Certifications'}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {isAr
                    ? 'تدريب مكثف على استهداف الجماهير، بناء ركائز المحتوى (Content Pillars)، مسارات العمل التوليدية (Prompting)، ومونتاج الإعلانات.'
                    : 'Intensive practical training in customer personas, content pillars, prompt engineering workflows, and high-retention video production.'}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-amber-400/80 font-mono">
                {isAr ? 'شهادات وتدريبات مستمرة' : 'Continuously Certified & Updated'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — EXPERIENCE */}
      <section id="experience" className="py-20 relative bg-[#09090b] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              {isAr ? '11 — المشاريع والخبرة العملية' : '11 — EXPERIENCE'}
            </span>
            <div className="h-px bg-amber-500/20 w-16" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {isAr ? 'المشاريع الإبداعية والتدريب العملي' : 'Creative Projects & Training'}
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2">
                {isAr
                  ? 'مشاريع ومفاهيم إعلانية حقيقية تم بناؤها وتطبيقها وفق أعلى معايير الصناعة والتسويق الحديث.'
                  : 'Practical commercial concepts and marketing frameworks built with rigorous industry standards.'}
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-500">
              {isAr ? '[ شفافية 100% — لا خبرات وهمية ]' : '[ 100% Real Work — Zero Fake Roles ]'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Advertising Projects */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/20 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono">
                  {isAr ? 'مشاريع إعلانات الذكاء الاصطناعي' : 'AI Advertising Projects'}
                </span>
                <span className="text-xs text-zinc-500 font-mono">Spec &amp; Brand Work</span>
              </div>

              <h3 className="font-display text-xl font-bold text-white">
                {isAr
                  ? 'مفاهيم إعلانية متكاملة لكبرى العلامات التجارية'
                  : 'Cinematic Advertising Concepts for Major Brands'}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {isAr
                  ? 'تطوير مفاهيم إعلانات تجارية سينمائية متكاملة لبراندات ومشاريع تشمل سبيرو سباتس (Spiro Spathis)، بابا جه (Baba Geh)، طلبات (Talabat)، بافلو برجر (Buffalo Burger)، وبراند الأزياء قَيَم (Qaim).'
                  : 'Developed advertising concepts for brands including Spiro Spathis, Baba Geh, Talabat, Buffalo Burger and Qaim as creative commercial projects.'}
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isAr ? 'كتابة السكربتات بالعامية المصرية وتوجيه التعليق الصوتي' : 'Colloquial Egyptian scriptwriting & voiceover direction'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isAr ? 'توليد لقطات سينمائية متناسقة بالذكاء الاصطناعي' : 'Consistent multi-scene AI video and product visual generation'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isAr ? 'المونتاج والهندسة الصوتية في CapCut' : 'Precision editing, dynamic sound design, and color grading'}</span>
                </div>
              </div>
            </div>

            {/* Digital Marketing Projects */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/20 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono">
                  {isAr ? 'مشاريع استراتيجيات التسويق' : 'Digital Marketing Projects'}
                </span>
                <span className="text-xs text-zinc-500 font-mono">Applied Strategy</span>
              </div>

              <h3 className="font-display text-xl font-bold text-white">
                {isAr
                  ? 'تطبيق النماذج التسويقية وتحليل الجماهير'
                  : 'Applied Digital Marketing & Content Strategy Frameworks'}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {isAr
                  ? 'تطبيق المفاهيم التسويقية المتقدمة: استهداف الجماهير، ركائز المحتوى (Content Pillars)، أطر السرد القصصي (SCQA)، وهندسة خطافات الانتباه (Hook → Body → CTA).'
                  : 'Applied digital marketing concepts including audience targeting, content pillars, storytelling frameworks and CTAs.'}
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isAr ? 'هندسة رحلة العميل وبناء الـ Buyer Personas' : 'Customer journey mapping & ideal persona profiling'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isAr ? 'ربط جودة الفيديو بنية الشراء والتحويل' : 'Aligning high-retention video hooks with business conversion'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isAr ? 'جاهز للتوسع مع أول عميل حر أو فرصة عمل' : 'Expanding with incoming client partnerships and commercial launches'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 — ACHIEVEMENTS */}
      <section id="achievements" className="py-20 relative bg-[#09090b] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              {isAr ? '12 — أبرز الإنجازات' : '12 — ACHIEVEMENTS'}
            </span>
            <div className="h-px bg-amber-500/20 w-16" />
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-amber-400" />
                  {isAr ? 'الإنجازات والمحطات البارزة' : 'Achievements'}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                  {isAr
                    ? 'محطات حقيقية في بناء المهارات، تطوير خطوط الإنتاج بالذكاء الاصطناعي، وإنشاء حملات إعلانية متكاملة.'
                    : 'Milestones across generative media workflows, commercial spec advertising, and digital marketing execution.'}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-mono bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isAr ? 'تطور متسارع ومستمر' : 'High Velocity Growth'}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-zinc-900/70 border border-white/5 flex items-start gap-3 hover:border-amber-500/30 transition-colors"
                >
                  <span className="font-mono text-xs font-bold text-amber-400 shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {isAr ? item.ar : item.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
