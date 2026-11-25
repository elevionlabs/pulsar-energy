import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Cpu, 
  SunMedium, 
  Gauge, 
  ShieldCheck, 
  Activity, 
  ArrowUpRight,
  BarChart, 
  Layers,
  Sparkles
} from 'lucide-react';

interface BentoGridProps {
  onOpenConsultation: () => void;
}

export const BentoGridDiferenciais: React.FC<BentoGridProps> = ({ onOpenConsultation }) => {
  return (
    <section id="eficiencia" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C61F37]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-[32px] sm:text-[46px] lg:text-[54px] font-normal tracking-[-0.03em] leading-[1.05] text-white mb-5 font-sans">
            Transformamos a energia de um custo incontrolável em uma <span className="font-serif-italic text-white/95">alavanca de lucro</span>.
          </h2>
          <p className="text-[15.5px] sm:text-[17px] text-[#A9A9AE] font-light leading-relaxed">
            Sem promessas abstratas ou suposições. Atuamos com diagnóstico técnico rigoroso, automação avançada e projetos integrados que geram resultados financeiros verificáveis.
          </p>
        </div>

        {/* Bento Grid (Asymmetric Luxury Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Eficiência Energética (Porta Comercial & Prova de Valor no Presente) - 7 cols */}
          <div className="md:col-span-7 rounded-2xl bg-[#0B0B0D] border border-white/10 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group hover:border-[#ED2749]/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#C61F37]/15 to-transparent blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C61F37]/15 border border-[#C61F37]/30 flex items-center justify-center text-[#ED2749] mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono-tech uppercase tracking-wider text-[#A9A9AE] mb-2">
                Pilar 01 // Prova de Valor Imediata
              </div>
              <h3 className="text-[22px] sm:text-[26px] font-medium text-white mb-3 tracking-tight">
                Eficiência Energética Industrial
              </h3>
              <p className="text-[14.5px] text-[#A9A9AE] font-light leading-relaxed mb-6 max-w-lg">
                Nossa principal porta comercial. Identificamos gargalos ocultos em ar comprimido, motores de alto rendimento, vapor, refrigeração e iluminação fabril com protocolo de medição PIMVP / EVO.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.08]">
              <div className="p-3 rounded-lg bg-white/[0.02]">
                <div className="text-[17px] font-bold text-white font-sans">-15% a -32%</div>
                <div className="text-[11px] text-[#A9A9AE]">Redução no consumo</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02]">
                <div className="text-[17px] font-bold text-white font-sans">&lt; 14 Meses</div>
                <div className="text-[11px] text-[#A9A9AE]">Payback médio</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] col-span-2 sm:col-span-1">
                <div className="text-[17px] font-bold text-[#ED2749] font-sans">100% Auditável</div>
                <div className="text-[11px] text-[#A9A9AE]">M&V ISO 50001</div>
              </div>
            </div>
          </div>

          {/* Card 2: Automação Industrial & Controle Integrado - 5 cols */}
          <div className="md:col-span-5 rounded-2xl bg-[#0B0B0D] border border-white/10 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group hover:border-[#ED2749]/40 transition-all duration-300">
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-radial from-[#751923]/25 to-transparent blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-white mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono-tech uppercase tracking-wider text-[#A9A9AE] mb-2">
                Pilar 02 // Controle & Integração
              </div>
              <h3 className="text-[22px] sm:text-[26px] font-medium text-white mb-3 tracking-tight">
                Automação & Controle de Processos
              </h3>
              <p className="text-[14.5px] text-[#A9A9AE] font-light leading-relaxed mb-4">
                Fortalece o controle e o desempenho da operação. Integração de CLPs, sistemas SCADA, inversores com malha fechada e telemetria IoT de chão de fábrica.
              </p>
            </div>

            <ul className="space-y-2 pt-4 border-t border-white/[0.08] text-[12.5px] text-white/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED2749]" />
                Modulação automática de carga sob demanda
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED2749]" />
                Mitigação de paradas não programadas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED2749]" />
                Dashboards de telemetria em tempo real
              </li>
            </ul>
          </div>

          {/* Card 3: Desenvolvimento de Projetos em Energia Renovável - 6 cols */}
          <div className="md:col-span-6 rounded-2xl bg-[#0B0B0D] border border-white/10 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group hover:border-[#ED2749]/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-[#ED2749] mb-6">
                <SunMedium className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono-tech uppercase tracking-wider text-[#A9A9AE] mb-2">
                Pilar 03 // Transição & Futuro
              </div>
              <h3 className="text-[22px] sm:text-[26px] font-medium text-white mb-3 tracking-tight">
                Projetos em Energia Renovável
              </h3>
              <p className="text-[14.5px] text-[#A9A9AE] font-light leading-relaxed mb-4">
                Desenvolvimento completo de usinas solares de solo e cobertura para autoprodução ou mercado livre, cogeração a biomassa, biogás e estudos de viabilidade técnica e regulatória.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
              <span className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] text-white/70 font-mono-tech">
                Autoprodução de Energia
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] text-white/70 font-mono-tech">
                Mercado Livre (ACL)
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] text-white/70 font-mono-tech">
                Sistemas BESS (Baterias)
              </span>
            </div>
          </div>

          {/* Card 4: Rigor Técnico & Integridade nas Relações - 6 cols */}
          <div className="md:col-span-6 rounded-2xl bg-gradient-to-br from-[#0D0D10] to-[#08080A] border border-white/10 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group hover:border-[#ED2749]/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#ED2749]/10 border border-[#ED2749]/20 flex items-center justify-center text-[#ED2749] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono-tech uppercase tracking-wider text-[#A9A9AE] mb-2">
                Pilar 04 // Princípio Inegociável
              </div>
              <h3 className="text-[22px] sm:text-[26px] font-medium text-white mb-3 tracking-tight">
                Rigor Técnico & Sem Conflito de Interesse
              </h3>
              <p className="text-[14.5px] text-[#A9A9AE] font-light leading-relaxed mb-4">
                Nossa remuneração e reputação são baseadas na entrega de engenharia legítima e ganhos reais. Separamos reconhecimento profissional de comissões de fabricantes, garantindo a melhor solução para o cliente.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[12px] text-[#A9A9AE] font-mono-tech">
                Decisões 100% sustentadas por dados
              </span>
              <button
                onClick={onOpenConsultation}
                className="text-[12.5px] text-white hover:text-[#ED2749] font-medium flex items-center gap-1 transition-colors"
              >
                <span>Solicitar diagnóstico</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
