import React, { useState, useEffect } from 'react';
import { X, Save, Edit3, Sparkles, Trash2, Video, Upload, Link as LinkIcon, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface EditProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveProject: (updatedProject: Project) => void;
  onDeleteProject?: (projectId: string) => void;
}

export const EditProjectModal: React.FC<EditProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onSaveProject,
  onDeleteProject,
}) => {
  const { isAr } = useLanguage();

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    clientOrSpec: 'Spec Project' as const,
    category: 'AI Commercial' as const,
    tagline: '',
    description: '',
    objective: '',
    concept: '',
    myRole: '',
    toolsInput: '',
    skillsInput: '',
    finalResult: '',
    imageUrl: '',
    videoUrl: '',
    aspectRatio: '16:9' as '16:9' | '9:16',
  });

  const [videoFileName, setVideoFileName] = useState<string>('');
  const [imageFileName, setImageFileName] = useState<string>('');

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        subtitle: project.subtitle || '',
        clientOrSpec: project.clientOrSpec || 'Spec Project',
        category: project.category || 'AI Commercial',
        tagline: project.tagline || '',
        description: project.description || '',
        objective: project.objective || '',
        concept: project.concept || '',
        myRole: project.myRole || '',
        toolsInput: (project.tools || []).join(', '),
        skillsInput: (project.skills || []).join(', '),
        finalResult: project.finalResult || '',
        imageUrl: project.image || '',
        videoUrl: project.videoUrl || project.videoPreviewUrl || '',
        aspectRatio: project.aspectRatio === '9:16' ? '9:16' : '16:9',
      });
      setVideoFileName('');
      setImageFileName('');
    }
  }, [project]);

  if (!isOpen || !project) return null;

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

    const updated: Project = {
      ...project,
      title: formData.title,
      subtitle: formData.subtitle,
      clientOrSpec: formData.clientOrSpec,
      category: formData.category,
      tagline: formData.tagline,
      description: formData.description,
      objective: formData.objective,
      concept: formData.concept,
      myRole: formData.myRole,
      tools: formData.toolsInput.split(',').map((t) => t.trim()).filter(Boolean),
      skills: formData.skillsInput.split(',').map((s) => s.trim()).filter(Boolean),
      finalResult: formData.finalResult,
      image: formData.imageUrl || project.image,
      videoUrl: formData.videoUrl || undefined,
      videoPreviewUrl: formData.videoUrl || undefined,
      aspectRatio: formData.aspectRatio,
    };

    onSaveProject(updated);
    onClose();
  };

  const handleDelete = () => {
    if (onDeleteProject && window.confirm(isAr ? 'هل أنت متأكد من حذف هذا المشروع؟' : 'Are you sure you want to delete this project?')) {
      onDeleteProject(project.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#101014] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-left my-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                {isAr ? 'تعديل المشروع والفيديو' : 'Edit Project & Video'}
              </h3>
              <p className="text-xs text-zinc-400">
                {project.title}
              </p>
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
                اسم المشروع *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                الوصف المختصر
              </label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* VIDEO MEDIA EDITING */}
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-amber-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-1.5">
                <Video className="w-4 h-4" />
                <span>فيديو المشروع (Video Playback URL / Upload)</span>
              </label>
              <div className="flex items-center gap-2">
                <label className="text-[11px] text-zinc-400 font-mono">
                  <input
                    type="radio"
                    name="edit-ratio"
                    checked={formData.aspectRatio === '16:9'}
                    onChange={() => setFormData({ ...formData, aspectRatio: '16:9' })}
                    className="mr-1 accent-amber-500"
                  />
                  16:9 أفقي
                </label>
                <label className="text-[11px] text-zinc-400 font-mono">
                  <input
                    type="radio"
                    name="edit-ratio"
                    checked={formData.aspectRatio === '9:16'}
                    onChange={() => setFormData({ ...formData, aspectRatio: '9:16' })}
                    className="mr-1 accent-amber-500"
                  />
                  9:16 رأسي (Reel)
                </label>
              </div>
            </div>

            <p className="text-xs text-zinc-400">
              ضع رابط يوتيوب أو ملف MP4 مباشر، أو ارفع ملف فيديو من جهازك:
            </p>

            <div className="relative">
              <LinkIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="رابط يوتيوب أو ملف MP4 (e.g. https://www.youtube.com/watch?v=...)"
                value={formData.videoUrl}
                onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-zinc-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex items-center gap-3">
              <label className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>رفع فيديو جديد من الجهاز (MP4 / WebM / MOV)</span>
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

          {/* POSTER IMAGE EDITING */}
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3">
            <label className="text-xs font-mono font-bold text-zinc-300 uppercase flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-amber-400" />
              <span>صورة البوستر / الغلاف</span>
            </label>

            <div className="relative">
              <LinkIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-zinc-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex items-center gap-3">
              <label className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/10 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>رفع صورة جديدة من الجهاز</span>
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
              النبذة الإعلانية (Description)
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Tools & Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                الأدوات (Tools)
              </label>
              <input
                type="text"
                value={formData.toolsInput}
                onChange={(e) => setFormData({ ...formData, toolsInput: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                المهارات (Skills)
              </label>
              <input
                type="text"
                value={formData.skillsInput}
                onChange={(e) => setFormData({ ...formData, skillsInput: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            {onDeleteProject ? (
              <button
                type="button"
                onClick={handleDelete}
                className="px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>حذف المشروع</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-2">
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
                <Save className="w-3.5 h-3.5" />
                <span>حفظ التعديلات</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
