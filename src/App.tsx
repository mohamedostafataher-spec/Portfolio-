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
import { SkillsMasterShowcase } from './components/SkillsMasterShowcase';
import { ProjectShowcaseHub } from './components/ProjectShowcaseHub';
import { GoogleDriveMasterVault } from './components/GoogleDriveMasterVault';
import { MarketingRoiCalculator } from './components/MarketingRoiCalculator';
import { MasterPortfolioSection } from './components/MasterPortfolioSection';
import { CreativeShowcaseHub } from './components/CreativeShowcaseHub';
import { MotionGraphicsDecorations } from './components/MotionGraphicsDecorations';
import { About } from './components/About';
import { CreativeProcess } from './components/CreativeProcess';
import { ContactSection } from './components/ContactSection';
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
      const saved = localStorage.getItem('mm_portfolio_projects_v9');
      if (saved) {
        const parsed: Project[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const hasLatestRealProjects =
            parsed.some((p) => p.id === 'level-fitness-spec') &&
            parsed.some((p) => p.id === 'wojooh-tourism-spec') &&
            parsed.some((p) => p.id === 'baba-geh-pro-edition');
          if (hasLatestRealProjects) {
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
      localStorage.setItem('mm_portfolio_projects_v9', JSON.stringify(projects));
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
        {/* HERO */}
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

        {/* 6 CORE SKILLS SHOWCASE (VERIFIED FROM 21-PAGE PDF) */}
        <SkillsMasterShowcase
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* INDEPENDENT PROJECTS DEDICATED SHOWCASE (CALM & SEPARATED UX) */}
        <ProjectShowcaseHub
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* MASTER GOOGLE DRIVE FILES & ASSETS VAULT */}
        <GoogleDriveMasterVault />

        {/* INTERACTIVE MARKETING FUNNEL & ROI ESTIMATOR */}
        <MarketingRoiCalculator />

        {/* 04 — SELECTED WORK & 05 — CASE STUDIES */}
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

        {/* 06 — CONTENT LAB (Reels, Carousels, Audio, 4K Visuals) */}
        <CreativeShowcaseHub
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 02 — INTRO (WHO AM I) & 08 — WHY ME & 09 — TOOLS & 10 — EDUCATION */}
        <About />

        {/* 07 — MY PROCESS (FROM IDEA TO IMPACT) */}
        <CreativeProcess />

        {/* 11 — CONTACT */}
        <ContactSection initialServiceOrProject={contactInitialService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Minimal Quick Action (Direct WhatsApp + Scroll to Top) */}
      <QuickFloatingAction />

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
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
