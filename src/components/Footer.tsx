import React from 'react';
import { ArrowUp, Shield, Mail, Phone, MapPin, ExternalLink, Instagram, Linkedin } from 'lucide-react';
import { PulsarLogo } from './PulsarLogo';

interface FooterProps {
  onNavigate?: (targetId: string, tabIndex?: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    tabIndex?: number
  ) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId, tabIndex);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-left">
      {/* Soft Ambient Red Illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#ED2749]/[0.05] blur-[150px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/[0.08]">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <PulsarLogo height={56} className="h-12 sm:h-14 lg:h-16" />
            </div>

            <p className="text-[13.5px] text-[#A9A9AE] font-light leading-relaxed max-w-sm mb-6">
              Engenharia de energia aplicada para transformar consumo, utilidades e infraestrutura em alavancas de rentabilidade para a indústria de médio e grande porte.
            </p>

            <div className="flex items-center gap-2 text-[11.5px] font-mono-tech text-white/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              CORPO TÉCNICO // ENGENHARIA DE PLANTAS & UTILIDADES
            </div>
          </div>

          {/* Col 3: Soluções */}
          <div>
            <h4 className="text-[12px] font-mono-tech uppercase tracking-wider text-white font-semibold mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-[#A9A9AE] font-light">
              <li>
                <a
                  href="#eficiencia"
                  onClick={(e) => handleLink(e, 'solucoes', 0)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Eficiência Energética
                </a>
              </li>
              <li>
                <a
                  href="#automacao"
                  onClick={(e) => handleLink(e, 'solucoes', 1)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Automação & SCADA
                </a>
              </li>
              <li>
                <a
                  href="#renovaveis"
                  onClick={(e) => handleLink(e, 'solucoes', 2)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Energia Renovável & Solar
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  onClick={(e) => handleLink(e, 'solucoes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  M&V e ISO 50001
                </a>
              </li>
              <li>
                <a
                  href="#calculadora"
                  onClick={(e) => handleLink(e, 'calculadora')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Simulador de Payback
                </a>
              </li>
              <li>
                <a
                  href="#parcerias"
                  onClick={(e) => handleLink(e, 'parcerias')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Nossas Parcerias
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Conformidade Técnica */}
          <div>
            <h4 className="text-[12px] font-mono-tech uppercase tracking-wider text-white font-semibold mb-4">
              Normas & Rigor
            </h4>
            <ul className="space-y-2.5 text-[12.5px] text-[#A9A9AE] font-mono-tech">
              <li>• PROTOCOLO PIMVP / EVO</li>
              <li>• ABNT NBR ISO 50001</li>
              <li>• NR-10 E NR-12</li>
              <li>• ANEEL / CCEE ACL</li>
              <li>• ANÁLISE PRODIST MÓDULO 8</li>
            </ul>
          </div>

          {/* Col 5: Contato */}
          <div>
            <h4 className="text-[12px] font-mono-tech uppercase tracking-wider text-white font-semibold mb-4">
              Contato Corporativo
            </h4>
            <div className="space-y-3 text-[13px] text-[#A9A9AE] font-light">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#ED2749] mt-0.5 shrink-0" />
                <a
                  href="mailto:atendimento@pulsarenergy.com.br"
                  className="hover:text-white transition-colors"
                >
                  atendimento@pulsarenergy.com.br
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#ED2749] mt-0.5 shrink-0" />
                <a
                  href="tel:+551144742183"
                  className="hover:text-white transition-colors"
                >
                  +55 (11) 4474-2183
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-[#ED2749] mt-0.5 shrink-0" />
                <a
                  href="https://www.instagram.com/pulsar_.energy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>@pulsar_.energy</span>
                  <ExternalLink className="w-3 h-3 text-[#A9A9AE]" />
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Linkedin className="w-4 h-4 text-[#ED2749] mt-0.5 shrink-0" />
                <a
                  href="https://www.linkedin.com/in/washington-souza-9a879b294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  title="LinkedIn"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[#A9A9AE]" />
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ED2749] mt-0.5 shrink-0" />
                <a
                  href="https://maps.google.com/?q=R.+C%C3%A9sar+de+Menezes%2C+275+-+Vila+Homero+Thon%2C+Santo+Andr%C3%A9+-+SP%2C+09111-060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2 -m-2 rounded-lg hover:bg-white/[0.04] transition-colors"
                  title="Clique para abrir endereço no Google Maps"
                >
                  <div className="text-white/90 group-hover:text-white transition-colors leading-snug">
                    <span>R. César de Menezes, 275 - Vila Homero Thon</span>
                    <br />
                    <span>Santo André - SP, 09111-060</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 mt-1.5 px-2 py-0.5 rounded bg-[#ED2749]/10 border border-[#ED2749]/30 text-[#ED2749] text-[11px] font-mono-tech group-hover:bg-[#ED2749] group-hover:text-white transition-all">
                    <span>Abrir no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#A9A9AE] font-light">
          <div className="text-center sm:text-left">
            © 2026 Pulsar Energy — Engenharia de energia, eficiência energética, automação industrial e desenvolvimento de projetos em energia renovável. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/washington-souza-9a879b294/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/70 hover:text-white font-mono-tech text-[11px] uppercase transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#ED2749]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/pulsar_.energy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/70 hover:text-white font-mono-tech text-[11px] uppercase transition-colors"
              title="Instagram @pulsar_.energy"
            >
              <Instagram className="w-3.5 h-3.5 text-[#ED2749]" />
              <span>Instagram</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/70 hover:text-white font-mono-tech text-[11px] uppercase transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#ED2749]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
