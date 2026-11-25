import React from 'react';
import { Shield, Zap, TrendingUp, Cpu, Award, BarChart3, CheckCircle2 } from 'lucide-react';

export const AuthorityMarquee: React.FC = () => {
  const stats = [
    { value: '+45.000 MWh', label: 'Energia otimizada anualmente', icon: Zap },
    { value: 'R$ 18.4M+', label: 'Economia comprovada em clientes', icon: TrendingUp },
    { value: '99.8%', label: 'Confiabilidade em sistemas críticos', icon: Shield },
    { value: '100% Medido', label: 'Protocolo Internacional PIMVP', icon: Award },
    { value: '+240 Plantas', label: 'Auditorias & projetos industriais', icon: Cpu },
    { value: 'Norma ISO 50001', label: 'Conformidade e gestão contínua', icon: BarChart3 },
  ];

  return (
    <section className="relative w-full py-10 bg-[#050505] border-y border-white/[0.08] overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start gap-1 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ED2749]/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-[#ED2749] mb-1">
                  <Icon className="w-4 h-4" />
                  <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#A9A9AE]">
                    Métrica
                  </span>
                </div>
                <div className="text-[19px] sm:text-[21px] font-bold text-white tracking-tight font-sans">
                  {stat.value}
                </div>
                <div className="text-[11.5px] text-[#A9A9AE] font-light leading-snug">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
