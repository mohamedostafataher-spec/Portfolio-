import React, { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  Edit2,
  Download,
  Upload,
  Sparkles,
  Layers,
  Check,
  RefreshCw,
  Eye,
  Film,
  FolderOpen,
} from 'lucide-react';
import { Project } from '../types';

interface PortfolioDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onAddProject: (project: Project) => void;
  onDeleteProject: (projectId: string) => void;
  onResetProjects: () => void;
  onImportProjects: (imported: Project[]) => void;
}

export const PortfolioDashboardModal: React.FC<PortfolioDashboardModalProps> = ({
  isOpen,
  onClose,
  projects,
  onAddProject,
  onDeleteProject,
  onResetProjects,
  onImportProjects,
}) => {
  const [activeTab, setActiveTab] = useState<'manage' | 'new-entry' | 'json-sync'>('manage');

  // Form states for new entry
  const [title, setTitle] = useState('');
  const [clientOrSpec, setClientOrSpec] = useState<Project['clientOrSpec']>('Spec Project');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<Project['category']>('AI Commercial');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');
  const [concept, setConcept] = useState('');
  const [myRole, setMyRole] = useState('');
  const [toolsStr, setToolsStr] = useState('CapCut, AI Video Tools, ChatGPT');
  const [skillsStr, setSkillsStr] = useState('Creative Direction, AI Video, Storytelling');
  const [tagline, setTagline] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [importJsonText, setImportJsonText] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newProj: Project = {
      id: `proj-${Date.now()}`,
      title,
      clientOrSpec,
      subtitle: subtitle || 'Creative Campaign Concept',
      category,
      tagline: tagline || undefined,
      description,
      objective: objective || 'Drive brand recognition and customer recall through high-impact creative storytelling.',
      concept: concept || 'High-retention visual concept bridging consumer emotion with product benefits.',
      myRole: myRole || 'Lead Creative Director & AI Visual Producer',
      tools: toolsStr.split(',').map((t) => t.trim()).filter(Boolean),
      skills: skillsStr.split(',').map((s) => s.trim()).filter(Boolean),
      process: [
        { step: '01. Research & Brief', detail: 'Market audit, target persona identification, and hook formulation.' },
        { step: '02. Generative Creation', detail: 'Prompt engineering and AI video / image asset generation.' },
        { step: '03. Post-Production', detail: 'Editing, sound design, color grading, and export.' },
      ],
      finalResult: 'Production-ready commercial asset tested for short-form social engagement.',
      image: imageUrl || projects[0]?.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
      featured: true,
      year: '2026',
    };

    onAddProject(newProj);
    setActiveTab('manage');

    // Reset form
    setTitle('');
    setSubtitle('');
    setDescription('');
    setTagline('');
    setObjective('');
    setConcept('');
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(projects, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `mohamed-mostafa-portfolio-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(importJsonText);
      if (Array.isArray(parsed) && parsed.length > 0) {
        onImportProjects(parsed);
        alert(`Successfully imported ${parsed.length} projects!`);
        setActiveTab('manage');
      } else {
        alert('Invalid JSON: Must be an array of projects.');
      }
    } catch (err: any) {
      alert(`JSON parsing error: ${err.message}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close modal overlay"
      />

      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#101014] border border-white/15 rounded-3xl shadow-2xl z-10 text-left my-auto p-6 sm:p-10">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-xl text-white">
                Portfolio CMS System
              </h2>
              <p className="text-xs text-zinc-400 font-mono">
                Manage live portfolio entries &bull; Real-time Local &amp; Export Sync
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('manage')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'manage'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
            }`}
          >
            Live Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('new-entry')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'new-entry'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add New Project</span>
          </button>
          <button
            onClick={() => setActiveTab('json-sync')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'json-sync'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>JSON Backup &amp; Sync</span>
          </button>
        </div>

        {/* TAB 1: Manage Live Projects */}
        {activeTab === 'manage' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pb-2">
              <span>ACTIVE SHOWCASE ENTRIES</span>
              <button
                onClick={onResetProjects}
                className="text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset to Curated Showcase</span>
              </button>
            </div>

            <div className="space-y-3">
              {projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/15 transition-all flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-white/10"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-white text-base truncate">
                          {proj.title}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-amber-400 border border-white/5">
                          {proj.clientOrSpec}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 truncate mt-0.5">
                        {proj.subtitle} &bull; {proj.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onDeleteProject(proj.id)}
                      className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-colors cursor-pointer"
                      title="Delete project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Add New Entry Form */}
        {activeTab === 'new-entry' && (
          <form onSubmit={handleCreateProject} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Red Bull Cairo Street Run"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                  Project Type
                </label>
                <select
                  value={clientOrSpec}
                  onChange={(e) => setClientOrSpec(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="Spec Project">Spec Project</option>
                  <option value="Client Project">Client Project</option>
                  <option value="Concept Campaign">Concept Campaign</option>
                  <option value="Academic & Practical">Academic &amp; Practical</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                  Subtitle
                </label>
                <input
                  type="text"
                  placeholder="e.g., Energy Drink Cinematic TVC"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="AI Commercial">AI Commercial</option>
                  <option value="Food Advertising">Food Advertising</option>
                  <option value="Fashion & Identity">Fashion &amp; Identity</option>
                  <option value="Marketing Strategy">Marketing Strategy</option>
                  <option value="Short-Form Video">Short-Form Video</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                Campaign Tagline / Slogan (Arabic or English)
              </label>
              <input
                type="text"
                placeholder="e.g., الطاقة اللي تحرك الشارع"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                Description / Strategic Overview *
              </label>
              <textarea
                rows={3}
                required
                placeholder="Describe the campaign concept, audience targeting, and creative direction..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                  Tools Used (comma separated)
                </label>
                <input
                  type="text"
                  value={toolsStr}
                  onChange={(e) => setToolsStr(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                  Skills Applied (comma separated)
                </label>
                <input
                  type="text"
                  value={skillsStr}
                  onChange={(e) => setSkillsStr(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                Hero Image URL (Optional)
              </label>
              <input
                type="url"
                placeholder="https://..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all cursor-pointer shadow-lg shadow-amber-500/20"
            >
              Publish Project to Live Showcase
            </button>
          </form>
        )}

        {/* TAB 3: JSON Backup & Sync */}
        {activeTab === 'json-sync' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm">Export Portfolio Database</h3>
                  <p className="text-xs text-zinc-400">Download a full JSON file containing all projects and metadata.</p>
                </div>
                <button
                  onClick={handleExportJson}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .json</span>
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-4">
              <div>
                <h3 className="font-bold text-white text-sm">Import / Restore JSON</h3>
                <p className="text-xs text-zinc-400">Paste JSON array of projects to immediately replace or restore the database.</p>
              </div>
              <textarea
                rows={5}
                placeholder="Paste [ { ... } ] JSON here..."
                value={importJsonText}
                onChange={(e) => setImportJsonText(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
              />
              <button
                onClick={handleImportJson}
                disabled={!importJsonText.trim()}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Import Database</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
