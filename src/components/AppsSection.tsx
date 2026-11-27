import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, Smartphone, Ship, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AppDef {
  id: string;
  name: string;
  taglineEn: string;
  taglineAr: string;
  descEn: string;
  descAr: string;
  shots: { src: string; alt: string }[];
  gallery: { src: string; alt: string }[];
  tags: string[];
  apkUrl: string;
  apkEn: string;
  apkAr: string;
  webUrl?: string;
  webEn?: string;
  webAr?: string;
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
}

const APPS: AppDef[] = [
  {
    id: 'nilo',
    name: 'Nilo (نيلو)',
    taglineEn: 'An Egyptian social app, built around the Nile',
    taglineAr: 'تطبيق اجتماعي مصري، وفكرته كلها حوالين النيل',
    descEn:
      'My own social app: you sail your boat on the Nile and send papyrus letters (بردية) to real people. It has stories, daily tasks, a home you grow, and a full Arabic-first interface. Built with Flutter and Supabase, shipped as an Android APK with a web version.',
    descAr:
      'تطبيقي الاجتماعي: بتركب مركبك في النيل وتبعت رسايل بردية لناس حقيقية. فيه قصص ومهام يومية وبيت بتطوره، وواجهة عربية بالكامل. مبني بـ Flutter و Supabase، ومتاح كـ APK لأندرويد ونسخة ويب.',
    shots: [
      { src: '/images/apps/nilo-nile.jpg', alt: 'Nilo - the Nile main screen' },
      { src: '/images/apps/nilo-home.jpg', alt: 'Nilo - my home and daily tasks' },
      { src: '/images/apps/nilo-stories.jpg', alt: 'Nilo - stories' },
    ],
    gallery: [
      { src: '/images/apps/gallery/nilo_ex1_nile.jpg', alt: 'Nilo feature - send a papyrus letter from the Nile' },
      { src: '/images/apps/gallery/nilo_ex2_home.jpg', alt: 'Nilo feature - my home and daily tasks' },
      { src: '/images/apps/gallery/nilo_ex3_stories.jpg', alt: 'Nilo feature - stories and chapters' },
      { src: '/images/apps/gallery/nilo_ex4_3d.jpg', alt: 'Nilo feature - 3D scenes of Egypt' },
    ],
    tags: ['Flutter', 'Supabase', 'Android', 'Arabic-first'],
    apkUrl: 'https://mohamedostafataher-spec.github.io/nilo-dl/',
    apkEn: 'Download the APK',
    apkAr: 'حمّل التطبيق',
    webUrl: 'https://nilo-eg.vercel.app',
    webEn: 'Web version',
    webAr: 'نسخة الويب',
    accent: '#e8b64c',
    icon: Ship,
  },
  {
    id: 'basma',
    name: 'Basma (بصمة)',
    taglineEn: 'Trusted home technicians, priced before work',
    taglineAr: 'صنايعية موثوقين، والسعر واضح قبل الشغل',
    descEn:
      'A home-maintenance app: electricity, plumbing, carpentry, AC, finishing and painting. The price is clear before any work starts, with live chat, real ratings and a room-design tool. Shipped as an Android APK.',
    descAr:
      'تطبيق صيانة وتشطيب للبيت: كهرباء وسباكة ونجارة وتكييف وتشطيب ودهانات. السعر واضح قبل الشغل، وفيه شات مباشر وتقييمات حقيقية وأداة تصميم أوضتك. متاح كـ APK لأندرويد.',
    shots: [
      { src: '/images/apps/basma-services.jpg', alt: 'Basma - services home screen' },
      { src: '/images/apps/basma-splash.jpg', alt: 'Basma - splash screen' },
    ],
    gallery: [
      { src: '/images/apps/gallery/basma_ex1_services.jpg', alt: 'Basma feature - maintenance and finishing services' },
      { src: '/images/apps/gallery/basma_ex2_price.jpg', alt: 'Basma feature - price before work' },
      { src: '/images/apps/gallery/basma_ex3_design.jpg', alt: 'Basma feature - design your room' },
    ],
    tags: ['Android', 'Services marketplace', 'Arabic-first'],
    apkUrl: 'https://mohamedostafataher-spec.github.io/basma-download/',
    apkEn: 'Download the APK',
    apkAr: 'حمّل التطبيق',
    accent: '#f59e0b',
    icon: Wrench,
  },
];

