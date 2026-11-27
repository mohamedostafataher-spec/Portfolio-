/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Project } from './types';
import { INITIAL_PROJECTS } from './data/portfolioData';

import { OwnerProvider, useOwner } from './context/OwnerContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

import { TopAdminBar } from './components/TopAdminBar';
import { PortfolioHeader } from './components/PortfolioHeader';
import { Hero } from './components/Hero';
const MasterPortfolioSection = lazy(() => import('./components/MasterPortfolioSection').then((m) => ({ default: m.MasterPortfolioSection })));
const CapabilitiesSection = lazy(() => import('./components/CapabilitiesSection').then((m) => ({ default: m.CapabilitiesSection })));
import { CreativeProcess } from './components/CreativeProcess';
const About = lazy(() => import('./components/About').then((m) => ({ default: m.About })));
const LiveProjects = lazy(() => import('./components/LiveProjects').then((m) => ({ default: m.LiveProjects })));
const AppsSection = lazy(() => import('./components/AppsSection').then((m) => ({ default: m.AppsSection })));
const ChannelWorksSection = lazy(() => import('./components/ChannelWorksSection').then((m) => ({ default: m.ChannelWorksSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then((m) => ({ default: m.ContactSection })));
const FaqSection = lazy(() => import('./components/FaqSection').then((m) => ({ default: m.FaqSection })));
import { GoogleDriveMasterVault } from './components/GoogleDriveMasterVault';
const MotionGraphicsDecorations = lazy(() => import('./components/MotionGraphicsDecorations').then((m) => ({ default: m.MotionGraphicsDecorations })));
const Footer = lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })));
import { QuickFloatingAction } from './components/QuickFloatingAction';

const ProjectModal = lazy(() => import('./components/ProjectModal').then((m) => ({ default: m.ProjectModal })));
const AddProjectModal = lazy(() => import('./components/AddProjectModal').then((m) => ({ default: m.AddProjectModal })));
const EditProjectModal = lazy(() => import('./components/EditProjectModal').then((m) => ({ default: m.EditProjectModal })));
const ResumeModal = lazy(() => import('./components/ResumeModal').then((m) => ({ default: m.ResumeModal })));
const PdfDeckModal = lazy(() => import('./components/PdfDeckModal').then((m) => ({ default: m.PdfDeckModal })));
const PortfolioDashboardModal = lazy(() => import('./components/PortfolioDashboardModal').then((m) => ({ default: m.PortfolioDashboardModal })));
const OwnerLoginModal = lazy(() => import('./components/OwnerLoginModal').then((m) => ({ default: m.OwnerLoginModal })));

export function PortfolioApp() {
  const { openLoginModal } = useOwner();
  const { isAr } = useLanguage();

  // Canonical projects source: always load the latest INITIAL_PROJECTS,
  // while preserving any custom projects dynamically added by the owner.
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      // Clear out all stale legacy cache keys from previous versions
      for (let i = 0; i <= 50; i++) {
        localStorage.removeItem(`mm_portfolio_projects_v${i}`);
      }
      localStorage.removeItem('mm_portfolio_projects_v36');

      // Check for user-created custom projects
      const customSaved = localStorage.getItem('mm_portfolio_custom_user_projects');
      if (customSaved) {
        const customProjects: Project[] = JSON.parse(customSaved);
        if (Array.isArray(customProjects) && customProjects.length > 0) {
          const initialIds = new Set(INITIAL_PROJECTS.map((p) => p.id));
          const trulyCustom = customProjects.filter((p) => !initialIds.has(p.id));
          return [...trulyCustom, ...INITIAL_PROJECTS];
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

  // Sync state if INITIAL_PROJECTS updates in hot code reload
  useEffect(() => {
    setProjects((prev) => {
      const initialIds = new Set(INITIAL_PROJECTS.map((p) => p.id));
      const customOnly = prev.filter((p) => !initialIds.has(p.id));
      return [...customOnly, ...INITIAL_PROJECTS];
    });
  }, []);

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
    try {
      const customSaved = localStorage.getItem('mm_portfolio_custom_user_projects');
      const customProjects: Project[] = customSaved ? JSON.parse(customSaved) : [];
      localStorage.setItem(
        'mm_portfolio_custom_user_projects',
        JSON.stringify([newProject, ...customProjects])
      );
    } catch {
      // ignore
    }
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
      <Suspense fallback={null}><MotionGraphicsDecorations /></Suspense>

      {/* 00 — Top Admin Bar (Shown ONLY when Mohamed is authenticated as Owner) */}
      <TopAdminBar
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenDashboard={() => setIsDashboardModalOpen(true)}
      />

      {/* Main Header / Portfolio Identity */}
      <PortfolioHeader
        onOpenContact={() => handleOpenContact('Commercial Collaboration')}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenDashboard={() => setIsDashboardModalOpen(true)}
      />

      {/* Clean, Streamlined & Professional Master Layout */}
      <main className="flex-1 relative z-10">
        {/* 01 — HERO & INTERACTIVE SHOWREEL */}
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
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>

        {/* 02 — ABOUT & CREDENTIALS (Placed before projects per user instruction) */}
        <About
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenContact={() => handleOpenContact('Commercial Collaboration')}
          onOpenPdfDeck={() => setIsPdfModalOpen(true)}
        />

        {/* 03 — MY SERVICES & ENGAGEMENT PACKAGES (4 Pillars + Starter, Growth, Custom Packs) */}
        <CapabilitiesSection
          onSelectService={(serviceName) => handleOpenContact(serviceName)}
        />

        {/* 04 — MASTER PROJECTS HUB (3 Dedicated Corners: Videos, Carousels, SOSTAC Decks + All Projects) */}
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

        {/* 05 — APPS I BUILT & SHIPPED (Nilo + Basma, real APKs) */}
        <AppsSection />

        <LiveProjects />

        {/* 06 — LATEST WORK FROM THE YOUTUBE CHANNEL */}
        <ChannelWorksSection />

        {/* 05 — THE CREATIVE & STRATEGIC PROCESS (FROM BRIEF TO IMPACT) */}

        {/* 06 — FAQ (الأسئلة الشائعة) */}
        <FaqSection />

        {/* 07 — CONTACT ME */}
        <ContactSection initialServiceOrProject={contactInitialService} />

        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
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
      </Suspense>
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
