/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Project } from './types';
import { INITIAL_PROJECTS } from './data/portfolioData';

import { OwnerProvider, useOwner } from './context/OwnerContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

import { TopAdminBar } from './components/TopAdminBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MasterPortfolioSection } from './components/MasterPortfolioSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { CreativeProcess } from './components/CreativeProcess';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { GoogleDriveMasterVault } from './components/GoogleDriveMasterVault';
import { MotionGraphicsDecorations } from './components/MotionGraphicsDecorations';
import { Footer } from './components/Footer';
import { QuickFloatingAction } from './components/QuickFloatingAction';

import { ProjectModal } from './components/ProjectModal';
import { AddProjectModal } from './components/AddProjectModal';
import { EditProjectModal } from './components/EditProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { PdfDeckModal } from './components/PdfDeckModal';
import { PortfolioDashboardModal } from './components/PortfolioDashboardModal';
import { OwnerLoginModal } from './components/OwnerLoginModal';

export function PortfolioApp() {
  const { openLoginModal } = useOwner();
  const { isAr } = useLanguage();

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('mm_portfolio_projects_v12');
      if (saved) {
        const parsed: Project[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const hasRealBreadfast = parsed.some(
            (p) => p.id === 'breadfast-campaign' && p.videoUrl === '/videos/breadfast_delivery_campaign.mp4'
          );
          const hasTalabat = parsed.some((p) => p.id === 'talabat-delivery-tvc');
          if (hasRealBreadfast && hasTalabat) {
            return parsed;
          }
        }
      }
    } catch {
      // ignore
    }
    return INITIAL_PROJECTS;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Persist projects to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mm_portfolio_projects_v12', JSON.stringify(projects));
    } catch {
      // ignore
    }
  }, [projects]);

  // Keyboard shortcut (Alt + L or Ctrl + Shift + L) for discrete Owner login
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && (e.key === 'l' || e.key === 'L')) || (e.ctrlKey && e.shiftKey && (e.key === 'l' || e.key === 'L'))) {
        e.preventDefault();
        openLoginModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openLoginModal]);

  const handleAddProject = (newProject: Project) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const handleSaveProject = (updatedProject: Project) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updatedProject.id ? updatedProject : p))
    );
    if (selectedProject?.id === updatedProject.id) {
      setSelectedProject(updatedProject);
    }
  };

  const handleDeleteProject = (projectId: string) => {
    if (window.confirm(isAr ? 'هل أنت متأكد من حذف هذا المشروع نهائياً؟' : 'Are you sure you want to remove this project?')) {
      setProjects((prev) => prev.filter((p) => p.id !== projectId));
      if (selectedProject?.id === projectId) {
        setSelectedProject(null);
      }
      if (editingProject?.id === projectId) {
        setEditingProject(null);
      }
    }
  };

  const handleImportProjects = (imported: Project[]) => {
    setProjects(imported);
  };

  const handleResetProjects = () => {
    if (window.confirm(isAr ? 'إعادة ضبط كافة المشاريع للقائمة الافتراضية؟' : 'Reset portfolio projects back to default showcase?')) {
      setProjects(INITIAL_PROJECTS);
      try {
        localStorage.removeItem('mm_portfolio_projects');
      } catch {
        // ignore
      }
    }
  };

  const handleOpenContact = (serviceOrProjectTitle?: string) => {
    if (serviceOrProjectTitle) {
      setContactInitialService(serviceOrProjectTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-amber-500 selection:text-black relative overflow-x-hidden">
      {/* 3D Motion Graphics Ambient Background */}
      <MotionGraphicsDecorations />

      {/* 00 — Top Admin Bar (Shown ONLY when Mohamed is authenticated as Owner) */}
      <TopAdminBar
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenDashboard={() => setIsDashboardModalOpen(true)}
      />

      {/* Main Glass Navbar */}
      <Navbar
        onOpenContact={() => handleOpenContact('Commercial Collaboration')}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenDashboard={() => setIsDashboardModalOpen(true)}
        onOpenPdfDeck={() => setIsPdfModalOpen(true)}
      />

      {/* Clean, Streamlined & Professional Master Layout */}
      <main className="flex-1 relative z-10">
        {/* 01 — HERO */}
        <Hero
          onOpenContact={() => handleOpenContact('Commercial Collaboration')}
          onExploreWork={handleExploreWork}
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenPdfDeck={() => setIsPdfModalOpen(true)}
          onOpenFeaturedProject={() => {
            const spiro = projects.find((p) => p.id === 'spiro-spathis-commercial') || projects[0];
            setSelectedProject(spiro);
          }}
        />

        {/* 02 — ABOUT & CREDENTIALS */}
        <About
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenContact={() => handleOpenContact('Commercial Collaboration')}
          onOpenPdfDeck={() => setIsPdfModalOpen(true)}
        />

        {/* 03 — OUR SERVICES (4 MARKETING PILLARS) */}
        <CapabilitiesSection
          onSelectService={(serviceName) => handleOpenContact(serviceName)}
        />

        {/* 04 — LATEST PROJECTS / SELECTED WORK */}
        <MasterPortfolioSection
          projects={projects}
          activeCategory={activeCategory}
          onCategoryChange={(cat) => setActiveCategory(cat)}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenAddModal={() => setIsAddModalOpen(true)}
          onEditProject={(proj) => setEditingProject(proj)}
          onDeleteProject={handleDeleteProject}
          onResetProjects={handleResetProjects}
        />

        {/* 05 — PROCESS (FROM IDEA TO IMPACT) */}
        <CreativeProcess />

        {/* 06 — CONTACT ME */}
        <ContactSection initialServiceOrProject={contactInitialService} />

        {/* 06 — ADDITIONAL WORK & ARCHIVE */}
        <div id="archive" className="border-t border-white/5 pt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-400">
              {isAr ? 'أعمال استراتيجية إضافية وملفات المساقات والأرشيف' : 'Additional strategy work, experiments and supporting files are available in the archive.'}
            </span>
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
            >
              {isAr ? 'عرض كتيب البورتفوليو الكامل (25 صفحة PDF)' : 'View Full Portfolio PDF (25 Pages)'}
            </button>
          </div>
          <GoogleDriveMasterVault />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Minimal Quick Action (Direct WhatsApp + Scroll to Top) */}
      <QuickFloatingAction />

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        allProjects={projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onOpenContact={(title) => handleOpenContact(`Campaign: ${title}`)}
      />

      {/* Owner: Add New Project Modal */}
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProject={handleAddProject}
      />

      {/* Owner: Edit Existing Project Modal */}
      <EditProjectModal
        project={editingProject}
        isOpen={!!editingProject}
        onClose={() => setEditingProject(null)}
        onSaveProject={handleSaveProject}
        onDeleteProject={handleDeleteProject}
      />

      {/* Downloadable / Printable CV & Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* 21-Page Interactive Master PDF Deck Modal */}
      <PdfDeckModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Full Management Dashboard Modal */}
      <PortfolioDashboardModal
        isOpen={isDashboardModalOpen}
        onClose={() => setIsDashboardModalOpen(false)}
        projects={projects}
        onAddProject={handleAddProject}
        onEditProject={(proj) => setEditingProject(proj)}
        onDeleteProject={handleDeleteProject}
        onImportProjects={handleImportProjects}
        onResetProjects={handleResetProjects}
      />

      {/* Discrete Owner Login Modal */}
      <OwnerLoginModal />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <OwnerProvider>
        <PortfolioApp />
      </OwnerProvider>
    </LanguageProvider>
  );
}
