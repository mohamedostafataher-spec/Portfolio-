import React from 'react';
import { motion } from 'motion/react';
import { Play, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Short {
  id: string;
  titleEn: string;
  titleAr: string;
}

// Real shorts published on youtube.com/@mohamedmostafacreative
const SHORTS: Short[] = [
  {
    id: '2CrMqa8mIkQ',
    titleEn: 'AI ad for a dental clinic - how I made it',
    titleAr: 'إزاي قدرت أعمل إعلان عيادة أسنان بالـ AI؟ 🦷',
  },
  {
    id: 'mfFctcyihjI',
    titleEn: 'NURA Serum - 3 skincare ads made with AI',
    titleAr: 'NURA Serum - ٣ إعلانات سكين كير بالـ AI',
  },
  {
    id: 'WVn0VMNMWxU',
    titleEn: 'AI turns real estate into cinematic scenes',
    titleAr: 'إزاي الـ AI بيحوّل العقارات لمشاهد سينمائية؟ 🌊',
  },
  {
    id: '1ELjeSZhUEM',
    titleEn: 'A father-and-son story: "Tomorrow"... until it was too late',
    titleAr: 'قاله «بكرة»… لحد ما فات الأوان 💔 قصة أب وابنه',
  },
  {
    id: '8BU3iSTRrPs',
    titleEn: 'No easy road - but there is a road that gets there',
    titleAr: 'مفيش طريق سهل، فيه طريق بيوصّل 💛',
  },
  {
    id: '6wTiyELiRf8',
    titleEn: 'Will Zein manage to say "Samaka"? A kids story',
    titleAr: 'هل زين هيقدر يقول «سمكة»؟ قصة أطفال',
  },
];

export const ChannelWorksSection: React.FC = () => {
  const { isAr } = useLanguage();

  return (
    <section
      id="channel-works"
      dir={isAr ? 'rtl' : 'ltr'}
      className="py-20 relative border-t border-white/5 overflow-hidden"
      aria-labelledby="channel-works-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
              <Youtube className="w-4 h-4" />
              {isAr ? 'من قناتي على يوتيوب' : 'FROM MY YOUTUBE CHANNEL'}
            </span>
            <div className="h-px bg-red-500/20 w-16" />
          </div>
          <h2 id="channel-works-title" className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {isAr ? 'أحدث الشغل على القناة' : 'Latest work on the channel'}
          </h2>
          <p className="text-zinc-300 max-w-2xl mb-10 text-sm sm:text-base">
            {isAr
              ? 'إعلانات وقصص قصيرة منشورة فعلاً على قناتي — دوس على أي واحدة وشوفها.'
              : 'Ads and short stories actually published on my channel — tap any one to watch it.'}
          </p>
        </motion.div>

        <div
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin' }}
        >
          {SHORTS.map((s, i) => (
            <motion.a
              key={s.id}
              href={`https://www.youtube.com/shorts/${s.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative shrink-0 w-40 sm:w-44 snap-start rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/40 transition-colors bg-zinc-900"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={`/images/yt/${s.id}.jpg`}
                  alt={isAr ? s.titleAr : s.titleEn}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span className="absolute top-2.5 start-2.5 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/40 transition-transform group-hover:scale-110">
                  <Play className="w-4 h-4 text-white fill-current" />
                </span>
              </div>
              <p className="absolute bottom-0 inset-x-0 p-3 text-[12px] leading-snug font-semibold text-zinc-100">
                {isAr ? s.titleAr : s.titleEn}
              </p>
            </motion.a>
          ))}

          <a
            href="https://www.youtube.com/@mohamedmostafacreative"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-40 sm:w-44 snap-start rounded-2xl border border-dashed border-white/15 hover:border-red-500/40 transition-colors flex flex-col items-center justify-center gap-3 text-zinc-400 hover:text-red-400 aspect-[9/16]"
          >
            <Youtube className="w-8 h-8" />
            <span className="text-xs font-bold px-4 text-center">
              {isAr ? 'القناة كاملة على يوتيوب' : 'Full channel on YouTube'}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
