import React from 'react';
import { Award, CheckCircle, ExternalLink, Shield } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            10 — CERTIFICATIONS &amp; ACCREDITATIONS
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Verified Credentials
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed">
            Continuous development in digital marketing frameworks, generative media workflows, and brand growth fundamentals.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  {cert.title}
                </h3>
                <div className="text-xs font-semibold text-amber-400 mt-1 font-mono">
                  {cert.platform}
                </div>

                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-zinc-500 mt-2">
                    ID: {cert.credentialId}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cert.skills.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] text-zinc-300 font-medium"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Competency</span>
                </span>
                <span className="text-zinc-500 font-mono text-[11px]">
                  Professional Badge
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
