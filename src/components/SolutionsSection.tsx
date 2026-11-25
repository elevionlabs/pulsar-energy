import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Cpu, SunMedium, Check, ArrowRight, Gauge, Layers, ShieldCheck } from 'lucide-react';
import { AnimatedMetricValue } from './AnimatedCounter';

interface SolutionsSectionProps {
  onOpenConsultation: () => void;
  activeTab?: number;
  onTabChange?: (tab: number) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onOpenConsultation,
  activeTab: controlledActiveTab,
  onTabChange,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(0);

  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;
  const handleTabChange = (idx: number) => {
    if (onTabChange) {
      onTabChange(idx);
    } else {
      setInternalActiveTab(idx);
    }
  };

  const solutions = [
    {
      id: 'eficiencia',
      title: 'Eficiência Energética Industrial',
      category: 'Porta Comercial Principal',
      icon: Zap,
      headline: 'Eliminação cirúrgica de desperdícios em utilidades industriais.',
      description:
        'Intervenções com engenharia de alto nível nos maiores vetores de perda de energia da indústria: sistemas de ar comprimido, vapor, bombeamento, HVAC industrial e motores elétricos.',
      metrics: [
        { label: 'Economia Típica', value: '15% a 35%' },
        { label: 'Payback Estimado', value: '8 a 18 meses' },
        { label: 'Metodologia', value: 'PIMVP / EVO' },
      ],
      points: [
        'Diagnóstico ultrassônico de vazamentos em ar comprimido e purgadores de vapor.',
        'Retrofit inteligente de motobombas e ventiladores com conversores de frequência.',
        'Recuperação de calor residual em caldeiras e fornos industriais.',
        'Otimização tarifária e gestão do fator de potência e harmônicas.',
      ],
      tag: 'ROI Rápido',
      image: '/Imagem_eficiencia_energetica.png',
      imageFallback: '/Imagem_eficiencia_energetica.png',
      imageAlt: 'Auditoria e Eficiência Energética Industrial em Campo',
      badgeLabel: 'Inspeção em Campo',
      badgeSubtitle: 'DIAGNÓSTICO TÉCNICO',
      badgeDescription: 'Engenharia diagnóstica com instrumentação de precisão em planta fabril.',
      guarantee: 'Projetos respaldados por ART e validação com instrumentos certificados RBC / Inmetro.',
    },
    {
      id: 'automacao',
      title: 'Automação & Integração de Controle',
      category: 'Controle Operacional',
      icon: Cpu,
      headline: 'Sistemas inteligentes que regulam a demanda energética em tempo real.',
      description:
        'A automação é o elo que conecta a eficiência energética à confiabilidade do processo produtivo. Desenvolvemos malhas de controle avançadas, telemetria IoT e supervisórios SCADA.',
      metrics: [
        { label: 'Estabilidade de Processo', value: '+40%' },
        { label: 'Tempo de Resposta', value: '< 200ms' },
        { label: 'Compatibilidade', value: 'Siemens / Rockwell / Schneider' },
      ],
      points: [
        'Programação de CLPs e IHMs com algoritmos preditivos de controle de carga.',
        'Integração com sistemas legados da planta sem necessidade de parada fabril.',
        'Telemetria de grandezas elétricas por linha de produção e centro de custo.',
        'Alarmes inteligentes e corte preventivo de picos de demanda contratada.',
      ],
      tag: 'Estabilidade',
      image: '/Imagem automação.png',
      imageFallback: '/Imagem automação.png',
      imageAlt: 'Centro de Controle Operacional e Automação Industrial SCADA',
      badgeLabel: 'Topologia Integrada',
      badgeSubtitle: 'CLP • SCADA • IHM • CLOUD',
      badgeDescription: 'Controle determinístico em tempo real com integração vertical aos sistemas corporativos.',
      guarantee: 'Arquitetura homologada com rastreabilidade total, documentação funcional e testes FAT/SAT.',
    },
    {
      id: 'renovavel',
      title: 'Projetos em Energia Renovável',
      category: 'Estratégia & Futuro',
      icon: SunMedium,
      headline: 'Geração própria e independência com projetos estruturados de ponta a ponta.',
      description:
        'Engenharia completa para autoprodução industrial no Mercado Livre (ACL) ou Geração Distribuída. Estudos de viabilidade técnica, conexão com a concessionária e gestão de CAPEX.',
      metrics: [
        { label: 'Redução na Tarifa', value: 'Até 45%' },
        { label: 'Vida Útil dos Ativos', value: '25+ Anos' },
        { label: 'Sustentabilidade', value: 'Zero Emissões Escopo 2' },
      ],
      points: [
        'Usinas solares fotovoltaicas industriais de alta tensão (solo e telhado).',
        'Sistemas BESS (Baterias de Armazenamento) para peak shaving e backup.',
        'Projetos de cogeração a biomassa, biogás e gás natural.',
        'Engenharia do Proprietário e comissionamento de conexões à rede básica.',
      ],
      tag: 'Descarbonização',
      image: '/Energia solar.png',
      imageFallback: '/energia-solar.png',
      imageAlt: 'Usinas e Projetos de Engenharia Solar Fotovoltaica e Renovável',
      badgeLabel: 'Geração Renovável',
      badgeSubtitle: 'USINAS & AUTOPRODUÇÃO',
      badgeDescription: 'Projetos fotovoltaicos industriais de alta potência integrados ao sistema de distribuição.',
      guarantee: 'Projetos executivos com ART, homologação plena junto à concessionária e garantia de desempenho (PR).',
    },
  ];

