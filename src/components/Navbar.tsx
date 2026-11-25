import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PulsarLogo } from './PulsarLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
  onNavigate?: (targetId: string, tabIndex?: number) => void;
  activeSolutionTab?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onNavigate, activeSolutionTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Fluxo', href: '#fluxo', targetId: 'fluxo' },
    { label: 'Eficiência Energética', href: '#eficiencia', targetId: 'solucoes', tabIndex: 0 },
    { label: 'Automação', href: '#automacao', targetId: 'solucoes', tabIndex: 1 },
    { label: 'Projetos Renováveis', href: '#renovaveis', targetId: 'solucoes', tabIndex: 2 },
    { label: 'Parcerias', href: '#parcerias', targetId: 'parcerias' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { label: string; href: string; targetId: string; tabIndex?: number }
  ) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(link.targetId, link.tabIndex);
    } else {
      const el = document.getElementById(link.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090A]/90 backdrop-blur-md border-b border-white/10 py-3 sm:py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#050505]/90 to-transparent py-4 sm:py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Pulsar Energy Official Brand Identity */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group focus:outline-none shrink-0"
          aria-label="Pulsar Energy"
        >
          <PulsarLogo height={48} className="h-10 sm:h-12 lg:h-[52px]" />
        </a>

        {/* Desktop Institutional Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-[13.5px] font-medium text-[#A9A9AE] hover:text-white transition-colors relative py-1 group cursor-pointer"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ED2749] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            id="nav-cta-button"
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-medium text-white transition-all duration-300 focus:outline-none cursor-pointer"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ED2749] animate-ping" />
            <span>Fale com um especialista</span>
            <ArrowUpRight className="w-4 h-4 text-[#A9A9AE] transition-transform duration-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

            {/* Subtle red hover glow overlay */}
            <span className="absolute inset-0 rounded-full bg-[#C61F37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-[#A9A9AE] hover:text-white active:bg-white/10 focus:outline-none rounded-xl border border-white/10 transition-colors"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0B0B0E]/98 backdrop-blur-2xl border-b border-white/15 px-5 py-6 flex flex-col gap-2 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-[15px] font-medium text-white/90 active:text-white py-3 px-3 rounded-xl hover:bg-white/[0.05] active:bg-white/[0.08] border-b border-white/5 flex items-center justify-between cursor-pointer transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#ED2749]" />
              </a>
            ))}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 rounded-full bg-[#C61F37] hover:bg-[#ED2749] active:bg-[#C61F37] text-white text-[14.5px] font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#C61F37]/30 transition-colors cursor-pointer"
              >
                <span>Fale com um especialista</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
