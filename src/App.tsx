import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TransformationMatrix } from './components/TransformationMatrix';
import { SolutionsSection } from './components/SolutionsSection';
import { EnergyEfficiencyCalculator } from './components/EnergyEfficiencyCalculator';
import { PartnershipsSection } from './components/PartnershipsSection';
import { AboutSection } from './components/AboutSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { FadeInSection } from './components/FadeInSection';
import {
  ScrollProgressBar,
  ScrollFloatingWidget,
  ScrollAmbientParallax,
} from './components/ScrollExperience';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);
  const [modalInitialData, setModalInitialData] = useState<{
    sector?: string;
    monthlyBill?: number;
    estimatedSavings?: number;
  }>({});

  const handleOpenConsultation = () => {
    setModalInitialData({});
    setIsContactModalOpen(true);
  };

  const handleOpenConsultationWithData = (data: {
    sector: string;
    monthlyBill: number;
    estimatedSavings: number;
  }) => {
    setModalInitialData(data);
    setIsContactModalOpen(true);
  };

  const handleNavigate = (targetId: string, tabIndex?: number) => {
    if (tabIndex !== undefined) {
      setActiveSolutionTab(tabIndex);
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreSolutions = () => {
    handleNavigate('solucoes', 0);
  };

  // Ensure page resets to top on initial load and clears any leftover hash
  useEffect(() => {
    // 1. Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Clear any lingering hash from URL to prevent unwanted auto-scrolling on reload
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // 3. Immediately scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const r1 = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    const r2 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 80);

    return () => {
      cancelAnimationFrame(r1);
      clearTimeout(r2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F7F7F7] flex flex-col font-sans selection:bg-[#C61F37] selection:text-white overflow-x-hidden relative">
      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Subtle Ambient Parallax Red Glow shifting on scroll up/down */}
      <ScrollAmbientParallax />

      {/* 1. Transparent Fixed Header / Navbar */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onNavigate={handleNavigate}
        activeSolutionTab={activeSolutionTab}
      />

      <main className="flex-1 w-full overflow-x-hidden relative z-10">
        {/* 1. Flagship Cinematic Hero Section */}
        <HeroSection
          onExploreSolutions={handleExploreSolutions}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 2. Matriz de Transformação Operacional */}
        <FadeInSection>
          <TransformationMatrix />
        </FadeInSection>

        {/* 3. Portfólio de Soluções e Engenharia Integrada */}
        <FadeInSection>
          <SolutionsSection
            activeTab={activeSolutionTab}
            onTabChange={setActiveSolutionTab}
            onOpenConsultation={handleOpenConsultation}
          />
        </FadeInSection>

        {/* 4. Simulador Interativo de Economia e Payback */}
        <FadeInSection>
          <EnergyEfficiencyCalculator
            onOpenConsultationWithData={handleOpenConsultationWithData}
          />
        </FadeInSection>

        {/* 5. Nossas Parcerias (Credibilidade e Relacionamentos Estratégicos) */}
        <FadeInSection>
          <PartnershipsSection />
        </FadeInSection>

        {/* 6. Fechamento Comercial e CTA Final */}
        <FadeInSection>
          <AboutSection onOpenConsultation={handleOpenConsultation} />
        </FadeInSection>
      </main>

      {/* Technical Footer */}
      <FadeInSection>
        <Footer onNavigate={handleNavigate} />
      </FadeInSection>

      {/* Interactive Floating Quick-Scroll & Progress Widget */}
      <ScrollFloatingWidget />

      {/* Consultation Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialData={modalInitialData}
      />
    </div>
  );
}