  return (
    <section id="solucoes" className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-32 bg-[#050505] overflow-hidden scroll-mt-24">
      {/* Soft Ambient Red Illumination */}
      <div className="absolute top-24 left-1/4 -translate-x-1/2 w-[550px] sm:w-[850px] h-[350px] sm:h-[450px] bg-[#ED2749]/[0.07] blur-[140px] sm:blur-[180px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[450px] sm:w-[650px] h-[300px] sm:h-[400px] bg-[#C61F37]/[0.06] blur-[140px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6 text-left">
          <div className="max-w-2xl">
            <h2 className="text-[28px] xs:text-[34px] sm:text-[44px] lg:text-[50px] font-normal tracking-[-0.03em] text-white font-sans leading-tight">
              Soluções projetadas para a <span className="font-serif-italic font-normal">realidade da sua empresa</span>.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16.5px] text-[#BDBDC4] max-w-md font-light leading-relaxed">
            Da auditoria inicial ao comissionamento em campo, atuamos com rigor técnico em todas as etapas da cadeia energética industrial.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-6 sm:mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-1.5 rounded-2xl bg-[#0B0B0D] border border-white/10 shadow-2xl w-full max-w-md sm:max-w-none sm:w-fit">
            {solutions.map((sol, idx) => {
              const Icon = sol.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={sol.id}
                  onClick={() => handleTabChange(idx)}
                  className={`flex items-center justify-center sm:justify-start gap-2.5 px-4 sm:px-5 py-3 sm:py-3 rounded-xl text-[13.5px] sm:text-[14.5px] font-medium tracking-wide transition-all duration-300 text-center cursor-pointer min-h-[46px] ${
                    isActive
                      ? 'bg-[#C61F37] text-white shadow-xl shadow-[#C61F37]/35 font-semibold'
                      : 'text-[#A9A9AE] hover:text-white hover:bg-white/[0.04] active:bg-white/[0.06]'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#ED2749]'}`} />
                  <span className="leading-snug">{sol.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Solution Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={solutions[activeTab].id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl sm:rounded-3xl bg-[#0B0B0D] border border-white/10 p-6 sm:p-10 lg:p-12 relative overflow-hidden text-left shadow-2xl"
          >
            {/* Unified 2-Column Architecture for All Technical Solution Tabs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
              {/* Left Column: Complete Textual, Technical & Metrics Information */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#ED2749]/15 border border-[#ED2749]/30 text-[12px] sm:text-[12.5px] font-mono-tech text-[#ED2749]">
                      {solutions[activeTab].category}
                    </span>
                    <span className="text-[12px] sm:text-[12.5px] text-[#A9A9AE] font-mono-tech">
                      PADRÃO PULSAR
                    </span>
                  </div>

                  <h3 className="text-[22px] xs:text-[26px] sm:text-[34px] font-semibold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
                    {solutions[activeTab].headline}
                  </h3>

                  <p className="text-[15px] sm:text-[16.5px] text-[#C4C4CA] font-light leading-relaxed mb-6 sm:mb-7">
                    {solutions[activeTab].description}
                  </p>

                  <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
                    {solutions[activeTab].points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-[14.5px] sm:text-[15.5px] text-white/95 leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#C61F37]/20 flex items-center justify-center text-[#ED2749] mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Integrated Reference Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">
                    {solutions[activeTab].metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center sm:text-left">
                        <div className="text-[11px] sm:text-[11.5px] text-[#A9A9AE] font-mono-tech mb-1 uppercase tracking-wider leading-tight truncate">
                          {m.label}
                        </div>
                        <div className="text-[16px] xs:text-[18px] sm:text-[22px] font-bold text-white font-sans leading-tight">
                          <AnimatedMetricValue value={m.value} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Guarantee Box */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#C61F37]/10 border border-[#C61F37]/25 text-[13px] sm:text-[14px] text-white/90 mb-6 sm:mb-8 leading-relaxed">
                    <div className="font-semibold text-white mb-1.5 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#ED2749] shrink-0" />
                      <span>Garantia de Entrega Técnica</span>
                    </div>
                    {solutions[activeTab].guarantee}
                  </div>
                </div>

                <div className="pt-5 sm:pt-6 border-t border-white/[0.08] flex items-center">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.08] hover:bg-[#C61F37] active:bg-[#C61F37] border border-white/15 text-white text-[14px] sm:text-[15px] font-semibold transition-all duration-300 group cursor-pointer"
                  >
                    <span>Solicitar proposta técnica</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right Column: Dedicated Image Container for Solution */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="relative w-full h-full min-h-[220px] sm:min-h-[360px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-white/10 bg-[#08080A] shadow-2xl">
                  {/* Background Image with Fallback */}
                  <img
                    src={solutions[activeTab].image}
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = solutions[activeTab].imageFallback;
                      if (fallback && target.src !== fallback) {
                        target.src = fallback;
                      }
                    }}
                    alt={solutions[activeTab].imageAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle Technical Edge Lighting & Framing Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
