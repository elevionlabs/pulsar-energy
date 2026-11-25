import React from 'react';
import { motion } from 'motion/react';

interface PartnerLogo {
  id: number;
  src: string;
  alt: string;
  name: string;
  imgClass: string;
}

const partners: PartnerLogo[] = [
  {
    id: 1,
    src: '/parceiro-1.png',
    alt: 'ConAn - Parceiro Estratégico Pulsar Energy',
    name: 'ConAn',
    imgClass: 'h-10 sm:h-12 md:h-13 max-w-[150px] sm:max-w-[175px] md:max-w-[185px]',
  },
  {
    id: 2,
    src: '/ecogen-parceiro.png',
    alt: 'Ecogen - Parceiro Estratégico Pulsar Energy',
    name: 'Ecogen',
    imgClass: 'h-11 sm:h-13 md:h-[52px] max-w-[140px] sm:max-w-[160px] md:max-w-[170px]',
  },
  {
    id: 3,
    src: '/Vextrom parceiro certo.png',
    alt: 'Vextrom - Parceiro Estratégico Pulsar Energy',
    name: 'Vextrom',
    imgClass: 'h-8 sm:h-9 md:h-[40px] max-w-[160px] sm:max-w-[185px] md:max-w-[205px]',
  },
  {
    id: 4,
    src: '/murari-parceiro.png',
    alt: 'Murari - Parceiro Estratégico Pulsar Energy',
    name: 'Murari',
    imgClass: 'h-8 sm:h-9 md:h-[40px] max-w-[160px] sm:max-w-[185px] md:max-w-[205px]',
  },
];

export const PartnershipsSection: React.FC = () => {
  return (
    <section
      id="parcerias"
      className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-28 lg:pb-32 bg-[#050505] border-t border-white/[0.08] overflow-hidden scroll-mt-24"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[300px] sm:h-[400px] bg-[#ED2749]/[0.04] blur-[140px] sm:blur-[180px] rounded-full pointer-events-none -z-0" />
      
      {/* Technical Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      {/* Decorative Horizon Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-[28px] xs:text-[32px] sm:text-[42px] md:text-[48px] font-normal tracking-[-0.03em] text-white font-sans leading-tight mb-4 sm:mb-6">
            <span className="relative inline-block pb-3 sm:pb-4">
              Nossas Parcerias
              {/* Linha vermelha com degradê sofisticado e brilho sob a frase inteira */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[2.5px] bg-gradient-to-r from-[#C61F37] via-[#ED2749] to-transparent opacity-85 rounded-full pointer-events-none shadow-[0_0_10px_rgba(237,39,73,0.5)]" />
            </span>
          </h2>
          <p className="text-[#A9A9AE] text-[14px] xs:text-[15px] sm:text-[16.5px] md:text-[17.5px] font-light leading-[1.6] max-w-2xl mx-auto">
            Construímos relações estratégicas que fortalecem nossos projetos e ampliam nossa capacidade de entregar soluções eficientes, integradas e alinhadas às necessidades de cada operação.
          </p>
        </div>

        {/* Showcase Area */}
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8 items-stretch justify-items-center relative z-10"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex items-center justify-center w-full min-h-[110px] sm:min-h-[140px] md:min-h-[152px] p-3.5 sm:p-5 md:p-6 rounded-2xl bg-white border border-[#ED2749]/30 hover:border-[#ED2749]/70 shadow-[0_0_24px_rgba(237,39,73,0.22),_0_4px_16px_rgba(0,0,0,0.18)] hover:shadow-[0_0_36px_rgba(237,39,73,0.45),_0_8px_24px_rgba(0,0,0,0.24)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-default"
              >
                {/* Soft Red Ambient Underglow Aura */}
                <div className="absolute -inset-1 rounded-2xl bg-[#ED2749]/15 blur-lg opacity-70 group-hover:opacity-100 group-hover:bg-[#ED2749]/30 transition-all duration-300 pointer-events-none -z-10" />

                {/* Perfectly centered logo with preserved proportions and optical normalization */}
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className={`w-auto object-contain select-none transition-transform duration-300 group-hover:scale-105 ${partner.imgClass}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

