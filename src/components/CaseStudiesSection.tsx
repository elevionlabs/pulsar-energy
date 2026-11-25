import React from 'react';
import { Quote, Building2, TrendingDown, Clock, ShieldCheck, CheckCircle } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const cases = [
    {
      sector: 'Metalurgia & Laminação',
      plant: 'Planta de Aços Especiais (Sul do Brasil)',
      badge: 'Eficiência + Automação SCADA',
      challenge: 'Altos picos de demanda em fornos elétricos e desperdício térmico de 28% no sistema de resfriamento.',
      solution: 'Implementação de controle preditivo em malha fechada nos inversores e recuperação de calor de processo.',
      results: {
        savings: 'R$ 2.140.000 / ano',
        reduction: '21.4% de redução global',
        payback: '9.2 meses',
      },
      quote: 'A Pulsar trouxe uma engenharia que fala a língua da operação da empresa e da diretoria financeira. A redução veio no primeiro mês.',
      author: 'Eng. Ricardo Silveira',
      role: 'Diretor de Operações e Manutenção',
    },
    {
      sector: 'Indústria Química & Polímeros',
      plant: 'Complexo Petroquímico',
      badge: 'Utilidades & Ar Comprimido',
      challenge: 'Rede de ar comprimido operando com queda de pressão severa e alto custo em compressores de parafuso.',
      solution: 'Reengenharia pneumática, eliminação de vazamentos com ultrassom e automação de cascata com CLP.',
      results: {
        savings: 'R$ 890.000 / ano',
        reduction: '34.8% no ar comprimido',
        payback: '6.5 meses',
      },
      quote: 'Além da economia expressiva, estabilizamos a pressão da linha, eliminando paradas na linha de embalagem.',
      author: 'Mariana Duarte',
      role: 'Gerente de Utilidades Industriais',
    },
    {
      sector: 'Alimentos & Frigorífico',
      plant: 'Unidade Industrial de Processamento',
      badge: 'Autoprodução Solar + Frio',
      challenge: 'Tarifa de ponta onerando o custo operacional das câmaras frigoríficas de amônia.',
      solution: 'Sistema solar de autoprodução de 2.8 MWp combinado a retrofit térmico e modulação de chillers.',
      results: {
        savings: 'R$ 3.650.000 / ano',
        reduction: '42% na fatura líquida',
        payback: '3.1 anos (CAPEX solar)',
      },
      quote: 'O rigor técnico nas medições nos deu total segurança para aprovar o investimento junto ao conselho de administração.',
      author: 'Carlos Alberto Mendes',
      role: 'CFO & Diretor Administrativo',
    },
  ];

  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Soft Ambient Red Illumination */}
      <div className="absolute top-1/4 right-1/4 w-[550px] sm:w-[850px] h-[350px] sm:h-[450px] bg-[#ED2749]/[0.07] blur-[140px] sm:blur-[180px] rounded-full pointer-events-none -z-0" />
      <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-[#C61F37]/[0.06] blur-[130px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[32px] sm:text-[44px] font-normal tracking-tight text-white font-sans">
            A prova de valor através de <span className="font-serif-italic">dados auditados</span>.
          </h2>
          <p className="text-[14.5px] text-[#A9A9AE] font-light mt-3">
            Indústrias que transformaram energia em vantagem competitiva e rentabilidade.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0B0B0D] border border-white/10 p-7 flex flex-col justify-between hover:border-[#ED2749]/40 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono-tech uppercase text-[#ED2749] bg-[#C61F37]/15 px-2.5 py-0.5 rounded border border-[#C61F37]/30">
                    {item.sector}
                  </span>
                  <span className="text-[11px] text-[#A9A9AE] font-mono-tech">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-[18px] font-semibold text-white mb-3">
                  {item.plant}
                </h3>

                <p className="text-[13.5px] text-[#A9A9AE] font-light mb-6 leading-relaxed">
                  {item.solution}
                </p>

                {/* Key Results Badge Box */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6 space-y-2">
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-[#A9A9AE] font-light">Economia Gerada:</span>
                    <span className="font-bold text-white font-sans">{item.results.savings}</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-[#A9A9AE] font-light">Redução de Consumo:</span>
                    <span className="font-semibold text-[#ED2749]">{item.results.reduction}</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-[#A9A9AE] font-light">Payback Real:</span>
                    <span className="font-semibold text-white/90">{item.results.payback}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative pl-4 border-l-2 border-[#ED2749]/60 italic text-[13px] text-white/80 font-light mb-6">
                  "{item.quote}"
                </div>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-white font-mono-tech text-[12px] font-bold">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-white">{item.author}</div>
                  <div className="text-[11px] text-[#A9A9AE] font-light">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
