import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Clock, Leaf } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface CalculatorProps {
  onOpenConsultationWithData: (data: { sector: string; monthlyBill: number; estimatedSavings: number }) => void;
}

export const EnergyEfficiencyCalculator: React.FC<CalculatorProps> = ({
  onOpenConsultationWithData,
}) => {
  const [monthlyBill, setMonthlyBill] = useState<number>(5000);
  const [selectedSector, setSelectedSector] = useState<string>('alimentos');

  const sectors: Record<string, { label: string; wasteRate: number; payback: number; co2Factor: number }> = {
    metalurgia: { label: 'Siderurgia & Metalurgia', wasteRate: 0.18, payback: 12, co2Factor: 0.42 },
    alimentos: { label: 'Alimentos & Bebidas', wasteRate: 0.22, payback: 10, co2Factor: 0.38 },
    quimica: { label: 'Química & Farmacêutica', wasteRate: 0.19, payback: 14, co2Factor: 0.40 },
    papel: { label: 'Papel, Celulose & Embalagens', wasteRate: 0.21, payback: 11, co2Factor: 0.45 },
    mineracao: { label: 'Mineração & Cimento', wasteRate: 0.16, payback: 15, co2Factor: 0.48 },
    manufatura: { label: 'Manufatura & Automotivo', wasteRate: 0.24, payback: 9, co2Factor: 0.35 },
  };

  const currentSectorData = sectors[selectedSector];

  const calculations = useMemo(() => {
    const annualSpend = monthlyBill * 12;
    const annualSavings = annualSpend * currentSectorData.wasteRate;
    const monthlySavings = annualSavings / 12;
    const co2Reduction = (annualSavings / 650) * currentSectorData.co2Factor; // estimated metric tons
    return {
      annualSpend,
      annualSavings,
      monthlySavings,
      co2Reduction: Math.round(co2Reduction),
      wastePercent: Math.round(currentSectorData.wasteRate * 100),
      paybackMonths: currentSectorData.payback,
    };
  }, [monthlyBill, selectedSector, currentSectorData]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculadora" className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-32 bg-[#050505] border-t border-white/[0.08] overflow-hidden scroll-mt-24">
      {/* Soft Ambient Red Illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] sm:w-[950px] h-[400px] sm:h-[500px] bg-[#ED2749]/[0.07] blur-[140px] sm:blur-[190px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-[#C61F37]/[0.05] blur-[130px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-[26px] xs:text-[30px] sm:text-[42px] md:text-[44px] font-normal tracking-tight text-white font-sans leading-tight">
            Quanto sua empresa está perdendo em <span className="font-serif-italic font-normal">desperdício oculto</span>?
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-[#A9A9AE] font-light mt-2.5 sm:mt-3 leading-relaxed">
            Estime em segundos o retorno financeiro de um plano de eficiência e automação com a Pulsar.
          </p>
        </div>

        {/* Interactive Simulator Box */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0B0B0D] border border-white/10 p-5 sm:p-10 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 text-left">
          
          {/* Controls (Left 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Sector selector */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-[11.5px] sm:text-[13px] font-mono-tech uppercase tracking-wider text-[#A9A9AE] mb-2.5 sm:mb-3">
                  01. Selecione o segmento industrial:
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {Object.entries(sectors).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedSector(key)}
                      className={`px-3 py-2.5 sm:px-3.5 sm:py-2.5 rounded-xl text-[11.5px] sm:text-[12.5px] font-medium text-left transition-all min-h-[44px] flex items-center leading-snug cursor-pointer ${
                        selectedSector === key
                          ? 'bg-[#C61F37] text-white border border-[#ED2749]/50 shadow-md font-semibold'
                          : 'bg-white/[0.03] text-[#A9A9AE] hover:text-white hover:bg-white/[0.06] active:bg-white/[0.09] border border-white/[0.06]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Bill Slider */}
              <div className="mb-5 sm:mb-6">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 mb-2">
                  <label className="text-[11.5px] sm:text-[13px] font-mono-tech uppercase tracking-wider text-[#A9A9AE]">
                    02. Fatura mensal de energia:
                  </label>
                  <span className="text-[18px] sm:text-[20px] font-bold text-white font-sans">
                    {formatCurrency(monthlyBill)}
                  </span>
                </div>

                <div className="py-2">
                  <input
                    type="range"
                    min="5000"
                    max="2500000"
                    step="5000"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ED2749]"
                  />
                </div>

                <div className="flex justify-between text-[10px] sm:text-[11px] font-mono-tech text-[#A9A9AE] mt-1">
                  <span>R$ 5 mil/mês</span>
                  <span>R$ 1.0 Milhão</span>
                  <span>R$ 2.5 Milhões+</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11.5px] sm:text-[12px] text-[#A9A9AE] leading-relaxed">
              * Valores calculados com base na média de <AnimatedCounter to={240} suffix="+" /> plantas auditadas segundo o protocolo internacional PIMVP.
            </div>
          </div>

          {/* Results Summary (Right 6 cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#140A0D] to-[#08080A] border border-[#ED2749]/30 p-5 sm:p-8 lg:p-9 flex flex-col justify-between relative shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#C61F37]/20 to-transparent blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-widest text-[#ED2749] bg-[#C61F37]/20 px-2.5 py-1 rounded">
                  Estimativa de Ganho
                </span>
                <span className="text-[11px] sm:text-[12px] font-mono-tech text-white/50">
                  POTENCIAL ANUAL
                </span>
              </div>

              {/* Giant number */}
              <div className="mb-5 sm:mb-6">
                <div className="text-[12px] sm:text-[12.5px] text-[#A9A9AE] font-light mb-1">
                  Economia Anual Projetada:
                </div>
                <div className="text-[26px] xs:text-[32px] sm:text-[44px] md:text-[46px] font-bold text-white tracking-tight font-sans leading-tight">
                  <AnimatedCounter
                    to={calculations.annualSavings}
                    isCurrency={true}
                    duration={1}
                  />
                  <span className="text-[14px] sm:text-[16px] font-normal text-[#ED2749] ml-1.5 sm:ml-2">/ ano</span>
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#ED2749] font-medium mt-1 leading-snug">
                  Aproximadamente{' '}
                  <AnimatedCounter
                    to={calculations.monthlySavings}
                    isCurrency={true}
                    duration={1}
                  />{' '}
                  a mais no caixa todo mês.
                </div>
              </div>

              {/* Metric grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-white/[0.08] mb-6 sm:mb-8">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.02] text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-[#ED2749] text-[10px] sm:text-[11px] font-mono-tech mb-1">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span>Redução</span>
                  </div>
                  <div className="text-[15px] sm:text-[18px] font-bold text-white leading-tight">
                    <AnimatedCounter
                      to={calculations.wastePercent}
                      prefix="~"
                      suffix="%"
                      duration={1}
                    />
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.02] text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-white/80 text-[10px] sm:text-[11px] font-mono-tech mb-1">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Payback</span>
                  </div>
                  <div className="text-[15px] sm:text-[18px] font-bold text-white leading-tight">
                    <AnimatedCounter
                      to={calculations.paybackMonths}
                      prefix="~"
                      suffix=" m"
                      duration={1}
                    />
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.02] text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-emerald-400 text-[10px] sm:text-[11px] font-mono-tech mb-1">
                    <Leaf className="w-3.5 h-3.5 shrink-0" />
                    <span>CO₂</span>
                  </div>
                  <div className="text-[15px] sm:text-[18px] font-bold text-white leading-tight">
                    <AnimatedCounter
                      to={calculations.co2Reduction}
                      prefix="-"
                      suffix=" t"
                      duration={1}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <button
              onClick={() =>
                onOpenConsultationWithData({
                  sector: sectors[selectedSector].label,
                  monthlyBill,
                  estimatedSavings: calculations.annualSavings,
                })
              }
              className="w-full py-3.5 sm:py-4 px-4 rounded-full bg-[#C61F37] hover:bg-[#ED2749] active:bg-[#C61F37] text-white text-[13.5px] sm:text-[14.5px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#C61F37]/35 cursor-pointer text-center leading-snug"
            >
              <span>Solicitar Diagnóstico para Minha Planta</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
