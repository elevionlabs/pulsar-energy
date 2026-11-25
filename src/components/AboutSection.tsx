import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="sobre"
      className="relative flex flex-col justify-center pt-12 sm:pt-18 lg:pt-20 pb-16 sm:pb-28 lg:pb-32 bg-[#050505] border-t border-white/[0.08] overflow-hidden scroll-mt-20 text-center"
    >
      {/* Subtle Technical Ambient Lighting (Pulsar Deep Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[350px] sm:h-[480px] bg-[#ED2749]/[0.06] blur-[140px] sm:blur-[190px] rounded-full pointer-events-none -z-0" />
      
      {/* Very faint technical grid pattern */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Decorative Subtle Precision Horizon Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center">
        
        {/* Headline Principal */}
        <h2 className="text-center text-[28px] xs:text-[34px] sm:text-[48px] md:text-[58px] lg:text-[68px] font-normal tracking-[-0.035em] text-white leading-[1.16] sm:leading-[1.12] mb-5 sm:mb-8 max-w-[860px]">
          Sua operação pode ser{' '}
          <span className="font-serif-italic font-normal text-white relative inline-block pb-3 sm:pb-4">
            mais eficiente.
            <span className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[2.5px] bg-gradient-to-r from-[#C61F37] via-[#ED2749] to-transparent opacity-85 rounded-full pointer-events-none" />
          </span>{' '}
          <span className="block sm:inline">Nós mostramos como.</span>
        </h2>

        {/* 3. Subtítulo */}
        <p className="text-[#A9A9AE] text-[14px] xs:text-[15.5px] sm:text-[17.5px] md:text-[19px] font-light leading-[1.65] max-w-[720px] mb-7 sm:mb-10 text-center">
          Identificamos oportunidades para reduzir desperdícios, otimizar processos e melhorar o desempenho energético da sua indústria.
        </p>

        {/* 4. Pergunta de Transição */}
        <p className="text-white/90 text-[13.5px] sm:text-[16.5px] font-medium tracking-tight mb-6 sm:mb-8">
          Vamos identificar as oportunidades da sua operação?
        </p>

        {/* 5. CTA Principal */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <button
            id="final-cta-button"
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-10 py-3.5 sm:py-4.5 rounded-full text-[14px] sm:text-[16px] font-semibold text-white bg-[#C61F37] hover:bg-[#ED2749] active:bg-[#C61F37] transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-[#C61F37]/35 focus:outline-none w-full sm:w-auto cursor-pointer"
          >
            <span>FALE COM NOSSOS ENGENHEIROS</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
            <div className="absolute inset-0 rounded-full bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </button>

          {/* 6. Linha de Credibilidade */}
          <div className="mt-5 sm:mt-7 text-[11px] sm:text-[13px] text-[#A9A9AE]/80 font-mono-tech tracking-wide flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span>Engenharia aplicada</span>
            <span className="text-[#ED2749]">•</span>
            <span>Soluções personalizadas</span>
            <span className="text-[#ED2749]">•</span>
            <span>Foco em resultado</span>
          </div>
        </div>

      </div>
    </section>
  );
};

