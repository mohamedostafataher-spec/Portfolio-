import React, { useState } from 'react';
import { X, Plus, Sparkles, Upload, Video, Image as ImageIcon, Link as LinkIcon, Film } from 'lucide-react';
import { Project } from '../types';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (newProject: Project) => void;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    clientOrSpec: 'Spec Project' as const,
    category: 'AI Commercial' as const,
    description: '',
    objective: '',
    concept: '',
    myRole: '',
    toolsInput: 'CapCut, AI Video Tools, ChatGPT',
    skillsInput: 'Creative Direction, AI Video, Storytelling',
    finalResult: '',
    imageUrl: '',
    videoUrl: '',
    aspectRatio: '16:9' as '16:9' | '9:16',
  });

  const [videoFileName, setVideoFileName] = useState<string>('');
  const [imageFileName, setImageFileName] = useState<string>('');

  if (!isOpen) return null;

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, videoUrl: objectUrl }));
      setVideoFileName(file.name);
    }
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const dataUrl = uploadEvent.target?.result as string;
        setFormData((prev) => ({ ...prev, imageUrl: dataUrl }));
        setImageFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const project: Project = {
      id: `project-${Date.now()}`,
      title: formData.title,
      subtitle: formData.subtitle || 'Creative Advertising Concept',
      clientOrSpec: formData.clientOrSpec,
      category: formData.category,
      description: formData.description,
      objective: formData.objective || 'Develop an engaging, high-retention advertising concept.',
      concept: formData.concept || 'Cinematic storytelling with clear brand value communication.',
      myRole: formData.myRole || 'Creative Director, Prompt Engineer, Video Editor',
      tools: formData.toolsInput.split(',').map((t) => t.trim()).filter(Boolean),
      skills: formData.skillsInput.split(',').map((s) => s.trim()).filter(Boolean),
      process: [
        { step: '01. Research & Strategy', detail: 'Identified target audience and core emotional message.' },
        { step: '02. Production & AI Generation', detail: 'Generated high-fidelity visual assets and video scenes.' },
        { step: '03. Editing & Sound Design', detail: 'Pacing, color grading, and dynamic audio integration.' },
      ],
      finalResult: formData.finalResult || 'Successful high-impact advertising concept ready for multi-channel distribution.',
      image: formData.imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
      videoUrl: formData.videoUrl || undefined,
      videoPreviewUrl: formData.videoUrl || undefined,
      aspectRatio: formData.aspectRatio,
      stats: [
        { label: 'Category', value: formData.category },
        { label: 'Status', value: formData.clientOrSpec },
      ],
      featured: true,
    };

    onAddProject(project);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#101014] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-left my-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">إضافة مشروع جديد (Add Project)</h3>
              <p className="text-xs text-zinc-400">أضف أعمالك الحقيقية من فيديوهات وتصميمات وحملات</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 max-h-[75vh] overflow-y-auto pr-2">
          {/* Title & Subtitle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                اسم المشروع (Project Title) *
              </label>
              <input
                type="text"
                required
                placeholder="مثال: إعلان سامسونج / إعلان مطعم"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                الزاوية التسويقية / الوصف المختصر
              </label>
              <input
                type="text"
                placeholder="مثال: Cinematic Spec Commercial"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Type & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                نوع المشروع (Client / Spec)
              </label>
              <select
                value={formData.clientOrSpec}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    clientOrSpec: e.target.value as any,
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
              >
                <option value="Spec Project">Spec Project (مشروع تجريبي مبتكر)</option>
                <option value="Client Project">Client Project (مشروع حقيقي لعميل)</option>
                <option value="Concept Campaign">Concept Campaign (حملة مفاهيمية)</option>
                <option value="Academic & Practical">Academic & Practical (تطبيق عملي)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                التصنيف (Category)
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value as any,
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
              >
                <option value="AI Commercial">AI Commercial (إعلان ذكاء اصطناعي)</option>
                <option value="Food Advertising">Food Advertising (إعلانات أغذية ومطاعم)</option>
                <option value="Fashion & Identity">Fashion & Identity (أزياء وهوية)</option>
                <option value="Marketing Strategy">Marketing Strategy (استراتيجية تسويق)</option>
                <option value="Short-Form Video">Short-Form Video (ريلز وفيديوهات قصيرة)</option>
              </select>
            </div>
          </div>

          {/* VIDEO MEDIA SECTION (The core of user request) */}
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-amber-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-1.5">
                <Video className="w-4 h-4" />
                <span>فيديو المشروع (Video Playback)</span>
              </label>
              <div className="flex items-center gap-2">
                <label className="text-[11px] text-zinc-400 font-mono">
                  <input
                    type="radio"
                    name="ratio"
                    checked={formData.aspectRatio === '16:9'}
                    onChange={() => setFormData({ ...formData, aspectRatio: '16:9' })}
                    className="mr-1 accent-amber-500"
                  />
                  16:9 أفقي
                </label>
                <label className="text-[11px] text-zinc-400 font-mono">
                  <input
                    type="radio"
                    name="ratio"
                    checked={formData.aspectRatio === '9:16'}
                    onChange={() => setFormData({ ...formData, aspectRatio: '9:16' })}
                    className="mr-1 accent-amber-500"
                  />
                  9:16 رأسي (Reel)
                </label>
              </div>
            </div>

            <p className="text-xs text-zinc-400">
              يمكنك وضع رابط فيديو (YouTube / Vimeo / Google Drive / MP4) أو رفع ملف فيديو مباشرة من جهازك:
            </p>

            {/* Video URL Input */}
            <div className="relative">
              <LinkIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="url"
                placeholder="رابط يوتيوب أو ملف MP4 (e.g. https://www.youtube.com/watch?v=...)"
                value={formData.videoUrl}
                onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-zinc-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Direct Video File Upload */}
            <div className="flex items-center gap-3">
              <label className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>رفع فيديو من الجهاز (MP4 / WebM / MOV)</span>
                <input
                  type="file"
                  accept="video/mp4,video/webm,video/quicktime,video/x-m4v"
                  onChange={handleVideoFileChange}
                  className="hidden"
                />
              </label>
              {videoFileName && (
                <span className="text-xs text-emerald-400 font-mono truncate max-w-xs">
                  ✓ {videoFileName}
                </span>
              )}
            </div>
          </div>

          {/* POSTER IMAGE SECTION */}
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3">
            <label className="text-xs font-mono font-bold text-zinc-300 uppercase flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-amber-400" />
              <span>صورة الغلاف / البوستر (Cover Image)</span>
            </label>

            <div className="relative">
              <LinkIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="url"
                placeholder="رابط الصورة المباشر (URL)"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-zinc-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex items-center gap-3">
              <label className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/10 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>رفع صورة من الجهاز (PNG / JPG / WebP)</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  className="hidden"
                />
              </label>
              {imageFileName && (
                <span className="text-xs text-emerald-400 font-mono truncate max-w-xs">
                  ✓ {imageFileName}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
              نبذة عن المشروع (Description) *
            </label>
            <textarea
              required
              rows={3}
              placeholder="اكتب نبذة تسويقية واضحة ومختصرة عن فكرة المشروع..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Objective & Concept */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                الهدف التسويقي (Objective)
              </label>
              <input
                type="text"
                placeholder="مثال: زيادة الوعي بالعلامة ونسبة المشاهدة"
                value={formData.objective}
                onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                الفكرة الإبداعية (Concept)
              </label>
              <input
                type="text"
                placeholder="مثال: سرد سينمائي يربط المنتج بالحياة اليومية"
                value={formData.concept}
                onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Role & Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                دورك في المشروع (My Role)
              </label>
              <input
                type="text"
                placeholder="Creative Director, Video Editor"
                value={formData.myRole}
                onChange={(e) => setFormData({ ...formData, myRole: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                الأدوات المستخدمة (Tools)
              </label>
              <input
                type="text"
                placeholder="CapCut, AI Video Tools, Midjourney"
                value={formData.toolsInput}
                onChange={(e) => setFormData({ ...formData, toolsInput: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-zinc-400 hover:text-white text-xs font-medium cursor-pointer"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shadow-lg shadow-amber-500/20 cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>حفظ ونشر المشروع</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