const PhoneCarousel: React.FC<{ shots: { src: string; alt: string }[]; accent: string; aspect?: string }> = ({ shots, accent, aspect = 'aspect-[576/1153]' }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % shots.length), 3500);
    return () => clearInterval(t);
  }, [shots.length]);

  return (
    <div className="relative mx-auto w-[180px] sm:w-[210px]">
      {/* glow */}
      <div
        className="absolute -inset-6 rounded-[3rem] blur-2xl opacity-25 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 40%, ${accent}, transparent 70%)` }}
      />
      <div className="relative rounded-[1.8rem] border border-white/15 bg-zinc-950 p-1.5 shadow-2xl shadow-black/60">
        <div className={`relative rounded-[1.5rem] overflow-hidden ${aspect} bg-zinc-900`}>
          {shots.map((shot, i) => (
            <motion.img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              loading="eager"
              draggable={false}
              initial={false}
              animate={{ opacity: i === idx ? 1 : 0, scale: i === idx ? 1 : 1.03 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-1.5 mt-3">
        {shots.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`screenshot ${i + 1}`}
            className="h-1.5 rounded-full transition-all cursor-pointer"
            style={{ width: i === idx ? 18 : 6, background: i === idx ? accent : '#3f3f46' }}
          />
        ))}
      </div>
    </div>
  );
};

export const AppsSection: React.FC = () => {
  const { isAr } = useLanguage();

  return (
    <section
      id="apps"
      dir={isAr ? 'rtl' : 'ltr'}
      className="py-20 sm:py-24 relative bg-[#07070a] border-t border-white/5 overflow-hidden"
      aria-labelledby="apps-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              <Smartphone className="w-4 h-4" />
              {isAr ? 'تطبيقات موبايل بنيتها ونزلتها' : 'APPS I DESIGNED & SHIPPED'}
            </span>
            <div className="h-px bg-amber-500/20 w-16" />
          </div>
          <h2 id="apps-title" className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {isAr ? 'تطبيقات حقيقية على موبايلك' : 'Real apps you can install today'}
          </h2>
          <p className="text-zinc-300 max-w-2xl mb-12 text-sm sm:text-base">
            {isAr
              ? 'مش تصاميم على ورق — تطبيقات شغالة، حمّلها وجربها بنفسك.'
              : 'Not mockups on a slide. Working apps — install them and try every screen yourself.'}
          </p>
        </motion.div>

        <div className="space-y-6">
          {APPS.map((app, i) => {
            const Icon = app.icon;
            return (
              <motion.article
                key={app.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.08 * i, ease: 'easeOut' }}
                className="rounded-3xl border border-white/8 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-6 sm:p-10 grid gap-8 md:grid-cols-[auto_1fr] items-center"
              >
                <PhoneCarousel shots={app.shots} accent={app.accent} aspect={app.id === 'basma' ? 'aspect-[576/1050]' : 'aspect-[576/1153]'} />

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center border"
                      style={{ background: `${app.accent}1a`, borderColor: `${app.accent}40`, color: app.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-extrabold text-white">{app.name}</h3>
                      <p className="text-sm" style={{ color: app.accent }}>
                        {isAr ? app.taglineAr : app.taglineEn}
                      </p>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-5 max-w-xl">
                    {isAr ? app.descAr : app.descEn}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.tags.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/5 text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={app.apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-black transition-transform hover:scale-105"
                      style={{ background: app.accent }}
                    >
                      <Download className="w-4 h-4" />
                      {isAr ? app.apkAr : app.apkEn}
                    </a>
                    {app.webUrl && (
                      <a
                        href={app.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm border border-white/15 text-zinc-100 hover:border-white/40 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {isAr ? app.webAr : app.webEn}
                      </a>
                    )}
                  </div>
                </div>

                {/* Per-feature explainer cards (real in-app screenshots) */}
                <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
                  {app.gallery.map((g, gi) => (
                    <motion.figure
                      key={g.src}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: 0.06 * gi, ease: 'easeOut' }}
                      className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900 group"
                    >
                      <img
                        src={g.src}
                        alt={g.alt}
                        loading="lazy"
                        className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </motion.figure>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
