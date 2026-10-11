import React from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close modal overlay"
      />

      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#101014] border border-white/15 rounded-3xl shadow-2xl z-10 text-left my-auto p-6 sm:p-10 print:bg-white print:text-black print:p-0 print:border-none">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
              Official Curriculum Vitae &bull; Mohamed Salem
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Close CV"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Document Body (Matching exact uploaded resume) */}
        <div className="space-y-7 print:text-black">
          
          {/* Header */}
          <div className="pb-6 border-b border-white/10 print:border-zinc-300">
            <h1 className="font-display text-2xl sm:text-3xl font-black text-white print:text-black tracking-tight uppercase">
              MOHAMED MOSTAFA TAHER SALEM
            </h1>
            <p className="text-amber-400 print:text-amber-700 font-bold text-sm sm:text-base mt-1">
              Digital Marketing Trainee (DEPI) | AI Video & Creative Content
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 print:text-zinc-600 mt-2 font-mono">
              <span>Cairo, Egypt</span>
              <span>&bull;</span>
              <a href="tel:+201110095403" className="hover:text-amber-400">+20 111 009 5403</a>
              <span>&bull;</span>
              <a href="mailto:mohamedostafataher@gmail.com" className="hover:text-amber-400">mohamedostafataher@gmail.com</a>
              <br/>
              <a href="https://mohamedmostafa-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-amber-400 print:text-blue-700 hover:underline">
                Portfolio: mohamedmostafa-one.vercel.app
              </a>
              <span>&bull;</span>
              <a href="https://youtube.com/@mohamedmostafacreative" target="_blank" rel="noopener noreferrer" className="text-amber-400 print:text-blue-700 hover:underline">
                YouTube: @mohamedmostafacreative
              </a>
              <br/>
              <a href="https://linkedin.com/in/mohamed-mostafa-2a00993b8" target="_blank" rel="noopener noreferrer" className="text-amber-400 print:text-blue-700 hover:underline">
                LinkedIn: mohamed-mostafa-2a00993b8
              </a>
            </div>
          </div>

          {/* Profile */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-2">
              PROFILE
            </h2>
            <p className="text-zinc-300 print:text-zinc-800 text-xs sm:text-sm leading-relaxed">
              Digital marketing trainee in the Digital Egypt Pioneers Initiative (DEPI), specialising in AI-generated video and short-form creative content. I build concept campaigns for Egyptian brands: AI video ads, reels, SOSTAC marketing plans and carousels, with scripts in Egyptian Arabic and English. Looking for an internship or junior role in content, social media or creative production.
            </p>
          </div>

          {/* Key Strengths */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-2">
              KEY STRENGTHS
            </h2>
            <ul className="list-disc list-inside text-zinc-300 print:text-zinc-800 text-xs sm:text-sm leading-relaxed space-y-1">
              <li><strong>AI video production:</strong> concept-to-final AI commercials and reels (script, visual direction, voice-over, edit in CapCut Pro).</li>
              <li><strong>Egyptian-Arabic copywriting:</strong> colloquial hooks and scripts rooted in local culture.</li>
              <li><strong>Strategy foundations:</strong> SOSTAC planning, audience research, content calendars, Meta Ads and analytics basics (learning).</li>
            </ul>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-3">
              SELECTED PROJECTS (PORTFOLIO AND CONCEPT WORK)
            </h2>
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-zinc-900/50 print:bg-zinc-100 border border-white/5 print:border-zinc-200">
                <h3 className="font-bold text-white print:text-black text-sm">TAKAA Energy Drink | AI Commercial & Short-form Video</h3>
                <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-700 space-y-1 mt-1">
                  <li>Created an AI-assisted pop-reveal reel and brand launch concept for vertical 9:16 platforms.</li>
                  <li>Directed visuals, pacing and Egyptian-Arabic messaging for fast, platform-native storytelling.</li>
                </ul>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/50 print:bg-zinc-100 border border-white/5 print:border-zinc-200">
                <h3 className="font-bold text-white print:text-black text-sm">Baba Geh, Buffalo Burger, Talabat Egypt, Spiro Spathis | AI Commercial Concepts</h3>
                <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-700 space-y-1 mt-1">
                  <li>Produced 40 to 105-second AI-assisted commercial concepts mixing comedy, family storytelling and food visuals.</li>
                  <li>Wrote scene directions and scripts, edited in CapCut Pro, and cut short versions for reels.</li>
                </ul>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/50 print:bg-zinc-100 border border-white/5 print:border-zinc-200">
                <h3 className="font-bold text-white print:text-black text-sm">V7 Cream Soda | Campaign Storytelling & Brand Deck</h3>
                <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-700 space-y-1 mt-1">
                  <li>Built a multi-era summer campaign idea around generational moments, with a scene-by-scene structure and visual system.</li>
                </ul>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/50 print:bg-zinc-100 border border-white/5 print:border-zinc-200">
                <h3 className="font-bold text-white print:text-black text-sm">QAIM Menswear | Content Strategy & Carousels</h3>
                <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-700 space-y-1 mt-1">
                  <li>Developed a SOSTAC plan, Instagram architecture and 3 interactive carousel routes, plus AI voice-over scripts.</li>
                </ul>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/50 print:bg-zinc-100 border border-white/5 print:border-zinc-200">
                <h3 className="font-bold text-white print:text-black text-sm">H&M Egypt (coursework) | Market Research & Digital Strategy</h3>
                <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-700 space-y-1 mt-1">
                  <li>Researched the Egyptian e-commerce market and competitors, and wrote a digital growth and content strategy.</li>
                </ul>
              </div>
            </div>
            <p className="text-[10px] text-zinc-500 mt-2 italic">*Most projects are self-initiated concept work, labelled as such in my portfolio.</p>
          </div>

          {/* Education & Training */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-2">
              EDUCATION & TRAINING
            </h2>
            <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-800 space-y-1">
              <li>DEPI (Ministry of Communications and IT, Egypt) | Digital Marketing Track | In progress</li>
              <li>Capital University | Faculty of Arts, Geography Department | Expected graduation: 2027</li>
              <li>ALX | AI & Professional Skills</li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-2">
              WORK EXPERIENCE
            </h2>
            <div className="text-xs text-zinc-300 print:text-zinc-800 space-y-3">
              <div>
                <strong className="text-white print:text-black">Production Worker</strong> | Golden Sun, Cairo | 5 months
                <ul className="list-disc list-inside ml-4 mt-1"><li>Supported daily production while meeting workflow and quality requirements in a deadline-driven team.</li></ul>
              </div>
              <div>
                <strong className="text-white print:text-black">General Worker</strong> | Napoiles, Cairo | 2024 to 2025
                <ul className="list-disc list-inside ml-4 mt-1"><li>Coordinated with team members and supervisors, followed procedures and handled tasks reliably.</li></ul>
              </div>
            </div>
          </div>

          {/* Volunteering */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-2">
              VOLUNTEERING
            </h2>
            <div className="text-xs text-zinc-300 print:text-zinc-800">
              <strong className="text-white print:text-black">Volunteer</strong> | Resala Organization | 2022 to 2025: organised activities for children and supported people with special needs.
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-2">
              SKILLS & TOOLS
            </h2>
            <div className="space-y-2 text-xs text-zinc-300 print:text-zinc-800">
              <p><strong className="text-white print:text-black">AI & Video:</strong> AI video generation | AI visual concepts | Short-form video | Video editing | Voice-over direction</p>
              <p><strong className="text-white print:text-black">Marketing:</strong> Content strategy | Social media marketing | SOSTAC | Audience research | Meta Ads Manager (learning) | Google Analytics (learning)</p>
              <p><strong className="text-white print:text-black">Creative:</strong> Creative concepts | Copywriting (Arabic and English) | Storytelling | Brand decks</p>
              <p><strong className="text-white print:text-black">Tools:</strong> CapCut Pro | Canva Pro | ChatGPT | AI creative tools</p>
              <p><strong className="text-white print:text-black">Languages:</strong> Arabic (native) | English (B1/B2) | Dutch (A1)</p>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500 text-center">
            Mohamed Salem &bull; Digital Marketing CV
          </div>

        </div>


      </div>
    </div>
  );
};
