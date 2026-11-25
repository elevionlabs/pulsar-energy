import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export const TransformationMatrix: React.FC = () => {
  return (
    <section id="fluxo" className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-28 bg-[#050505] border-y border-white/[0.08] overflow-hidden scroll-mt-24">
      {/* Soft Ambient Red Illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[350px] sm:h-[450px] bg-[#ED2749]/[0.08] blur-[140px] sm:blur-[180px] rounded-full pointer-events-none -z-0" />
      <div className="absolute -top-24 right-10 w-[300px] h-[300px] bg-[#C61F37]/[0.06] blur-[120px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-[30px] xs:text-[36px] sm:text-[44px] md:text-[48px] font-normal text-white tracking-[-0.03em] font-sans leading-[1.16]">
            <span className="mr-2 sm:mr-2.5 inline-block">A</span>jornada do custo incerto ao <span className="font-serif-italic font-normal">controle total</span>.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#C4C4CA] font-light mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto">
            Entenda como a Pulsar reestrutura o fluxo de energia na sua planta industrial.
          </p>
        </div>

        {/* 3-Step Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 relative">
          
          {/* Card 1: ANTES */}
          <div className="rounded-2xl bg-[#0B0B0D] border border-red-500/20 p-6 sm:p-8 flex flex-col justify-between relative shadow-lg">
            <div className="flex items-center justify-between mb-6 sm:mb-7">
              <span className="text-[12px] sm:text-[12.5px] font-mono-tech font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-3 py-1.5 rounded border border-red-500/20">
                01. Cenário Anterior
              </span>
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 shrink-0" />
            </div>

            <div>
              <h3 className="text-[21px] sm:text-[23px] lg:text-[24px] font-semibold text-white tracking-tight leading-snug mb-4 sm:mb-5">
                Opacidade & Custos Crescentes
              </h3>
              <ul className="space-y-3.5 sm:space-y-4 text-[15px] sm:text-[16px] text-[#B5B5BC] font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 font-bold shrink-0 text-sm sm:text-base">✕</span>
                  <span>Fatura de energia crescendo sem explicação clara da causa raiz operacional.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 font-bold shrink-0 text-sm sm:text-base">✕</span>
                  <span>Baixa clareza sobre perdas térmicas, ar comprimido e motores ineficientes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 font-bold shrink-0 text-sm sm:text-base">✕</span>
                  <span>Dificuldade da diretoria em priorizar investimentos com payback comprovado.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-10 pt-4 sm:pt-5 border-t border-white/[0.08] text-[12px] sm:text-[12.5px] font-mono-tech text-red-300/80 font-medium">
              SITUAÇÃO // RISCO FINANCEIRO
            </div>
          </div>

          {/* Card 2: MÉTODO PULSAR (Highlight) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#140A0D] to-[#0B0B0D] border-2 border-[#ED2749]/50 p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl shadow-[#C61F37]/20 transform lg:-translate-y-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C61F37] text-white text-[11px] sm:text-[11.5px] font-mono-tech uppercase tracking-wider font-bold shadow-md whitespace-nowrap">
              Engenharia Aplicada
            </div>

            <div className="flex items-center justify-between mb-6 sm:mb-7">
              <span className="text-[12px] sm:text-[12.5px] font-mono-tech font-bold uppercase tracking-wider text-[#ED2749] bg-[#C61F37]/20 px-3 py-1.5 rounded border border-[#C61F37]/30">
                02. Ação da Pulsar
              </span>
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#ED2749] shrink-0" />
            </div>

            <div>
              <h3 className="text-[21px] sm:text-[23px] lg:text-[24px] font-semibold text-white tracking-tight leading-snug mb-4 sm:mb-5">
                Diagnóstico + Automação + Projeto
              </h3>
              <ul className="space-y-3.5 sm:space-y-4 text-[15px] sm:text-[16px] text-white/95 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#ED2749] mt-1 font-bold shrink-0 text-sm sm:text-base">➔</span>
                  <span>Diagnóstico técnico rigoroso em campo com telemetria e termografia avançada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ED2749] mt-1 font-bold shrink-0 text-sm sm:text-base">➔</span>
                  <span>Engenharia de detalhamento e automação industrial com controle em malha fechada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ED2749] mt-1 font-bold shrink-0 text-sm sm:text-base">➔</span>
                  <span>Visão energética integrada com protocolo internacional de M&V (ISO 50001).</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-10 pt-4 sm:pt-5 border-t border-[#ED2749]/30 text-[12px] sm:text-[12.5px] font-mono-tech text-[#ED2749] font-medium">
              MÉTODO // ENGENHARIA SEM JARGÃO
            </div>
          </div>

          {/* Card 3: DEPOIS */}
          <div className="rounded-2xl bg-[#0B0B0D] border border-emerald-500/20 p-6 sm:p-8 flex flex-col justify-between relative shadow-lg">
            <div className="flex items-center justify-between mb-6 sm:mb-7">
              <span className="text-[12px] sm:text-[12.5px] font-mono-tech font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded border border-emerald-500/20">
                03. Resultado Medido
              </span>
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 shrink-0" />
            </div>

            <div>
              <h3 className="text-[21px] sm:text-[23px] lg:text-[24px] font-semibold text-white tracking-tight leading-snug mb-4 sm:mb-5">
                Previsibilidade & Lucro Operacional
              </h3>
              <ul className="space-y-3.5 sm:space-y-4 text-[15px] sm:text-[16px] text-[#B5B5BC] font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 font-bold shrink-0 text-sm sm:text-base">✓</span>
                  <span>Decisão clara e rápida baseada em dados econômicos e operacionais auditados.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 font-bold shrink-0 text-sm sm:text-base">✓</span>
                  <span>Redução imediata de desperdício com payback inferior ao previsto em projeto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 font-bold shrink-0 text-sm sm:text-base">✓</span>
                  <span>Infraestrutura preparada para transição para energias renováveis e autoprodução.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-10 pt-4 sm:pt-5 border-t border-white/[0.08] text-[12px] sm:text-[12.5px] font-mono-tech text-emerald-400/90 font-medium">
              RESULTADO // PERFORMANCE CONTÍNUA
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
