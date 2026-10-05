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
              Mohamed Moostafa Taher Salem
            </h1>
            <p className="text-amber-400 print:text-amber-700 font-bold text-sm sm:text-base mt-1">
              Digital Marketing | Creative Strategy | Social Media
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 print:text-zinc-600 mt-2 font-mono">
              <span>Cairo, Egypt</span>
              <span>&bull;</span>
              <a href="tel:+2001110095403" className="hover:text-amber-400">(+20) 01110095403</a>
              <span>&bull;</span>
              <a href="mailto:mohamedostafataher@gmail.com" className="hover:text-amber-400">mohamedostafataher@gmail.com</a>
              <span>&bull;</span>
              <a href="https://mohamedmostafa-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-amber-400 print:text-blue-700 hover:underline">
                mohamedmostafa-one.vercel.app
              </a>
            </div>
          </div>

          {/* Profile */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-2">
              Profile
            </h2>
            <p className="text-zinc-300 print:text-zinc-800 text-xs sm:text-sm leading-relaxed">
              Digital Marketing enthusiast with a strong interest in creative strategy, social media, content creation and performance marketing. Experienced in developing campaign concepts, social media ideas and AI-powered creative content. Combining marketing thinking with creativity to build engaging campaigns designed around clear objectives.
            </p>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-3">
              Selected Projects
            </h2>
            <div className="space-y-4">
              
              <div className="p-3.5 rounded-xl bg-zinc-900/50 print:bg-zinc-100 border border-white/5 print:border-zinc-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h3 className="font-bold text-white print:text-black text-sm">
                    QAIM Menswear &mdash; Content Strategy &amp; Instagram Architecture
                  </h3>
                  <span className="text-[11px] font-mono text-amber-400 print:text-amber-800">
                    Content &amp; Social Strategy
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-700 space-y-1">
                  <li>Developed content direction and Instagram architecture for a menswear brand.</li>
                  <li>Created carousel concepts, hooks and social-first storytelling to strengthen brand presence.</li>
                  <li>Structured content ideas around audience engagement and consistent visual communication.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 print:bg-zinc-100 border border-white/5 print:border-zinc-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h3 className="font-bold text-white print:text-black text-sm">
                    TAKAA Energy Drink &mdash; AI Creative &amp; Short-form Video
                  </h3>
                  <span className="text-[11px] font-mono text-amber-400 print:text-amber-800">
                    AI Creative &amp; Video
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-700 space-y-1">
                  <li>Developed an AI-assisted creative concept for an energy drink campaign.</li>
                  <li>Created short-form video direction and visual storytelling for social media.</li>
                  <li>Combined product-focused messaging with fast-paced, platform-native content.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 print:bg-zinc-100 border border-white/5 print:border-zinc-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h3 className="font-bold text-white print:text-black text-sm">
                    V7 Cream Soda &mdash; Visual Direction &amp; Campaign Storytelling
                  </h3>
                  <span className="text-[11px] font-mono text-amber-400 print:text-amber-800">
                    Visual Direction
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-700 space-y-1">
                  <li>Developed a summer campaign concept built around product storytelling and generational moments.</li>
                  <li>Created a scene-by-scene creative structure for a social/TVC-style campaign.</li>
                  <li>Translated the campaign idea into a cohesive visual and content system.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 print:bg-zinc-100 border border-white/5 print:border-zinc-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h3 className="font-bold text-white print:text-black text-sm">
                    Baba Gah &amp; Buffalo Burger &mdash; Commercial Video Campaigns
                  </h3>
                  <span className="text-[11px] font-mono text-amber-400 print:text-amber-800">
                    Video &amp; Advertising
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-700 space-y-1">
                  <li>Created comedic and cinematic advertising concepts for food and consumer brands.</li>
                  <li>Developed scene directions, short-form storytelling and AI-assisted visual ideas.</li>
                  <li>Produced campaign-ready concepts for video and social media execution.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-white print:text-black">
                <span>Production Worker &mdash; Golden Sun</span>
                <span className="font-mono text-zinc-400 print:text-zinc-600">Cairo, Egypt | 5 months</span>
              </div>
              <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-700 space-y-1">
                <li>Supported daily production operations while maintaining workflow and quality requirements.</li>
                <li>Collaborated with team members in a structured, deadline-driven environment.</li>
                <li>Demonstrated consistency, attention to detail, punctuality and adherence to workplace standards.</li>
              </ul>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-white print:text-black pt-2">
                <span>General Worker &mdash; Napoiles</span>
                <span className="font-mono text-zinc-400 print:text-zinc-600">Cairo, Egypt | 2024&ndash;2025</span>
              </div>
              <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-700 space-y-1">
                <li>Supported daily operations and coordinated effectively with team members and supervisors.</li>
                <li>Maintained workplace organization, followed procedures and handled assigned tasks reliably.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-2">
              Education
            </h2>
            <div className="text-xs text-zinc-300 print:text-zinc-800">
              <strong className="text-white print:text-black">Capital University</strong> &mdash; Faculty of Arts, Geography Department | <span className="font-mono text-zinc-400">Expected Graduation: 2027</span>
            </div>
          </div>

          {/* Courses & Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-2">
              Courses &amp; Certifications
            </h2>
            <ul className="list-disc list-inside text-xs text-zinc-300 print:text-zinc-800 space-y-1">
              <li><strong>ALX</strong> &mdash; AI &amp; Professional Skills</li>
              <li><strong>Surveying Course</strong> &mdash; Field Training &amp; Balance Device Operation</li>
              <li><strong>DEPI</strong> &mdash; Digital Egypt Pioneers Initiative (Ministry of Communications &amp; IT)</li>
            </ul>
          </div>

          {/* Volunteering */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-2">
              Volunteering
            </h2>
            <div className="text-xs text-zinc-300 print:text-zinc-800 space-y-1">
              <div className="flex justify-between font-bold text-white print:text-black">
                <span>Volunteer &mdash; Resala Organization</span>
                <span className="font-mono text-zinc-400 print:text-zinc-600">2022&ndash;2025</span>
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>Organized activities for children and supported people with special needs.</li>
                <li>Developed teamwork, communication and responsibility skills.</li>
              </ul>
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-amber-800 mb-2">
              Core Skills
            </h2>
            <div className="space-y-2 text-xs text-zinc-300 print:text-zinc-800">
              <p>
                <strong className="text-white print:text-black">Digital Marketing:</strong> Digital Marketing Strategy &bull; Campaign Strategy &bull; Audience Research &bull; Content Strategy &bull; Social Media Marketing &bull; Meta Ads Manager &bull; Campaign Setup &bull; Performance Analysis &bull; Google Analytics
              </p>
              <p>
                <strong className="text-white print:text-black">Creative &amp; Production:</strong> Creative Concepts &bull; Campaign Ideas &bull; Copywriting &bull; Art Direction &bull; AI Creative Production &bull; Video Marketing &bull; Reels &amp; Short-form Content &bull; Storytelling
              </p>
              <p>
                <strong className="text-white print:text-black">Tools:</strong> Canva Pro &bull; CapCut Pro &bull; Adobe Premiere Pro &bull; Adobe Photoshop &bull; ChatGPT &bull; AI Creative Tools
              </p>
              <p>
                <strong className="text-white print:text-black">Languages:</strong> Arabic &mdash; Native &bull; English &mdash; B1/B2 &bull; Dutch &mdash; A1
              </p>
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
