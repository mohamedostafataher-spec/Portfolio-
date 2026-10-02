import React, { useState } from 'react';
import {
  Calculator,
  TrendingUp,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Eye,
  MousePointerClick,
  ShoppingBag,
  DollarSign,
  Layers,
  Film,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MarketingRoiCalculator: React.FC = () => {
  const { isAr } = useLanguage();

  const [industry, setIndustry] = useState<'fashion' | 'fnb' | 'furniture' | 'delivery'>('fashion');
  const [budget, setBudget] = useState<number>(15000); // In EGP

  // Industry Benchmarks based on Mohamed's verified case studies
  const industryData = {
    fashion: {
      nameAr: 'الأزياء والملابس (مثل قيم للأزياء QAIM)',
      nameEn: 'Fashion & Apparel (e.g. QAIM Menswear)',
      cpm: 35, // EGP per 1000 impressions
      hookRate: 0.28, // 28% hook rate on 3 looks reels
      ctr: 0.024, // 2.4% click-through rate
      convRate: 0.032, // 3.2% purchase conversion rate
      avgOrderValue: 850, // EGP
      recommendedMixAr: 'سلاسل كاروسيل (3 Looks + Checklist) + 2 ريلز استايلينج + فويس أوفر مصري + حملة Advantage+ للمبيعات',
      recommendedMixEn: '3-Frame Carousels + 2 Styling Reels + Egyptian VO + Meta Advantage+ Sales Campaign',
    },
    fnb: {
      nameAr: 'الأغذية والمشروبات (مثل تاكة، في سفن، بافلو برجر)',
      nameEn: 'Food & Beverage (e.g. TAKAA, V7, Buffalo)',
      cpm: 25,
      hookRate: 0.38, // 38% high food sizzle hook
      ctr: 0.031,
      convRate: 0.045,
      avgOrderValue: 220,
      recommendedMixAr: 'فيديوهات كاب كات ريلز ماكرو (Macro Sizzle) + بوسترات 4K بالـ AI + إعلانات إعادة استهداف اللمة والمناسبات',
      recommendedMixEn: 'Macro Sizzle CapCut Reels + 4K AI Key Visuals + Summer/Occasion Retargeting Ads',
    },
    furniture: {
      nameAr: 'الأثاث والمنتجات مرتفعة القيمة (High-Ticket Lead Gen)',
      nameEn: 'Furniture & High-Ticket Lead Gen',
      cpm: 55,
      hookRate: 0.22,
      ctr: 0.018,
      convRate: 0.085, // 8.5% lead conversion
      avgOrderValue: 12000,
      recommendedMixAr: 'إعلانات Meta ليدز مع ماسنجر / واتساب + فيديو جولة تصنيع + خفض تكلفة الليد بنسبة 35%',
      recommendedMixEn: 'Meta Instant Lead Forms + WhatsApp Funnel + Factory Tour Video + 35% CPL Reduction Strategy',
    },
    delivery: {
      nameAr: 'التطبيقات وخدمات التوصيل (مثل طلبات مصر)',
      nameEn: 'Apps & On-Demand Delivery (e.g. Talabat)',
      cpm: 30,
      hookRate: 0.32,
      ctr: 0.035,
      convRate: 0.06,
      avgOrderValue: 350,
      recommendedMixAr: 'إعلانات مواقف كوميدية مصرية سريعة + خصم الطلب الأول + استهداف جغرافي للأحياء السكنية',
      recommendedMixEn: 'Relatable Comedy Video Ads + First-Order Promo + Hyper-Local Geo-Targeting',
    },
  };

  const current = industryData[industry];

  // Calculated Metrics
  const estimatedImpressions = Math.round((budget / current.cpm) * 1000);
  const estimatedHookViews = Math.round(estimatedImpressions * current.hookRate);
  const estimatedClicks = Math.round(estimatedImpressions * current.ctr);
  const estimatedConversions = Math.round(estimatedClicks * current.convRate);
  const estimatedRevenue = estimatedConversions * current.avgOrderValue;
  const estimatedRoas = budget > 0 ? (estimatedRevenue / budget).toFixed(1) : '0';

  const handleLaunchWhatsApp = () => {
    const phone = '201110095403';
    const text = isAr
      ? `مرحباً أستاذ محمد، قمت بحساب خطة تسويقية لمجال (${current.nameAr}) بميزانية مقترحة (${budget.toLocaleString()} جنيه)، وأود مناقشة تنفيذ هذه الخطة معك.`
      : `Hi Mohamed, I used your Marketing Funnel Calculator for (${current.nameEn}) with a budget of (${budget.toLocaleString()} EGP). Let's discuss launching this campaign!`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="roi-calculator" className="py-24 relative bg-[#060608] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE FUNNEL ESTIMATOR</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr
              ? 'محاكي مسار الحملة التسويقية والعائد المتوقع'
              : 'Interactive Marketing Funnel & ROI Estimator'}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            {isAr
              ? 'أداة تفاعلية مبنية على نموذج SOSTAC ومسار التحويل (Discover → Imagine → Verify → Order) لتقدير نتائج ميزانيتك الإعلانية بواقعية.'
              : 'Estimate your realistic funnel benchmarks and expected ROAS based on Mohamed’s tested SOSTAC performance frameworks.'}
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-900/60 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {/* Controls: Industry + Budget Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-white/10">
            {/* Industry Selector */}
            <div className="lg:col-span-6 space-y-3">
              <label className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block">
                {isAr ? '01 · اختر مجال عمل علامتك التجارية:' : '01 · Select Brand Industry:'}
              </label>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: 'fashion', labelAr: 'أزياء وملابس', labelEn: 'Fashion & Apparel' },
                  { key: 'fnb', labelAr: 'أغذية ومشروبات', labelEn: 'F&B & Restaurants' },
                  { key: 'furniture', labelAr: 'أثاث ومنتجات فاخرة', labelEn: 'High-Ticket & Leads' },
                  { key: 'delivery', labelAr: 'تطبيقات وتوصيل', labelEn: 'Apps & Delivery' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setIndustry(item.key as any)}
                    className={`p-3 rounded-2xl text-xs font-bold transition-all text-left rtl:text-right cursor-pointer ${
                      industry === item.key
                        ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                        : 'bg-zinc-950/80 text-zinc-300 hover:text-white border border-white/5'
                    }`}
                  >
                    {isAr ? item.labelAr : item.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Budget Slider */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  {isAr ? '02 · الميزانية الإعلانية الشهرية المقترحة:' : '02 · Estimated Monthly Budget:'}
                </label>
                <span className="font-mono text-base font-extrabold text-white bg-black/60 px-3 py-1 rounded-xl border border-white/10">
                  {budget.toLocaleString()} EGP
                </span>
              </div>

              <input
                type="range"
                min="5000"
                max="100000"
                step="2500"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-zinc-950 rounded-lg cursor-pointer"
              />

              <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                <span>5,000 EGP</span>
                <span>50,000 EGP</span>
                <span>100,000 EGP</span>
              </div>
            </div>
          </div>

          {/* 4 Funnel Stages Visualization (PDF Page 12) */}
          <div className="pt-8 space-y-6">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest text-center">
              {isAr ? 'المسار المرحلي المتوقع (PROPOSED FUNNEL STAGES)' : 'ESTIMATED FUNNEL METRICS'}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Funnel 1: Discover */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/5 space-y-2 text-center">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">01 · DISCOVER (REACH)</span>
                <div className="text-xl sm:text-2xl font-mono font-black text-white">
                  {estimatedImpressions.toLocaleString()}
                </div>
                <p className="text-[11px] text-zinc-400">
                  {isAr ? 'مرات الظهور والوصول الأولي' : 'Initial Impressions & Brand Reach'}
                </p>
              </div>

              {/* Funnel 2: Imagine (Hook) */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/5 space-y-2 text-center">
                <span className="text-[10px] font-mono text-amber-400 uppercase">02 · IMAGINE (HOOKED)</span>
                <div className="text-xl sm:text-2xl font-mono font-black text-amber-300">
                  {estimatedHookViews.toLocaleString()}
                </div>
                <p className="text-[11px] text-zinc-400">
                  {isAr ? 'مشاهدات مهتمة تخطت أول 3 ثوانٍ' : 'Qualified 3s Hook Video Views'}
                </p>
              </div>

              {/* Funnel 3: Verify (Clicks) */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/5 space-y-2 text-center">
                <span className="text-[10px] font-mono text-blue-400 uppercase">03 · VERIFY (VISITS)</span>
                <div className="text-xl sm:text-2xl font-mono font-black text-blue-300">
                  {estimatedClicks.toLocaleString()}
                </div>
                <p className="text-[11px] text-zinc-400">
                  {isAr ? 'زيارات المتجر وفحص التفاصيل' : 'Store & Product Page Visits'}
                </p>
              </div>

              {/* Funnel 4: Order (Conversions) */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-emerald-500/30 space-y-2 text-center bg-gradient-to-b from-emerald-500/5 to-transparent">
                <span className="text-[10px] font-mono text-emerald-400 uppercase">04 · ORDER (CONVERSIONS)</span>
                <div className="text-xl sm:text-2xl font-mono font-black text-emerald-300">
                  {estimatedConversions.toLocaleString()}
                </div>
                <p className="text-[11px] text-zinc-400">
                  {isAr ? 'طلبات مكتملة / عملاء محتملون' : 'Purchases / Qualified Leads'}
                </p>
              </div>
            </div>

            {/* Estimated ROAS & Revenue Summary */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900 to-emerald-500/10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase font-bold block mb-1">
                  RECOMMENDED CREATIVE MIX (المزيج الإبداعي المقترح)
                </span>
                <p className="text-xs sm:text-sm text-zinc-200">
                  {isAr ? current.recommendedMixAr : current.recommendedMixEn}
                </p>
              </div>

              <div className="flex items-center gap-6 shrink-0">
                <div className="text-right rtl:text-left">
                  <div className="text-[10px] text-amber-400 font-mono font-bold tracking-wider uppercase flex items-center gap-1 justify-end rtl:justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>ILLUSTRATIVE ESTIMATE</span>
                  </div>
                  <div className="text-2xl font-mono font-black text-emerald-400">
                    ~{estimatedRoas}x ROAS
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    {isAr ? 'تقدير استرشادي وفق معايير السوق' : 'Planning benchmark only'}
                  </div>
                </div>

                <button
                  onClick={handleLaunchWhatsApp}
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{isAr ? 'ابدأ الخطة عبر واتساب' : 'Launch with Mohamed'}</span>
                </button>
              </div>
            </div>

            {/* Scope / Audit Note */}
            <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 text-[11px] font-mono text-zinc-500 text-center">
              {isAr
                ? 'ملاحظة الشفافية: هذا النموذج مقترح لأغراض التخطيط الاستراتيجي ومسار التحويل (Discover → Imagine → Verify → Order). الأرقام تقديرات استرشادية وليست نتائج حملات منشورة.'
                : 'Transparency note: Proposed measurement framework for planning. Metrics are illustrative benchmarks based on market data, not verified account results.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
