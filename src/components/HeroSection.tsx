import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { AnimatedCounter, AnimatedRangeCounter } from './AnimatedCounter';

interface HeroSectionProps {
  onExploreSolutions: () => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSolutions,
  onOpenConsultation,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 overflow-hidden"
    >
      {/* 1. Official Hero Background Image with Balanced Contrast Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Energia Solar e Eólica - Pulsar Energy"
          className="w-full h-full object-cover object-[68%_center] sm:object-center transform scale-[1.01]"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Darkening Gradient Overlays: calibrated to reveal the wind turbine & solar infrastructure while maintaining high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#050505]/85 via-[#050505]/55 sm:via-[#050505]/65 to-[#050505]/75 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/25 to-transparent sm:via-[#050505]/30 sm:to-[#050505]/50" />
      </div>

      {/* 2. Main Hero Layout (Focused on Clear Headline & Background Visibility) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center flex-1 z-10">
        
        {/* Left Column: Text & Strategic Callouts */}
        <div className="lg:col-span-8 flex flex-col justify-center text-left py-4 sm:py-10">
          {/* Master Headline with Editorial Contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-normal text-[42px] min-[360px]:text-[46px] min-[400px]:text-[50px] sm:text-[56px] md:text-[66px] lg:text-[76px] tracking-[-0.035em] leading-[1.06] sm:leading-[1.04] mb-5 sm:mb-6 max-w-[720px]"
          >
            Engenharia para reduzir custos e aumentar a{' '}
            <span className="font-serif-italic font-normal text-white/95 relative inline-block pb-3 sm:pb-4">
              eficiência da sua empresa.
              {/* Perfectly offset underline accent situated cleanly below descenders */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[2.5px] bg-gradient-to-r from-[#C61F37] via-[#ED2749] to-transparent opacity-85 rounded-full pointer-events-none" />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#D1D1D6] text-[14px] xs:text-[15px] sm:text-[16.5px] md:text-[18px] leading-[1.55] sm:leading-[1.6] max-w-[580px] mb-6 sm:mb-10 font-light drop-shadow-sm"
          >
            Projetamos e implementamos soluções de eficiência energética, automação industrial e energia solar para eliminar desperdícios e elevar a rentabilidade de médias e grandes indústrias.
          </motion.p>

          {/* CTAs (Primary & Secondary) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <button
              id="hero-primary-cta"
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-3.5 rounded-full text-[14px] sm:text-[14.5px] font-semibold text-white bg-[#C61F37] hover:bg-[#ED2749] active:bg-[#C61F37] transition-all duration-300 transform sm:hover:-translate-y-0.5 shadow-lg shadow-[#C61F37]/35 focus:outline-none cursor-pointer w-full sm:w-auto"
            >
              <span>Solicitar Diagnóstico Preliminar</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-full bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </button>

            {/* Secondary CTA */}
            <button
              id="hero-secondary-cta"
              onClick={onExploreSolutions}
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-[14px] sm:text-[14.5px] font-medium text-white/90 bg-black/40 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/[0.1] active:bg-white/[0.15] transition-all duration-300 focus:outline-none cursor-pointer w-full sm:w-auto"
            >
              <span>Conhecer Soluções</span>
              <ChevronRight className="w-4 h-4 text-[#A9A9AE] transition-transform duration-200 group-hover:text-white group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          {/* Strategic KPI Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-3 gap-2 sm:gap-6 pt-5 sm:pt-6 border-t border-white/[0.12] max-w-[560px]"
          >
            <div className="p-2 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent">
              <div className="text-[16px] xs:text-[19px] sm:text-[24px] font-bold text-white tracking-tight font-sans">
                <AnimatedRangeCounter
                  toVal1={12}
                  toVal2={35}
                  prefix="-"
                  separator="% a -"
                  suffix="%"
                  duration={1.8}
                />
              </div>
              <div className="text-[10px] xs:text-[11px] sm:text-[12px] text-[#A9A9AE] font-light mt-0.5 leading-tight">
                Economia em utilidades
              </div>
            </div>

            <div className="p-2 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent">
              <div className="text-[16px] xs:text-[19px] sm:text-[24px] font-bold text-white tracking-tight font-sans flex items-center gap-1">
                <AnimatedCounter
                  to={99.8}
                  decimals={1}
                  suffix="%"
                  duration={1.8}
                />
              </div>
              <div className="text-[10px] xs:text-[11px] sm:text-[12px] text-[#A9A9AE] font-light mt-0.5 leading-tight">
                Confiabilidade operacional
              </div>
            </div>

            <div className="p-2 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent">
              <div className="text-[16px] xs:text-[19px] sm:text-[24px] font-bold text-[#ED2749] tracking-tight font-sans">
                Auditado
              </div>
              <div className="text-[10px] xs:text-[11px] sm:text-[12px] text-[#A9A9AE] font-light mt-0.5 leading-tight">
                PIMVP & ISO 50001
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* 3. Microcontent & Technical Line at the Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full pt-5 sm:pt-8 mt-4 sm:mt-6 border-t border-white/[0.08] z-10 flex flex-col md:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-[11px] sm:text-[12px] text-white/60 font-mono-tech tracking-tight">
          Engenharia aplicada à eficiência, confiabilidade e performance energética industrial.
        </p>
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 text-[10px] sm:text-[10.5px] text-white/50 font-mono-tech uppercase">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ED2749]"></span>
            PROTOCOLO PIMVP / EVO
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>NORMA ISO 50001</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>AUTOMAÇÃO SCADA & IOT</span>
        </div>
      </div>

    </section>
  );
};
